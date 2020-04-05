import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import 'bootstrap';
import $ from 'jquery';

import App from './App.vue';
import router from './router';

Vue.use(VueAxios, axios);
axios.defaults.withCredentials = true;
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const api = `${process.env.VUE_APP_API_PATH}/api/user/check`;
    Vue.axios.post(api).then((response) => {
      if (response.data.success) {
        next();
      } else {
        next({
          path: '/',
        });
        $('#SigninModal').modal('show');
      }
    });
  } else {
    next();
  }
});
