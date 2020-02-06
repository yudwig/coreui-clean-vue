<template>
  <div class="page-body">
    <div class="detail-container">
      <ItemDetailOrganism :item="item"/>
    </div>
  </div>
</template>

<script>
  import ItemDetailOrganism from "../organisms/ItemDetailOrganism";

  import {MockItemRepository} from "../../../modules/repositories/Item/MockItemRepository";
  const mock = new MockItemRepository();

  export default {
    name: "ItemDetailTemplate",
    components: {ItemDetailOrganism},
    props: {
      id: {
        type: Number
      }
    },
    computed: {
      item: () => mock.find(1)
    },
    created: () => {
      console.log('ItemDetail::created is called.');
    }
  }
</script>

<style scoped>

</style>