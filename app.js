const express = require("express");
const bodyParser = require("body-parser");

require("./db/config");

const app = express();

const userRoutes = require("./routes/user");

app.use(bodyParser.json());

app.use("/auth", userRoutes);

app.listen(5000, () => {
  console.log("Sever Connected");
});
