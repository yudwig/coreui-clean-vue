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
    data () {
      return {
        controller: this.getProvider().provide('controller/itemEdit')
      }
    },
    mounted() {
      this.controller.findItem(this.id);
    },
    computed: {
      item() {
        return this.controller.getItem();
      }
    },
    methods: {
      register(form) {
        if (confirm('Do you want to update this item?')) {
          this.debug('received form: ', form);
          this.controller.updateItem({
            title: form.title,
            comment: form.comment,
            imageUrl: form.imageUrl
          });
        }
      }
    }
  }
</script>

