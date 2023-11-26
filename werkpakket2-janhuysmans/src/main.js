import '@/assets/scss/main.scss'

import { createApp } from 'vue'

// Methode v2 - VIA APART BESTAND - Importeren Router uit index.JS
import router from './router'
import App from './App.vue'

const app = createApp(App)

// app.use -> Betekent zeg tegen 'App' -> Gebruik router. that's it.
app.use(router)
app.mount('#app')