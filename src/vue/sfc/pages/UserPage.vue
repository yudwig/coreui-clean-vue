<template>
  <div class="c-app">
    <LogoutWatchMiddleware></LogoutWatchMiddleware>
    <CHeader class="app-header d-flex justify-content-between" fixed light>
      <CHeaderNav class="mr-auto">
        <CToggler in-header class="ml-2 d-lg-none" @click="toggleSidebarMobile"/>
        <CToggler in-header class="ml-2 d-md-down-none" @click="toggleSidebarDesktop"/>
        <CHeaderNavItem class="ml-2">
          <CHeaderNavLink class="header-logo" to="/">LOGO</CHeaderNavLink>
        </CHeaderNavItem>
      </CHeaderNav>
      <CHeaderNav>
        <CHeaderNavItem>
          <CHeaderNavLink>
            <DropdownRegisterMenus/>
          </CHeaderNavLink>
        </CHeaderNavItem>
        <CHeaderNavItem class="mr-2">
          <CHeaderNavLink>
            <DropdownAccount/>
          </CHeaderNavLink>
        </CHeaderNavItem>
      </CHeaderNav>
    </CHeader>
    <div class="app-body">
      <CSidebar
        class="app-sidebar"
        :show="sidebarShow"
        :minimize="isMinimizedSidebar"
        @update:show="(value) => setSidebarShow(value)">
        <div class="sidebar-top-margin"></div>
        <CSidebarNav>
          <CSidebarNavItem
            v-for="navLink in navLinks"
            :key="navLink.name"
            :name="navLink.name"
            :to="navLink.to"
            :icon="navLink.icon"
            :badge="navLink.badge"
            :attributes="navLink.attributes"
            @click.native="navLinkClicked(navLink)"/>
        </CSidebarNav>
        <CSidebarMinimizer @click.native="toggleSidebarMinimization"></CSidebarMinimizer>
      </CSidebar>
      <CWrapper>
        <div class="c-body">
          <main class="c-main">
            <CContainer fluid>
<!--              <transition name="fade">-->
                <router-view :navLinkClickedMessage="navLinkClickedMessage"></router-view>
<!--              </transition>-->
            </CContainer>
            <div class="body-footer"></div>
          </main>
        </div>
      </CWrapper>
    </div>
  </div>
</template>

<script>
  import DropdownAccount from '../organisms/DropdownAccount.vue';
  import DropdownRegisterMenus from "../organisms/DropdownCreateMenus";
  import LogoutWatchMiddleware from "../middlewares/LogoutWatchMiddleware";
  export default {
    name: "UserPage",
    components: {
      LogoutWatchMiddleware,
      DropdownAccount,
      DropdownRegisterMenus
    },
    data() {
      return {
        controller: this.getProvider().provide('controller/userPage'),
        navLinks: [],
        isMinimizedSidebar: false,
        sidebarShow: 'responsive',
        navLinkClickedMessage: {
          name: '',
          time: 0
        }
      }
    },
    created() {
      this.controller.syncLoginUser();
    },
    methods: {
      toggleSidebarDesktop () {
        this.sidebarShow = [true, 'responsive'].includes(this.sidebarShow) ? false : 'responsive';
      },
      toggleSidebarMobile () {
        this.sidebarShow = [false, 'responsive'].includes(this.sidebarShow) ? true : 'responsive';
      },
      setSidebarShow (value) {
        this.sidebarShow = value;
      },
      toggleSidebarMinimization() {
        this.isMinimizedSidebar = !this.isMinimizedSidebar;
      },
      navLinkClicked(navLink) {
        this.debug('navLinkClicked is called.', navLink);
        this.navLinkClickedMessage = {
          name: navLink.name,
          time: new Date().getTime()
        };
      }
    },
    watch: {
      $route: {
        handler() {
          this.navLinks = this.controller.getNavLinks();
        },
        immediate: true
      }
    }
  }
</script>

<style lang="scss">
  .header-logo {
    color: #20a8d8;
    font-size: 17px;
  }
  .add-button {
    font-size: 24px;
    color: #5d5d5d;
    cursor: pointer;
  }
  .c-header.c-header-fixed {
    z-index: 1040;
  }
  .sidebar-top-margin {
    height: 55px;
  }
  .c-body {
    margin-top: 55px;
  }
  .c-sidebar-nav-link {
    transition: none;
  }
  .c-sidebar-minimized.app-sidebar .c-sidebar-nav-link:hover,
  .c-sidebar-minimized.app-sidebar .c-sidebar-nav-dropdown-toggle:hover,
  .c-sidebar-minimized.app-sidebar .c-sidebar-nav-dropdown-toggle:hover {
    width: 100%;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
</style>