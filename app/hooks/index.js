const blob = require("./blob");

const init = app => {
  console.log("hooks initialized");
  app.locals.blobCss = blob;
};

module.exports = {
  init
};
