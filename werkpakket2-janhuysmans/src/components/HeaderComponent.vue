<script>
import { useUserStore } from '@/stores/userStore.js';
import { useCartStore } from '@/stores/cartStore.js';

  export default {
        data() {
            return {
              // UserStore binnenhalen.
              userStore: useUserStore(),
               // cartStore binnenhalen.
              cartStore: useCartStore(),
              // Nav-links:
              brandLink: 'AURO',
              linkProductsText: 'Products',
              linkCartText: 'Cart',
              linkLoginText: 'Log in',
              linkLogoutText: 'Log out',
              userLoggedIn: false,
            }
        },
        methods: {
          logout() {
          this.userStore.logout();
          // Bij logout terug naar home via router.
          this.$router.push('/');
    },
        },
        props: {
            mainTitle: String,
            subTitle: String
        }
    }
</script>

<template>
    <nav class="navbar bg-darkest container-fluid">
      <div class="navbar-brand"><router-link to="/" class="brand-link">{{ brandLink }}</router-link></div>
      <div class="navbar-links">
        <ul class="navbar-list">
          <li class="navbar-listitem"><router-link to="/products" class="navbar-link">{{ linkProductsText }}</router-link></li>
          <li class="navbar-listitem"><router-link to="/cart" class="navbar-link">{{ linkCartText }}<span class="cart-items-count"> ({{cartStore.cartItems.length}})</span></router-link></li>
          <!-- Als NIET ingelogd -> Toon navbar met login-button -->
          <li v-if="!userStore.isLoggedIn" class="navbar-listitem">
            <router-link to="/login" class="login-button"><i class="fas fa-user-circle"></i> {{ linkLoginText }}</router-link>
          </li>  
          <!-- Anders -> Toon navbar met logout-button -->
          <li v-else class="navbar-listitem">
            <router-link @click="logout" class="login-button"><i class="fas fa-user-circle"></i> {{ linkLogoutText }}</router-link>
          </li>        
        </ul>
      </div>
    </nav>
  </template>
  

