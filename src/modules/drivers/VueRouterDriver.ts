import {RouterDriverInterface} from "./RouterDriverInterface";
import {router} from '../../vue/app/router';

export class VueRouterDriver implements RouterDriverInterface {
    pop() {
        router.go(-1);
        // history.back();
    }

    push(path: string, params: Object) {
        router.push({
            path: path,
            query: params
        });
    }

    replace(path: string, params: Object) {
        router.replace({
            path: path,
            query: params
        }).catch(() => {});
    }
}
