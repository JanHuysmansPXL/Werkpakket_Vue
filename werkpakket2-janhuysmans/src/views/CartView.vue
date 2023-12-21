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
      linkProductsText: 'Go To Products',
      emptyCartText: 'Shoot, your cart is empty',
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
    addToCart() {
    console.log('Adding to Cart:', this.product, this.quantity);
    this.cart.addToCart({ ...this.product, quantity: this.quantity });
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

<head>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">
    <!-- Link voor Google Fonts - RED HAT DISPLAY -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@100;200;300;400;500;700;900&display=swap" rel="stylesheet">
  </head> 

  <div class="bg-darkest container-fluid pt-xl pb-xl mx-xxl">

  <div class="container-fluid cartWrap">
    <CartComponent v-if="cartItems.length > 0" />
    <p class="txt-heading_md pt-xl pb-xl text-center" v-else>{{ emptyCartText }}.<br>
    <a class="cart-products-link"><router-link to="/products">{{ linkProductsText }}</router-link></a></p>
  </div>  

  </div>
</template>

<style>
.cartWrap {
  min-height: 80vh;
}

</style>