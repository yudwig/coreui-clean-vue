<template>
  <h1 class="item-title display-4">{{title}}</h1>
</template>

<script>
  export default {
    name: "ItemTitleHeaderAtom",
    props: {
      title: {
        type: String
      }
    }
  }
</script>

<style scoped>
  h1 {
    width: 260px;
    margin-bottom: 0;
    font-size: 25px;
    font-weight: 300;
    word-break: break-word;
    overflow-wrap: break-word;
  }
</style>