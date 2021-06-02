import Vue from 'vue';
import Router from 'vue-router';
import AppHeader from './layout/AppHeader';
import AppFooter from './layout/AppFooter';
import Components from './views/Components.vue';
import Processing from './views/Processing.vue';
import Successful from './views/Successful.vue';
import Download from './views/Download.vue';

Vue.use(Router);

export default new Router({
  linkExactActiveClass: 'active',
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'components',
      components: {
        header: AppHeader,
        default: Components,
        footer: AppFooter
      }
    },
    {
      path: '/processing',
      name: 'processing',
      components: {
        header: AppHeader,
        default: Processing,
        footer: AppFooter
      }
    },
    {
      path: '/gracias',
      name: 'gracias',
      components: {
        header: AppHeader,
        default: Successful,
        footer: AppFooter
      }
    },
    {
      path: '/descarga',
      name: 'descarga',
      components: {
        header: AppHeader,
        default: Download,
        footer: AppFooter
      }
    }
  ],
  scrollBehavior: (to) => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
