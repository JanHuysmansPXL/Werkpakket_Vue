<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import CartComponent from '@/components/CartComponent.vue';
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
      cart: useCartStore(),
    };
  },

  computed: {
    products() {
      return this.productsStore.products;
    },

    cartItems() {
      return this.cart.cartItems;
    },

    totalAmount() {
      return this.cart.totalAmount;
    },
  },

  methods: {
    addToCart(product) {
      this.cart.addToCart(product);
    },

    removeFromCart(productId) {
      this.cart.removeFromCart(productId);
    },

    updateQuantity(productId, newQuantity) {
      this.cart.updateQuantity(productId, newQuantity);
    },

    clearCart() {
      this.cart.clearCart();
    },
  },
};
</script>

<template>

  <div class="bg-darkest container-fluid pt-xl pb-xl mx-xxl">
    <header>
      <h1 class="txt-heading_lg txt-black">{{ cartHeading }}</h1>
    </header>

   <CartComponent/>

  </div>
</template>

<style>
</style>