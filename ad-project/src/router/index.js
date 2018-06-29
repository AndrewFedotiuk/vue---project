import Vue from 'vue'
import Router from 'vue-router'
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
      path: '/add/:id',
      name: 'add',
      component: Add
    },
    {
      path: '/list',
      name: 'list',
      component: AddList
    },
    {
      path: '/new',
      name: 'newAdd',
      component: newAdd
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
      component: orders
    }
  ],
  mode: 'history'
})
