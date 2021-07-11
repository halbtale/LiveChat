import "@/assets/style/main.scss";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPaperPlane, faMicrophone, faPlus, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { createApp } from 'vue'
import App from './App.vue'
import VueGlobalComponentsPlugin from './plugins/VueGlobalComponentsPlugin';
import './registerServiceWorker'
import router from './router'
import store from './store'
import Gun from 'gun/gun';
import { VueAutofocusDirective } from './directives/VueAutofocusDirective';
import VueGtag from "vue-gtag";
const gun = new Gun({ peers: ['https://gunjs-server.herokuapp.com/gun'] });

library.add(faPaperPlane)
library.add(faMicrophone)
library.add(faPlus)
library.add(faUserCircle)
const app = createApp(App)

app
    .use(store)
    .use(router)
    .directive("autofocus", VueAutofocusDirective)
    .component('icon', FontAwesomeIcon)


if (process.env.NODE_ENV === 'production' && VueGtag) {
    app.use(VueGtag as any, {
        config: { id: "G-307SRCXQ68" }
    }, router)
}

VueGlobalComponentsPlugin(app)
app.config.globalProperties.$gun = gun;

app.mount('#app')
