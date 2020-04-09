export enum RouteGroup {
  System,
  User
}

export class RouteConfig {
  readonly routes = [
    {
      name: 'dashboard',
      title: 'Dashboard',
      path: '/dashboard',
      group: RouteGroup.User,
      isShowNavLink: true
    },
    {
      name: 'itemList',
      title: 'Items',
      path: '/items',
      group: RouteGroup.User,
      isShowNavLink: true
    },
    {
      name: 'itemCreate',
      title: 'New Item',
      path: '/create/item',
      group: RouteGroup.User,
      isShowNavLink: false
    },
    {
      name: 'itemEdit',
      title: 'Item Edit',
      path: '/items/{id}/edit',
      group: RouteGroup.User,
      isShowNavLink: false
    },
    {
      name: 'itemDetail',
      title: 'Item Detail',
      path: '/items/{id}',
      group: RouteGroup.User,
      isShowNavLink: false
    },
    {
      name: 'login',
      title: 'Login',
      path: '/login',
      group: RouteGroup.System,
      isShowNavLink: false
    },
    {
      name: 'error404',
      title: '404 Error',
      path: '/404',
      group: RouteGroup.System,
      isShowNavLink: false
    },
    {
      name: 'error500',
      title: '500 Error',
      path: '/500',
      group: RouteGroup.System,
      isShowNavLink: false
    }
  ];
}

