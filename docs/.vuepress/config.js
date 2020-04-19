// auto generated sidebar
const { sidebarTree } = require('../api/config');

module.exports = {
  dest: './docs/.vuepress/dist',
  base: '/algo-validation-agent/',
  locales: {
    '/': {
      title: 'Algo Validation Agent',
      description:
        'A dead simple client validation library for inputs into the Algorand JS SDK'
    }
  },
  themeConfig: {
    editLinks: true,
    sidebarDepth: 1,
    docsDir: 'api',
    locales: {
      '/': {
        nav: [
          {
            text: 'API',
            link: '/api/'
          },
          {
            text: 'Github',
            link: 'https://github.com/algonaut/algo-validation-agent'
          }
        ],
        // Add the generated sidebar
        sidebar: Object.assign({}, sidebarTree('Introduction'))
      }
    }
  }
};
