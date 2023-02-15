const express = require("express");
const { IgApiClient } = require("instagram-private-api");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/auth/instagram", async (req, res) => {
  const ig = new IgApiClient();
  ig.state.generateDevice(process.env.IG_USERNAME);
  await ig.simulate.preLoginFlow();
  const authUrl = await ig.account.login(
    process.env.IG_USERNAME,
    process.env.IG_PASSWORD
  );
  res.redirect(authUrl);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
