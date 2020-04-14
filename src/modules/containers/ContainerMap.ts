import {ContainerModule as module} from "./ContainerModule";

export interface ContainerMap {
  common: {
    support: module
  },
  controller: {
    dropdownAccount: module,
    dropdownCreateMenus: module,
    itemCreate: module,
    itemDetail: module,
    itemEdit: module,
    itemList: module,
    itemMenu: module,
    login: module,
    userPage: module
  },
  driver: {
    cookie: module,
    storage: {
      document: {
        cookie: module
      },
      globalString: {
        cookie: module
      },
      query: {
        web: module
      }
    },
    url: module,
    router: module,
    webStorage: {
      session: module
    }
  },
  factory: {
    authToken: module,
    item: module,
    itemCreateQuery: module,
    url: module,
    user: module,
    userAccount: module,
    userGroup: module
  },
  gateway: {
    authToken: module,
    item: module,
    url: module,
    user: module,
    userAccount: module,
    userGroup: module
  },
  middleware: {
    auth: module
  },
  presenter: {
    dropdownAccount: {
      userAccount: module
    },
    itemCreate: {
      itemCreateMessage: module
    },
    itemDetail: {
      item: module
    },
    itemEdit: {
      item: module,
      itemEditMessage: module
    },
    itemList: {
      itemListMessage: module,
      items: module,
      openedItem: module
    },
    itemMenu: {
      itemMenuMessage: module
    },
    login: {
      loginErrorMessage: module
    }
    userPage: {
      navLinks: module
    }
  },
  repository: {
    authentication: module,
    item: module,
    log: module,
    route: module,
    searchItemsQuery: module,
    url: module
    user: module
  },
  serializer: {
    json: module
  },
  service: {
    logging: module
  },
  translator: {
    item: module,
    itemCreateQuery: module,
    items: module,
    url: module,
    user: module,
    userAccount: module
  },
  state: {
    itemCreate: module,
    itemDetail: module,
    itemEdit: module,
    itemList: module,
    itemMenu: module,
    userAuth: module
  },
  usecase: {
    dropdownAccount: {
      deauthenticate: module,
      openItemCreatePage: module
    },
    itemCreate: {
      createItem: module,
      initItemCreateStates: module
    },
    itemDetail: {
      findDetailItem: module,
      openDeleteResultPage: module
    },
    itemEdit: {
      findEditItem: module,
      updateItem: module
    },
    itemList: {
      closeItemDetail: module,
      createSearchItemsQuery: module,
      initItemListState: module,
      openItemDetail: module,
      searchItems: module,
      syncUrlToState: module
    },
    itemMenu: {
      deleteItem: module,
      openItemEditPage: module
    },
    login: {
      authenticate: module,
      openTopPage: module
    },
    userPage: {
      syncLoginUser: module
    }
  }
}
