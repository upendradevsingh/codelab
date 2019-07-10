const fs = require("fs");
const path = require("path");

// @fix-me move this path to dependencies
const filePath = "../../../public/css/common.css";

const css = fs.readFileSync(path.resolve(__dirname, filePath));

module.exports = css;
