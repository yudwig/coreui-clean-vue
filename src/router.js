import Vue from 'vue';
import VueRouter from 'vue-router';

// Pages
import Dashboard from './pages/Dashboard.vue';
import Page1 from './pages/Page1.vue';
import AppContainer from './containers/AppContainer';
import Todo from './pages/Todo.vue';
import Login from './pages/Login.vue';
import Error404 from './pages/errors/Error404.vue';
import Error500 from './pages/errors/Error500.vue';
import status from './store/status';

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
    component: Login,
    meta: {
      statusCode: status.unAuthorized
    }
  },
  {
    path: '/500',
    component: Error500,
    meta: {
      statusCode: status.internalServerError
    }
  },
  {
    path: '*',
    component: Error404,
    meta: {
      statusCode: status.notFound
    }
  },
];

Vue.use(VueRouter);
export default new VueRouter({
  mode:   'history',
  routes: routes
});

