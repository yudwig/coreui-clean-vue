import Vue from 'vue';
import VueRouter from 'vue-router';

// Pages
import Dashboard from './pages/Dashboard.vue';
import ItemList from './pages/ItemList';
import AppContainer from './containers/AppContainer';
import Todo from './pages/Todo.vue';
import Login from './pages/Login.vue';
import Error404 from './pages/errors/Error404.vue';
import Error500 from './pages/errors/Error500.vue';

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
        path: 'item',
        component: ItemList
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

