import { createRouter, createWebHistory } from 'vue-router'
import PublicView from '../views/PublicView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'public',
            component: PublicView,
            children: [
                {
                    path: '/',
                    name: 'search',
                    component: () => import('../views/SearchView.vue'),
                    meta: { title: 'Searcb page' },
                },
                {
                path: 'article/:resultItemId',
                name: 'article',
                // route level code-splitting
                // this generates a separate chunk (About.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import('../views/ArticleView.vue')
                }
            ]
        },
    ]
})

export default router
