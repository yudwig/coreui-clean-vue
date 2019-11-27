<template>
  <div class="item-list">
    <div class="list-header">
      <header>total 50 items</header>
    </div>
    <div class="list">
      <Item v-for="item in items" v-bind:item="item"></Item>
    </div>
  </div>
</template>

<script>
  import Item from '../components/Item';
  export default {
    name: "ItemList",
    components: {
      Item
    },
    data() {
      return {
        items: [
          {
            title: 'A City Park',
            image_url: 'http://localhost:3000/images/1968.88 - A City Park.jpeg'
          },
          {
            title: 'Paris Street; Rainy Day',
            image_url: 'http://localhost:3000/images/1964.336 - Paris Street; Rainy Day.jpeg'
          },
          {
            title: 'Seascape',
            image_url: 'http://localhost:3000/images/1922.438 - Seascape.jpeg'
          },
          {
            title: 'The Bathers',
            image_url: 'http://localhost:3000/images/1942.457 - The Bathers.jpeg'
          },
          {
            title: 'Fruits of the Midi',
            image_url: 'http://localhost:3000/images/1933.1176 - Fruits of the Midi.jpeg'
          },

        ]
      }
    }

  }
</script>

<style scoped>
  .list {
    display: grid;
    /*grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));*/
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    /*grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));*/
    /*column-gap: 10px;*/
    column-gap: 20px;
    row-gap: 10px;
  }
  .list-header {
    height: 45px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: #2f353a;
  }
</style>
