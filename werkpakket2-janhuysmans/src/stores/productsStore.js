// Functies van Pinia Importeren.
import { defineStore } from "pinia";
import productsData from '@/assets/products.json'; // Pad naar het JSON-bestand

// Export const -> We maken een constante om de store te exporteren naar de components.
// useProducts -> Naamgevingsconventie van Vue 3 voor Pinia stores.
export const useProductsStore = defineStore('products', {
 // State
    state: () => ({
        products: productsData,
    }),
    // Actions
    actions: {
        getProductById(productId) {
        // Logica uit om het product op te halen op basis van het ID --> NAkijken om voor Cart te gebruiken. + Quantity. 
        return this.products.find(product => product.id == productId);
        },
        getTopProducts() {
            // Producten sorteren -> In nieuwe variabele.
            const sortedProducts = [...this.products].sort((a, b) => b.stock - a.stock);
            // De eerste 4 producten slicen.
            return sortedProducts.slice(0, 4);
        },
        getAllProducts() {
            // ALLE Producten definieren.
            const allProducts = this.products;
            // De producten terugsturen.
            return allProducts;
        },
    },
    // Getters
    getters: {
        productCount(state) {
            return state.products.length;
        },
    }

})
