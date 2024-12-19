<template>
  <h1>{{ name }}</h1>
  <input type="text" v-model="name">
  <button @click="placeOrder">Place order</button>
  <YummyMeal name="🍔" price="4" @addToCart="addItemToCart" />
</template>

<script>
import { ref } from 'vue';
import YummyMeal from './components/YummyMeal.vue';

  export default {
    components: { YummyMeal },
    setup() {
      const name = ref("The Snazzy Burger");
      name.value = 'Hello from the setup function';
      console.log('in seteup', '--name.value--', name.value);
      const placeOrder = () => console.log('Your order has been placed!');
      const addItemToCart = (item) => console.log(`One ${item} added to cart`);
      return { name, placeOrder, addItemToCart };
    },
    created() {
      this.name = 'Hello from the created hook';
      console.log('in created', '--this.name--', this.name)
    }
  }
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
