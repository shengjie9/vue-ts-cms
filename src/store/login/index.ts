import { defineStore } from 'pinia'
import { accountLogin } from '@/service/login'
import type { IAccount } from '@/types'
import { localCache } from '@/utils/cache'

const FLAG_TOKEN = 'token'
// const FLAG_ID = 'id'
// const FLAG_NAME = 'name'

const useAccountStore = defineStore('account', {
  state: () => ({
    id: '',
    token: localCache.getCache(FLAG_TOKEN),
    name: ''
  }),
  actions: {
    accountLoginAction(account: IAccount) {
      accountLogin(account).then((res) => {
        const { id, name, token } = res.data
        this.id = id
        this.name = name
        this.token = token
        localCache.setCache(FLAG_TOKEN, token)
      })
    }
  }
})

export default useAccountStore
