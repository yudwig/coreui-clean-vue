export class HttpRequest {
    readonly data;
    readonly url;
    constructor(request: {
        data: object,
        url: string
    }) {
        this.data = request.data;
        this.url = request.url;
    }
}