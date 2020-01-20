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
  import {CreateGetItemsQueryUseCase} from "../../../modules/usecases/CreateGetItemsQuery/CreateGetItemsQueryUseCase";
  import {GetItemsUseCase} from "../../../modules/usecases/GetItems/GetItemsUseCase";
  import {OpenItemDetailUseCase} from "../../../modules/usecases/OpenItemDetail/OpenItemDetailUseCase";
  import ItemDetailOrganism from "../organisms/ItemDetailOrganism.vue";
  import ItemThumbnailOrganism from "../organisms/ItemThumbnailOrganism.vue";

  export default {
    name: "ItemList",
    components: {
      ItemDetailOrganism,
      ItemThumbnailOrganism
    },
    data() {
      return {
        detailItem: null
      }
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