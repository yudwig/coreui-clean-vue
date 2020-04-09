import {UrlGateway} from "../../src/modules/gateways/Url/UrlGateway";

const gateway = new UrlGateway();

test('parse real url.', () => {
  const values = gateway.convert('http://localhost:3000/user/test/items?asdf=w&a&w=1&i=&=5');
  console.log('values: ', values.data);
});

