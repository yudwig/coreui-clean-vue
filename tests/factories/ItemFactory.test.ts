// import {MockItem} from "../../mock/MockItem";
// import {ItemFactory} from "../../src/modules/factories/Item/ItemFactory";
// import {ItemGateway} from "../../src/modules/gateways/Item/ItemGateway";
// import {UrlTranslator} from "../../src/modules/translators/Url/UrlTranslator";
// import {UrlGateway} from "../../src/modules/gateways/Url/UrlGateway";
// import {UrlFactory} from "../../src/modules/factories/Url/UrlFactory";
// import {ModuleSupport} from "../../src/modules/supports/ModuleSupport";
// import {LoggingService} from "../../src/modules/services/Logging/LoggingService";
// import {ConsoleLogRepository} from "../../src/modules/repositories/Log/ConsoleLogRepository";
//
// const logRepository = new ConsoleLogRepository();
// const loggingService = new LoggingService({logRepository: logRepository});
//
// const factory = new ItemFactory();
// const gateway = new ItemGateway({
//   urlTranslator: new UrlTranslator({
//     gateway: new UrlGateway(),
//     factory: new UrlFactory(),
//   }),
//   support: new ModuleSupport({
//     loggingService: loggingService
//   })
// });
// const mock = new MockItem();
//
// test('update', () => {
//   const form = {
//     title: "title input",
//     comment: 'comment input',
//     imageUrl: 'https://example.com/'
//   };
//   const values = gateway.convert(form);
//   const merged = factory.merge(mock.item, values.data);
//   expect(merged.data.title.value).toEqual(form.title);
//   expect(merged.data.comment.value).toEqual(form.comment);
//   expect(merged.data.imageUrl.href.value).toEqual(form.imageUrl);
//
//   console.log(merged.data.updatedAt.value, mock.item.updatedAt.value);
//   expect(merged.data.id.value).toEqual(mock.item.id.value);
//   expect(merged.data.createdAt.value).toEqual(mock.item.createdAt.value);
//   expect(merged.data.updatedAt.value).toEqual(mock.item.updatedAt.value);
// });
