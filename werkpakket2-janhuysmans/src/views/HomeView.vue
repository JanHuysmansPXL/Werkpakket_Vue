<script>
  import HeaderComponent from '@/components/HeaderComponent.vue'
  import FooterComponent from '@/components/FooterComponent.vue'
  import ProductCardComponent from '@/components/ProductCardComponent.vue'
  import PopularProductsComponent from '@/components/PopularProductsComponent.vue'
  import ShowcaseComponent from '@/components/ShowcaseComponent.vue'
  import HomeTransitionComponent from '@/components/HomeTransitionComponent.vue'


//Store importeren.
import { useProductsStore } from '@/stores/productsStore.js';

  export default {
    data() {
      return {
        imageSource2: "src/assets/images/case_1.png",
        products: useProductsStore(),
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
    ShowcaseComponent,
    HomeTransitionComponent,
},
    }
</script>

<template>

  <!-- HEAD -> MOET DIT IN EEN COMPONENT ?? NIET ZEKER: NOG VRAGEN AAN ROBIN !!-->
  <head>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">
    <!-- Link voor Google Fonts - RED HAT DISPLAY -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@100;200;300;400;500;700;900&display=swap" rel="stylesheet">
  </head>  

  <!-- Hero-element met video en Button naar Products -->
  <ShowcaseComponent/>  
  <!-- Toont de TOP 4 producten o.b.v. Stockhoeveelheid-->
  <PopularProductsComponent/>
  <!-- Transition met Text + Background -->
  <HomeTransitionComponent/>

  <!-- Product Gallery met cards. -->
  <section class="gallery bg-darkest">
      <div class="cards-wrapper bg-black">
          <ProductCardComponent/>
      </div>
  </section>
</template>

<style>


</style>
