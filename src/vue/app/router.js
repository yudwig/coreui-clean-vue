import Vue from 'vue';
import VueRouter from 'vue-router';

// Pages
import Dashboard from '../sfc/templates/DashboardTemplate';
import ItemList from '../sfc/templates/ItemListTemplate';
import ItemDetail from '../sfc/organisms/ItemDetailOrganism';
import AppContainer from '../sfc/frames/ManagedUserNavigationFrame';

import Todo from '../sfc/pages/TodoPage';
import Login from '../sfc/templates/LoginTemplate';
import Error404 from '../sfc/pages/Error404Page';
import Error500 from '../sfc/pages/Error500Page';

const routes = [
  {
    path: '/',
    redirect: '/dashboard',
    component: AppContainer,
    children: [
      {
        path: 'dashboard',
        component: Dashboard
      },
      {
        path: 'items',
        component: ItemList
      },
      // {
      //   path: 'item/:id',
      //   component: ItemDetail
      // },
      {
        path: 'todo',
        component: Todo
      }
    ]
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/500',
    component: Error500,
  },
  {
    path: '*',
    component: Error404,
  },
];

Vue.use(VueRouter);
export const router = new VueRouter({
  mode:   'history',
  routes: routes
});

