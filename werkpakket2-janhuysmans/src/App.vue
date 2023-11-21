<script>
  import productList from '@/assets/products.json'
  import footerComponent from '@/components/footerComponent.vue'
  import ProductCardComponent from '@/components/ProductCardComponent.vue'

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
    footerComponent,
    ProductCardComponent,
    ProductCardComponent
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

    <nav class="navbar bg-darkest container-fluid">
        <!-- <div class="navbar-brand"><img class="navbar-logo" src="assets/favicon.png" alt="Logo Placeholder"></div> -->
        <div class="navbar-brand"><a class="brand-link" href="index.html">AURO</a></div>
        <div class="navbar-links">
            <ul class="navbar-list">
                <li class="navbar-listitem"><a href="products.html" class="navbar-link">Products</a></li>
                <li class="navbar-listitem"><a href="#" class="navbar-link">Cart</a></li>
                <li class="navbar-listitem"><a href="login.html" class="login-button"><i class="fas fa-user-circle"></i> Login</a></li>
            </ul>
        </div>
    </nav>

    <section class="showcase">
        <video class="video-bkg" v-bind:src="imageSource" muted loop autoplay></video>
        <div class="overlay"></div>
        <div class="showcase-text">
            <h2 class="txt-heading_xl" >Find your vibe.</h2>
            <p class="txt-body_md">You've never felt like this before.</p>
            <a class="showcase-button" href="products.html">Explore</a>
        </div>
    </section>

    <!-- PRODUCTS - CARD GALLERY -->

    <section class="gallery bg-darkest">

        <p v-for="product in products" :key="product.id" class="text-body_md txt-light">
    {{product.title}}
  </p>

        <p class="txt-body_md">Head into the future. Wear Auro.<br></p>
        <h3 class="txt-title_sm">Discover our products:</h3>
        <div class="cards-wrapper bg-black">
            <div class="card">
                <div class="card-overlay">
                    <h1 class="card-overlay-heading">Auro Steroid</h1>
                    <p class="card-overlay-paragraph">€299</p>
                    <a type="button" class="card-overlay-button" href="product_detail.html">Order now</a>
                </div>
                <img class="card-image" src="./assets/images/gallery_3.png" alt="AuroPods - Nubis">
            </div>
            <div class="card">
                <div class="card-overlay">
                    <h1 class="card-overlay-heading">Auro Phonos</h1>
                    <p class="card-overlay-paragraph">€259</p>
                    <a type="button" class="card-overlay-button" href="product_detail.html">Order now</a>
                </div>
                <img class="card-image" src="./assets/images/gallery_4.png" alt="Auropods - Phonos">
            </div>
            <div class="card">
                <div class="card-overlay">
                    <h1 class="card-overlay-heading">Auro Nova</h1>
                    <p class="card-overlay-paragraph">€259</p>
                    <a type="button" class="card-overlay-button" href="product_detail.html">Order now</a>
                </div>
                <img class="card-image" src="./assets/images/case_2.png" alt="Auropods - Nova">
            </div>
            <div class="card">
                <div class="card-overlay">
                    <h1 class="card-overlay-heading">Auro Fluxus</h1>
                    <p class="card-overlay-paragraph">€209</p>
                    <a type="button" class="card-overlay-button" href="product_detail.html">Order now</a>
                </div>
                <img class="card-image" src="./assets/images/case_4.png" alt="Auropods - Fluxus">
            </div>
        </div>
    </section>


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

<footerComponent/>

</template>

<style>


</style>
