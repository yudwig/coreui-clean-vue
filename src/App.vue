<template>
  <RouterView></RouterView>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style lang="scss">
  @import '~@coreui/coreui/scss/coreui.scss';
  @import '~@coreui/icons/css/coreui-icons.min.css';
  /* Import Simple Line Icons Set */
  $simple-line-font-path: '~simple-line-icons/fonts/';
  @import '~simple-line-icons/scss/simple-line-icons.scss';
  /* Import Bootstrap Vue Styles */
  @import '~bootstrap-vue/dist/bootstrap-vue.css';
  @import './assets/scss/style.scss';
  @import './assets/scss/dropdown-icons-style.scss';
</style>
