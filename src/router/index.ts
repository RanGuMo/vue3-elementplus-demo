import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import NProgress from 'nprogress' // 进度条
import 'nprogress/nprogress.css' // 进度条样式

NProgress.configure({ showSpinner: false }) // 进度条配置 showSpinner表示旋转器是否开启（在右上角显示）

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "LoginRegister" */ '../views/LoginRegister.vue')
  },
  {
    path: '/TailwindCss',
    name: 'TailwindCss',
    component: () => import('../views/TailwindCss.vue')
  },
  {
    path: '/:catchAll(.*)',
    name: '404',
    component: () => import(/* webpackChunkName: "404" */ '../views/404.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to,form,next)=>{
  NProgress.start() // 开启进度条
  next()
})

// 路由后置守卫
router.afterEach(() => {
  NProgress.done() // 进度条完成
})

export default router
