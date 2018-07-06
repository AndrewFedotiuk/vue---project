import Vue from 'vue'
import Router from 'vue-router'
import AuthGuard from './auph-guard'
import Home from '@/components/Home'
import Add from '@/components/Ads/Add'
import AddList from '@/components/Ads/AddList'
import newAdd from '@/components/Ads/newAdd'
import Login from '@/components/Auth/Login.vue'
import Registration from '@/components/Auth/Registration'
import orders from '@/components/User/orders'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      name: 'home',
      component: Home
    },
    {
      path: '/Add/:id',
      props: true,
      name: 'add',
      component: Add
    },
    {
      path: '/list',
      name: 'list',
      component: AddList,
      beforeEnter: AuthGuard
    },
    {
      path: '/new',
      name: 'newAdd',
      component: newAdd,
      beforeEnter: AuthGuard
  
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/registration',
      name: 'reg',
      component: Registration
    },
    {
      path: '/orders',
      name: 'orders',
      component: orders,
      beforeEnter: AuthGuard
  
    }
  ],
  mode: 'history'
})
