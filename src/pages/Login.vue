<template>
  <div class="app flex-row align-items-center">
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
                                  v-model="loginForm.loginId"/>
                  </b-input-group>
                  <b-input-group class="mb-4">
                    <b-input-group-prepend>
                      <b-input-group-text><i class="icon-lock"></i></b-input-group-text>
                    </b-input-group-prepend>
                    <b-form-input type="password" class="form-control"
                                  placeholder="Password" autocomplete="current-password"
                                  v-model="loginForm.password"/>
                  </b-input-group>

                  <b-row class="mb-4">
                    <b-button type="submit" variant="primary" class="px-4">Login</b-button>
                    <b-button type="button" variant="primary" class="px-4 ml-2"
                              v-on:click="loginGuest">Guest Login</b-button>
                    <b-col class="text-right">
                      <b-button variant="link" class="px-0">Forgot password?</b-button>
                    </b-col>
                  </b-row>

                  <b-row v-for="error in errorMessages">
                    <b-alert class="col-12" show variant="danger">{{error.message}}</b-alert>
                  </b-row>

                  <b-row v-for="info in infoMessages">
                    <b-alert class="col-12" show variant="info">{{info.message}}</b-alert>
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

  import {mapGetters} from 'vuex';

  export default {
    name: 'Login',
    data () {
      return {
        loginForm: {
          loginId: '',
          password: ''
        },
      }
    },
    computed: {
      ...mapGetters({
        errorMessages: 'auth/errorMessages',
        infoMessages:  'auth/infoMessages',
      })
    },
    methods: {
      async login () {
        console.log(this.loginForm.loginId, this.loginForm.password);
        await this.$store.dispatch('auth/login');
      },
      async loginGuest() {
        await this.$store.dispatch('auth/loginGuest');

        if (this.$store.getters['auth/isValidUser']) {
          console.log('success. user is valid.');
          this.$router.push('/dashboard');
        } else {
          console.log('error. user is inValid.');
        }
      }
    }
  }
</script>

