<template>
  <div>
    <div class="body-header"></div>
    <CRow>
      <CCol>
        <ItemFormOrganism :item="item" form-title="Edit Item" @register="form => register(form)"></ItemFormOrganism>
      </CCol>
    </CRow>
  </div>
</template>

<script>
  import ItemFormOrganism from "../organisms/ItemFormOrganism";
  import {ItemEditController} from "../../../modules/controllers/ItemEditController";
  const controller = new ItemEditController();

  export default {
    name: 'ItemEditTemplate',
    components: {
      ItemFormOrganism
    },
    props: {
      id: {
        type: String
      }
    },
    mounted() {
      console.log('item edit mounted is called.');
      controller.findItem(this.id);
    },
    computed: {
      item: () => controller.getItem()
    },
    methods: {
      register(form) {
        if (confirm('Do you want to update this item?')) {
          console.log('received form: ', form);
          // controller.updateItem(form);
          controller.updateItem({
            title: form.title,
            comment: form.comment,
            imageUrl: form.imageUrl
          });
        }
      }
    }
  }
</script>

