<template>
  <AppHeaderDropdown right no-caret>
    <template slot="header">
      <img src="https://placekitten.com/32/32"
           class="img-avatar"
           height="32" width="32"
           alt="mytest"
      />
    </template>
    <template slot="dropdown">
      <b-dropdown-text>
        <div class="profile-text">
          <div><strong>{{userName}}</strong></div>
          <span>{{userGroup}}</span>
        </div>
      </b-dropdown-text>
      <b-dropdown-divider></b-dropdown-divider>
      <b-dropdown-item>
        <font-awesome-icon :icon="['fas', 'user']"/>
        <span class="dropdown-text">Profile</span>
      </b-dropdown-item>
      <b-dropdown-item>
        <font-awesome-icon :icon="['fas', 'wrench']"/>
        <span class="dropdown-text">Settings</span>
      </b-dropdown-item>
      <b-dropdown-item @click="logout">
        <font-awesome-icon :icon="['fas', 'lock']"/>
        <span class="dropdown-text">Logout</span>
      </b-dropdown-item>

      <b-dropdown-item>
        <i class="fa fa-tasks" />
        <span class="dropdown-text">Tasks</span>
      </b-dropdown-item>

    </template>
  </AppHeaderDropdown>
</template>

<script>

  import Vue  from 'vue';
  // import BNav from 'bootstrap-vue';
  import BootstrapVue from 'bootstrap-vue';
  // import {
  //   BDropdownHeader,
  //   // BNav
  // } from 'bootstrap-vue';
  // Vue.use(BNav);
  Vue.use(BootstrapVue);

  import {
    HeaderDropdown as AppHeaderDropdown
  } from '@coreui/vue';

  import {
    library
  } from '@fortawesome/fontawesome-svg-core';

  import {
    FontAwesomeIcon
  } from '@fortawesome/vue-fontawesome';

  import { fas } from '@fortawesome/free-solid-svg-icons';
  import { far } from '@fortawesome/free-regular-svg-icons'
  import {mapGetters} from 'vuex';

  library.add(fas, far);

  export default {
    name: "DropdownAccount",
    components: {
      AppHeaderDropdown,
      FontAwesomeIcon
      // BDropdownHeader
    },
    computed: {
      ...mapGetters({
        userName:  'auth/userName',
        userGroup: 'auth/userGroup'
      })
    },
    methods: {
      async logout() {
        await this.$store.dispatch('auth/logout');
        this.$router.push('/login');
      }
    }
  }
</script>

<style scoped lang="scss">
  .profile-text {
    margin-top: 10px;
  }
</style>

