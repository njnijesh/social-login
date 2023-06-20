const express = require("express");
const app = express();
const port = 4000;
console.log("Because of failed update.");
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
module.exports = app;
