import { createWebHistory, createRouter } from "vue-router";

import home from "./pages/home.vue";
import login from "./pages/login.vue";
import register from "./pages/register.vue";
import categoryList from "./components/category/List.vue";
import categoryAdd from "./components/category/Add.vue";
import categoryEdit from "./components/category/Edit.vue";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: home,
    },
    {
        path: '/login',
        name: 'Login',
        component: login,
    },
    {
        path: '/register',
        name: 'Register',
        component: register,
    },
    {
        path: '/category',
        name: 'categoryList',
        component: categoryList,
    },
    {
        path: '/category/add',
        name: 'categoryAdd',
        component: categoryAdd,
    },
    {
        path: '/category/add',
        name: 'categoryEdit',
        component: categoryEdit,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;