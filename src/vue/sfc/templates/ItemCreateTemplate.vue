<template>
  <div>
    <div class="body-header"></div>
    <CRow>
      <CCol>
        <ItemFormOrganism :item="item" @register="form => register(form)"></ItemFormOrganism>
      </CCol>
    </CRow>
  </div>
</template>

<script>
  import ItemFormOrganism from "../organisms/ItemFormOrganism";

  export default {
    name: "ItemCreateTemplate",
    components: {
      ItemFormOrganism
    },
    data() {
      return {
        item: {
          title: '',
          comment: '',
          imageUrl: ''
        },
        controller: this.getProvider().provide('controller/itemCreate')
      }
    },
    mounted() {
      this.controller.initStates();
    },
    computed: {
      resultStatus() {
        return this.controller.getResultStatus();
      }
    },
    methods: {
      register(form) {
        if (confirm('Do you want to create this item?')) {
          this.controller.createItem(form);
        }
      }
    },
  }
</script>

<style scoped>
</style>
