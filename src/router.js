import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from './pages/Dashboard.vue';
import Settings from './pages/Settings.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: Dashboard },
    { path: '/settings', component: Settings }
  ]
});
