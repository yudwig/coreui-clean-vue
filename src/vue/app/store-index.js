import Vue from 'vue';
import Vuex from 'vuex';
import auth from '../stores/auth.js';

Vue.use(Vuex);

// import VuexItemListStore from "../stores/VuexItemListStore";

const store = new Vuex.Store({
  modules: {
    auth,
    // VuexItemListStore
  }
});

export default store;

