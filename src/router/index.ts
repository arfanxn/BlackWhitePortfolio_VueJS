import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: import('../views/AboutView.vue') },
  ],
})

router.beforeEach((to, from, next) => {
  const appName = import.meta.env.VITE__APP_NAME
  document.title = to.meta.title ? `${to.meta.title} | ${appName}` : appName

  next()
})

export default router
