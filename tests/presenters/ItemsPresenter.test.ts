import {ItemsPresenter} from "../../src/modules/presenters/ItemList/Items/ItemsPresenter";
import {VuexItemListViewStateAdapter} from "../../src/vue/states/VuexItemListViewStateAdapter";
import {MockItemRepository} from "../../src/modules/repositories/Item/MockItemRepository";

const repository = new MockItemRepository();
const items = repository.search({
  index: 0,
  count: 1
});

const state = new VuexItemListViewStateAdapter();
state.setItems(items.data);
const presenter = new ItemsPresenter(state);

test('test', () => {
  const res = presenter.format();
  expect(res.items.length === 1).toBeTruthy();
});