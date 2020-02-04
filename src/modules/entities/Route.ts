export class Route {
    readonly name;
    readonly path;

    constructor(name: string, path: string) {
        this.name = name;
        this.path = path;
    }
}