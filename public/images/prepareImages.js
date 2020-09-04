// prepareImages.js
const fs = require("fs");
const files = fs.readdirSync("./stickers").filter(x => x.includes("png"));
const ex =
  "{\n" +
  files.map(x => `"${x.split(".png")[0]}": require("./${x}"),`).join("\n") +
  "}";
const res = "export default " + ex;
fs.writeFileSync("./images/index.js", res);