const state = {
  user: null,
  messages: [],
};
const mutations = {
  setUser (state, user) {
    state.user = user;
  },
  clearUser (state) {
    state.user = null;
  },
  setMessages (state, messages) {
    state.messages = messages;
  },
  clearMessages (state) {
    state.messages = [];
  }
};
const actions = {
  async login (context, data) {
    context.commit('setMessages', [
      {
        type: 'error',
        message: 'Not defined API.'
      },
      {
        type: 'info',
        message: 'Implement your login API or use guest login.'
      }
    ]);
    context.commit('clearUser');
  },
  async logout (context) {
    context.commit('clearUser');
    context.commit('clearMessages');
  },
  async loginGuest (context) {
    context.commit('setUser', {
      name:      'Guest',
      groupName: 'developer'
    });
    context.commit('clearMessages');
  }
};
const getters = {
  isValidUser:   state => Boolean(state.user),
  userName:      state => state.user ? state.user.name : '',
  userGroup:     state => state.user ? state.user.groupName: '',
  messages:      state => state.messages,
  errorMessages: state => state.messages.filter(msg => msg.type === 'error'),
  infoMessages:  state => state.messages.filter(msg => msg.type === 'info'),
};
export default {
  namespaced: true,
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters
}

