<template>
  <div class="c-app flex-row align-items-center">
    <LoginWatchMiddleware></LoginWatchMiddleware>
    <div class="container">
      <b-row class="justify-content-center">
        <b-col md="8">
          <b-card-group>
            <b-card no-body class="p-4">
              <b-card-body>
                <b-form @submit.prevent="login">
                  <h1>Login</h1>
                  <p class="text-muted">Sign In to your account</p>

                  <b-input-group class="mb-3">
                    <b-input-group-prepend>
                      <b-input-group-text><i class="icon-user"></i></b-input-group-text>
                    </b-input-group-prepend>
                    <b-form-input type="text" class="form-control"
                                  placeholder="Login ID" autocomplete="username email"
                                  v-model="loginId"/>
                  </b-input-group>
                  <b-input-group class="mb-4">
                    <b-input-group-prepend>
                      <b-input-group-text><i class="icon-lock"></i></b-input-group-text>
                    </b-input-group-prepend>
                    <b-form-input type="password" class="form-control"
                                  placeholder="Password" autocomplete="current-password"
                                  v-model="password"/>
                  </b-input-group>

                  <b-row class="mb-4">
                    <b-button type="submit" variant="primary" class="px-4">Login</b-button>
                    <b-button type="button" variant="primary" class="px-4 ml-2"
                              @click="loginGuest">Guest Login</b-button>
                    <b-col class="text-right">
                      <b-button variant="link" class="px-0">Forgot password?</b-button>
                    </b-col>
                  </b-row>
                  <b-row v-if="loginErrorMessage.message">
                    <b-alert class="col-12" show :variant="loginErrorMessage.className">
                      {{loginErrorMessage.message}}
                    </b-alert>
                  </b-row>
                </b-form>
              </b-card-body>
            </b-card>
          </b-card-group>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
  import LoginWatchMiddleware from "../middlewares/LoginWatchMiddleware";

  export default {
    name: 'Login',
    components: {
      LoginWatchMiddleware
    },
    data() {
      return {
        loginId: '',
        password: '',
        controller: this.getProvider().provide('controller/login')
      }
    },
    computed: {
      loginErrorMessage() {
        return this.controller.getLoginErrorMessage();
      }
    },
    methods: {
      async login() {
        this.controller.login(this.loginId, this.password);
      },
      async loginGuest() {
        this.controller.loginAsGuest();
      }
    }
  }
</script>

