import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Import your router instance

createApp(App)
    .use(router) // Use the router instance
    .mount('#app');
