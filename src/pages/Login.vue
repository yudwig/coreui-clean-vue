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
                              @click="loginGuest">Guest Login</b-button>
                    <b-col class="text-right">
                      <b-button variant="link" class="px-0">Forgot password?</b-button>
                    </b-col>
                  </b-row>
                  <b-row v-for="msg in messages">
                    <b-alert class="col-12" show v-bind:variant="msg.className">
                      {{msg.text}}
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
  import {mapGetters} from "vuex";

  export default {
    name: 'Login',
    data() {
      return {
        loginForm: {
          loginId: '',
          password: ''
        },
        messages: []
      }
    },
    mounted() {
      // this.$store.dispatch('auth/initSessionUser');
    },
    computed: {
      ...mapGetters({
        isValidUser: 'auth/isValidUser'
      })
    },
    watch: {
      isValidUser: {
        async handler(val) {
          if (val) {
            this.$router.push('/dashboard');
          }
        }
      }
    },
    methods: {
      async login() {
        const status = await this.$store.dispatch('auth/login');
        this.messages = status.messages;
        this.$emit('checkStatusCode', status.code);
      },
      async loginGuest() {
        await this.$store.dispatch('auth/loginGuest');
        this.$router.push('/dashboard');
      }
    }
  }
</script>

