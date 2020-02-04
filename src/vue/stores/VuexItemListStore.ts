import {Item} from "../../modules/entities/Item";

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    items: [],
    openedItem: null
};

const mutations = {
    setItems(state, items: Array<Item>) {
        state.items = items;
    },
    setOpenedItem(state, item: Item) {
        state.openedItem = item;
    }
};

const actions = {
    async setItems(context, items: Array<Item>) {
        context.commit('setItems', items);
    },
    async setOpenedItem(context, item: Item) {
        context.commit('setOpenedItem', item);
    }
};

const getters = {
    items: () => state.items,
    openedItem: () => state.openedItem
};

export const VuexItemListStore = new Vuex.Store({
    // namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters
});

