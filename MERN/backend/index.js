const express = require("express");
const mongoose = require("mongoose");
const env = require("dotenv").config();
const app = express();
const cors = require("cors");
const config = require("./db/config");
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json("HOME");
});

if (config) {
  app.listen(process.env.PORT, () => {
    console.log("Server Started...");
  });

  console.log("Database Connected");
}
