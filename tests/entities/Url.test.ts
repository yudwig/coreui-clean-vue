import {UrlTranslator} from "../../src/modules/translaters/Url/UrlTranslator";
import {UrlGateway} from "../../src/modules/gateways/Url/UrlGateway";
import {UrlFactory} from "../../src/modules/factories/Url/UrlFactory";

const translator = new UrlTranslator(
  new UrlGateway(),
  new UrlFactory()
);

test('include query url', () => {
  const port = {url: 'http://localhost:3000/user/test/items?asdf=w&a&w=1&i=&=5'};
  const url = translator.translate(port);
  expect(url.err).toBeNull();
});

test('not include query url', () => {
  const port = {url: 'http://localhost:3000/user/test/items'};
  const url = translator.translate(port);
  expect(url.err).toBeNull();
});

test('only include question', () => {
  const port = {url: 'http://localhost:3000/items?'};
  const url = translator.translate(port);
  expect(url.err).toBeNull();

});

test('include one directory', () => {
  const port = {url: 'http://localhost:3000/items'};
  const url = translator.translate(port);
  expect(url.data.directories.list.length === 1).toBeTruthy();
});

test('include two directories', () => {
  const port = {url: 'http://localhost:3000/items/test'};
  const url = translator.translate(port);
  expect(url.data.directories.list.length === 2).toBeTruthy();
});

test('not include directory', () => {
  const port = {url: 'http://localhost:3000'};
  const url = translator.translate(port);
  expect(url.data.directories.list.length === 0).toBeTruthy();
});

test('exclude last directory slash', () => {
  const port1 = {url: 'http://localhost:3000/items/test/'};
  const port2 = {url: 'http://localhost:3000/items/test'};
  const res1 = translator.translate(port1);
  const res2 = translator.translate(port2);
  expect(res1.data.path() === res2.data.path()).toBeTruthy();
});


