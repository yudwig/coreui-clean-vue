import {Item} from "../../modules/entities/Item";
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const states = {
  item: null,
};

const mutations = {
  setItem(state, item: Item) {
    states.item = item;
  }
};

const actions = {
  async setItem(context, item: Item) {
    context.commit('setItem', item);
  }
};

const getters = {
  item: () => states.item,
};

export const VuexItemDetailViewState = new Vuex.Store({
  state: states,
  mutations: mutations,
  actions: actions,
  getters: getters
});
