import hyRequest from '..'
import type { IAccount } from '@/types'

export function accountLogin(account: IAccount) {
  return hyRequest.post({
    url: '/login',
    data: account
  })
}
