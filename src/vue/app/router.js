import Vue from 'vue';
import VueRouter from 'vue-router';
import Dashboard from '../sfc/templates/DashboardTemplate';
import ItemList from '../sfc/templates/ItemListTemplate';
import ItemDetail from '../sfc/templates/ItemDetailTemplate';
import ItemEditTemplate from "../sfc/templates/ItemEditTemplate";
import ItemCreateTemplate from "../sfc/templates/ItemCreateTemplate";
import Login from '../sfc/templates/LoginTemplate';
import Error404 from '../sfc/pages/Error404Page';
import Error500 from '../sfc/pages/Error500Page';
import UserPage from "../sfc/pages/UserPage";

const routes = [
  {
    path: '/',
    redirect: '/dashboard',
    component: UserPage,
    children: [
      {
        path: 'dashboard',
        component: Dashboard
      },
      {
        path: 'items/:id',
        component: ItemDetail,
        props: route => ({id: route.params.id})
      },
      {
        path: 'items/:id/edit',
        component: ItemEditTemplate,
        props: route => ({id: route.params.id})
      },
      {
        path: 'items',
        component: ItemList
      },
      {
        path: 'create/item',
        component: ItemCreateTemplate
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
    redirect: '/dashboard'
  },
];

Vue.use(VueRouter);
export const router = new VueRouter({
  mode:   'history',
  routes: routes
});

