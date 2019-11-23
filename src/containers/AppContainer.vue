<template>
  <div class="app">
    <AppHeader fixed>
      <SidebarToggler class="d-lg-none" display="md" mobile />
      <SidebarToggler class="d-md-down-none" display="lg" :defaultOpen=true />
      <b-link class="navbar-brand" to="/">LOGO</b-link>
      <b-navbar-nav class="ml-auto">
        <DropdownAccount/>
      </b-navbar-nav>
      <div class="navbar-right-margin"></div>
    </AppHeader>
    <div class="app-body">
      <AppSidebar fixed>
        <SidebarHeader/>
        <SidebarForm/>
        <SidebarNav :navItems="nav"></SidebarNav>
        <SidebarFooter/>
        <SidebarMinimizer/>
      </AppSidebar>
      <main class="main">
        <div class="container-fluid">
          <RouterView @checkStatusCode="checkStatusCode"></RouterView>
        </div>
      </main>
    </div>
  </div>
</template>

<script>

  // BootstrapVue:
  // https://bootstrap-vue.js.org/docs/components/
  import {
    BButton,
    BLink,
    BNavbarNav,
    BNavItem
  } from 'bootstrap-vue';

  // CoreUI vue
  // https://coreui.io/demo/
  import {
    Header as AppHeader,
    SidebarToggler,
    Sidebar as AppSidebar,
    SidebarFooter,
    SidebarForm,
    SidebarHeader,
    SidebarMinimizer,
    SidebarNav,
    Footer as TheFooter,
    Breadcrumb
  } from '@coreui/vue'

  import DropdownAccount from './DropdownAccount.vue';
  import nav from '../nav';
  import {mapGetters, mapState} from 'vuex';

  export default {
    name: "AppContainer",
    components: {
      AppHeader,
      AppSidebar,
      SidebarHeader,
      SidebarForm,
      SidebarNav,
      SidebarFooter,
      SidebarMinimizer,
      SidebarToggler,
      Breadcrumb,
      TheFooter,
      BButton,
      BLink,
      BNavbarNav,
      BNavItem,
      DropdownAccount
    },
    data() {
      return {
        nav: nav.items
      }
    },
    computed: {
      ...mapGetters({
        isValidUser: 'auth/isValidUser',
      })
    },
    methods: {
      async checkStatusCode(code) {
        this.$emit('checkStatusCode', code)
      }
    },
    watch: {
      isValidUser: {
        async handler(val) {
          if (!val) {
            this.$router.push('/login');
          }
        },
        immediate: true
      }
    }
  }
</script>

<style>
  .navbar-right-margin {
    width: 10px;
  }
</style>
