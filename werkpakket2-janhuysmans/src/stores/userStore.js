// userStore.js
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    isLoggedIn: false,
    userData: null,
    users: [
      {
        id: 1,
        username: 'Test',
        password: 'Test',
        name: 'Jan Huysmans',
        address: 'Borgerhoutsestraat 22',
        city: 'Antwerpen',
        country: 'Belgium'
      },
      {
        id: 2,
        username: 'Robin',
        password: 'WebExpert',
        name: 'Robin Braibant',
        address: 'Elfde Liniestraat 1',
        city: 'Hasselt',
        country: 'Belgium'
      },
    ],
  }),

  actions: {
    login(gegevens) {
      const foundUser = this.users.find(
        (user) => user.username === gegevens.username && user.password === gegevens.password
      );

      if (foundUser) {
        this.isLoggedIn = true;
        this.userData = foundUser;
      }
    },
    logout() {
      this.isLoggedIn = false;
      this.userData = null;
    },
  },
});