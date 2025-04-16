import { createRouter, createWebHistory } from 'vue-router'
import { useTitle } from '@vueuse/core'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: import('@/views/AboutView.vue') },
    { path: '/builds', component: import('@/views/BuildsView.vue'), meta: { title: 'Builds' } },
    { path: '/certs', component: import('@/views/CertsView.vue'), meta: { title: 'Certs' } },
    { path: '/:pathMatch(.*)*', component: import('@/views/errors/PageNotFoundView.vue') },
  ],
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top when navigating
    return savedPosition || { top: 0 }
  },
})

router.beforeEach((to, from, next) => {
  const appName = import.meta.env.VITE__APP_NAME

  const title = useTitle()
  title.value = to.meta.title ? `${to.meta.title} | ${appName}` : appName

  next()
})

export default router
