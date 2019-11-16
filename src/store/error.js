import status from './status';

const state = {
  status: status.ok,
  messages: []
};

const mutations = {
  setStatus(state, status) {
    state.status = status;
  },
  setMessages (state, messages) {
    state.messages = messages;
  },
  clearMessages (state) {
    state.messages = [];
  }
};

const getters = {

};

const actions = {

};

export default {
  namespaced: true,
  state: state,
  mutations: mutations,
  getters: getters,
  actions: actions,
};

