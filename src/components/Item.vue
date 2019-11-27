<template>
  <div class="item">
    <div class="item-image-container">
      <img :src="item.image_url">
    </div>
  </div>
</template>

<script>
  export default {
    name: "Item",
    props: {
      item: {
        type: Object
      }
    }
  }
</script>

<style scoped>
  .item img {
    /*height: 100%;*/
    width: 100%;
    object-fit: cover;
  }
</style>