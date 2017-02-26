import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello'
import Home from 'pages/Home'
import GankList from 'pages/GankList'
import GankDetail from 'pages/GankDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path:'/gankList/:id',
      name:'GankList',
      component:GankList
    },
    {
      path:'/gankDetail',
      name:'GankDetail',
      component:GankDetail
    }
  ]
})
