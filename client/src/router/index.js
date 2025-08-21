import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'

const routes = [
  { path: '/', redirect: '/tr' },
  {
    path: '/:locale(tr|en|fr|ar)',
    component: Home
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
