import { createPinia } from 'pinia'
import type { App } from 'vue'
import useAccountStore from './login/index'

const pinia = createPinia()

const registerStore = (app: App) => {
  console.log('pinia即将开始注册')
  //1.先进行注册pinia
  app.use(pinia)
  const store = useAccountStore()
  store.reloadLocalConfig()
}

export default registerStore
