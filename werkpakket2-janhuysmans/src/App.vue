<script>
  import productList from '@/assets/products.json'
  import HeaderComponent from '@/components/HeaderComponent.vue'
  import FooterComponent from '@/components/FooterComponent.vue'
  import ProductCardComponent from '@/components/ProductCardComponent.vue'
  import PopularProductsComponent from '@/components/PopularProductsComponent.vue'
  export default {
    data() {
      return {
        productList
          }
      },
      methods: {

      },
      computed: {

      },
      components: {
    HeaderComponent,
    FooterComponent,
    ProductCardComponent,
    PopularProductsComponent,
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

<div id="app">
    <router-view></router-view>
</div>

<FooterComponent/>

</template>

<style>


</style>
