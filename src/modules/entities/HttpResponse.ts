export class HttpResponse {
    readonly data;
    readonly statusCode;
    readonly statusText;
    readonly headers;
    constructor(response: {
        data: object,
        statusCode: number,
        statusText: string,
        headers: object
    }) {
        this.data = response.data;
        this.statusCode = response.statusCode;
        this.statusText = response.statusText;
        this.headers = response.headers;
    }
}