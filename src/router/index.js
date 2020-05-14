import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Main from '../views/Main.vue'
import Login from '../views/Login.vue'
import Registrar from '../views/Registrar.vue'
import Restaurante from '../views/Restaurante.vue'
import Profile from '../views/Profile.vue'
import Welcome from '../views/Welcome.vue'

import store from '@/store'


Vue.use(VueRouter)
  
const routes = [
  {
    path: '/welcome',
    name: 'Welcome',
    component: Welcome
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/registrar',
    name: 'Registrar',
    component: Registrar
  },  
  {
    path: '/main',
    component: Main,
 
    children:[
      {
        path: '/',
        
        component: Home
      },
      // {
      //   path: '/about',
      //   name: 'About',
      //   // route level code-splitting
      //   // this generates a separate chunk (about.[hash].js) for this route
      //   // which is lazy-loaded when the route is visited.
      //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      // },
      
      {
        path: '/perfil',
        name: 'Perfil',
        component: Profile,
        meta: { requiresAuth: true }
      
      },
      { 
        path: '/restaurant/:id', component: Restaurante 
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

// GOOD
// router.beforeEach((to, from, next) => {
//   if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
//   else next()
// })

router.beforeEach((to, from, next) => {
  // console.log("this",store.state.user )
  if (to.matched.some(record => record.meta.requiresAuth  )) {
    if(store.state.user ){
      next();
    }
    else{
      next({name: 'Welcome'});
    }
  }
  else next();
});

export default router