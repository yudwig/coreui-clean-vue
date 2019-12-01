<template>
  <div class="item-detail">
    <div class="detail-header-container">
      <div class="close-button-container">
        <button type="button" @click="closeButtonClicked">×</button>
      </div>
    </div>
    <div class="detail-body-container">
      <div class="side-paginator prev-item-paginator">
        <button type="button">←</button>
      </div>
      <div class="detail-body">
        <div class="panes-container">
          <div class="image-pane">
            <div class="image-pane-inner">
              <figure class="detail-image-container">
                <img class="detail-image" :src="item.image_url">
              </figure>
            </div>
          </div>
          <div class="edit-pane">
            <div class="edit-pane-inner">
              <header>
                <h1>{{item.title}}</h1>
              </header>
              <div>
                <div class="title">
                  title:
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="side-paginator next-item-paginator">
        <button type="button">→</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ItemDetail",
    props: {
      item: {
        type: Object
      }
    },
    methods: {
      closeButtonClicked() {
        this.$emit('closeButtonClicked');
      }
    }
  }
</script>

<style scoped>
  .item-detail {
    position: absolute;
    top: 55px;
    background-color: white;
    height: 100%;
  }
  .detail-header-container {
    height: 45px;
    display: flex;
    align-items: center;
  }
  .close-button-container {
    position: absolute;
    right: 0;
    margin-right: 10px;
  }
  .detail-body-container {
    display: flex;
    flex-direction: row;
  }
  .panes-container {
    display: flex;
    flex-direction: row;
  }
  .detail-image {
    width: 100%;
  }
  .image-pane {
    width: 60%;
  }
  .edit-pane {
    width: 40%;
  }
  .edit-pane-inner {
    margin: 0 30px;
  }
  .detail-body {
    width: 100%;
  }
  .side-paginator {
    width: 30px;
    /*background-color: gray;*/
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>