import VueRouter from 'vue-router'

import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'

import auth from './auth'

const requireAuth =  (to, _from, next) => {
  if(!auth.user.authenticated) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
}

const afterAuth = (_to, from, next) => {
  if(auth.user.authenticated) {
    next(from.path)
  } else {
    next()
  }
}

export const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Home, beforeEnter: requireAuth },
    { path: '/login', component: Login, beforeEnter: afterAuth },
    { path: '/signup', component: Signup, beforeEnter: afterAuth },
    { path: '*', redirect: "/" }
  ]
})
