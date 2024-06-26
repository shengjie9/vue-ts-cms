import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import pinia from './store'
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'

import 'normalize.css'
import '@/assets/css/index.less'
import { registerIncons } from './global/registerIcons'

const app = createApp(App)

app.use(registerIncons) //注册图标

app.use(router)

app.use(pinia)

// app.use(ElementPlus)

app.mount('#app')
