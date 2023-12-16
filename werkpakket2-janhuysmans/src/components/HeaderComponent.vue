
<script>
export default {
        data() {
            return {
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
          <li class="navbar-listitem"><router-link to="/cart" class="navbar-link">{{ linkCartText }}</router-link></li>
          <li v-if="userLoggedIn == false" class="navbar-listitem"><router-link to="/login" class="login-button"><i class="fas fa-user-circle"></i> {{ linkLoginText }}</router-link></li>
          <li v-else class="navbar-listitem"><router-link to="/home" class="login-button"><i class="fas fa-user-circle"></i> {{ linkLogoutText }}</router-link></li>
        </ul>
      </div>
    </nav>
  </template>
  

