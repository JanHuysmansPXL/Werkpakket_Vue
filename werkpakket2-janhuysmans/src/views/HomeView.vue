<script>
  import productList from '@/assets/products.json'
  import HeaderComponent from '@/components/HeaderComponent.vue'
  import FooterComponent from '@/components/FooterComponent.vue'
  import ProductCardComponent from '@/components/ProductCardComponent.vue'
  import PopularProductsComponent from '@/components/PopularProductsComponent.vue'

  export default {
    data() {
      return {
        imageSource: "src/assets/auro_vid2.mp4",
        imageSource2: "src/assets/images/case_1.png",
        products: productList,
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

    <section class="showcase">
        <video class="video-bkg" v-bind:src="imageSource" muted loop autoplay></video>
        <div class="overlay"></div>
        <div class="showcase-text">
            <h2 class="txt-heading_xl">Find your vibe.</h2>
            <p class="txt-body_md">You've never felt like this before.</p>
            <a><router-link to="/products" class="showcase-button">Products</router-link></a>
        </div>
    </section>

    <PopularProductsComponent/>

<!-- TRANSITION-PIECE  -->
    <section class="home-transition">
            <h1 class="txt-subheader">Feel the Future.</h1>
            <h3 class="txt_body_xl">AURO is your companion forward.</h3>
            <h3 class="txt_body_xl">We  deliver clarity, silence, a bridge between the
                rhythms of modernity and the timeless grace of a bygone age.
                Let AURO become an extension of you, enriching life and proving that in the
                midst of the cacophony, music could be a sanctuary, and innovation could be a timeless marvel.</h3>
    </section>

    
    <section class="gallery bg-darkest">
        <div class="cards-wrapper bg-black">
            <ProductCardComponent/>
        </div>
    </section>

</template>

<style>


</style>
