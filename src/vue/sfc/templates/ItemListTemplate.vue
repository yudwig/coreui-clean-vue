<template>
  <div class="item-list">
    <div class="list-container" v-if="!detailItem">
      <div class="body-header list-header-container">
        <header>total {{items.count}} items</header>
      </div>
      <CAlert v-if="message.message" show close-button :color="message.className">{{message.message}}</CAlert>
      <div v-if="items.list" class="list">
        <ItemThumbnailOrganism
          v-for="item in items.list"
          :item="item"
          :key="item.id"
          @imageClicked="openDetail(item.id)"
        />
      </div>
    </div>
    <div class="close-button-container">
      <CloseButtonAtom v-if="detailItem" @closeButtonClicked="closeDetail"/>
    </div>
    <div class="detail-container" v-if="detailItem">
      <ItemDetailOrganism
        :item="detailItem"
        @itemDeleted="refreshItems"
      />
    </div>
  </div>
</template>

<script>
  import ItemDetailOrganism from "../organisms/ItemDetailOrganism.vue";
  import ItemThumbnailOrganism from "../organisms/ItemThumbnailOrganism.vue";
  import CloseButtonAtom from "../atoms/CloseButtonAtom";

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
    data() {
      return {
        controller: this.getProvider().provide('controller/itemList')
      }
    },
    computed: {
      items() {
        return this.controller.getItems();
      },
      detailItem() {
        this.debug(this.controller.getOpenedItem());
        return this.controller.getOpenedItem();
      },
      message() {
        return this.controller.getMessage();
      }
    },
    mounted() {
      window.addEventListener('popstate', () => this.controller.popStateCallback(), true);
    },
    destroyed() {
      window.removeEventListener('popstate', () => this.controller.popStateCallback(), true);
    },
    created() {
      this.controller.searchItems();
      this.controller.initState();
    },
    methods: {
      openDetail(id) {
        return this.controller.openItem(id);
      },
      closeDetail() {
        return this.controller.closeItem();
      },
      refreshItems() {
        this.closeDetail();
        this.controller.searchItems();
      }
    },
    watch: {
      navLinkClickedMessage: {
        handler() {
          this.debug('message received.', this.navLinkClickedMessage);
          this.controller.initState();
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
