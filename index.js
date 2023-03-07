const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3000;
const apiData = require("./data.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send(apiData);
});

app.listen(port, () => {
  console.log(`Listening on Port ${port}`);
});
