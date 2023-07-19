const express = require("express");
const app = express();
const port = 3001;
const nodeHtmlToImage = require("node-html-to-image");

const fs = require("fs");

app.use("/", async function (req, res) {
  const { frame, variant, bg } = req.query;
  console.log(`./frames/${frame}/${variant}.html`);
  const image = await nodeHtmlToImage({
    html: fs.readFileSync(`./frames/${frame}/${variant}.html`, "utf8"),
    selector: "#container",
    content: { bg },
  });
  res.status(200).contentType("image/png").send(image);
});

app.listen(port, () => {
  console.log(`Port: ${port}`);
});
