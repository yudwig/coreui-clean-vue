export interface RouterDriverInterface {
    push(path: string, params: Object);
    pop();
    replace(path: string, params: Object);
}
