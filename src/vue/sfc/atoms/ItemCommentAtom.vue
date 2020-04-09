<template>
  <div>
    <p>{{comment}}</p>
  </div>
</template>

<script>
  export default {
    name: "ItemCommentAtom",
    props: {
      comment: String
    },
  }
</script>

<style scoped>

</style>