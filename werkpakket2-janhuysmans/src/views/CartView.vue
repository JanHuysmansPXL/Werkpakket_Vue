<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import CartComponent from '../components/CartComponent.vue';
import { useProductsStore } from '@/stores/productsStore.js';
import { useCartStore } from '@/stores/cartStore.js';

export default {
  components: {
    HeaderComponent,
    CartComponent,
  },

  data() {
    return {
      cartHeading: 'Cart',
      detailButtonText: 'details',
      productsStore: useProductsStore(),
      cartStore: useCartStore(),
    };
  },

  computed: {
    products() {
      return this.productsStore.products;
    },

    cartItems() {
      return this.cartStore.cartItems;
    },

    totalAmount() {
      return this.cartStore.totalAmount;
    },
  },

  methods: {
    addToCart(product) {
      this.cartStore.addToCart(product);
    },

    removeFromCart(productId) {
      this.cartStore.removeFromCart(productId);
    },

    updateQuantity(productId, newQuantity) {
      this.cartStore.updateQuantity(productId, newQuantity);
    },

    clearCart() {
      this.cartStore.clearCart();
    },
  },
};
</script>

<template>

  <div class="bg-darkest container-fluid pt-xl mx-xxl">
    <header>
      <h1 class="txt-heading_lg txt-black">{{ cartHeading }}</h1>
    </header>

   <CartComponent/>

  </div>
</template>

<style>
</style>