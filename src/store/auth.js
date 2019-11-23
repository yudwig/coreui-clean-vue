import statusCodes from '../modules/status-codes';
import HttpResponse from '../modules/http-response';

const fakes = {
  errorMessages: [
    {
      type: 'error',
      text: 'Not defined API.'
    },
    {
      type: 'info',
      text: 'Implement your login API or use guest login.'
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
    return new HttpResponse({
      code: statusCodes.ok,
      messages: fakes.errorMessages,
    }, {
      user: null
    })
  },
  logout () {
    return new HttpResponse({
      code: statusCodes.ok
    })
  },
  user() {
    return new HttpResponse({
      code: statusCodes.ok
    }, {
      user: fakes.guestUser
      // user: null
    });
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
    if (res.status.isSuccess()) {
      context.commit('setUser', res.data.user);
    }
    return res.status;
  },
  async logout (context) {
    const res = api.logout();
    if (res.status.isSuccess()) {
      context.commit('clearUser');
    }
    return res.status;
  },
  async loginGuest (context) {
    context.commit('setUser', fakes.guestUser);
    return new HttpResponse({
      code: statusCodes.ok
    });
  },
  async initSessionUser (context) {
    const res = api.user();
    if (res.status.isSuccess()) {
      context.commit('setUser', res.data.user);
    }
    return res.status;
  }
};

const getters = {
  isValidUser:   state => Boolean(state.user),
  userName:      state => state.user ? state.user.name : '',
  loginId:       state => state.user ? state.user.id : '',
  userGroup:     state => state.user ? state.user.groupName: '',
};

export default {
  namespaced: true,
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters
}

