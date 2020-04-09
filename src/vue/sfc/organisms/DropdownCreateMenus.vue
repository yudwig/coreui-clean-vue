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
  import {DropdownCreateMenusController} from "../../../modules/controllers/DropdownCreateMenusController";
  import {CIcon} from '@coreui/icons-vue';
  library.add(fas, far);

  const controller = new DropdownCreateMenusController();
  export default {
    name: "DropdownAccount",
    components: {
      FontAwesomeIcon,
      CIcon
    },
    methods: {
      openItemCreatePage: () => controller.openItemCreatePage()
    }
  }
</script>

<style scoped lang="scss">
</style>
