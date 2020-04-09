import Vue from 'vue';
import Vuex from 'vuex';
import {User} from "../../modules/entities/User";
Vue.use(Vuex);

const states = {
  authError: null,
  loginUser: null
};

const mutations = {
  setAuthError(state, err: Error) {
    states.authError = err;
  },
  clearAuthError(state) {
    states.authError = null;
  },
  setLoginUser(state, user: User) {
    states.loginUser = user;
  },
  clearLoginUser(state) {
    console.log("clear login user is called. state: ", state, states);
    states.loginUser = null;
  }
};

const actions = {
  async setAuthError(context, msg: string) {
    context.commit('setAuthError', msg);
  },
  async clearAuthError(context) {
    context.commit('clearAuthError');
  },
  async setLoginUser(context, user) {
    context.commit('setLoginUser', user);
  },
  async clearLoginUser(context) {
    context.commit('clearLoginUser');
  }
};

const getters = {
  authError: () => states.authError,
  loginUser: () => states.loginUser
};

export const VuexUserAuthState = new Vuex.Store({
  state: states,
  mutations: mutations,
  actions: actions,
  getters: getters
});

