import "@/assets/style/main.scss";
import { createApp } from 'vue'
import App from './App.vue'
import VueGlobalComponentsPlugin from './plugins/VueGlobalComponentsPlugin';
import './registerServiceWorker'
import router from './router'
import store from './store'

const app = createApp(App)

app.use(store).use(router)

VueGlobalComponentsPlugin(app)

app.mount('#app')
