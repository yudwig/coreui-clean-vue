<template>
  <div class="page-body item-list">
    <div class="list-container" v-if="!detailItem">
      <div class="list-header-container">
        <header>total 50 items</header>
      </div>
      <div class="list">
        <ItemThumbnailOrganism v-for="item in items" :item="item" @imageClicked="openDetail(item)"/>
      </div>
    </div>
    <div class="detail-container" v-if="detailItem">
      <ItemDetailOrganism :item="detailItem" @closeButtonClicked="closeDetail"/>
    </div>
  </div>
</template>

<script>
  import ItemDetailOrganism from "../organisms/ItemDetailOrganism.vue";
  import ItemThumbnailOrganism from "../organisms/ItemThumbnailOrganism.vue";

  import {CreateGetItemsQueryInteractor} from "../../../modules/usecases/CreateGetItemsQuery/CreateGetItemsQueryInteractor";
  import {MockGetItemsQueryRepository} from "../../../modules/repositories/GetItemsQuery/MockGetItemsQueryRepository";
  const getItemsQueryRepository = new MockGetItemsQueryRepository();
  const createGetItemsQueryInteractor = new CreateGetItemsQueryInteractor(getItemsQueryRepository);

  import {MockGetItemsInteractor} from "../../../modules/usecases/GetItems/MockGetItemsInteractor";
  import {MockItemRepository} from "../../../modules/repositories/item/MockItemRepository";
  const itemRepository = new MockItemRepository();
  const getItemsInteractor = new MockGetItemsInteractor(itemRepository);

  export default {
    name: "ItemList",
    components: {
      ItemDetailOrganism,
      ItemThumbnailOrganism
    },
    data() {
      return {
        getItemsQuery: {},
        itemDisplayFormat: {},
        detailItem: null
      }
    },
    computed: {
      getItemsResponse() {
        return getItemsInteractor.handle(this.getItemsQuery);
      },
      items() {
        return this.getItemsResponse.items;
      },
    },
    created() {
      this.getItemsQuery = createGetItemsQueryInteractor.handle();
    },
    methods: {
      openDetail(item) {
        this.detailItem = item;
        window.history.pushState(null, null, '/item/' + item.id);
      },
      closeDetail() {
        this.detailItem = null;
      }
    }
  };
</script>

<style scoped>
  .page-body {
    padding: 0;
  }
  .list-container {
    padding: 0 30px;
  }
  .list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    column-gap: 20px;
    row-gap: 20px;
  }
  .list-header-container {
    height: 45px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: #2f353a;
  }
</style>
