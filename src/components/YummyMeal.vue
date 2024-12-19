<template>
    <p>
        <strong>{{ name }}</strong>
        {{ pricePretty }}
        <button @click="addToCart">Add to cart</button>
    </p>

</template>

<script>
    export default {
        props: {
            name: String,
            price: Number
        },
        setup(props, { emit }) {
            const addToCart = () => emit('addToCart', props.name);
            return { addToCart }
        },
        computed: {
            pricePretty() {
                return `$${this.price.toFixed(2)}`
            }
        }
    }
</script>