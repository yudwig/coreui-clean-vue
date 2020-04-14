import Vue from 'vue';
import Vuex from 'vuex';
import {User} from "../../modules/entities/User";
import {UserAuthMessage} from "../../modules/presentations/UserAuth/UserAuthPresentation";
Vue.use(Vuex);

const states = {
  isAuthError: false,
  authErrorMessage: null,
  loginUser: null
};

const mutations = {
  setIsAuthError(state, isAuthError: boolean) {
    states.isAuthError = isAuthError;
  },
  setAuthErrorMessage(state, message: UserAuthMessage.Message) {
    states.authErrorMessage = message;
  },
  clearAuthErrorMessage(state) {
    states.authErrorMessage = null;
  },
  clearIsAuthError(state) {
    states.isAuthError = false;
  },
  setLoginUser(state, user: User) {
    states.loginUser = user;
  },
  clearLoginUser(state) {
    states.loginUser = null;
  }
};

const actions = {
  async setAuthError(context, payload: {isAuthError: boolean, message: UserAuthMessage.Message}) {
    context.commit('setAuthErrorMessage', payload.message);
    context.commit('setIsAuthError', payload.isAuthError);
  },
  async clearAuthError(context) {
    context.commit('clearAuthErrorMessage');
    context.commit('clearIsAuthError');
  },
  async setLoginUser(context, user) {
    context.commit('setLoginUser', user);
  },
  async clearLoginUser(context) {
    context.commit('clearLoginUser');
  }
};

const getters = {
  authErrorMessage: () => states.authErrorMessage,
  isAuthError: () => states.isAuthError,
  loginUser: () => states.loginUser
};

export const VuexUserAuthState = new Vuex.Store({
  state: states,
  mutations: mutations,
  actions: actions,
  getters: getters
});

