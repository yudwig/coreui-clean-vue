import status from './status';

const fakes = {
  errorMessages: [
    {
      type: 'error',
      message: 'Not defined API.'
    },
    {
      type: 'info',
      message: 'Implement your login API or use guest login.'
    }
  ],
  guestUser: {
    id:        'guest@example.com',
    name:      'Guest',
    groupName: 'developer'
  }
};

const api = {
  login (data) {
    return {
      status: status.ok,
      messages: fakes.errorMessages
    }
  },
  logout () {
    return {
      status: status.ok
    }
  },
  user() {
    return {
      status: status.ok,
      data: {
        user: fakes.guestUser
      }
    }
  }
};

const state = {
  user: null
};

const mutations = {
  setUser (state, user) {
    state.user = user;
  },
  clearUser (state) {
    state.user = null;
  }
};

const actions = {
  async login (context, data) {
    const res = api.login(data);
    context.commit('clearUser');
    context.commit('error/setStatus', data.status);
    context.commit('error/setMessages', res.messages);
  },
  async logout (context) {
    const res = api.logout();
    context.commit('clearUser');
    context.commit('error/clearMessages');
    context.commit('error/setStatus', data.status);
    context.commit('error/setMessages', res.messages);
  },
  async loginGuest (context) {
    context.commit('setUser', fakes.guestUser);
    context.commit('error/clearMessages');
  },
  async initSessionUser (context) {
    const res = context.commit('user');
    context.commit('setUser', res.data.user);
    context.commit('error/setStatus', res.status);
    context.commit('error/clearMessages');
  }
};

const getters = {
  isValidUser:   state => Boolean(state.user),
  userName:      state => state.user ? state.user.name : '',
  loginId:       state => state.user ? state.user.id : '',
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

