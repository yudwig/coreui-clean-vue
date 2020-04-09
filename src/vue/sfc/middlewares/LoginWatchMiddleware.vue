<template>
  <div></div>
</template>

<script>
  import {AuthMiddleware} from "../../../modules/middlewares/Auth/AuthMiddleware";
  const middleware = new AuthMiddleware();

  export default {
    name: "LoginWatchMiddleware",
    computed: {
      isAuthenticated: () => middleware.isAuthenticated()
    },
    watch: {
      isAuthenticated: {
        async handler(val) {
          console.log("isAuthenticated: ", val);
          if (val) {
            middleware.login();
          }
        },
        immediate: true
      }
    }
  }
</script>