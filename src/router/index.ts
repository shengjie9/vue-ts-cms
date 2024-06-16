import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/mian'
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/index.vue')
    },
    {
      path: '/mian',
      name: 'main',
      component: () => import('@/views/main/index.vue')
    },
    {
      path: '/:patchMatch(.*)',
      component: () => import('@/views/not-found/index.vue')
    }
  ]
})

export default router
