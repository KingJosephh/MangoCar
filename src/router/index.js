import { createRouter, createWebHashHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    component: () => import('../views/UserBoard.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/page2',
    component: () => import('../views/CarPage2.vue')
  },
  {
    path: '/page3',
    component: () => import('../views/CarPage3.vue')
  },
  {
    path: '/page4',
    component: () => import('../views/CarPage4.vue')
  },
  {
    path: '/page5',
    component: () => import('../views/CarPage5.vue')
  },
  {
    path: '/page6/:carListId',
    name: 'page6',
    component: () => import('../views/CarPage6.vue')
  },
  {
    path: '/page7/:managerId',
    name: 'page7',
    component: () => import('../views/CarPage7.vue')
  },
  {
    path: '/swiperImg',
    component: () => import('../components/carImgSwiperBig.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
