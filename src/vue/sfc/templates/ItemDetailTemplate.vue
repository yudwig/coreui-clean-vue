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
    data() {
      return {
        controller: this.getProvider().provide('controller/itemDetail')
      }
    },
    created() {
      this.debug('this.id:', this.id);
      this.controller.findItem(this.id);
    },
    computed: {
      item: function() {
        return this.controller.getItem();
      }
    },
    methods: {
      openDeleteResultPage() {
        this.debug('openDeleteResultPage is called.');
        this.controller.openDeleteResultPage();
      }
    }
  }
</script>

<style scoped>
</style>