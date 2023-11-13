import { createApp } from 'vue'
import VueGtag from "vue-gtag";
import { createPinia } from 'pinia'
import VueSweetalert2 from 'vue-sweetalert2'

import App from './App.vue'
import router from './router'
import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueSweetalert2)
app.use(VueGtag, {
  config: { id: "G-CJGRVF45YV" }
})
app.mount('#app')