<script>
  import HeaderComponent from '@/components/HeaderComponent.vue'
  import ProductCardComponent from '@/components/ProductCardComponent.vue'

  //ProductStore importeren.
  import { useProductsStore } from '@/stores/productsStore.js';

  export default {
    data() {
      return {
        detailButtonText: "details",
        productsStore: useProductsStore(),
          }
      },
      methods: {
        
      },
      computed: {
        allProducts() {return this.productsStore.getAllProducts()}
      },
      components: {
        HeaderComponent,
        ProductCardComponent,
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
  
<div class="container-fluid bg-darkest mt-0 pt-xl">
  <section class="gallery_header bg-darkest pt-xl">
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


      <div v-for="product in allProducts" :key="product.id" class="product-card">
        <img :src="product.image" :alt="product.title">
        <div class="card-info">
          <div class="card-txt">
            <h3 class="product-name" >{{ product.title }}</h3>
            <p class="product-price">{{ '€ ' + product.price }}</p>
          </div>
          <router-link :to="'/ProductDetail/' + product.id" type="button" class="details-button">{{ detailButtonText }}</router-link>
       <!-- ROUTE PARAMS HIERBOVEN ZIE TEST !!  <router-link to="/productDetail" type="button" class="details-button">{{ detailButtonText }}</router-link> -->
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
</div>
</template>

<style>


</style>

