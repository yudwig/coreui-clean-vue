// import {CreateItemAndTransitionInteractor} from "../../src/modules/usecases/ItemCreate/CreateItem/CreateItemAndTransitionInteractor";
// import {MockItemRepository} from "../../src/modules/repositories/Item/MockItemRepository";
// import {ItemCreateQueryTranslator} from "../../src/modules/translators/ItemCreateQuery/ItemCreateQueryTranslator";
// import {ItemGateway} from "../../src/modules/gateways/Item/ItemGateway";
// import {ItemCreateQueryFactory} from "../../src/modules/factories/ItemCreateQuery/ItemCreateQueryFactory";
// import {StorageQueryBuilder} from "../../src/modules/queries/Storage/StorageQueryBuilder";
// import {ItemSearchQuery} from "../../src/modules/queries/ItemList/ItemSearchQuery";
//
// const translator = new ItemCreateQueryTranslator(
//   new ItemGateway(),
//   new ItemCreateQueryFactory()
// );
//
// test('create item.', () => {
//   const repository = new MockItemRepository();
//   const interactor = new CreateItemAndTransitionInteractor(
//     repository, translator
//   );
//
//   const query = new ItemSearchQuery({
//     index: 0,
//     count: 50
//   });
//
//   interactor.handle({
//     title: 'test',
//     comment: 'asdf',
//     imageUrl: 'https://example.com'
//   });
//
//   const result = repository.search(query);
//   console.log(result);
// });