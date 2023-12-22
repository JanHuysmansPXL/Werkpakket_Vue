
<script>
import { useProductsStore } from '@/stores/productsStore.js';

export default {
  data() {
    return {
      detailButtonText: 'details',
      currentPage: 1,
      itemsPerPage: 8,
      selectedFilter: 'all',
    };
  },
  computed: {
    productsStore() {
      return useProductsStore();
    },
    allProducts() {
      return this.productsStore.getAllProducts();
    },
    uniqueCategories() {
      const categories = ['All'];
      this.allProducts.forEach((product) => {
        if (!categories.includes(product.category)) {
          categories.push(product.category);
        }
      });
      return categories;
    },
    filteredProducts() {
      if (this.selectedFilter === 'all') {
        return this.allProducts;
      } else {
        return this.allProducts.filter((product) => product.category === this.selectedFilter);
      }
    },
    paginatedProducts() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.filteredProducts.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.filteredProducts.length / this.itemsPerPage);
    },
  },
  methods: {
    applyFilter(category) {
      this.selectedFilter = category;
      this.currentPage = 1;
    },
    changePage(page) {
      if (page === 'prev' && this.currentPage > 1) {
        this.currentPage--;
      } else if (page === 'next' && this.currentPage < this.totalPages) {
        this.currentPage++;
      } else if (typeof page === 'number') {
        this.currentPage = page;
      }
    },
  },
};
</script>

<template>
  <div class="container-fluid bg-darkest mt-0 pt-xl">
    <section class="gallery_header bg-darkest pt-xl">
      <p class="txt-body_md">Head into the future. Wear Auro.<br></p>
      <h3 class="txt-title_sm">Discover our products:</h3>
    </section>

    <div class="container-fluid products-wrapper bg-darkest mx-auto">
      <aside class="filter-menu">
        <h2 class="filter-title">Filter</h2>
        <ul class="filter-list">
          <li :class="{ 'filter-active': selectedFilter === 'all' }">
            <a @click="applyFilter('all')" class="filter-toggle" href="#">All</a>
          </li>
          <li v-for="category in uniqueCategories" :key="category">
            <a @click="applyFilter(category)" class="filter-toggle" href="#">
              {{ category }}
            </a>
          </li>
        </ul>
      </aside>

      <main class="product-list">
        <div v-for="product in paginatedProducts" :key="product.id" class="product-card">
          <img :src="product.image" :alt="product.title">
          <div class="card-info">
            <div class="card-txt">
              <h3 class="product-name">{{ product.title }}</h3>
              <p class="product-price">{{ '€ ' + product.price }}</p>
            </div>
            <router-link :to="'/ProductDetail/' + product.id" type="button" class="details-button">
              {{ detailButtonText }}
            </router-link>
          </div>
        </div>
      </main>
    </div>

    <nav class="container pagination">
      <a @click="changePage('prev')" class="pagination-item" href="#">&laquo;</a>
      <a v-for="page in totalPages" :key="page" @click="changePage(page)" :class="{ 'active': currentPage === page }" class="pagination-item" href="#">
        {{ page }}
      </a>
      <a @click="changePage('next')" class="pagination-item" href="#">&raquo;</a>
    </nav>
  </div>
</template>

<style>
/* Add your existing styles here */
</style>
