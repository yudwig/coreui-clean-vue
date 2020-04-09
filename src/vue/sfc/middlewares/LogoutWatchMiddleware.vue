<template>
  <div></div>
</template>

<script>
  import {AuthMiddleware} from "../../../modules/middlewares/Auth/AuthMiddleware";
  const middleware = new AuthMiddleware();

  let f = function() {
    middleware.isAuthenticated();
  };

  // setInterval(f, 3000);

  export default {
    name: "LogoutWatchMiddleware",
    computed: {
      isAuthenticated: function() {
        console.log("isAuthenticated is changed. ", middleware.isAuthenticated());
        return middleware.isAuthenticated()
      },
      isAuthErrorOccurred: function() {
        return middleware.isAuthErrorOccurred();
      }
    },
    watch: {
      isAuthenticated: {
        async handler(newVal, oldVal) {
          console.log('new: ', newVal, 'old:', oldVal);
          // true -> false
          if (oldVal && !newVal) {
            middleware.logout();
          }
        },
        immediate: true
      },
      isAuthErrorOccurred: {
        async handler() {
          middleware.logout();
        }
      }
    }
  }
</script>