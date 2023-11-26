<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
  export default {
    data() {
      return {

          }
      },
      methods: {

      },
      computed: {

      },
      components: {
    HeaderComponent,
    FooterComponent,
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

<HeaderComponent/>

<!-- -
  Een Login-pagina met de volgende vereisten:
    1 - Een formulier waarmee de gebruiker zich kan inloggen op basis van het e-mailadres en wachtwoord.
    2 - Een mogelijkheid om een nieuw paswoord aan te vragen.
-->
<div class="container-fluid login-frame">
  <form class="login-form">
    <h3 class="login-title">Welcome.</h3>

    <label class="login-label" for="username">Username</label>
    <input class="login-input_txt" type="text" placeholder="Email or Phone" id="username" required>

    <label class="login-label" for="password">Password</label>
    <input class="login-input_txt" type="password" placeholder="Password" id="password" required>

    <button class="button form-button">Sign in</button>
    <a class="form-link" href="#">Forgot password ?</a>
  </form>
</div>

<footerComponent/>

</template>

<style>


</style>

