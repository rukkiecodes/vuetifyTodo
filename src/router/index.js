import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        component: () => import('@/views/Home.vue')
    },
    {
        path: '/post',
        component: () => import('@/views/Post.vue')
    },
    {
        path: '/about',
        component: () => import('@/views/About.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router