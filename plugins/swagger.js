'use strict';

const swagger = require('hapi-swagger');
const { host, port } = require('../config');

module.exports = {
  plugin: swagger,

  options: {
    pathPrefixSize: 2,

    info: {
      title: 'Marco-Polo API Documentation',
    },

    schemes: host === 'localhost' ? ['http'] : ['https'],
    host: `${host}:${port}`,
    documentationPath: '/docs',
    grouping: 'tags',
    sortEndpoints: 'method',
    sortTags: 'alpha',

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
