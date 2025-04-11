import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: import('@/views/AboutView.vue') },
    { path: '/certs', component: import('@/views/CertsView.vue'), meta: { title: 'Certs' } },
    { path: '/test', component: import('@/views/TestView.vue') },
  ],
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top when navigating
    return savedPosition || { top: 0 }
  },
})

router.beforeEach((to, from, next) => {
  const appName = import.meta.env.VITE__APP_NAME
  document.title = to.meta.title ? `${to.meta.title} | ${appName}` : appName

  next()
})

export default router
