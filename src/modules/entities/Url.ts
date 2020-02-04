export class Url {
    private readonly path: string;
    private readonly queries: Object;

    constructor(path: string, queries: Object) {
        this.path = path;
        this.queries = queries;
    }

    public toString(): string {
        if (Object.keys(this.queries).length === 0) {
            return this.path;
        }
        let params = Object.keys(this.queries).map(
            key => this.queries[key] ? (key + '=' + this.queries[key]) : key
        );
        return this.path + '?' + params.join('&')
    }
}