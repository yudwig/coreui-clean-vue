<template>
  <div class="page-body">
    <div class="detail-container">
      <ItemDetailOrganism
        :item="item.item"
        @itemDeleted="openDeleteResultPage"
      />
    </div>
  </div>
</template>

<script>
  import ItemDetailOrganism from "../organisms/ItemDetailOrganism";
  import {ItemDetailController} from "../../../modules/controllers/ItemDetailController";
  const controller = new ItemDetailController();

  export default {
    name: "ItemDetailTemplate",
    components: {
      ItemDetailOrganism
    },
    props: {
      id: {
        type: String
      }
    },
    created() {
      console.log('this.id:', this.id);
      controller.findItem(this.id);
    },
    computed: {
      item: function() {
        return controller.getItem();
      }
    },
    methods: {
      openEditPage() {
        console.log('openEditPage is called.');
        controller.openEditPage(this.id);
      },
      openDeleteResultPage() {
        console.log('openDeleteResultPage is called.');
        controller.openDeleteResultPage();
      }
    }
  }
</script>

<style scoped>

</style>