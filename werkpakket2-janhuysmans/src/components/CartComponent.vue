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
             // Calculate the price for a single item
             itemPrice() {
            return (item) => (item.price * item.quantity).toFixed(2);
            },

            // Calculate the VAT for a single item
            itemVAT() {
            return (item) => (item.price * item.quantity * (item.vatRate / 100)).toFixed(2);
            },

            // Calculate the total (price + VAT) for a single item
            itemTotal() {
            return (item) => ((item.price * item.quantity) + (item.price * item.quantity * (item.vatRate / 100))).toFixed(2);
            },

            // Calculate the sum of prices for all items in the cart
            totalPricesSum() {
            return this.cartItems.reduce((sum, item) => sum + parseFloat(this.itemPrice(item)), 0).toFixed(2);
            },

            // Calculate the sum of VAT for all items in the cart
            totalVATSum() {
            return this.cartItems.reduce((sum, item) => sum + parseFloat(this.itemVAT(item)), 0).toFixed(2);
            },

            // Calculate the total amount (sum of prices + sum of VAT)
            totalAmount() {
            return (parseFloat(this.totalPricesSum) + parseFloat(this.totalVATSum)).toFixed(2);
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
            proceedToCheckout() {
            // Bij 'Proceed to Checkout' naar -> Checkout Page
            this.$router.push('/checkout');
            },    
        },
    }
</script>

<template>
    <section class="container-fluid cart">
        <h2 class="txt-heading_md" >{{ cartSubheading}}</h2>
        <hr class="mb-lg">
        <ul>
            <li class="cart-item mt-xs mb-xs" v-for="item in cartItems" :key="item.id">
                <div class="cart-wrap">
                <div class="cart-wrap-left">
                    <img class="cart-image-thumb" :src="item.image" alt="">
                    <div class="ms-md">
                        <p class="txt-body_md item-title">{{ item.title }}</p>
                        <p class="txt-body_md cart-item-description">Quantity: {{ item.quantity }}</p>
                        <p class="txt-body_md cart-item-description">Price: €{{ itemPrice(item) }}</p>
                        <p class="txt-body_md cart-item-description">Tax: €{{ itemVAT(item) }}</p>
                        <p class="txt-body_md item-title">€ {{ itemTotal(item) }}</p>
                    </div>
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
            <p class="txt-body_md mt-sm item-title">Total: €{{ totalAmount }}</p>
            <button class="clear-cart-button mt-xs" @click="clearCart">{{ clearCartButtonText }}</button>
        </div>
        <div>
            <button class="proceed-to-checkout-button mt-xs" @click="proceedToCheckout">Proceed to Checkout</button>
        </div>
    </section>
</template>

<!-- NIET RESPONSIVE -> ADD FLEX COLUMN TO CART-WRAP / MEDIA QUERY -->

<style scoped>
.cart-item {
    border: 1px solid #CCC;
    padding: 1rem;
    border-radius: 2px;
}
.cart-wrap {
 display: flex;
 flex-direction: row;
 justify-content: space-between;
 align-items: center;
}
.cart-wrap-left {
 display: flex;
 justify-content: start;
 align-items: center;
}
.cart-image-thumb {
    max-width: 120px;
    border-radius: 1px;
    object-fit: cover;
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
.item-title {
    font-weight: 600;
    font-size: 1.1rem;
}
.cart-item-description {
    font-weight: 400;
    font-size: .9rem;
}
</style>