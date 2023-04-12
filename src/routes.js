import {createWebHistory, createRouter} from 'vue-router'

import DashboardPage from './pages/main/DashboardPage.vue'
import LoginPage from './pages/auth/LoginPage.vue'
import RegisterPage from './pages/auth/RegisterPage.vue'

const routes = [
    {path: "/", name: "Dashboard", component: DashboardPage},

    {path: "/login", name: "Login", component: LoginPage},
    {path: "/register", name: "Register", component: RegisterPage},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;