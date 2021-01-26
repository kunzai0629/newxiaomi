import { createRouter, createWebHistory } from 'vue-router'
const Home=()=>import('../views/home/home.vue')
const Admin=()=>import('../views/admin/admin.vue')
const My=()=>import('../views/my/my.vue')
const homeChild=()=>import('../views/home/Child/homeChild')

const routes = [
  {
    path:"",
    redirect:"/home"
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },

  {
    path: '/admin',
    name: 'Admin',
    component: Admin
  },
  {
    path: '/my',
    name: 'My',
    component: My
  },

  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/homeChild',
    name: '/homeChild',
    component: homeChild
  },
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
