const express = require("express");
const app = express();
const port = 4000;
console.log("Test 111");
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
module.exports = app;
