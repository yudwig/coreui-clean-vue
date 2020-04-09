<template>
  <CButton type="reset" size="sm" color="gray-100" variant="outline"
            @click="cancel">
    <CIcon name="cil-ban"/><label>Cancel</label>
  </CButton>
</template>

<script>
  export default {
    name: "CancelButtonAtom",
    methods: {
      cancel() {
        this.$emit('cancelButtonClicked');
      }
    }
  }
</script>

<style scoped>
  label {
    margin: 0 0 0 5px;
  }
</style>