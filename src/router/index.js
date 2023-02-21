import { createRouter, createWebHistory } from 'vue-router'
import PublicView from '../views/PublicView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
         path: '/',
         name: 'start',
         component: () => import('../views/StartView.vue'),
         meta: { title: 'Fulla' },
        },
        {
            path: '/',
            name: 'public',
            component: PublicView,
            children: [
                {
                    path: 'search',
                    name: 'search',
                    component: () => import('../views/SearchView.vue'),
                    props: route => ({ query: route.query.q }),
                    meta: { title: 'Поиск' },
                },
                {
                    path: 'article/:resultItemId',
                    name: 'article',
                    // route level code-splitting
                    // this generates a separate chunk (About.[hash].js) for this route
                    // which is lazy-loaded when the route is visited.
                    component: () => import('../views/ArticleView.vue'),
                    meta: { title: 'Статья' },
                }
            ]
        },
    ],

    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { top: 0 };
        }
    },
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Fulla' ;
  next();
});

export default router
