<template>
  <CButton type="submit" size="sm" color="primary" @click="register">
    <CIcon name="cil-check-circle"/><label>Register</label>
  </CButton>
</template>

<script>
  export default {
    name: "RegisterButton",
    methods: {
      register() {
        this.$emit('registerButtonClicked');
      }
    }
  }
</script>

<style scoped>
  label {
    margin: 0 0 0 5px;
  }
</style>
