import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Detail from '../views/Detail.vue'
import Kategori from '../views/Kategori.vue'
import FilterKategori from '../views/FilterKategori.vue'
import Ingredient from '../views/Ingredient.vue'
import FilterIngredient from '../views/FilterIngredient.vue'
import Area from '../views/Area.vue'
import FilterArea from '../views/FilterArea.vue'
import Favorit from '../views/Favorit.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail
  },
  {
    path: '/kategori',
    name: 'Kategori',
    component: Kategori
  },
  {
    path: '/filterkategori/:name',
    name: 'FilterKategori',
    component: FilterKategori
  },
  {
    path: '/ingredient',
    name: 'Ingredient',
    component: Ingredient
  },
  {
    path: '/filteringredient/:name',
    name: 'FilterIngredient',
    component: FilterIngredient
  },
  {
    path: '/area',
    name: 'Area',
    component: Area
  },
  {
    path: '/filterarea/:name',
    name: 'FilterArea',
    component: FilterArea
  },
  {
    path: '/favorit',
    name: 'Favorit',
    component: Favorit
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue')
  },
  {
    path: '/search',
    name: 'Search',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Search.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
