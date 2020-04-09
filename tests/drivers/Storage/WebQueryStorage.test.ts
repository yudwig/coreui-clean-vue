import {MockWebStorage} from "../../../src/modules/drivers/WebStorage/MockWebStorage";
import {WebQueryStorage} from "../../../src/modules/drivers/Storage/QueryStorage/WebQueryStorage";
import {StorageQueryBuilder} from "../../../src/modules/queries/Storage/StorageQueryBuilder";

function createMockStorage(data) {
  const mock = new MockWebStorage();
  const storage = new WebQueryStorage(mock);
  data.items.forEach(item => {
    storage.create('items', item);
  });
  return storage;
}

const simpleTestData = {
  items: [
    {id: 1, name: 'item-1', price: 100},
    {id: 2, name: 'item-2', price: 200},
    {id: 3, name: 'item-3', price: 300},
    {id: 4, name: 'item-4', price: 400},
    {id: 5, name: 'item-5', price: 500},
    {id: 6, name: 'item-6', price: 600},
    {id: 7, name: 'item-7', price: 700},
  ]
};

const complexTestData = {
  items: [
    {id: 2, name: 'item-2', price: 200},
    {id: 3, name: 'item-3', price: 300},
    {id: 0, name: 'item-1', price: 100},
    {id: 3, name: 'item-4', price: 400},
    {id: 5, name: 'item-6', price: 600},
    {id: 6, name: 'item-7', price: 700},
    {id: 3, name: 'item-5', price: 500},
    {id: 9, name: 'item-7', price: 700},
    {id: 2, name: 'item-1', price: 100},
  ]
};

test('search some items', () => {
  const storage = createMockStorage(simpleTestData);
  const builder = new StorageQueryBuilder();
  const query = builder
    .selectFrom('items')
    .where(' id > 1 ', 'id <= 4')
    .where(' name = item-6 ')
    .build();

  const result = storage.search(query);
  expect(result.data.length === 4).toBeTruthy();
});

test('select all', () => {
  const storage = createMockStorage(simpleTestData);
  const builder = new StorageQueryBuilder();
  const query = builder
    .selectFrom('items')
    .all()
    .build();

  const result = storage.search(query);
  expect(result.data.length === 7).toBeTruthy();
});

test('delete one item', () => {
  const storage = createMockStorage(simpleTestData);
  const deleteQueryBuilder = new StorageQueryBuilder();
  const deleteQuery = deleteQueryBuilder
    .selectFrom('items')
    .where('price > 300', 'price <= 500')
    .build();

  storage.delete(deleteQuery);

  const searchQueryBuilder = new StorageQueryBuilder();
  const searchQuery = searchQueryBuilder
    .selectFrom('items')
    .all()
    .build();

  const result = storage.search(searchQuery);
  expect(result.data.length === 5).toBeTruthy();
});

test ('update one item', () => {
  const storage = createMockStorage(simpleTestData);
  const queryBuilder = new StorageQueryBuilder();
  const query = queryBuilder
    .selectFrom('items')
    .where('id = 1')
    .build();

  storage.update(query, {price: 9999});
  const result = storage.search(query);
  expect(result.data[0].price === 9999).toBeTruthy();
});

test ('isset true', () => {
  const storage = createMockStorage(simpleTestData);
  expect(storage.isset('items') === true).toBeTruthy();
});

test ('isset false', () => {
  const mock = new MockWebStorage();
  const storage = new WebQueryStorage(mock);
  expect(storage.isset('items') === false).toBeTruthy();
});

test ('not isset => result of search is equal to []', () => {

  const mock = new MockWebStorage();
  const storage = new WebQueryStorage(mock);

  const builder = new StorageQueryBuilder();
  const query = builder
    .selectFrom('items')
    .where(' id = 1 ')
    .build();

  const result = storage.search(query);
  expect(result.data.length === 0).toBeTruthy();
});

test('sort search', () => {
  const storage = createMockStorage(complexTestData);
  const builder = new StorageQueryBuilder();
  const query = builder
    .selectFrom('items')
    .all()
    .ascSort('id')
    .descSort('price')
    .build();
  const result = storage.search(query);
  expect(result.data.length === 9).toBeTruthy();
});

test('get max id row', () => {
  const storage = createMockStorage(complexTestData);
  const builder = new StorageQueryBuilder();
  const query = builder
    .selectFrom('items')
    .all()
    .descSort('id')
    .limit(1)
    .build();
  const result = storage.search(query);
  // console.log(result);
  expect(result.data.length == 1).toBeTruthy();
  expect(result.data[0].id == 9).toBeTruthy();
});

test('get min id row', () => {
  const storage = createMockStorage(complexTestData);
  const builder = new StorageQueryBuilder();
  const query = builder
    .selectFrom('items')
    .all()
    .ascSort('id')
    .limit(1)
    .build();
  const result = storage.search(query);
  // console.log(result);
  expect(result.data.length == 1).toBeTruthy();
  expect(result.data[0].id == 0).toBeTruthy();
});


