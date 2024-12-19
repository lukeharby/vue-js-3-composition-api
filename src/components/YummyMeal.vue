<template>
    <p>
        <strong>{{ name }}</strong>
        <input type="text" v-model="pricePretty">
        <button @click="addToCart">Add to cart</button>
    </p>

</template>

<script>
import { computed } from 'vue';

    export default {
        props: {
            name: String,
            price: Number
        },
        setup(props, { emit }) {
            const addToCart = () => emit('addToCart', props.name);
            const pricePretty = computed({
                get() {
                    return `$${props.price.toFixed(2)}`;
                },
                set(price) {
                    console.log(`Sorry, we cannot accept ${price}. Nice try though`)
                }
            });
            return { addToCart, pricePretty }
        }
    }
</script>