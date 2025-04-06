import { createRouter, createWebHistory } from 'vue-router'
import { RouteName } from '@/enums/routeEnums'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: RouteName.Home,
      component: import('../views/HomeView.vue'),
      meta: {
        title: 'Home',
      },
    },
  ],
})

router.beforeEach((to, from, next) => {
  const appName = import.meta.env.VITE__APP_NAME
  document.title = to.meta.title ? `${to.meta.title} | ${appName}` : appName

  next()
})

export default router
