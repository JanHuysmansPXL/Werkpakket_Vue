import '@/assets/scss/main.scss'

// Vue Importeren.
import { createApp } from 'vue';

// Pinia Importeren.
import {createPinia} from 'pinia';

// Importeren Router uit index.JS
import router from './router';
import App from './App.vue';

// App + Pinia aanmaken
const app = createApp(App);
const pinia = createPinia();

// app.use -> Betekent zeg tegen 'App' -> Gebruik router. that's it.
app.use(router);
app.use(pinia);

// app mounten in id: #app -> zie div in index.html
app.mount('#app')