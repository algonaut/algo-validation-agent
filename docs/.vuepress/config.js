// auto generated sidebar
const { sidebarTree } = require("../api/config");

module.exports = {
  dest: "dist",
  locales: {
    "/": {
      title: "vuepress-jsdoc",
      description: "Generate jsdoc markdown files for vuepress",
    },
  },
  themeConfig: {
    editLinks: true,
    sidebarDepth: 4,
    docsDir: "api",
    locales: {
      "/": {
        nav: [
          {
            text: "Home",
            link: "/",
          },
        ],
        // Add the generated sidebar
        sidebar: Object.assign({}, sidebarTree("Mainpage title")),
      },
    },
  },
};
