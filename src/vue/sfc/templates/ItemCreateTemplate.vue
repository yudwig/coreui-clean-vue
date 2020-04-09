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
  import {ItemCreateController} from "../../../modules/controllers/ItemCreateController";

  const controller = new ItemCreateController();

  export default {
    name: "ItemCreateTemplate",
    components: {
      ItemFormOrganism
    },
    data() {
      return {
        item: {}
      }
    },
    mounted() {
      controller.initStates();
    },
    computed: {
      resultStatus: () => controller.getResultStatus()
    },
    methods: {
      register(form) {
        controller.createItem(form);
      }
    },
  }
</script>

<style scoped>

</style>