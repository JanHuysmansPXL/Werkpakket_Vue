// Functies van Pinia Importeren.
import { defineStore } from "pinia";
import productsData from '@/assets/products.json'; // Pad naar het JSON-bestand


// Export const -> We maken een constate om de store te exporteren naar de components.
// useProducts -> naamgevingsconventie van Vue 3 voor Pinia stores.
export const useProductsStore = defineStore('productsStore', {
 // State
    state: () => ({
        products: productsData,
    }),
    // Actions
    actions: {
        getTopProducts() {
            // Sort products by stock in descending order
            const sortedProducts = [...this.products].sort((a, b) => b.stock - a.stock);
            
            // Return the top 4 products
            return sortedProducts.slice(0, 4);
          },
    },
    // Getters
    getters: {
        productCount(state) {
            return state.products.length;
        },
    }

})
