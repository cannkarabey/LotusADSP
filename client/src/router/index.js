import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Treatments from '../pages/Treatments.vue'
import Doctors from '../pages/Doctors.vue'
import Contact from '../pages/Contact.vue'



const routes = [
    { path: '/', redirect: '/tr' },
    {
        path: '/:locale(tr|en|fr|ar)',
        component: { template: '<router-view />' },
        children: [
            { path: '', component: Home },
            { path: 'about', component: About },
            { path: 'treatments', component: Treatments },
            { path: 'doctors', component: Doctors },
            { path: 'contact', component: Contact }
        ]
    }
]


const router = createRouter({ history: createWebHistory(), routes })


router.beforeEach((to, _from, next) => {
    const locale = to.params.locale
    if (locale) {
        document.documentElement.lang = locale
        document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr'
    }
    next()
})


export default router