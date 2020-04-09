import Vuex from 'vuex';
import {Item} from "../../modules/entities/Item";
import {ItemEditMessage} from "../../modules/presentations/ItemEdit/ItemEditMessagePresentation";

const states = {
  item: null,
  message: null
};

const mutations = {
  setItem(state, item: Item) {
    states.item = item;
  },
  clearItem(state) {
    states.item = null;
  },
  setMessage(state, message: ItemEditMessage.Message) {
    states.message = message;
  },
  clearMessage(state) {
    states.message = null;
  }
};

const actions = {
  async setItem(context, item: Item) {
    context.commit('setItem', item);
  },
  async clearItem(context) {
    context.commit('clearItem');
  },
  async setMessage(context, message: ItemEditMessage.Message) {
    context.commit('setMessage', message);
  },
  async clearMessage(context) {
    context.commit('clearMessage');
  }
};

const getters = {
  item: () => states.item,
  message: () => states.message
};

export const VuexItemEditViewState = new Vuex.Store({
  state: states,
  mutations: mutations,
  actions: actions,
  getters: getters
});
