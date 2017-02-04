import Vue = require('vue');
import Router = require('vue-router');

Vue.use(Router);

import Hello from 'components/Hello';

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
  ],
});

