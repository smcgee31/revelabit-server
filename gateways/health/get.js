'use strict';

module.exports = {
  method: 'GET',
  path: '/v1/health',

  options: {
    auth: false,
    description: 'System ping check',
    tags: ['api', 'system'],
    plugins: {
      acl: {
        disabled: true,
      },
    },

    handler() {
      return 'OK';
    },
  },
};
