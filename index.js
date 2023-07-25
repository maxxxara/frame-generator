const express = require("express");
const app = express();
const port = 400;
// const cors = require("cors");

const nodeHtmlToImage = require("node-html-to-image");
const fs = require("fs");
// app.use(cors());
app.use("/test", async function (req, res) {
  const { frame, variant, bg } = req.query;
  console.log(`./frames/${frame}/${variant}.html`);
  const image = await nodeHtmlToImage({
    html: fs.readFileSync(`./frames/${frame}/${variant}.html`, "utf8"),
    selector: "#container",
    content: { bg },
    type: "webp",
  });
  res.status(200).contentType("image/webp").send(image);
});

app.use("/", async function (req, res) {
  res.status(200).send("test 200");
});

app.listen(port, () => {
  console.log(`Port: ${port}`);
});
