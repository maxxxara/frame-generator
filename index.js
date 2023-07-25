const express = require("express");
const app = express();
const port = 400;
import path from "path";

// const cors = require("cors");

const nodeHtmlToImage = require("node-html-to-image");
const fs = require("fs");
// app.use(cors());
app.use("/test", async function (req, res) {
  const { frame, variant, bg } = req.query;
  const file = path.join(process.cwd(), "frames/1", "1.html");
  let t = fs.readFileSync(file, "utf8");
  console.log("filee123", t);
  // const image = await nodeHtmlToImage({
  //   html: fs.readFileSync(`frames/${frame}/${variant}.html`, "utf8"),
  //   selector: "#container",
  //   content: { bg },
  //   type: "webp",
  // });
  // res.status(200).contentType("image/webp").send(image);
  res.send("ok");
});

app.use("/", async function (req, res) {
  res.status(200).send("test 200");
});

app.listen(port, () => {
  console.log(`Port: ${port}`);
});
