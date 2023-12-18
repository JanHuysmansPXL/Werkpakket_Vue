<script>
import { useProductsStore } from '@/stores/productsStore.js';
import { useCartStore } from '@/stores/cartStore.js';

    export default {
        data() {
            return {
                cartSubheading: 'Shopping Cart',
                removeButtonText: 'Remove',
                productsStore: useProductsStore(),
                cartStore: useCartStore(),
            }
        },
        components: {
        
        },
        props: {
          
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
    }
</script>

<template>
    <section class="cart">
        <h2 class="txt-heading_md" >{{ cartSubheading}}</h2>
        <ul>
          <li v-for="item in cartItems" :key="item.id">
            <span class="txt-body_md" >{{ item.title }} - Quantity: {{ item.quantity }}</span>
            <span class="txt-body_md">Price: €{{ item.price * item.quantity }}</span>
            <button class="quantitybutton" @click="updateQuantity(item.id, item.quantity - 1)">-</button>
            <button class="quantitybutton" @click="updateQuantity(item.id, item.quantity + 1)">+</button>
            <button class="remove-item-button" @click="removeFromCart(item.id)">{{ removeButtonText }}</button>
          </li>
        </ul>
        <p class="txt-body_md">Total Amount: €{{ totalAmount }}</p>
        <button class="clear-cart-button" @click="clearCart">Clear Cart</button>
    </section>
</template>

<style scoped>
</style>