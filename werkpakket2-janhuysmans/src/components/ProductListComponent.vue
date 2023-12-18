<script>
  import ProductCardComponent from '@/components/ProductCardComponent.vue';
  import { useProductsStore } from '@/stores/productsStore.js';

    export default {
        data() {
            return {
                orderButtonText: "Order now",
                productsStore: useProductsStore(),
            }
        },
        components: {
            ProductCardComponent
        },
        props: {},
        mounted() {},
        methods: {

    },
 }
</script>

<template>
    <ProductCardComponent v-for="product in productsStore" :key="product.id" :product="product" />
</template>

<!-- v-for="product in products" -->
