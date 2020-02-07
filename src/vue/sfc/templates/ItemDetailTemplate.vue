<template>
  <div class="page-body">
    <div class="detail-container">
      <ItemDetailOrganism :item="item"/>
    </div>
  </div>
</template>

<script>
  import ItemDetailOrganism from "../organisms/ItemDetailOrganism";
  import {ItemDetailController} from "../../../modules/controllers/ItemDetailController";
  const controller = new ItemDetailController();

  export default {
    name: "ItemDetailTemplate",
    components: {ItemDetailOrganism},
    props: {
      id: {
        type: Number
      }
    },
    computed: {
      item() {
        return controller.getItem(this.id)
      }
    }
  }
</script>

<style scoped>

</style>