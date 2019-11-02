import Vue from 'vue';
import App from './App.vue';
import router from './router.js';
import store from './store/store-index.js';

new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>',
  router,
  store
});
