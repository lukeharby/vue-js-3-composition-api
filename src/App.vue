<template>
  <h1>{{ name }}</h1>
  <input type="text" v-model="name">
  <button @click="placeOrder">Place order</button>
  <YummyMeal :name="meal.name" :price="meal.price" @addToCart="addItemToCart" />
</template>

<script>
import { ref, reactive } from 'vue';
import YummyMeal from './components/YummyMeal.vue';

  export default {
    components: { YummyMeal },
    setup() {
      const name = ref("The Snazzy Burger");
      const meal = reactive({ name: "Hamburger", price: 4.99 })
      const placeOrder = () => console.log('Your order has been placed!');
      const addItemToCart = (item) => console.log(`One ${item} added to cart`);
      return { name, meal, placeOrder, addItemToCart };
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
