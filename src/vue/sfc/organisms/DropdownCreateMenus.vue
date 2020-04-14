<template>
  <CDropdown
    inNav
    class="c-header-nav-items"
    placement="bottom-end"
    add-menu-classes="pt-0">
    <template #toggler>
      <CHeaderNavLink>
        <CIcon name="cil-plus" size="lg"></CIcon>
      </CHeaderNavLink>
    </template>
    <div style="height: 8px"></div>
    <CDropdownItem @click="openItemCreatePage">
      <font-awesome-icon :icon="['fas', 'image']"/>
      <span class="dropdown-text">Item</span>
    </CDropdownItem>
  </CDropdown>
</template>

<script>
  import {library} from '@fortawesome/fontawesome-svg-core';
  import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
  import {fas} from '@fortawesome/free-solid-svg-icons';
  import {far} from '@fortawesome/free-regular-svg-icons'
  import {CIcon} from '@coreui/icons-vue';
  library.add(fas, far);

  export default {
    name: "DropdownAccount",
    components: {
      FontAwesomeIcon,
      CIcon
    },
    data() {
      return {
        controller: this.getProvider().provide('controller/dropdownCreateMenus')
      }
    },
    methods: {
      openItemCreatePage() {
        this.controller.openItemCreatePage();
      }
    }
  }
</script>

<style scoped lang="scss">
</style>
