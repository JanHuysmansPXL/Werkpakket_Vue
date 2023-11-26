
<script>
export default {
        data() {
            return {
                
            }
        },
        props: {
            mainTitle: String,
            subTitle: String
        }
    }
</script>

<template>
    <nav class="navbar bg-darkest container-fluid">
      <div class="navbar-brand"><router-link to="/" class="brand-link">AURO</router-link></div>
      <div class="navbar-links">
        <ul class="navbar-list">
          <li class="navbar-listitem"><router-link to="/products" class="navbar-link">Products</router-link></li>
          <li class="navbar-listitem"><router-link to="/cart" class="navbar-link">Cart</router-link></li>
          <li class="navbar-listitem"><router-link to="/login" class="login-button"><i class="fas fa-user-circle"></i> Login</router-link></li>
        </ul>
      </div>
    </nav>
  </template>
  

