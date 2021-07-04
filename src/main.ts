import "@/assets/style/main.scss";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { createApp } from 'vue'
import App from './App.vue'
import VueGlobalComponentsPlugin from './plugins/VueGlobalComponentsPlugin';
import './registerServiceWorker'
import router from './router'
import store from './store'
import Gun from 'gun/gun';
import { VueAutofocusDirective } from './directives/VueAutofocusDirective';

const gun = new Gun({ peers: ['https://gunjs-server.herokuapp.com/gun'] });

library.add(faPaperPlane)

const app = createApp(App)

app.use(store).use(router).directive("autofocus", VueAutofocusDirective).component('icon', FontAwesomeIcon)

VueGlobalComponentsPlugin(app)
app.config.globalProperties.$gun = gun;

app.mount('#app')
