<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import ProductCardComponent from '@/components/ProductCardComponent.vue';
import { useProductsStore } from '@/stores/productsStore.js';
import { useCartStore } from '@/stores/cartStore.js';

export default {
  components: {
    HeaderComponent,
    ProductCardComponent,
  },

  data() {
    return {
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

  <div class="bg-lightest">
    <header>
      <h1>Cart</h1>
    </header>

    <main>

      <!--
      <section class="product-list">
        <div v-for="product in products" :key="product.id" class="product-card">
          <img :src="product.image" :alt="product.title">
          <div class="card-info">
            <h3>{{ product.title }}</h3>
            <p>Price: €{{ product.price }}</p>
            <button @click="addToCart(product)">Add to Cart</button>
          </div>
        </div>
      </section>
-->

      <section class="cart">
        <h2>Shopping Cart</h2>
        <ul>
          <li v-for="item in cartItems" :key="item.id">
            <span>{{ item.title }} - Quantity: {{ item.quantity }}</span>
            <span>Price: €{{ item.price * item.quantity }}</span>
            <button @click="updateQuantity(item.id, item.quantity - 1)">-</button>
            <button @click="updateQuantity(item.id, item.quantity + 1)">+</button>
            <button @click="removeFromCart(item.id)">Remove</button>
          </li>
        </ul>
        <p>Total Amount: €{{ totalAmount }}</p>
        <button @click="clearCart">Clear Cart</button>
      </section>
    </main>
  </div>
</template>

<style>
</style>