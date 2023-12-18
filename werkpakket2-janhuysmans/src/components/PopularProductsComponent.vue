
<script>

//Store importeren.
import { useProductsStore } from '@/stores/productsStore.js';

export default {
    data() {
        return {
            //Gallery
            galleryTitle: 'Head into the future. Wear Auro.',
            gallerySubtitle: 'Discover our popular products:',
            productsStore: useProductsStore(),
            orderButtonText: 'Order now',
             }
        },
        methods:{},
        computed: {
            // computed property om de top 4 producten te krijgen.
            topProducts() {
            return this.productsStore.getTopProducts();
    },
        },
        props: {}
    }
</script>

<template>

    <!-- HEAD SECTION WITH INTRO -->
    <section class="gallery bg-darkest">
        <p class="txt-body_md">{{ galleryTitle }}<br></p>
        <h3 class="txt-title_sm">{{ gallerySubtitle }}</h3>
    </section>

<div>
    <section class="gallery bg-darkest pt-xl">
        <div class="container-fluid cards-wrapper">
            <div  v-for="product in topProducts" :key="product.id" class="card">
                <div class="">
                    <div class="card-overlay">
                        <h1 class="card-overlay-heading">{{ product.title }}</h1>
                        <p class="card-overlay-paragraph">{{ '€ ' + product.price }}</p>
                        <router-link :to="'/ProductDetail/' + product.id" type="button" class="card-overlay-button">{{ orderButtonText }}</router-link>
                    <!--    <router-link to="/productDetail" type="button" class="card-overlay-button">{{ orderButtonText }}</router-link> -->
                    </div>
                    <img class="card-image" :src="product.image" :alt="product.title">
                </div>
            </div>
        </div>
    </section>
</div>
  
</template>

    <!-- POPULAR PRODUCTS - CARD GALLERY 
    <section class="gallery bg-darkest">
        <p class="txt-body_md">Head into the future. Wear Auro.<br></p>
        <h3 class="txt-title_sm">Discover our popular products:</h3>
        <div class="cards-wrapper bg-black">
            <div class="card">
                <div class="card-overlay">
                    <h1 class="card-overlay-heading">Auro Steroid</h1>
                    <p class="card-overlay-paragraph">€299</p>
                    <router-link to="/productDetail" type="button" class="card-overlay-button"> Order now</router-link>
                </div>
                <img class="card-image" src="./../assets/images/gallery_3.png" alt="AuroPods - Nubis">
            </div>
            <div class="card">
                <div class="card-overlay">
                    <h1 class="card-overlay-heading">Auro Phonos</h1>
                    <p class="card-overlay-paragraph">€259</p>
                    <router-link to="/productDetail" type="button" class="card-overlay-button"> Order now</router-link>
                </div>
                <img class="card-image" src="./../assets/images/gallery_4.png" alt="Auropods - Phonos">
            </div>
            <div class="card">
                <div class="card-overlay">
                    <h1 class="card-overlay-heading">Auro Nova</h1>
                    <p class="card-overlay-paragraph">€259</p>
                    <router-link to="/productDetail" type="button" class="card-overlay-button"> Order now</router-link>
                </div>
                <img class="card-image" src="./../assets/images/case_2.png" alt="Auropods - Nova">
            </div>
            <div class="card">
                <div class="card-overlay">
                    <h1 class="card-overlay-heading">Auro Fluxus</h1>
                    <p class="card-overlay-paragraph">€209</p>
                    <router-link to="/productDetail" type="button" class="card-overlay-button"> Order now</router-link>
                </div>
                <img class="card-image" src="./../assets/images/case_4.png" alt="Auropods - Fluxus">
            </div>
        </div>
    </section> -->

<style scoped>

</style>





