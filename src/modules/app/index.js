import Vue from 'vue';
import App from '../../vm/components/App.vue';
import router from './router.js';
import store from '../repositories/store/store-index.js';

new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>',
  router,
  store
});
