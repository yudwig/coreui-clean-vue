import Vue from 'vue';
import VueRouter from 'vue-router';

// Pages
import Dashboard from './pages/Dashboard.vue';
import Page1 from './pages/Page1.vue';
import Container from './containers/AppContainer';
import Todo from './pages/Todo.vue';
import Login from './pages/Login.vue';

const routes = [
  {
    path: '/',
    redirect: '/dashboard',
    component: Container,
    children: [
      {
        path: 'dashboard',
        component: Dashboard
      },
      {
        path: 'page1',
        component: Page1
      },
      {
        path: 'todo',
        component: Todo
      }
    ]
  },
  {
    path: '/login',
    component: Login
  }
];

Vue.use(VueRouter);
export default new VueRouter({
  mode:   'history',
  routes: routes
});

