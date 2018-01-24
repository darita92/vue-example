import VueRouter from 'vue-router';

import Home from './pages/Home.vue';

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home
    }
]

export default new VueRouter({
    routes
});