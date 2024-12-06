import './bootstrap';
import { createApp } from 'vue';

const app = createApp({});

import Index from "./components/Index.vue";
import router from "./router.js";
import store from "./store";




app.component('index', Index);
app.use(router).use(store).mount('#app');

