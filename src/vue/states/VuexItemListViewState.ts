import {Item} from "../../modules/entities/Item";
import Vue from 'vue';
import Vuex from 'vuex';
import {Items} from "../../modules/entities/Items";
import {ItemSearchQuery} from "../../modules/queries/ItemList/ItemSearchQuery";
import {ItemListMessage} from "../../modules/presentations/ItemList/ItemListMessagePresentation";
Vue.use(Vuex);

const states = {
  items: null,
  openedItem: null,
  itemSearchQuery: null,
  message: ''
};

const mutations = {
  setItems(state, items: Items) {
    states.items = items;
  },
  setOpenedItem(state, item: Item) {
    states.openedItem = item;
  },
  setItemSearchQuery(state, itemSearchQuery: ItemSearchQuery) {
    states.itemSearchQuery = itemSearchQuery;
  },
  setMessage(state, message: ItemListMessage) {
    states.message = message;
  },
};

const actions = {
  async setItems(context, items: Items) {
    context.commit('setItems', items);
  },
  async setOpenedItem(context, item: Item) {
    context.commit('setOpenedItem', item);
  },
  async clearOpenedItem(context) {
    context.commit('setOpenedItem', null);
  },
  async setItemSearchQuery(context, itemSearchQuery: ItemSearchQuery) {
    context.commit('setItemSearchQuery', itemSearchQuery);
  },
  async setMessage(context, message: ItemListMessage) {
    context.commit('setMessage', message);
  },
  async clearMessage(context) {
    context.commit('setMessage', '');
  }
};

const getters = {
  items: () => states.items,
  openedItem: () => states.openedItem,
  itemSearchQuery: () => states.itemSearchQuery,
  message: () => states.message
};

export const VuexItemListViewState = new Vuex.Store({
  state: states,
  mutations: mutations,
  actions: actions,
  getters: getters
});

