<script>
import { useProductsStore } from '@/stores/productsStore.js';
import { useCartStore } from '@/stores/cartStore.js';

    export default {
        data() {
            return {
                cartSubheading: 'Shopping Cart',
                removeButtonText: 'Remove',
                clearCartButtonText: 'Clear cart',
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
            updateQuantity(productId, newQuantity, removeIfZero = false) {
            if (removeIfZero && newQuantity <= 0) {
            this.removeFromCart(productId);
             } else {
            this.cartStore.updateQuantity(productId, newQuantity);
                }
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
        <hr class="mb-lg">
        <ul>
          <li class="cart-item mt-xs mb-xs" v-for="item in cartItems" :key="item.id">
            <div class="cart-wrap">
                <div>
                <p class="txt-body_md">{{ item.title }}</p>
                <p class="txt-body_md">Quantity: {{ item.quantity }}</p>
                <p class="txt-body_md">Price: €{{ item.price * item.quantity }}</p>
                </div>
                <div>                
                    <button class="quantitybutton" @click="updateQuantity(item.id, item.quantity - 1, true)">-</button>
                    <button class="quantitybutton" @click="updateQuantity(item.id, item.quantity + 1)">+</button>
                    <button class="remove-item-button" @click="removeFromCart(item.id)">{{ removeButtonText }}</button></div>
                </div>  
          </li>
        </ul>
        <div class="pt-md">
            <hr>
            <p class="txt-body_md mt-sm">Total: €{{ totalAmount }}</p>
            <button class="clear-cart-button mt-xs" @click="clearCart">{{ clearCartButtonText }}</button>
        </div>
    </section>
</template>

<style scoped>
.cart-item {
    border: 1px solid #CCC;
    padding: 1rem;
    border-radius: 2px;
}
.cart-wrap {
 display: flex;
 justify-content: space-between;
 align-items: center;
}
.quantitybutton {
    font-size: .8rem;
    margin: 0 0 0 .5rem;
    border: 1px solid rgb(243, 243, 243);
    border-radius: 1px;
    height: 2rem;
    width: 2rem;
    background-color: #0a0a0a;
    color: white;
}
.quantitybutton:hover {
    background-color: rgb(243, 243, 243);
    font-weight: 500;
    border: none;
    color: #0a0a0a;
}
.remove-item-button {
    font-size: .8rem;
    text-transform: uppercase;
    margin: 0 0 0 .5rem;
    border: 1px solid rgb(243, 243, 243);
    border-radius: 1px;
    height: 2rem;
    width: 5rem;
    background-color: #0a0a0a;
    color: white;
    letter-spacing: 1px;
    outline: none;
    cursor: pointer;
    transition: all .4s;
}
.remove-item-button:hover {
    background-color: rgb(255, 112, 112);
    font-weight: 500;
    border: none;
    color: #0a0a0a;
}
</style>