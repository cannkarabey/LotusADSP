import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'

const routes = [
  // varsayılan olarak TR'ye yönlendir
  { path: '/', redirect: '/tr' },

  // anasayfa (locale'li)
  {
    path: '/:locale(tr|en|fr|ar)',
    component: Home,
  },

  // ---- TEDAVİ SAYFALARI (slug'lar TreatmentsSection ile bire bir aynı) ----
  {
    path: '/:locale(tr|en|fr|ar)/treatments/emax-kaplama',
    name: 'treatments-emax',
    component: () => import('../pages/treatments/EMax.vue'),
  },
  {
    path: '/:locale(tr|en|fr|ar)/treatments/zirkonyum-kaplama',
    name: 'treatments-zirkon',
    component: () => import('../pages/treatments/Zirconium.vue'),
  },
  {
    path: '/:locale(tr|en|fr|ar)/treatments/laminate-yaprak-dis',
    name: 'treatments-laminate',
    component: () => import('../pages/treatments/Laminate.vue'),
  },
  {
    path: '/:locale(tr|en|fr|ar)/treatments/implant-tedavisi',
    name: 'treatments-implant',
    component: () => import('../pages/treatments/Implant.vue'),
  },
  {
    path: '/:locale(tr|en|fr|ar)/treatments/immediat-anlik-implant',
    name: 'treatments-immediate',
    component: () => import('../pages/treatments/ImmediateImplant.vue'),
  },
  {
    path: '/:locale(tr|en|fr|ar)/treatments/beyazlatma-bleaching',
    name: 'treatments-bleaching',
    component: () => import('../pages/treatments/Bleaching.vue'),
  },
  {
    path: '/:locale(tr|en|fr|ar)/treatments/inley-onley',
    name: 'treatments-inley-onley',
    component: () => import('../pages/treatments/InleyOnley.vue'),
  },
  {
    path: '/:locale(tr|en|fr|ar)/treatments/kanal-tedavisi',
    name: 'treatments-endo',
    component: () => import('../pages/treatments/Endodontics.vue'),
  },
  {
    path: '/:locale(tr|en|fr|ar)/treatments/ortodontik-tedaviler',
    name: 'treatments-ortho',
    component: () => import('../pages/treatments/Orthodontics.vue'),
  },
  {
    path: '/:locale(tr|en|fr|ar)/treatments/cocuk-dis-hekimligi',
    name: 'treatments-pedodonti',
    component: () => import('../pages/treatments/Pedodonti.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      // her zaman hash yerine tam en üste götür
      return { left: 0, top: 0 }
    }
    return { left: 0, top: 0 }
  }
})


export default router
