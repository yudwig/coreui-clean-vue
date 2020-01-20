<template>
  <div class="item">
    <figure class="item-image-container" @click="imageClicked">
      <img class="item-image" :src=item.imageUrl>
      <a class="item-overlay">
        <p class="item-title">{{item.title}}</p>
      </a>
    </figure>
  </div>
</template>

<script>
  export default {
    name: "ItemThumbnailOrganism",
    props: {
      item: {
        type: Object
      }
    },
    methods: {
      imageClicked() {
        this.$emit('imageClicked');
      }
    }
  };
</script>

<style scoped>
  .item {
    cursor: pointer;
  }
  .item-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
  }
  .item-image-container {
    width: 100%;
    height: 0;
    position: relative;
    padding-bottom: 61.8%;
    margin-bottom: 0;
  }
  .item-overlay {
    position: absolute;
    right: 0;
    top: 0;
    background: rgba(0,0,0,0.3);
    bottom: 0;
    left: 0;
    visibility: hidden;
    display: flex;
    align-items: flex-end;
  }
  .item-image-container:hover .item-overlay {
    visibility: visible;
  }
  .item-title {
    color: white;
    margin-left: 15px;
    margin-bottom: 15px;
  }
</style>