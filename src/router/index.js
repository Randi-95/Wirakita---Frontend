import SerbaAlat from '@/view/SerbaAlat.vue'
import Beranda from '@/view/Beranda.vue'
import Login from '@/view/Login.vue'
import Register from '@/view/Register.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'Home', component: Beranda, meta: { layout: 'main' } },
  { path: '/login', name: 'Login', component: Login, meta: { layout: 'auth' }},
  { path: '/register', name: 'Register', component: Register, meta: { layout: 'auth' }},
  { path: '/serba-alat', name: 'SerbaAlat', component: SerbaAlat, meta: { layout: 'kategori' }},
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
