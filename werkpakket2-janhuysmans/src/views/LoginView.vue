<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
  export default {
    data() {
      return {
        welcome: 'Welcome',
        usernameLabel: 'Username',
        usernameInput: '',
        passwordLabel: 'Password',
        formButtonText: 'Log in',
        forgotPasswordText: 'Forgot password ?',
        
          }
      },
      methods: {
        submitForm() {
          console.log("inzenden van formulier opgevangen");
        },
      },
      computed: {
        addWelcome() {
          let welcomeText = '';
          welcomeText = this.welcome + ' ' + this.usernameInput;
          return welcomeText;
        }
      },
      components: {
    HeaderComponent,
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
  <form class="login-form" v-on:submit.prevent="submitForm()">
    <h3 v-if="usernameInput" class="txt-title_sm"> {{ addWelcome }}</h3>
    <h3 v-else class="txt-title_sm"> {{ welcome }}</h3>

    <label class="login-label" for="username">{{ usernameLabel }}</label>
    <input v-model="usernameInput" class="login-input_txt" type="text" placeholder="Username" id="username" required>

    <label class="login-label" for="password">{{ passwordLabel }}</label>
    <input class="login-input_txt" type="password" placeholder="Password" id="password" required>

    <button type="submit" class="button form-button" v-on:submit.prevent="submitForm()" >{{ formButtonText}}</button>
    <a class="form-link" href="#"> {{ forgotPasswordText }}</a>
  </form>
</div>

</template>

<style>


</style>

