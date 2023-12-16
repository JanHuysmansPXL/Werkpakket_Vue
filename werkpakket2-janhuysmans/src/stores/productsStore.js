// Functies van Pinia Importeren.
import { defineStore } from "pinia";
import productsData from '@/assets/products.json'; // Pad naar het JSON-bestand


// Export const -> We maken een constate om de store te exporteren naar de components.
// useProducts -> naamgevingsconventie van Vue 3 voor Pinia stores.
export const useProductsStore = defineStore('productsStore', {
 // State
    state: () => ({
        productList: productsData,
    }),
    // Actions
    actions: {

    },
    // Getters
    getters: {
        
    }

})
