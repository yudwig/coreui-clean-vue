<template>
  <div class="page-body item-list">
    <div class="list-container" v-if="!detailItem">
      <div class="list-header-container">
        <header>total 50 items</header>
      </div>
      <div class="list">
        <ItemThumbnailOrganism v-for="item in items" :item="item" @imageClicked="openDetail(item.id)"/>
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
  import {ItemListController} from "../../../modules/controllers/ItemListController";
  const controller = new ItemListController();
  export default {
    name: "ItemList",
    components: {
      ItemDetailOrganism,
      ItemThumbnailOrganism
    },
    data: () => ({
      itemDisplayFormat: {}
    }),
    computed: {
      items: () => controller.getItems(),
      detailItem: () => controller.getOpenedItem()
    },
    mounted: () => controller.addEvents(),
    destroyed: () => controller.removeEvents(),
    methods: {
      openDetail: id => controller.openItem(id),
      closeDetail: () => controller.closeItem()
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
