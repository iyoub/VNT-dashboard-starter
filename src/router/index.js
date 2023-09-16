import { createRouter, createWebHistory } from 'vue-router'
import { ROUTES } from './routes'
import useSetupRouterGuards from './guards'

const ROUTER = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: ROUTES.flat()
})

export function setupRouter(app) {
  app.use(ROUTER)

  useSetupRouterGuards()
}

export default ROUTER
