import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
  ,
  {
    path: '/AddStore',
    name: 'AddStore',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AddStore.vue')
  }, 
  {
    path:'/AddProductPage/:pid',
    name:'AddProductPage', 
    component: () => import(/* webpackChunkName: "about" */ '../views/AddProductPage.vue')
  }, 
  {

    path: '/storeList',
    name: 'storeList',
    component: () => import(/* webpackChunkName: "" */ '../views/storeList.vue')

  },

   {

     path: '/store-Page/:pid',
     name: 'store-Page',
    component: () => import(/* webpackChunkName: "" */ '../views/store-Page.vue')
 
  }, 
  {

    path: '/product-List/:pid',
    name: 'product-List',
    component: () => import(/* webpackChunkName: "" */ '../views/productList.vue')

  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
