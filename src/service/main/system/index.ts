import hyRequest from '@/service'
import type { IUserQuery } from '@/types/user'

export function postUserListData(queryInfo: IUserQuery) {
  return hyRequest.post({
    url: '/users/list',
    data: queryInfo
  })
}
