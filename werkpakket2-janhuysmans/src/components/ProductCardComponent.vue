<script>
  import productList from '@/assets/products.json'

    export default {
        data() {
            return {
                products: productList,
                orderButtonText: "Order now",
            }
        },
        props: {
        }
    }
</script>

<template>
    <div v-for="product in products" class="card">
        <div class="card-overlay">
            <h1 class="card-overlay-heading" >{{ product.title }}</h1>
            <p class="card-overlay-paragraph">{{ product.price }}</p>
            <router-link :to="'/ProductDetail/' + product.id" type="button" class="card-overlay-button">{{ orderButtonText }}</router-link>
        <!--    <router-link to="/productDetail" type="button" class="card-overlay-button">{{ orderButtonText }}</router-link> -->
        </div>
        <img class="card-image" :src="product.image" :alt="product.title">
    </div>
</template>

