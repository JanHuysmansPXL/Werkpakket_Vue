<script>
import { useCartStore } from "@/stores/cartStore.js";
import { useUserStore } from "@/stores/userStore.js";

export default {
  created() {
  this.cart = useCartStore();
  console.log('Cart Items in Confirmation Page:', this.cart.cartItems);
  },
  data() {
    return {
      user: useUserStore(),
      cart: useCartStore(),
      headingText: 'Order Confirmation',
      customerName: "", 
      customerAddress: "",
      customerCity: "",
      nameLabel: "Name: ",
      addressLabel: "Address: ",
      cityLabel: "City: ",
      emptyCartText: "Shoot, your cart got lost. Fixing it now.",
      linkProductsText: "Products",
      thankYou: 'Thank you for your order! Your transaction was completed successfully.',
    };
  },
  computed: {
    cartItems() {
      return this.cart.cartItems;
    },
    totalAmount() {
      return this.cart.totalAmount.toFixed(2);
    },
  },
  methods: {
    itemTotal(item) {
      return (
        (item.price * item.quantity +
          item.price * item.quantity * (item.vatRate / 100)
        ).toFixed(2)
      );
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

  <div>
    <div class="container-fluid h-80 bg-darkest pt-xl pb-xl">
      <h2 class="txt-heading_md mb-sm">{{headingText}}</h2>

      <div v-if="cartItems">
        <!-- Display a summary of items in the cart -->
        <div v-for="item in cartItems" :key="item.id" class="confirmation-item">
          <p class="txt-body_md">{{ item.title }} - {{ item.quantity }} pc</p>
          <p class="txt-body_md">Total: €{{ itemTotal(item) }}</p>
        </div>

        <!-- Bedrag -->
        <div class="confirmation-total">
          <p class="txt-body_md">Total Amount: €{{ cart.totalAmount }}</p>
        </div>

        <!-- Klantgegevens -- AANVULLEN -->
        <div class="customer-details pt-md">
          <p class="txt-body_md">{{ nameLabel }} {{ customerName }}</p>
          <p class="txt-body_md">{{ addressLabel }} {{ customerAddress }}</p>
          <p class="txt-body_md">{{ cityLabel }} {{ customerCity }}</p>
        </div>

        <!-- Bevestiging -->
        <p class="txt-body_md pt-md">{{ thankYou }}</p>

      </div>
      <div v-else>
        <p class="txt-heading_md pt-xl pb-xl text-center">{{ emptyCartText }}.<br>
          <a class="cart-products-link"><router-link to="/products">{{ linkProductsText }}</router-link></a>
        </p>
      </div>
    </div>
  </div>
</template>



<style>
.confirmation-item {
  border: 1px solid rgb(243, 243, 243);
  padding: 1rem;
  margin-bottom: 1rem;
}

.confirmation-total {
  border: 1px solid rgb(243, 243, 243);
  padding: 1rem;
  margin-top: 1rem;
}
.customer-details {
  margin-top: 1rem;
  font-style: italic;
}
</style>