import { VuexItemListStore as store } from "./VuexItemListStore";
var VuexItemListStoreAdaptor = /** @class */ (function () {
    function VuexItemListStoreAdaptor() {
    }
    VuexItemListStoreAdaptor.prototype.getItems = function () {
        return store.getters['items'];
    };
    VuexItemListStoreAdaptor.prototype.getOpenedItem = function () {
        return store.getters['openedItem'];
    };
    VuexItemListStoreAdaptor.prototype.setItems = function (items) {
        store.dispatch('setItems', items);
    };
    VuexItemListStoreAdaptor.prototype.setOpenedItem = function (item) {
        store.dispatch('setOpenedItem', item);
    };
    return VuexItemListStoreAdaptor;
}());
export { VuexItemListStoreAdaptor };
//# sourceMappingURL=/meta/map/vue/stores/VuexItemListStoreAdaptor.js.map