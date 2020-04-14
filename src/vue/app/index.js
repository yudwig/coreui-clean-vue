import 'core-js/stable'
import Vue from 'vue';
import {router} from './router.js';
import {iconsSet as icons} from './coreui-icons';
import CoreuiVue from "@coreui/vue";
import BootstrapVue from "bootstrap-vue";
import Vuex from 'vuex';
import ContainerProvider from "../mixins/ContainerProvider";
import VueModuleSupport from "../mixins/VueModuleSupport";

Vue.use(CoreuiVue);
Vue.use(BootstrapVue);
Vue.use(Vuex);
Vue.mixin(ContainerProvider);
Vue.mixin(VueModuleSupport);

const VueApp = new Vue({
  el: '#app',
  template: '<RouterView/>',
  router,
  icons,
});
