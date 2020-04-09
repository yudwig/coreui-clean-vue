import Vuex from 'vuex';
import {ItemCreateMessage} from "../../modules/presentations/ItemCreate/ItemCreateMessagePresentation";

const states = {
  message: null,
  isSuccess : null
};

const mutations = {
  setMessage(state, message: ItemCreateMessage.Message) {
    states.message = message;
  },
  clearMessage(state) {
    states.message = null;
  },
  setCreateStatus(state, isSuccess: boolean) {
    states.isSuccess = isSuccess;
  },
  clearCreateStatus(state) {
    states.isSuccess = null;
  }
};

const actions = {
  async setMessage(context, message: ItemCreateMessage.Message) {
    context.commit('setMessage', message);
  },
  async clearMessage(context) {
    context.commit('clearMessage');
  },
  async setCreateStatus(context, isSuccess: boolean) {
    context.commit('setCreateStatus', isSuccess);
  },
  async clearCreateStatus(context) {
    context.commit('clearCreateStatus');
  }
};

const getters = {
  message: () => states.message,
  isSuccess: () => states.isSuccess
};

export const VuexItemCreateViewState = new Vuex.Store({
  state: states,
  mutations: mutations,
  actions: actions,
  getters: getters
});
