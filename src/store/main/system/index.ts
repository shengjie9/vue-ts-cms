import { postUserListData } from '@/service/main/system'
import { defineStore } from 'pinia'
import type { IUserStoreType } from './type'

export const useSystemStore = defineStore('system', {
  state: (): IUserStoreType => ({
    userList: [],
    userTotalCount: 0
  }),
  actions: {
    async postUserListDataAction() {
      const { data } = await postUserListData()
      this.userList = data.list
      this.userTotalCount = data.totalCount
    }
  }
})
