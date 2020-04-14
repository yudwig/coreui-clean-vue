<template>
  <CDropdown
    inNav
    class="c-header-nav-items"
    placement="bottom-end"
    add-menu-classes="pt-0">
    <template #toggler>
      <CHeaderNavLink>
        <div class="c-avatar">
          <img src="https://placekitten.com/32/32" class="c-avatar-img" alt="test"/>
        </div>
      </CHeaderNavLink>
    </template>
    <b-dropdown-text>
      <div class="dropdown-description profile-text">
        <div><strong>{{user.userName}}</strong></div>
        <div>{{user.userId}}</div>
        <div>{{user.userGroupName}}</div>
      </div>
    </b-dropdown-text>
    <CDropdownDivider></CDropdownDivider>
    <CDropdownItem>
      <font-awesome-icon :icon="['fas', 'user']"/>
      <span class="dropdown-text">Profile</span>
    </CDropdownItem>
    <CDropdownItem>
      <font-awesome-icon :icon="['fas', 'wrench']"/>
      <span class="dropdown-text">Settings</span>
    </CDropdownItem>
    <CDropdownItem @click="deauthenticate">
      <font-awesome-icon :icon="['fas', 'lock']"/>
      <span class="dropdown-text">Logout</span>
    </CDropdownItem>
  </CDropdown>
</template>

<script>
  import {library} from '@fortawesome/fontawesome-svg-core';
  import {fas} from '@fortawesome/free-solid-svg-icons';
  import {far} from '@fortawesome/free-regular-svg-icons';
  import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
  library.add(fas, far);

  export default {
    name: "DropdownAccount",
    data() {
      return {
        controller: this.getProvider().provide('controller/dropdownAccount')
      }
    },
    computed: {
      user() {
        return this.controller.getUserAccount();
      }
    },
    components: {
      FontAwesomeIcon,
    },
    methods: {
      deauthenticate() {
        return this.controller.deauthenticate();
      }
    }
  }
</script>

<style scoped lang="scss">
  .profile-text {
    margin-top: 10px;
  }
</style>

