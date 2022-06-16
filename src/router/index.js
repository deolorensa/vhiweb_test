import Vue from 'vue'
import VueRouter from 'vue-router'
import UserList from '../views/UserList.vue'
import LoginPage from '../views/LoginPage.vue'
import UserDetail from '../views/UserDetail.vue'
import NotFound from '../views/NotFound.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/user',
    name: 'user',
    component: UserList,
    meta: { requiresAuth: true }
  },
  {
    path: '/',
    name: 'login',
    component: LoginPage,
    meta: { requiresAuth: false }
  },
  {
    path: '/user/:id',
    name: 'detail',
    component: UserDetail,
    meta: { requiresAuth: true }
  },
  {
    path: '/notFound',
    name: 'notFound',
    component: NotFound,
    meta: { requiresAuth: false }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes 
})


router.beforeEach((to, _, next) => {
  if (to.name == "login" && store.state.token) {
    next({
      name: 'user'
    })
  }
  if (to.matched.length == 0 ) {
    next({
      name: 'notFound'
    })
  }
  // instead of having to check every route record with
  // to.matched.some(record => record.meta.requiresAuth)
  if (to.meta.requiresAuth && !store.state.token) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    next({
      name: 'login'
    })
  }
  next() 
})
export default router
