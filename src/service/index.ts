import { localCache } from '@/utils/cache'
import { BASE_URL, TIME_OUT } from './config'
import HYRequest from './request'
import { FLAG_TOKEN } from '@/constants'

const hyRequest = new HYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestSuccessFn(config) {
      const token = localCache.getCache(FLAG_TOKEN)
      if (config.headers) {
        config.headers.Authorization = token
      }
      return config
    }
  }
})

export default hyRequest
