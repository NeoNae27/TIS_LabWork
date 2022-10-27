"use strict";

console.log(process.pid);

const express = require("express");
const app = express();
const path = require("path");

const PORT = 3000;

app.use(express.static(path.resolve(__dirname, "dist")));

app.listen(PORT, () => {
  console.log(`Application listening on port ${PORT}!`);
});

app.get(`/`, function (req, res) {
  res.sendFile(path.resolve(__dirname, "dist", "index.html"));
});
