import {Route} from "../entities/Route";

export class RouteConfig {
    private routes = {
        dashboard: {
            name: 'Dashboard',
            path: '/dashboard',
        },
        itemList: {
            name: 'Item List',
            path: '/items/'
        },
        todoList: {
            name: 'Todo List',
            path: '/todo'
        },
        login: {
            name: 'Login',
            path: '/login'
        },
        error404: {
            name: '404 Error',
            path: '/404'
        },
        error500: {
            name: '500 Error',
            path: '/500'
        }
    };

    public get(token: string): Route {
        const route = this.routes[token];
        return new Route(route.name, route.path);
    }
}

