import './assets/css/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { MotionPlugin } from '@vueuse/motion'
import VueLazyLoad from 'vue3-lazyload'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(MotionPlugin)
app.use(VueLazyLoad, {})
app.use(router)

app.mount('#app')
