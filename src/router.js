// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
// import Home from './components/Home.vue';
import Login from './components/Login.vue';
import Register from './components/Register.vue';
import Forgetpassword from './components/Forgetpassword.vue';
// import LocationDetails from './components/LocationDetails.vue';
import Dashboard from './components/Dashboard.vue'; // Your protected component
import store from './store'; // Import Vuex store to check authentication

const routes = [
    // { path: '/', component: Home },
    {
        path: '/',
        component: () => import('./components/Home.vue')  // Lazy load Home
    },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/forget-password', component: Forgetpassword },
    {
        path: '/dashboard',
        component: Dashboard,
        meta: { requiresAuth: true },
    },
    {
        path: '/location/:slug',
        name: 'LocationDetails',
        component: () => import('./components/LocationDetails.vue'),
        meta: { requiresAuth: true },
        props: true,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

// Global navigation guard to check authentication before accessing protected routes
router.beforeEach((to, from, next) => {
    const isAuthenticated = store.getters.isAuthenticated;

    // Check if the user is trying to access a protected route
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // If the user is not authenticated, redirect to the login page
        if (!isAuthenticated) {
            next('/login');
        } else {
            next();
        }
    }
    // Check if the user is trying to access the login or register page while already authenticated
    else if ((to.path === '/login' || to.path === '/register') && isAuthenticated) {
        next('/dashboard'); // Redirect authenticated users to dashboard
    } else {
        next();
    }
});


export default router;
