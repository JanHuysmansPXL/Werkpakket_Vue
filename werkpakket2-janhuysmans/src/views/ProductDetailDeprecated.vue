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

  <div class="bg-darkest pt-md">
<section class="gallery_header bg-darkest mt-xl">
    <p class="txt-body_md">Head into the future. Wear Auro.<br></p>
    <h3 class="txt-title_sm">Discover our products:</h3>
  </section>

  <!-- PRODUCT DETAILS -->

  <div class="container-fluid product-detail-page bg-darkest">

    <!-- Linkerkolom met productafbeelding en overlay -->
    <div class="product-image">
      <div class="image-overlay">
        <p class="overlaytxt_sm">The Auro Nubis represents a new era of wearable sound.</p>
        <p class="overlaytxt_sm">"Sounds like a live concert, you can pair these with a VR-set and get blown away."</p>
      </div>
      <img src="/src/assets/images/gallery_4.png" alt="AURO Nubis Earpods">
      <a href="#" class="toggle-overlay"><i class="fa fa-plus-circle info-toggle"></i>️</a>
    </div>

    <!-- Rechterkolom met productinformatie -->
    <div class="product-info">
      <h1 class="info-heading">Nubis AuroPods.</h1>
      <p class="info-subheading">Taking sound to a new dimension.</p>
      <p class="infotxt_lg mt-md mb-md">€319</p>
      <p class="infotxt_sm"><span class="infotxt_strong">Availability:</span> In stock.</p>
      <p class="infotxt_sm"><span class="infotxt_strong">Ratings:</span>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
      </p>
      <a href="#" class="cart-button mt-lg">Add to cart</a>
    </div>
  </div>

<div class="container bg-darkest tech-specs">
  <div class="line mb-sm"></div>
  <div class="container-fluid specs-wrapper">
    <div class="specs-left">
      <p class="infotxt_lg mt-sm mb-md"><span class="infotxt_strong">Technical Specs:</span></p>
      <ul class="product-info-list">
        <li class="infotxt_sm"><i class="fas fa-stream"></i>Bone conduction</li>
        <li class="infotxt_sm"><i class="fab fa-bluetooth-b"></i> Bluetooth 5.0</li>
        <li class="infotxt_sm"><i class="fas fa-battery-full"></i>Battery Life: 24h</li>
        <li class="infotxt_sm"><i class="fas fa-volume-up"></i>Active Noise Cancelling</li>
        <li class="infotxt_sm"><i class="fas fa-mobile-alt"></i>Compatibility: Smartphone, tablet, laptop</li>
        <li class="infotxt_sm"><i class="fas fa-comment-dots"></i>Supported: Siri, Google Assistant, Alexa</li>
      </ul>
    </div>
    <div class="specs-right">
      <p class="infotxt_lg mt-sm mb-md"><span class="infotxt_strong">Technical Specs:</span></p>
      <ul class="product-info-list">
        <li class="infotxt_sm"><i class="fas fa-stream"></i>Bone conduction</li>
        <li class="infotxt_sm"><i class="fab fa-bluetooth-b"></i> Bluetooth 5.0</li>
        <li class="infotxt_sm"><i class="fas fa-battery-full"></i>Battery Life: 24h</li>
        <li class="infotxt_sm"><i class="fas fa-volume-up"></i>Active Noise Cancelling</li>
        <li class="infotxt_sm"><i class="fas fa-mobile-alt"></i>Compatibility: Smartphone, tablet, laptop</li>
        <li class="infotxt_sm"><i class="fas fa-comment-dots"></i>Supported: Siri, Google Assistant, Alexa</li>
      </ul>
    </div>
  </div>
  <div class="line mt-lg"></div>
</div>
</div>
</template>

<style>


</style>

