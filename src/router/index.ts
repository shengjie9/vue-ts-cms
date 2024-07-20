import { FLAG_TOKEN } from '@/constants'
import { localCache } from '@/utils/cache'
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
      component: () => import('@/views/main/index.vue'),
      children: [
        {
          path: '/main/analysis/dashboard',
          component: () => import('@/views/main/analysis/dashboard/dashboard.vue')
        }
      ]
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
  console.log(to.path, 'token123')

  if (to.path === '/main' && !token) {
    console.log('token', token)

    return '/login'
  }
})

export default router
