<template>
  <h1>{{ name }}</h1>
  <p>
    <label for="currencySymbol">Currency</label>
    <select id="currencySymbol" v-model="currencySymbol">
      <option value="¥">Yen</option>
      <option value="£">Sterling</option>
      <option value="$">Dollars</option>
    </select>
  </p>
  <input type="text" v-model="name">
  <button @click="placeOrder">Place order</button>
  <button @click="removeWatcher">Hide cart alerts</button>
  <YummyMeal v-for="meal in meals" :name="meal.name" :price="meal.price" @addToCart="addItemToCart" />

</template>

<script>
import { ref, reactive, watch, provide } from 'vue';
import YummyMeal from './components/YummyMeal.vue';

  export default {
    components: { YummyMeal },
    setup() {
      const currencySymbol = ref('¥')
      provide('currencySymbol', currencySymbol);
      const name = ref("The Snazzy Burger");
      const cart = reactive([])
      const meals = reactive([
        { name: "Hamburger", price: 4.99 },
        { name: "Cheeseburger", price: 6 },
        { name: "Veggie burger", price: 6.50 },
        { name: "Fries", price: 2.10 }
      ])
      const placeOrder = () => console.log('Your order has been placed!');
      const addItemToCart = (item) => cart.push(item);
      const removeWatcher = watch(
        [() => [...cart]], 
        (newValue, oldValue) => alert(newValue.join('\n'))
      );
      return { 
        name,
        meals,
        placeOrder,
        addItemToCart,
        removeWatcher,
        currencySymbol
      };
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
