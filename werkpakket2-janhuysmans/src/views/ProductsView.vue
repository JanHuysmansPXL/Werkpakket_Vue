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
    ProductCardComponent,
    PopularProductsComponent
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
  
  <section class="gallery_header bg-darkest mt-xl">
    <p class="txt-body_md">Head into the future. Wear Auro.<br></p>
    <h3 class="txt-title_sm">Discover our products:</h3>
  </section>
  
  <!-- CONTAINER MET FILTERMENU EN PRODUCT-OVERZICHT  -->
  <div class="container-fluid products-wrapper bg-darkest mx-auto">
    <aside class="filter-menu">
      <h2 class="filter-title">Filter</h2>
      <ul class="filter-list">
        <li class="filter-listitem filter-active"><a class="filter-toggle" href="#">All</a></li>
        <li class="filter-listitem"><a class="filter-toggle" href="#">Auropods</a></li>
        <li class="filter-listitem"><a class="filter-toggle" href="#">AuroVision</a></li>
        <li class="filter-listitem"><a class="filter-toggle" href="#">AuroTouch</a></li>
        <li class="filter-listitem"><a class="filter-toggle" href="#">AuroLink</a></li>
      </ul>
    </aside>
    <main class="product-list">
      <!-- Voeg meer productkaarten toe -->
      <div class="product-card">
        <img src="assets/images/gallery_4.png" alt="Product 1 - Nubis">
        <div class="card-info">
          <div class="card-txt">
            <h3 class="product-name" >Auro Nubis</h3>
            <p class="product-price">€329</p>
          </div>
          <a href="product_detail.html" class="details-button">Details</a>
        </div>
      </div>
      <div class="product-card">
        <img src="assets/images/case_4.png" alt="Product 2">
        <div class="card-info">
          <div class="card-txt">
            <h3 class="product-name" >Auro Fluxus</h3>
            <p class="product-price">€249</p>
          </div>
          <a href="product_detail.html" class="details-button">Details</a>
        </div>
      </div>
      <div class="product-card">
        <img src="assets/images/gallery_3.png" alt="Product 3">
        <div class="card-info">
          <div class="card-txt">
            <h3 class="product-name" >Auro Steroid</h3>
            <p class="product-price">€299</p>
          </div>
          <a href="product_detail.html" class="details-button">Details</a>
        </div>
      </div>
      <div class="product-card">
        <img src="assets/images/pods_2.png" alt="Product 4">
        <div class="card-info">
          <div class="card-txt">
            <h3 class="product-name" >Auro Zulu</h3>
            <p class="product-price">€319</p>
          </div>
          <a href="product_detail.html" class="details-button">Details</a>
        </div>
      </div>
      <div class="product-card">
        <img src="assets/images/aurolink_1.png" alt="Product 5">
        <div class="card-info">
          <div class="card-txt">
            <h3 class="product-name" >AuroLink</h3>
            <p class="product-price">€199</p>
          </div>
          <a href="product_detail.html" class="details-button">Details</a>
        </div>
      </div>
      <div class="product-card">
        <img src="assets/images/aurovision_1.png" alt="Product 6">
        <div class="card-info">
          <div class="card-txt">
            <h3 class="product-name" >AuroVision</h3>
            <p class="product-price">€1899</p>
          </div>
          <a href="product_detail.html" class="details-button">Details</a>
        </div>
      </div>
      <div class="product-card">
        <img src="assets/images/case_1.png" alt="Product 7">
        <div class="card-info">
          <div class="card-txt">
            <h3 class="product-name" >Auro Nova</h3>
            <p class="product-price">€249</p>
          </div>
          <a href="product_detail.html" class="details-button">Details</a>
        </div>
      </div>
      <div class="product-card">
        <img src="assets/images/case_2.png" alt="Product 8">
        <div class="card-info">
          <div class="card-txt">
            <h3 class="product-name" >Auro Vibe</h3>
            <p class="product-price">€189</p>
          </div>
          <a href="#" class="details-button">Details</a>
        </div>
      </div>
      <div class="product-card">
        <img src="assets/images/pods_1.png" alt="Product 9">
        <div class="card-info">
          <div class="card-txt">
            <h3 class="product-name" >Auro Nova</h3>
            <p class="product-price">€249</p>
          </div>
          <a href="product_detail.html" class="details-button">Details</a>
        </div>
      </div>
    </main>
    <!--EINDE DIV !-->
  </div>
  
  <!-- PAGINATIE -->
  
  <nav class="container pagination">
    <a class="pagination-item" href="#">&laquo;</a>
    <a class="pagination-item active" href="#">1</a>
    <a class="pagination-item" href="#">2</a>
    <a class="pagination-item" href="#">3</a>
    <a class="pagination-item" href="#">&raquo;</a>
    <!-- Voeg meer paginatie-items toe -->
  </nav>

<footerComponent/>

</template>

<style>


</style>
