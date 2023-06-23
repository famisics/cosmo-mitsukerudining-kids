import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/find',name: 'find',
      component: () => import('../views/FindView.vue')
    },
    {
      path: '/list',name: 'list',
      component: () => import('../views/ListView.vue')
    },
    {
      path: '/fav',name: 'fav',
      component: () => import('../views/FavView.vue')
    },
    {
      path: '/guide',name: 'guide',
      component: () => import('../views/GuideView.vue')
    },
    {
      path: '/settings',name: 'settings',
      component: () => import('../views/SettingsView.vue')
    },
    {
      path: '/@:sid',name: 'sid',
      component: () => import('../views/SidView.vue')
    },
    {
      path: '/:catchAll(.*)',
      component: () => import('../views/NotFound.vue')
    }
  ]
})

export default router
