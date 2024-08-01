import { postUserListData } from '@/service/main/system'
import { defineStore } from 'pinia'
import type { IUserStoreType } from './type'
import type { IUserQuery } from '@/types/user'

export const useSystemStore = defineStore('system', {
  state: (): IUserStoreType => ({
    userList: [],
    userTotalCount: 0
  }),
  actions: {
    async postUserListDataAction(queryInfo: IUserQuery) {
      const { data } = await postUserListData(queryInfo)
      this.userList = data.list
      this.userTotalCount = data.totalCount
    }
  }
})
