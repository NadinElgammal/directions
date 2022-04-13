import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductsView from '../views/ProductsView'
// import ProductProfile from './views/ProductProfile.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
 
  },
  {
    path: '/products',
    name: 'products',
    component: ProductsView
  },
  {
    path: '/productprofile',
    name: 'productprofile'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
