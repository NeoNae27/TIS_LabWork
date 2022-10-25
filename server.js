"use strict";

console.log(process.pid);

const express = require("express");
const app = express();
const path = require("path");

const PORT = 3000;

app.use(express.static(path.resolve(__dirname, "src", "static")));

app.listen(PORT, () => {
  console.log(`Application listening on port ${PORT}!`);
});

app.get(`/`, function (req, res) {
  res.sendFile(path.resolve(__dirname, "src", "static", "pages", "index.html"));
});
