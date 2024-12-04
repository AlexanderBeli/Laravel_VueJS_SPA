import './bootstrap';
import { createApp } from 'vue';

const app = createApp({});

import PostComponent from "./components/PostComponent.vue";
app.component('post-component', PostComponent);
app.mount('#app');

