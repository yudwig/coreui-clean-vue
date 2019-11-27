<template>
  <div class="item-list">
    <div class="list-header">
      <header>
        header
      </header>
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
          }
        ]
      }
    }

  }
</script>

<style scoped>
  .list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    column-gap: 10px;
    row-gap: 10px;
  }
</style>
