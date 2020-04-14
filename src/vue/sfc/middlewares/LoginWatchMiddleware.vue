<template>
  <div></div>
</template>

<script>
  export default {
    name: "LoginWatchMiddleware",
    data() {
      return {
        middleware: this.getProvider().provide('middleware/auth')
      }
    },
    computed: {
      isAuthenticated() {
        return this.middleware.isAuthenticated()
      }
    },
    watch: {
      isAuthenticated: {
        async handler(val) {
          this.debug("isAuthenticated: ", val);
          if (val) {
            this.middleware.login();
          }
        },
        immediate: true
      }
    }
  }
</script>