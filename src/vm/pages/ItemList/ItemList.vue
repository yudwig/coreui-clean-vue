<template>
  <div class="page-body item-list">
    <div class="list-container" v-if="!detailItem">
      <div class="list-header-container">
        <header>total 50 items</header>
      </div>
      <div class="list">
        <Item v-for="item in items" :item="item" @imageClicked="openDetail(item)"></Item>
      </div>
    </div>
    <div class="detail-container" v-if="detailItem">
      <ItemDetail :item="detailItem" @closeButtonClicked="closeDetail"></ItemDetail>
    </div>
  </div>
</template>

<script>
  import Item from '../../components/Item';
  import ItemDetail from "../../components/ItemDetail";
  export default {
    name: "ItemList",
    components: {
      Item,
      ItemDetail
    },
    data() {
      return {
        items: [
          {
            id: 1,
            title: 'A City Park',
            image_url: 'http://localhost:3000/images/1968.88 - A City Park.jpeg'
          },
          {
            id: 2,
            title: 'Paris Street; Rainy Day',
            image_url: 'http://localhost:3000/images/1964.336 - Paris Street; Rainy Day.jpeg'
          },
          {
            id: 3,
            title: 'Seascape',
            image_url: 'http://localhost:3000/images/1922.438 - Seascape.jpeg'
          },
          {
            id: 4,
            title: 'The Bathers',
            image_url: 'http://localhost:3000/images/1942.457 - The Bathers.jpeg'
          },
          {
            id: 5,
            title: 'Fruits of the Midi',
            image_url: 'http://localhost:3000/images/1933.1176 - Fruits of the Midi.jpeg'
          },
        ],
        detailItem: null
      }
    },
    methods: {
      openDetail(item) {
        this.detailItem = item;
        window.history.pushState(null, null, '/item/' + item.id);
      },
      closeDetail() {
        this.detailItem = null;
      }
    }
  }
</script>

<style scoped>
  .page-body {
    padding: 0;
  }
  .list-container {
    padding: 0 30px;
  }
  .list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    column-gap: 20px;
    row-gap: 20px;
  }
  .list-header-container {
    height: 45px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: #2f353a;
  }
</style>
