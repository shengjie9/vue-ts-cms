import hyRequest from '..'
import type { IAccount } from '@/types'

export function accountLogin(account: IAccount) {
  return hyRequest.post({
    url: '/login',
    data: account
  })
}

export function getUserInfoById(userId: number) {
  return hyRequest.get({
    url: `/users/${userId}`
  })
}

export function getUserMenuById(userId: number) {
  return hyRequest.get({
    url: `/role/${userId}/menu`
  })
}
