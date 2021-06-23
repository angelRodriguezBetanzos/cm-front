import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
    path: '/page',
      component: () => import('@/views/pages/Index'),
      children: [
        {
          name: 'Lock',
          path: 'lock',
          component: () => import('@/views/pages/Lock'),
        },
        {
          name: 'Login',
          path: 'login',
          component: () => import('@/views/pages/Login'),
        },
        {
          name: 'Pricing',
          path: 'pricing',
          component: () => import('@/views/pages/Pricing'),
        },
        {
          name: 'Register',
          path: 'register',
          component: () => import('@/views/pages/Register'),
        },
      ],
    },
    {
      path: '/',
      component: () => import('@/views/dashboard/Index'),
      children: [
        // Dashboard
        {
          name: 'Dashboard',
          path: '',
          component: () => import('@/views/dashboard/Dashboard'),
        },
        // Pages
        {
          name: 'Teachers',
          path: 'tables/teachers',
          component: () => import('@/views/dashboard/tables/Teachers'),
        },
        {
          name: 'Courses',
          path: 'tables/courses',
          component: () => import('@/views/dashboard/tables/Courses'),
        },
        {
          name: 'Categories',
          path: 'tables/categories',
          component: () => import('@/views/dashboard/tables/Categories'),
        },
        {
          name: 'Users',
          path: 'tables/users',
          component: () => import('@/views/dashboard/tables/Users'),
        },
      ],
    },
  ],
})
