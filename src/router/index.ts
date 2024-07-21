import { FLAG_TOKEN } from '@/constants'
import { localCache } from '@/utils/cache'
import { firstRoute } from '@/utils/map-menu'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/main'
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/index.vue')
    },
    {
      path: '/main',
      name: 'main',
      component: () => import('@/views/main/index.vue'),
      children: []
    },

    {
      path: '/:patchMatch(.*)',
      component: () => import('@/views/not-found/index.vue')
    }
  ]
})

//路由前置守卫
//当页面从 / 跳转到 /main
//from:/ to:/main
router.beforeEach((to) => {
  const token = localCache.getCache(FLAG_TOKEN)
  // console.log(to.path, 'to.path')
  if (to.path === '/main' && !token) {
    return '/login'
  }

  if (to.path === '/main') {
    return firstRoute.path
  }
})

export default router
