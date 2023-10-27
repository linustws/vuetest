import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue'; // Import your Home component
import About from '@/views/About.vue'; // Import your About component
import Contact from '@/views/Contact.vue'; // Import your Contact component

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact,
    },
    // Add more routes as needed
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
