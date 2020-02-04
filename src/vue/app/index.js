import Vue from 'vue';
import App from '../sfc/frames/RootFrame.vue';
import {router} from './router.js';
import store from './store-index.js';

const VueApp = new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>',
  router,
  store
});
