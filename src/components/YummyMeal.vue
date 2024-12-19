<template>
    <p>
        <strong>{{ name }}</strong>
    </p>
    <YummyMealPrice :price="price" />
    <input type="text" v-model="pricePretty">
    <button @click="addToCart">Add to cart</button>
</template>

<script>
import YummyMealPrice from './YummyMealPrice.vue';

    export default {
        props: {
            name: String,
            price: Number
        },
        components: { YummyMealPrice },
        setup(props, { emit }) {
            const addToCart = () => emit('addToCart', props.name);
            return { addToCart }
        }
    }
</script>