export class HttpResponse {
    readonly statusCode;
    readonly statusText;
    readonly headers;
    constructor(response: {
        statusCode: number,
        statusText: string,
        headers: object
    }) {
        this.statusCode = response.statusCode;
        this.statusText = response.statusText;
        this.headers = response.headers;
    }
}