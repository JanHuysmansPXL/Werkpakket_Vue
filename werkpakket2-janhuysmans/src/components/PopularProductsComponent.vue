
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

    <div>
        <h2>Top 4 Products by Stock</h2>
        <ul>
        <li v-for="product in topProducts" :key="product.id">
            {{ product.title }} - Stock: {{ product.stock }}
        </li>
        </ul>
    </div>

    <section class="gallery bg-darkest">
        <p class="txt-body_md bg-darkest txt-light ms-lg" >Aantal Producten: {{ productsStore.productCount }}</p>
        <div  v-for="item in productsStore" :key="item" class="cards-wrapper bg-black">
            <div class="card">
                <div class="card-overlay">
                    <h1 class="card-overlay-heading">{{ this.productsStore.title }}</h1>
                    <p class="card-overlay-paragraph">€299</p>
                    <router-link to="/productDetail" type="button" class="card-overlay-button"> Order now</router-link>
                </div>
                <img class="card-image" src="/src/assets/images/gallery_3.png" alt="AuroPods - Nubis">
            </div>
        </div>
    </section>
    <!-- HEAD SECTION WITH INTRO -->
    <section class="gallery bg-darkest">
        <p class="txt-body_md">{{ galleryTitle }}<br></p>
        <h3 class="txt-title_sm">{{ gallerySubtitle }}</h3>
        <div  v-for="item in productsStore" :key="item" class="cards-wrapper bg-black">
            <div class="card">
                <div class="card-overlay">
                    <h1 class="card-overlay-heading">{{ this.productsStore.title }}</h1>
                    <p class="card-overlay-paragraph">€299</p>
                    <router-link to="/productDetail" type="button" class="card-overlay-button"> Order now</router-link>
                </div>
                <img class="card-image" src="/src/assets/images/gallery_3.png" alt="AuroPods - Nubis">
            </div>
        </div>
    </section>

    <!-- PRODUCTS SECTION WITH STORED ITEMS -->
    <section class="gallery bg-darkest">
        <p class="txt-body_md">Head into the future. Wear Auro.<br></p>
        <h3 class="txt-title_sm">Discover our popular products:</h3>
        <div class="cards-wrapper bg-black">
            <div v-for="item in productsStore" :key="id" class="card">
                <div class="card-overlay">
                    <h1 class="card-overlay-heading">Auro Steroid</h1>
                    <p class="card-overlay-paragraph">€299</p>
                    <router-link to="/productDetail" type="button" class="card-overlay-button"> Order now</router-link>
                </div>
                <img class="card-image" src="./../assets/images/gallery_3.png" alt="AuroPods - Nubis">
            </div>
        </div>
    </section>


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





