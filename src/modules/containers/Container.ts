import * as barrel from "./ModulesBarrel";
import {ContainerMap} from "./ContainerMap";

export const Container: ContainerMap = {
  common: {
    support: {
      module: barrel.ModuleSupport,
      args: {
        loggingService: new barrel.LoggingService({
          logRepository: new barrel.ConsoleLogRepository()
        })
      }
    }
  },
  controller: {
    dropdownAccount: {
      module: barrel.DropdownAccountController,
      args: {
        deauthenticateUserUseCase: 'usecase/dropdownAccount/deauthenticate',
        userAccountPresenter: 'presenter/dropdownAccount/userAccount'
      }
    },
    dropdownCreateMenus: {
      module: barrel.DropdownCreateMenusController,
      args: {
        openItemCreatePageUseCase: 'usecase/dropdownAccount/openItemCreatePage'
      }
    },
    itemCreate: {
      module: barrel.ItemCreateController,
      args: {
        createItemUseCase: 'usecase/itemCreate/createItem',
        initItemCreateStatesUseCase: 'usecase/itemCreate/initItemCreateStates',
        resultStatusPresenter: 'presenter/itemCreate/itemCreateMessage',
      }
    },
    itemDetail: {
      module: barrel.ItemDetailController,
      args: {
        findItemUseCase: 'usecase/itemDetail/findDetailItem',
        openDeleteResultPageUseCase: 'usecase/itemDetail/openDeleteResultPage',
        itemPresenter: 'presenter/itemDetail/item',
      }
    },
    itemEdit: {
      module: barrel.ItemEditController,
      args: {
        findItemUseCase: 'usecase/itemEdit/findEditItem',
        updateItemUseCase: 'usecase/itemEdit/updateItem',
        itemEditStatusPresenter: 'presenter/itemEdit/itemEditMessage' ,
        itemPresenter: 'presenter/itemEdit/item'
      }
    },
    itemList: {
      module: barrel.ItemListController,
      args: {
        searchItemsUseCase: 'usecase/itemList/searchItems',
        openItemDetailUseCase: 'usecase/itemList/openItemDetail',
        closeItemDetailUseCase: 'usecase/itemList/closeItemDetail',
        initItemListStateUseCase: 'usecase/itemList/initItemListState',
        syncUrlToStateUseCase: 'usecase/itemList/syncUrlToState',
        openedItemPresenter: 'presenter/itemList/openedItem',
        itemsPresenter: 'presenter/itemList/items',
        itemListMessagePresenter: 'presenter/itemList/itemListMessage'
      }
    },
    itemMenu: {
      module: barrel.ItemMenuController,
      args: {
        deleteItemUseCase: 'usecase/itemMenu/deleteItem',
        openItemEditPageUseCase: 'usecase/itemMenu/openItemEditPage',
      }
    },
    login: {
      module: barrel.LoginController,
      args: {
        openUserTopPageUseCase: 'usecase/login/openTopPage',
        authenticateUseCase: 'usecase/login/authenticate',
        loginErrorMessagePresenter: 'presenter/login/loginErrorMessage'
      }
    },
    userPage: {
      module: barrel.UserPageController,
      args: {
        syncLoginUserUseCase: 'usecase/userPage/syncLoginUser',
        navLinksPresenter: 'presenter/userPage/navLinks'
      }
    }
  },
  driver: {
    cookie: {
      module: barrel.JsCookie
    },
    storage: {
      document: {
        cookie: {
          module: barrel.CookieDocumentStorage,
          args: {
            cookie: 'driver/cookie'
          }
        }
      },
      globalString: {
        cookie: {
          module: barrel.CookieStringStorage
        }
      },
      query: {
        web: {
          module: barrel.WebQueryStorage,
          args: {
            storage: 'driver/webStorage/session'
          }
        }
      }
    },
    url: {
      module: barrel.HistoryUrlDriver
    },
    router: {
      module: barrel.VueRouterDriver
    },
    webStorage: {
      session: {
        module: barrel.SessionStorage
      }
    }
  },
  factory: {
    authToken: {
      module: barrel.AuthTokenFactory
    },
    item: {
      module: barrel.ItemFactory
    },
    itemCreateQuery: {
      module: barrel.ItemCreateQueryFactory,
    },
    url: {
      module: barrel.UrlFactory
    },
    user: {
      module: barrel.UserFactory
    },
    userAccount: {
      module: barrel.UserAccountFactory
    },
    userGroup: {
      module: barrel.UserGroupFactory
    }
  },
  gateway: {
    authToken: {
      module: barrel.AuthTokenGateway
    },
    item: {
      module: barrel.ItemGateway,
      args: {
        urlTranslator: 'translator/url'
      }
    },
    url: {
      module: barrel.UrlGateway
    },
    user: {
      module: barrel.UserGateway
    },
    userAccount: {
      module: barrel.UserAccountGateway
    },
    userGroup: {
      module: barrel.UserGroupGateway
    }
  },
  middleware: {
    auth: {
      module: barrel.AuthMiddleware,
      args: {
        userAuthState: 'state/userAuth',
        urlRepository: 'repository/url',
        routeRepository: 'repository/route'
      }
    }
  },
  presenter: {
    dropdownAccount: {
      userAccount: {
        module: barrel.UserAccountPresenter,
        args: {
          userAuthState: 'state/userAuth'
        }
      }
    },
    itemCreate: {
      itemCreateMessage: {
        module: barrel.ItemCreateMessagePresenter,
        args: {
          itemCreateState: 'state/itemCreate'
        }
      }
    },
    itemDetail: {
      item: {
        module: barrel.DetailItemPresenter,
        args: {
          itemDetailState: 'state/itemDetail'
        }
      }
    },
    itemEdit: {
      item: {
        module: barrel.EditItemPresenter,
        args: {
          itemEditState: 'state/itemEdit'
        }
      },
      itemEditMessage: {
        module: barrel.ItemEditMessagePresenter,
        args: {
          itemEditState: 'state/itemEdit'
        }
      }
    },
    itemList: {
      itemListMessage: {
        module: barrel.ItemListMessagePresenter,
        args: {
          itemListState: 'state/itemList'
        }
      },
      items: {
        module: barrel.ItemsPresenter,
        args: {
          itemListState: 'state/itemList'
        }
      },
      openedItem: {
        module: barrel.OpenedItemPresenter,
        args: {
          itemListState: 'state/itemList'
        }
      }
    },
    itemMenu: {
      itemMenuMessage: {
        module: barrel.ItemMenuMessagePresenter,
        args: {
          itemMenuState: 'state/itemMenu'
        }
      }
    },
    login: {
      loginErrorMessage: {
        module: barrel.LoginErrorMessagePresenter,
        args: {
          userAuthState: 'state/userAuth'
        }
      }
    },
    userPage: {
      navLinks: {
        module: barrel.CoreUiNavLinksPresenter,
        args: {
          urlRepository: 'repository/url',
          routeRepository: 'repository/route',
        }
      }
    }
  },
  repository: {
    authentication: {
      module: barrel.MockAuthenticationRepository,
      args: {
        storageDriver: 'driver/storage/document/cookie'
      }
    },
    item: {
      module: barrel.MockItemRepository,
      args: {
        storage: 'driver/storage/query/web',
        itemTranslator: 'translator/item',
        itemsTranslator: 'translator/items'
      }
    },
    log: {
      module: barrel.ConsoleLogRepository
    },
    route: {
      module: barrel.RouteRepository
    },
    searchItemsQuery: {
      module: barrel.MockGetItemsQueryRepository
    },
    url: {
      module: barrel.UrlRepository,
      args: {
        urlDriver: 'driver/url',
        routerDriver: 'driver/router',
        urlTranslator: 'translator/url',
      }
    },
    user: {
      module: barrel.MockUserRepository,
    }
  },
  serializer: {
    json: {
      module: barrel.JsonSerializer
    }
  },
  service: {
    logging: {
      module: barrel.LoggingService,
      args: {
        logRepository: 'repository/log'
      }
    }
  },
  state: {
    itemCreate: {
      module: barrel.VuexItemCreateViewStateAdapter
    },
    itemDetail: {
      module: barrel.VuexItemDetailViewStateAdapter
    },
    itemEdit: {
      module: barrel.VuexItemEditViewStateAdapter
    },
    itemList: {
      module: barrel.VuexItemListViewStateAdapter
    },
    itemMenu: {
      module: barrel.VuexItemMenuStateAdapter
    },
    userAuth: {
      module: barrel.VuexUserAuthStateAdaptor
    }
  },
  translator: {
    item: {
      module: barrel.ItemTranslator,
      args: {
        gateway: 'gateway/item',
        factory: 'factory/item'
      }
    },
    itemCreateQuery: {
      module: barrel.ItemCreateQueryTranslator,
      args: {
        gateway: 'gateway/item',
        factory: 'factory/itemCreateQuery'
      }
    },
    items: {
      module: barrel.ItemsTranslator,
      args: {
        itemTranslator: 'translator/item'
      }
    },
    url: {
      module: barrel.UrlTranslator,
      args: {
        gateway: 'gateway/url',
        factory: 'factory/url'
      }
    },
    user: {
      module: barrel.UserTranslator,
      args: {
        userGroupGateway: 'gateway/userGroup',
        userGateway: 'gateway/user',
        userGroupFactory: 'factory/userGroup',
        userFactory: 'factory/user'
      }
    },
    userAccount: {
      module: barrel.UserAccountTranslator,
      args: {
        userAccountFactory: 'factory/userAccount',
        userAccountGateway: 'gateway/userAccount'
      }
    }
  },
  usecase: {
    dropdownAccount: {
      deauthenticate: {
        module: barrel.DeauthenticateUserInteractor,
        args: {
          userAuthState: 'state/userAuth',
          authenticationRepository: 'repository/authentication'
        }
      },
      openItemCreatePage: {
        module: barrel.OpenItemCreatePageInteractor,
        args: {
          urlRepository: 'repository/url',
          routeRepository: 'repository/route'
        }
      }
    },
    itemCreate: {
      createItem: {
        module: barrel.CreateItemAndTransitionInteractor,
        args: {
          itemRepository: 'repository/item',
          itemCreateQueryTranslator: 'translator/itemCreateQuery',
          routeRepository: 'repository/route',
          urlRepository: 'repository/url',
          itemCreateState: 'state/itemCreate'
        }
      },
      initItemCreateStates: {
        module: barrel.InitItemCreateStatesInteractor,
        args: {
          itemCreateState: 'state/itemCreate'
        }
      }
    },
    itemDetail: {
      findDetailItem: {
        module: barrel.FindDetailItemInteractor,
        args: {
          itemRepository: 'repository/item',
          itemDetailState: 'state/itemDetail',
          itemGateway: 'gateway/item'
        }
      },
      openDeleteResultPage: {
        module: barrel.PushOpenDeleteResultPageInteractor,
        args: {
          urlRepository: 'repository/url',
          routeRepository: 'repository/route'
        }
      }
    },
    itemEdit: {
      findEditItem: {
        module: barrel.FindEditItemInteractor,
        args: {
          itemGateway: 'gateway/item',
          itemRepository: 'repository/item',
          itemEditState: 'state/itemEdit'
        }
      },
      updateItem: {
        module: barrel.UpdateItemInteractor,
        args: {
          itemEditState: 'state/itemEdit',
          itemGateway: 'gateway/item',
          itemFactory: 'factory/item',
          itemRepository: 'repository/item',
          routeRepository: 'repository/route',
          urlRepository: 'repository/url'
        }
      }
    },
    itemList: {
      closeItemDetail: {
        module: barrel.BackCloseItemDetailInteractor,
        args: {
          itemListState: 'state/itemList',
          urlRepository: 'repository/url'
        }
      },
      createSearchItemsQuery: {
        module: barrel.CreateSearchItemsQueryInteractor,
        args: {
          searchItemsQueryRepository: 'repository/searchItemsQuery'
        }
      },
      initItemListState: {
        module: barrel.InitItemListStateInteractor,
        args: {
          itemListState: 'state/itemList'
        }
      },
      openItemDetail: {
        module: barrel.OpenItemDetailInteractor,
        args: {
          itemGateway: 'gateway/item',
          itemListState: 'state/itemList',
          itemRepository: 'repository/item',
          routeRepository: 'repository/route',
          urlRepository: 'repository/url'
        }
      },
      searchItems: {
        module: barrel.MockSearchItemsInteractor,
        args: {
          itemRepository: 'repository/item',
          searchItemsQueryRepository: 'repository/searchItemsQuery',
          itemListState: 'state/itemList'
        }
      },
      syncUrlToState: {
        module: barrel.SyncUrlToStateInteractor,
        args: {
          urlRepository: 'repository/url',
          itemListState: 'state/itemList'
        }
      }
    },
    itemMenu: {
      deleteItem: {
        module: barrel.DeleteItemInteractor,
        args: {
          itemGateway: 'gateway/item',
          itemRepository: 'repository/item',
          itemMenuState: 'state/itemMenu',
        }
      },
      openItemEditPage: {
        module: barrel.PushOpenItemEditPageInteractor,
        args: {
          routeRepository: 'repository/route',
          urlRepository: 'repository/url'
        }
      }
    },
    login: {
      authenticate: {
        module: barrel.AuthenticateFromSessionCookieInteractor,
        args: {
          authState: 'state/userAuth',
          userAccountTranslator: 'translator/userAccount',
          authenticationRepository: 'repository/authentication',
          userRepository: 'repository/user'
        }
      },
      openTopPage: {
        module: barrel.ReplaceOpenDashboardPageInteractor,
        args: {
          urlRepository: 'repository/url',
          routeRepository: 'repository/route'
        }
      }
    },
    userPage: {
      syncLoginUser: {
        module: barrel.SyncLoginUserInteractor,
        args: {
          userRepository: 'repository/user',
          userAuthState: 'state/userAuth'
        }
      }
    }
  }
};

