<script>
    import { useCartStore } from '@/stores/cartStore.js';

  export default {
    data() {
    return {
      cart: useCartStore(),
      headingText: 'Bestelling afronden',
      customerName: '',
      customerAddress: '',
      customerCity: '',
      nameLabel: 'Naam: ',
      addressLabel: 'Address: ',
      cityLabel: 'City: ',
      linkProductsText: 'Go To Products',
      emptyCartText: 'Shoot, your cart is empty',
      orderButtonText: 'Confirm your order',
    };
  },
  created() {
  console.log('Cart Items in Checkout Page:', this.cart.cartItems);
  },
  computed: {
    cartItems() {
      return this.cart.cartItems;
    },
    totalAmount() {
      return this.cart.totalAmount;
    },
    totalAmountWithoutTax() {
      return this.cart.totalAmountWithoutTax;
    },
  },
  methods: {
    itemTotal(item) {
      return ((item.price * item.quantity) + (item.price * item.quantity * (item.vatRate / 100))).toFixed(2);
    },
    placeOrder() {
      this.$router.push({ name: 'Success' , params: { cartItems: this.cart.cartItems } });
    },
  },
}
</script>

<template>
<head>
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">
  <!-- Link voor Google Fonts - RED HAT DISPLAY -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@100;200;300;400;500;700;900&display=swap" rel="stylesheet">
</head>     

  <div class="container-fluid h-80 bg-darkest pt-xl pb-xl">
    <h2 class="txt-heading_md">{{headingText}}</h2>
  <div v-if="cartItems.length > 0">
      <!-- Display a summary of items in the cart -->
  <div v-for="item in cartItems" :key="item.id" class="checkout-item">
    <p class="txt-body_md">{{ item.title }} - {{ item.quantity }}pc.</p>
    <p class="txt-body_md">Price: € {{ itemTotal(item) }}</p>
  </div>

    <!-- Display total amount -->
  <div class="checkout-total">
    <p class="txt-body_md">Total ex. VAT: € {{ totalAmountWithoutTax.toFixed(2) }}</p>
    <p class="txt-body_md">Total Incl. VAT: € {{ totalAmount.toFixed(2) }}</p>
  </div>

      <!-- Checkout form -->
      <form class="checkout-form" @submit.prevent="placeOrder">
        <!-- Add your checkout form fields here -->
        <label class="checkout-label" for="name">{{nameLabel}}</label>
        <input type="text" id="name" v-model="customerName" required>

        <label class="checkout-label" for="address">{{ addressLabel }}</label>
        <input type="text" id="address" v-model="customerAddress" required>

        <label class="checkout-label" for="email">{{ cityLabel }}</label>
        <input type="text" id="city" v-model="customerCity" required>

        <button class="confirm-order-button" type="submit">{{orderButtonText}}</button>
      </form>
    </div>
    <div v-else>
      <p class="txt-heading_md pt-xl pb-xl text-center">{{ emptyCartText }}.<br>
        <a class="cart-products-link"><router-link to="/products">{{ linkProductsText }}</router-link></a>
      </p>
    </div>  
  </div>


</template>

<style>
.h-80 {
  min-height: 80vh;
}

.checkout-item {
  border: 1px solid rgb(243, 243, 243);
  padding: 1rem;
  margin-bottom: 1rem;
}

.checkout-total {
  border: 1px solid rgb(243, 243, 243);
  padding: 1rem;
  margin-top: 1rem;
}
.textlink {
  text-decoration: none;
  color: rgb(243, 243, 243);
  text-decoration: underline;
}
.textlink:hover {
  text-decoration: none;
  color: rgb(243, 243, 243);
  text-decoration: underline;
  font-style: italic;
}
.confirm-order-button {
    display: block;
    padding: .5rem;
    font-size: .8rem;
    text-transform: uppercase;
    margin-top: 1rem;
    border: 1px solid rgb(243, 243, 243);
    border-radius: 1px;
    height: 2rem;
    width: 100%;
    background-color: #0a0a0a;
    color: white;
    letter-spacing: 1px;
    outline: none;
    cursor: pointer;
    transition: all .7s;
}
.confirm-order-button:hover {
    background-color: rgb(243, 243, 243);
    font-weight: 600;
    letter-spacing: 2px;
    border: none;
    color: #0a0a0a;
}
</style>