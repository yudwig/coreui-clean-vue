import Vue from 'vue';
Vue.use(Vuex);
import Vuex from 'vuex';
import {ItemMenuMessage} from "../../modules/presentations/ItemMenu/ItemMenuMessagePresentation";

const states = {
  message: null
};

const mutations = {
  setMessage(state, message: ItemMenuMessage.Message) {
    states.message = message;
  },
  clearMessage(state) {
    states.message = null;
  }
};

const actions = {
  async setMessage(context, message: ItemMenuMessage.Message) {
    context.commit('setMessage', message);
  },
  async clearMessage(context) {
    context.commit('clearMessage');
  }
};

const getters = {
  message: () => states.message
};

export const VuexItemMenuState = new Vuex.Store({
  state: states,
  mutations: mutations,
  actions: actions,
  getters: getters
});