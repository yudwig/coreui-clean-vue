import {CoreUiNavLinksPresenter} from "../../src/modules/presenters/UserPage/NavLinks/CoreUiNavLinksPresenter";
import {UrlRepository} from "../../src/modules/repositories/Url/UrlRepository";
import {MockUrlDriver} from "../../src/modules/drivers/Url/MockUrlDriver";
import {UrlTranslator} from "../../src/modules/translaters/Url/UrlTranslator";
import {UrlGateway} from "../../src/modules/gateways/Url/UrlGateway";
import {UrlFactory} from "../../src/modules/factories/Url/UrlFactory";
import {RouteRepository} from "../../src/modules/repositories/Route/RouteRepository";

const urlTranslator = new UrlTranslator(
  new UrlGateway(),
  new UrlFactory()
);

const urlDriver = new MockUrlDriver();
urlDriver.write('http://localhost:3000/items?asdf=w&a&w=1&i=&=5');

const urlRepository = new UrlRepository(urlDriver, urlTranslator);
const routeRepository = new RouteRepository();
const presenter = new CoreUiNavLinksPresenter(
  urlRepository,
  routeRepository
);

test('normal test', () => {

  const presentation = presenter.format();
  console.log(presentation);
  expect(presentation.items).toBeTruthy();
});

