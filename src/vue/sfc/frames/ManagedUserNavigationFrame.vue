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
        <SidebarNav :navItems="navItems"></SidebarNav>
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

  import DropdownAccount from '../organisms/DropdownAccount.vue';
  import {NavLink} from "../../../modules/entities/NavLink";
  import {mapGetters, mapState} from 'vuex';

  const nav = new NavLink();

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
        navItems: nav.items
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
      $route: {
        async handler(route) {
          this.navItems = nav.items.map(item => {
            item.attributes = route.path === item.url ? {
              class: 'active'
            } : {};
            return item;
          });
        },
        immediate: true
      },
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
