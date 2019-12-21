<template>
  <RouterView @checkStatusCode="checkStatusCode"></RouterView>
</template>

<script>
  import statusCodes from "../../modules/entities/status-codes";
  export default {
    name: 'app',
    methods: {
      async checkStatusCode(code) {
        if (code === statusCodes.internalServerError) {
          this.$router.push('/500');
        } else if (code === statusCodes.unAuthorized) {
          this.$router.push('/login');
        }
      }
    },
    beforeCreate() {
      this.$store.dispatch('auth/initSessionUser');
    },
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
  @import '../../assets/scss/style';
  @import '../../assets/scss/dropdown-icons-style';
</style>
