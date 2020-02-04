import {Url} from "../src/modules/entities/Url";

test('no param', () => {
  expect(new Url('items', {}).toString()).toBe('items');
});

test('include one param', () => {
  expect(new Url('items', {id: 3}).toString()).toBe( 'items?id=3');
});

test('include two params', () => {
  expect(new Url('items', {id: 3, date: '2020-01-01'}).toString())
      .toBe( 'items?id=3&date=2020-01-01');
});


