<template>
  <div class="item-detail">
    <div class="item-detail-inner">
      <div class="detail-body-container">
        <!--      <div class="side-paginator prev-item-paginator">-->
        <!--        <button type="button">←</button>-->
        <!--      </div>-->
        <article class="detail-body">
          <header class="detail-header">
            <h1 class="item-title display-4">{{item.title}}</h1>
          </header>
          <section class="image-section">
            <div class="image-section-inner">
              <figure class="detail-image-container">
                <img class="detail-image" :src="item.imageUrl">
              </figure>
            </div>
          </section>
          <section class="edit-section">
            <div class="edit-section-inner">
              <div class="title">
                <!--              title:-->
              </div>
            </div>
          </section>
          <div class="close-button-container">
<!--            <CloseButtonAtom @closeButtonClicked="closeButtonClicked"/>-->
<!--            <CloseButtonAtom @closeButtonClicked="closeButtonClicked"/>-->
          </div>
        </article>
        <!--      <div class="side-paginator next-item-paginator">-->
        <!--        <button type="button">→</button>-->
        <!--      </div>-->
      </div>
    </div>
  </div>
</template>

<script>
  import CloseButtonAtom from "../atoms/CloseButtonAtom";

  export default {
    name: "ItemDetailOrganism",
    components: {
      CloseButtonAtom
    },
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
  }
  .image-section {
    width: 100%;
    margin-right: 335px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .edit-section {
    width: 335px;
    position: absolute;
    right: 0;
    top: $headerHeight;
  }
  .edit-section-inner {
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
  .detail-header h1 {
    width: 260px;
    margin-bottom: 0;
    font-size: 25px;
    font-weight: 300;
    word-break: break-word;
    overflow-wrap: break-word;
  }
  .close-button-container {
    position: absolute;
    right: 20px;
    top: 20px;
  }
  .side-paginator {
    width: 30px;
    /*background-color: gray;*/
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>