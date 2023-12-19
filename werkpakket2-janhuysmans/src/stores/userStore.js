// userStore.js
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    isLoggedIn: false,
    userData: null,
  }),

  actions: {
    login(user) {
      this.isLoggedIn = true;
      this.userData = user;
    },

    logout() {
      this.isLoggedIn = false;
      this.userData = null;
    },
  },
});