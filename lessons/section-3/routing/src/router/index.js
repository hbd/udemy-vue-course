import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import ViewProfile from '@/components/ViewProfile'

// Use the Router plugin.
Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Home'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      title: 'About'
    }
  },
  {
    path: '/profile/:userId',
    name: 'ViewProfile',
    component: ViewProfile,
    meta: {
      title: 'Profile'
    }
  }
]

const router = new Router({
  routes,
  mode: 'hash'
})

router.beforeEach((to, from, next) => {
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title)

  if (nearestWithTitle) document.title = nearestWithTitle.meta.title

  next()
})

export default router
