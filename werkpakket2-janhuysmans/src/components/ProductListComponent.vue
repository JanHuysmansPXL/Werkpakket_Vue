<script>
  import ProductCardComponent from '@/components/ProductCardComponent.vue';
  import productsData from '@/assets/products.json'; // Pad naar je JSON-bestand
  import { useProductsStore } from '@/stores/productsStore.js';

    export default {
        data() {
            return {
                products: [],
                orderButtonText: "Order now",
                store: useProductsStore(),
            }
        },
        components: {
            ProductCardComponent
        },
        props: {
          
        },
        mounted() {
         // Laad producten wanneer de component is gemonteerd
          this.loadProducts();
              },
        methods: {
            loadProducts() {
      // Simuleer het laden van producten uit een JSON-bestand
      this.products = productsData;
    },
        }
    }
</script>

<template>
    <ProductCardComponent v-for="product in products" :key="product.id" :product="product" />
</template>

<!-- v-for="product in products" -->
