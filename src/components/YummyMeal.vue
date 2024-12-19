<template>
    <p>
        <strong>{{ name }}</strong>
        <p>{{ pricePrettySentence }}</p>
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
            const pricePrettySentence = computed(
                () => `The price of this item is ${pricePretty.value}.`
            );
            return { addToCart, pricePretty, pricePrettySentence }
        }
    }
</script>