<template>
  <div class="item-list">
    <div class="list-container" v-if="!detailItem">
      <div class="body-header list-header-container">
        <header>total {{items.count}} items</header>
      </div>
      <CAlert v-if="message.message" show close-button :color="message.className">{{message.message}}</CAlert>
      <div v-if="items.list" class="list">
        <ItemThumbnailOrganism v-for="item in items.list" :item="item" @imageClicked="openDetail(item.id)"/>
      </div>
    </div>
    <div class="close-button-container">
      <CloseButtonAtom v-if="detailItem" @closeButtonClicked="closeDetail"/>
    </div>
    <div class="detail-container" v-if="detailItem">
      <ItemDetailOrganism
        :item="detailItem"
        @closeButtonClicked="closeDetail"
        @itemDeleted="refreshItems"
      />
    </div>
  </div>
</template>

<script>
  import ItemDetailOrganism from "../organisms/ItemDetailOrganism.vue";
  import ItemThumbnailOrganism from "../organisms/ItemThumbnailOrganism.vue";
  import {ItemListController} from "../../../modules/controllers/ItemListController";
  import CloseButtonAtom from "../atoms/CloseButtonAtom";
  const controller = new ItemListController();
  export default {
    name: "ItemList",
    props: {
      navLinkClickedMessage: {
        type: Object,
        default: {
          name: '',
          time: 0
        }
      }
    },
    components: {
      ItemDetailOrganism,
      ItemThumbnailOrganism,
      CloseButtonAtom
    },
    computed: {
      items: () => controller.getItems(),
      // detailItem: () => controller.getOpenedItem()
      detailItem: function () {
        console.log(controller.getOpenedItem());
        return controller.getOpenedItem();
      },
      message: () => controller.getMessage(),
      href: () => location.href,
      url() {
        return controller.getUrl();
      },
      location() {
        return window.location;
      }
    },
    mounted() {
      window.addEventListener('popstate', () => controller.popStateCallback(), true);
    },
    destroyed() {
      window.removeEventListener('popstate', () => controller.popStateCallback(), true);
    },
    created() {
      controller.searchItems();
      controller.initState();
    },
    methods: {
      openDetail: id => controller.openItem(id),
      closeDetail: () => controller.closeItem(),
      refreshItems() {
        this.closeDetail();
        controller.searchItems();
      }
    },
    watch: {
      navLinkClickedMessage: {
        handler() {
          console.log('message received.', this.navLinkClickedMessage);
          controller.initState();
        }
      }
    }
  };
</script>

<style scoped>
  .list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    column-gap: 20px;
    row-gap: 20px;
  }
  .list-header-container {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: #2f353a;
  }
  .close-button-container {
    position: fixed;
    margin-top: 10px;
    margin-right: 10px;
    right: 0;
  }
</style>
