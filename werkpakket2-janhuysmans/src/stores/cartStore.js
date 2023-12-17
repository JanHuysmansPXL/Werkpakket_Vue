// cartStore.js
import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    cartItems: [],
  }),

  getters: {
    // Getter om de totale prijs van items in het winkelmandje te berekenen
    totalAmount() {
      return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    },
  },

  actions: {
    // Actie om een product aan het winkelmandje toe te voegen
    addToCart(product) {
      const existingItem = this.cartItems.find(item => item.id === product.id);

      if (existingItem) {
        // Als het product al in het winkelmandje zit, verhoog de hoeveelheid
        existingItem.quantity++;
      } else {
        // Voeg een nieuw item toe aan het winkelmandje
        this.cartItems.push({ ...product, quantity: 1 });
      }
    },

    // Actie om een product uit het winkelmandje te verwijderen
    removeFromCart(productId) {
      this.cartItems = this.cartItems.filter(item => item.id !== productId);
    },

    // Actie om de hoeveelheid van een item in het winkelmandje te wijzigen
    updateQuantity(productId, newQuantity) {
      const itemToUpdate = this.cartItems.find(item => item.id === productId);

      if (itemToUpdate) {
        itemToUpdate.quantity = newQuantity;
      }
    },

    // Actie om het hele winkelmandje leeg te maken
    clearCart() {
      this.cartItems = [];
    },
  },
});