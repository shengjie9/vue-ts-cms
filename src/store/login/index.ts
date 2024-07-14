import { defineStore } from 'pinia'
import { accountLogin, getUserInfoById, getUserMenuById } from '@/service/login'
import type { IAccount } from '@/types'
import { localCache } from '@/utils/cache'
import router from '@/router'
import { FLAG_TOKEN, USERINFO, USERMENU } from '@/constants'

interface IState {
  token: string
  userInfo: any
  userMenu: any
}

const useAccountStore = defineStore('account', {
  state: (): IState => ({
    token: localCache.getCache(FLAG_TOKEN),
    userInfo: localCache.getCache(USERINFO) ?? {},
    userMenu: localCache.getCache(USERMENU) ?? []
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

      router.push('/main')
    }
  }
})

export default useAccountStore
