const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const url = "mongodb://localhost:27017/university";
const PORT = 5000;

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4,
  })
  .then((res) => {
    console.log("Connected TO DB");
  })
  .catch((err) => {
    console.log("Some issue while connecting to DB", err);
  });

const app = express();
app.use(express.json());
app.use(cors());

//ROUTES
const teacherRoute = require("./routes/teacher");
app.use("/teacher", teacherRoute);

app.listen(PORT, () => console.log(`Listing to port http://localhost:${PORT}`));
