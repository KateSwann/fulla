import 'normalize.css';

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import vClickOutside from 'click-outside-vue3';

import './styles/index.scss';

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(vClickOutside)

router.isReady().then(() => {
    app.mount("#app");
});
