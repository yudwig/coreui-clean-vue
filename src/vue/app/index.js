import 'core-js/stable'
import Vue from 'vue';
import {router} from './router.js';
import {iconsSet as icons} from './coreui-icons';
import CoreuiVue from "@coreui/vue";
import BootstrapVue from "bootstrap-vue";
import Vuex from 'vuex';

Vue.use(CoreuiVue);
Vue.use(BootstrapVue);
Vue.use(Vuex);

const VueApp = new Vue({
  el: '#app',
  template: '<RouterView/>',
  router,
  icons
});
