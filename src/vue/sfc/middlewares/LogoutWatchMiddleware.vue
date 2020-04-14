<template>
  <div></div>
</template>

<script>
  export default {
    name: "LogoutWatchMiddleware",
    data() {
      return {
        middleware: this.getProvider().provide('middleware/auth')
      }
    },
    computed: {
      isAuthenticated: function() {
        this.debug("isAuthenticated is changed. ", this.middleware.isAuthenticated());
        return this.middleware.isAuthenticated()
      },
      isAuthErrorOccurred: function() {
        return this.middleware.isAuthErrorOccurred();
      }
    },
    watch: {
      isAuthenticated: {
        async handler(newVal, oldVal) {
          this.debug('new: ', newVal, 'old:', oldVal);
          // true -> false
          if (oldVal && !newVal) {
            this.middleware.logout();
          }
        },
        immediate: true
      },
      isAuthErrorOccurred: {
        async handler() {
          this.middleware.logout();
        }
      }
    }
  }
</script>