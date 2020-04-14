<template>
  <CTextarea
    label="Comment"
    :value="comment"
    rows="5"
    placeholder="Enter comment for item"
    @input="input"
  >
  </CTextarea>
</template>

<script>
  export default {
    name: "ItemCommentFormAtom",
    props: {
      comment: {
        type: String
      }
    },
    model: {
      prop: 'comment',
      event: 'input'
    },
    methods: {
      input(value) {
        this.debug('input', value);
        this.$emit('input', value);
      }
    }
  }
</script>

<style scoped>

</style>