import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/index.js'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Login from '../views/user/Login.vue'
import Register from '../views/user/Register.vue'
import Me from '../views/user/Me.vue'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/user/login',
      name: 'login',
      component: Login
    },
    {
      path: '/user/register',
      name: 'register',
      component: Register
    },
    {
      path: '/user/me',
      name: 'me',
      component: Me,
      meta: { 
        requiresAuth: true
      }
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/user/login/') 
  } else {
    next() 
  }
})
export default router
