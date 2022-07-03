import Vue from 'vue'
import { ViteSSG } from 'vite-ssg'
import { createRouter, createWebHistory } from 'vue-router'
import routes from 'virtual:generated-pages'
import App from './App.vue'

import '@unocss/reset/tailwind.css'
import 'prism-theme-vars/base.css'
import './styles/main.css'
import 'uno.css'

export const createApp = ViteSSG(
  App,
  { routes, base: import.meta.env.BASE_URL },
  (ctx) => {
    // install all modules under `modules/`, which will be auto installed
    Object.values(import.meta.globEager('./modules/*.ts')).forEach(mod => mod.install?.(ctx))
  },
)

const app = Vue.createApp(App)
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})
app.use(router)
app.mount('#app')
