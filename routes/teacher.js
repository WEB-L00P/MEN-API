const express = require("express");
const router = express.Router();
const teachers = require("../models/teacher");

router.post("/", async (req, res) => {
  console.log("REQ:", req.body);
  const data = new teachers({
    name: req.body.name,
    age: req.body.age,
    subject: req.body.subject,
    qualification: req.body.qualification,
  });
  try {
    const t1 = await data.save();
    res.send(t1);
  } catch (err) {
    res.send(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const teacher = await teachers.find();
    res.send(teacher);
  } catch (err) {
    res.send(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const teacher = await teachers.findById(req.params.id);
    res.send(teacher);
  } catch (err) {
    res.send(err);
  }
});

router.put("/update/:_id", async (req, res) => {
  let data = await teachers.updateOne(req.params, {
    $set: req.body,
  });
  res.send(data);
});

router.delete("/delete/:_id", async (req, res) => {
  let data = await teachers.deleteOne(req.params, {
    $set: req.body,
  });
  res.send(data);
});

module.exports = router;
