import Vue from 'vue'
import Lhqs from './Lhqs'
import Router from 'vue-router'
import router from './router'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Element);
Vue.use(Router);

Vue.config.productionTip = false;

const routers = new Router({
  router
});

routers.beforeEach((to, from, next) => {
  if (to.path == '/login') {
    sessionStorage.removeItem('user');
  }
  let user = JSON.parse(sessionStorage.getItem('user'));
  if (!user && to.path != '/login') {
    next({ path: '/login' })
  } else {
    next()
  }
});

new Vue({
  el: '#app',
  router,
  template: '<Lhqs/>',
  components:{ Lhqs }
});
