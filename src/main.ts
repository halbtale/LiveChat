import "@/assets/style/main.scss";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { createApp } from 'vue'
import App from './App.vue'
import { scrollFromBottomDirective } from './directives/ScrollFromBottomDirective';
import VueGlobalComponentsPlugin from './plugins/VueGlobalComponentsPlugin';
import './registerServiceWorker'
import router from './router'
import store from './store'
import Gun from 'gun/gun';

const gun = new Gun({ peers: ['https://gunjs-server.herokuapp.com/gun'] });

library.add(faPaperPlane)

const app = createApp(App)

app.use(store).use(router).directive("scroll-from-bottom", scrollFromBottomDirective).component('icon', FontAwesomeIcon)

VueGlobalComponentsPlugin(app)
app.config.globalProperties.$gun = gun;

app.mount('#app')
