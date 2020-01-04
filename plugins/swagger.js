'use strict';

const swagger = require('hapi-swagger');

module.exports = {
  plugin: swagger,

  options: {
    pathPrefixSize: 2,

    info: {
      title: 'Marco-Polo API Documentation',
    },

    documentationPath: '/docs',
    grouping: 'tags',
    sortEndpoints: 'method',
    sortTags: 'name',

    securityDefinitions: {
      Bearer: {
        type: 'apiKey',
        name: 'Authorization',
        in: 'header',
        'x-keyPrefix': 'Bearer ',
      },
    },
  },
};
