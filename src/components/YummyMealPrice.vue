<template>
    <span>{{ pricePretty }}</span>
</template>

<script>
import { computed, ref, inject } from 'vue';

export default {
    props: {
        price: Number
    },
    setup(props) {
        const currencySymbol = inject('currencySymbol', ref('$'))
        const pricePretty = computed(
            () => `${currencySymbol.value}${props.price.toFixed(2)}`
        )
        return { pricePretty }
    }
}
</script>