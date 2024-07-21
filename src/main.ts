import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'

import 'normalize.css'
import '@/assets/css/index.less'
import { registerIncons } from './global/registerIcons'

const app = createApp(App)

app.use(registerIncons) //注册图标
//store和router的注册顺序需要注意，store内又重新加载路由配置，等路由加载完后再进行注册
app.use(store)
app.use(router)

// app.use(ElementPlus)

app.mount('#app')
