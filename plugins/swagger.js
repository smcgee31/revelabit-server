'use strict';

const swagger = require('hapi-swagger');

module.exports = {
  plugin: swagger,

  options: {
    pathPrefixSize: 2,

    info: {
      title: 'Revelabit API Documentation',
    },

    schemes: process.env.host === 'localhost' ? ['http'] : ['https'],
    host: `${process.env.host}:${process.env.port}`,
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
