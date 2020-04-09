<template>
  <div class="item-detail">
    <div class="item-detail-inner">
      <div class="detail-body-container">
        <article class="detail-body">
          <header class="detail-header">
            <ItemTitleAtom :title="item.title"></ItemTitleAtom>
            <div class="option-icon-container">
              <CDropdown :caret="false" :in-nav="true">
                <template v-slot:toggler-content>
                  <CIcon class="option-icon" name="cil-options"></CIcon>
                </template>
                <CDropdownItem @click="editButtonClicked">Edit</CDropdownItem>
                <CDropdownItem @click="deleteButtonClicked">Delete</CDropdownItem>
              </CDropdown>
            </div>
          </header>
          <section class="image-section">
            <div class="image-section-inner w-100">
              <figure class="detail-image-container">
                <img class="detail-image" :src="item.imageUrl">
              </figure>
            </div>
          </section>
          <section class="detail-content">
            <div class="detail-content-inner">
              <div class="comment">
                <ItemCommentAtom :comment="item.comment"></ItemCommentAtom>
              </div>
            </div>
          </section>
          <div class="action-button-container">
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
  import ItemTitleAtom from "../atoms/ItemTitleAtom";
  import ItemCommentAtom from "../atoms/ItemCommentAtom";
  import {ItemMenuController} from "../../../modules/controllers/ItemMenuController";

  const controller = new ItemMenuController();

  export default {
    name: "ItemDetailOrganism",
    components: {
      ItemTitleAtom,
      ItemCommentAtom
    },
    props: {
      item: {
        type: Object
      }
    },
    methods: {
      editButtonClicked() {
        console.log('editButtonClicked is called.');
        controller.openItemEditPage(this.item.id);
      },
      deleteButtonClicked() {
        console.log('editButtonClicked is called.');
        if (confirm('Do you want to delete this item?')) {
          controller.deleteItem(this.item.id);
          this.$emit('itemDeleted');
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '../../../assets/scss/app-colors.scss';

  $headerHeight: 100px;

  .item-detail {
    display: flex;
    justify-content: center;
  }
  .item-detail-inner {
    background-color: white;
    max-width: 950px;
    width: 100%;
  }
  .detail-body-container {
    display: flex;
    flex-direction: row;
    background-color: $appBasicBgColor;
    padding-top: 40px;
    padding-left: 20px;
    padding-right: 20px;
  }
  .detail-body {
    width: 100%;
    display: flex;
    flex-direction: row;
    position: relative;
    background-color: white;
    min-height: 200px;
  }
  .detail-image-container {
    margin-bottom: 0;
  }
  .detail-image {
    width: 100%;
    object-fit: cover;
  }
  .image-section {
    width: 100%;
    margin-right: 335px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .detail-content {
    width: 335px;
    position: absolute;
    right: 0;
    top: $headerHeight;
  }
  .detail-content-inner {
    margin: 0 20px;
  }
  .detail-header {
    display: flex;
    justify-content: space-between;
    width: 335px;
    position: absolute;
    top: 0;
    right: 0;
    padding: 20px;
    border-bottom: 1px solid #e6e6e6;
  }
  .action-button-container {
    position: absolute;
    right: 20px;
    top: 20px;
  }
  .option-icon-container {
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .option-icon {
    width: 20px;
    height: 20px;
    color: rgba(0, 0, 21, 0.5);
  }
  .nav-item {
    list-style: none;
  }
</style>