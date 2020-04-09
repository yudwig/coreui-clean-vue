import { VuexItemListViewState as store } from "./VuexItemListViewState";
var VuexItemListViewStateAdapter = /** @class */ (function () {
    function VuexItemListViewStateAdapter() {
    }
    VuexItemListViewStateAdapter.prototype.getItems = function () {
        return store.getters['items'];
    };
    VuexItemListViewStateAdapter.prototype.getOpenedItem = function () {
        return store.getters['openedItem'];
    };
    VuexItemListViewStateAdapter.prototype.setItems = function (items) {
        store.dispatch('setItems', items);
    };
    VuexItemListViewStateAdapter.prototype.setOpenedItem = function (item) {
        store.dispatch('setOpenedItem', item);
    };
    VuexItemListViewStateAdapter.prototype.setItemSearchQuery = function (itemSearchQuery) {
        store.dispatch('setItemSearchQuery', itemSearchQuery);
    };
    VuexItemListViewStateAdapter.prototype.getItemSearchQuery = function () {
        return store.getters['itemSearchQuery'];
    };
    VuexItemListViewStateAdapter.prototype.getMessage = function () {
        return store.getters['message'];
    };
    VuexItemListViewStateAdapter.prototype.setMessage = function (message) {
        store.dispatch('setMessage', message);
    };
    VuexItemListViewStateAdapter.prototype.clearOpenedItem = function () {
        store.dispatch('clearOpenedItem');
    };
    VuexItemListViewStateAdapter.prototype.clearMessage = function () {
        store.dispatch('clearMessage');
    };
    return VuexItemListViewStateAdapter;
}());
export { VuexItemListViewStateAdapter };
//# sourceMappingURL=/meta/map/src/vue/states/VuexItemListViewStateAdapter.js.map