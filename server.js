const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.use(express.static("./dist/listo"));

app.get("/*", (req, res) =>
  res.sendFile("index.html", { root: "dist/listo/" })
);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
