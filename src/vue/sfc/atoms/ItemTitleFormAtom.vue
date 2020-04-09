<template>
  <div>
    <label>
      <input type="text" class="item-title display-4" :value="defaultTitle"/>
    </label>
  </div>
</template>

<script>
  export default {
    name: "ItemTitleFormAtom",
    props: {
      defaultTitle: {
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