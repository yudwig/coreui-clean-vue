import Vue from 'vue';
import VueRouter from 'vue-router';

// Pages
import Dashboard from '../../vm/pages/Dashboard.vue';
import ItemList from '../../vm/pages/ItemList/ItemList';
import ItemDetail from '../../vm/components/ItemDetail';
import AppContainer from '../../vm/components/AppContainer';

import Todo from '../../vm/pages/Todo.vue';
import Login from '../../vm/pages/Login.vue';
import Error404 from '../../vm/pages/Error404.vue';
import Error500 from '../../vm/pages/Error500.vue';

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
      {
        path: 'item/:id',
        component: ItemDetail
      },
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
export default new VueRouter({
  mode:   'history',
  routes: routes
});

