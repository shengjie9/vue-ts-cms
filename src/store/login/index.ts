import { defineStore } from 'pinia'
import { accountLogin, getUserInfoById, getUserMenuById } from '@/service/login'
import type { IAccount } from '@/types'
import { localCache } from '@/utils/cache'
import { mapMenuToRoutes } from '@/utils/map-menu'
import router from '@/router'
import { FLAG_TOKEN, USERINFO, USERMENU } from '@/constants'

interface IState {
  token: string
  userInfo: any
  userMenu: any
}

const useAccountStore = defineStore('account', {
  state: (): IState => ({
    token: '',
    userInfo: {},
    userMenu: []
  }),
  actions: {
    async accountLoginAction(account: IAccount) {
      //1.账号登录
      const res = await accountLogin(account)
      const { id, token } = res.data
      this.token = token
      localCache.setCache(FLAG_TOKEN, token)

      //2.获取用户的信息
      const userInfo = await getUserInfoById(id)
      localCache.setCache(USERINFO, userInfo.data)
      this.userInfo = userInfo.data

      //3.获取用户菜单信息
      const userMenu = await getUserMenuById(this.userInfo.role.id)
      localCache.setCache(USERMENU, userMenu.data)
      this.userMenu = userMenu.data

      const userRoutes = mapMenuToRoutes(this.userMenu)
      console.log(userRoutes, 'userMenus')

      userRoutes.forEach((item) => router.addRoute('main', item))
      router.push('/main')
    },
    async reloadLocalConfig() {
      const userInfo = localCache.getCache(USERINFO)
      const token = localCache.getCache(FLAG_TOKEN)
      const userMenus = localCache.getCache(USERMENU)

      if (userInfo && token && userMenus) {
        this.userInfo = userInfo
        this.token = token
        this.userMenu = userMenus

        const userRoutes = mapMenuToRoutes(this.userMenu)
        userRoutes.forEach((item) => router.addRoute('main', item))
      }
    }
  }
})

export default useAccountStore
