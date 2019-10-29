import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import Admin from './views/Admin.vue'
import Overview from './components/Overview.vue'
import Products from './components/Products.vue'
import Orders from './components/Orders.vue'
import Profile from './views/Profile.vue'
import Checkout from './views/Checkout.vue'
import { fb } from './firebase.js'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path:'/checkout',
      name: 'checkout',
      component: Checkout
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
      meta : { requiresAuth: true },
      beforeEnter: (to,from, next) => {
        const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
        const currentUser = fb.auth().currentUser

        if(requiresAuth && !currentUser){
          next('/')
        } else if (currentUser && requiresAuth){
          next()
        } else {
          next()
        }
      },
      children:[
        {
          path:'overview',
          name:'overview',
          component: Overview
        },
        {
          path:'products',
          name:'products',
          component: Products
        }
        ,
        {
          path:'orders',
          name:'orders',
          component: Orders
        },
        {
          path: 'profile',
          name: 'profile',
          component: Profile
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
