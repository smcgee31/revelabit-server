'use strict';

module.exports = {
  method: 'GET',
  path: '/documentation',

  options: {
    auth: false,
    description: 'Redirect to docs',
    tags: ['system'],
    plugins: {
      acl: {
        disabled: true,
      },
    },

    handler(request, h) {
      return h.response('Redirecting to /docs').redirect('docs');
    },
  },
};
