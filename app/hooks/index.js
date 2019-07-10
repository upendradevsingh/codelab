const blob = require("./blob");

const init = app => {
  console.log("hooks initialized");
  app.locals.blobCss = blob;
  app.locals.initialState = {
    home: {
      widgets: [
        {
          href: "/listing",
          title: "Show all products"
        },
        {
          href: "/listing",
          title: "Show all products"
        },
        {
          href: "/listing",
          title: "Show all products"
        },
        {
          href: "/listing",
          title: "Show all products"
        }
      ]
    },
    plp: {},
    pdp: {}
  }
};

module.exports = {
  init
};
