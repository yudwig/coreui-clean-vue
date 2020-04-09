import { UrlTranslator } from "../../src/modules/translaters/Url/UrlTranslator";
import { UrlGateway } from "../../src/modules/gateways/Url/UrlGateway";
import { UrlFactory } from "../../src/modules/factories/Url/UrlFactory";
var translator = new UrlTranslator(new UrlGateway(), new UrlFactory());
test('include query url', function () {
    var port = { url: 'http://localhost:3000/user/test/items?asdf=w&a&w=1&i=&=5' };
    var url = translator.translate(port);
    expect(url.err).toBeNull();
});
test('not include query url', function () {
    var port = { url: 'http://localhost:3000/user/test/items' };
    var url = translator.translate(port);
    expect(url.err).toBeNull();
});
test('only include question', function () {
    var port = { url: 'http://localhost:3000/items?' };
    var url = translator.translate(port);
    expect(url.err).toBeNull();
});
test('include one directory', function () {
    var port = { url: 'http://localhost:3000/items' };
    var url = translator.translate(port);
    expect(url.data.directories.list.length === 1).toBeTruthy();
});
test('include two directories', function () {
    var port = { url: 'http://localhost:3000/items/test' };
    var url = translator.translate(port);
    expect(url.data.directories.list.length === 2).toBeTruthy();
});
test('not include directory', function () {
    var port = { url: 'http://localhost:3000' };
    var url = translator.translate(port);
    expect(url.data.directories.list.length === 0).toBeTruthy();
});
test('exclude last directory slash', function () {
    var port1 = { url: 'http://localhost:3000/items/test/' };
    var port2 = { url: 'http://localhost:3000/items/test' };
    var res1 = translator.translate(port1);
    var res2 = translator.translate(port2);
    expect(res1.data.path() === res2.data.path()).toBeTruthy();
});
//# sourceMappingURL=/meta/map/tests/entities/Url.test.js.map