import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [{
      path: 'home',
      name: 'Home',
      component: () => import('@/views/home/index'),
      meta: { title: '首页', icon: 'dashboard' }
    }]
  },

  {
    path: '/userSettings',
    component: Layout,
    redirect: '/userSettings/table',
    children: [
      {
        path: 'userInfo',
        name: 'UserInfo',
        component: () => import('@/views/userSettings/UserInfo'),
        meta: { title: '用户管理', icon: 'el-icon-s-help' }
      }
    ]
  },

  {
    path: '/userSettingss',
    component: Layout,
    redirect: '/userSettingss/table',
    children: [
      {
        path: 'loginLog',
        name: 'LoginLog',
        component: () => import('@/views/userSettings/LoginLog'),
        meta: { title: '登录日志', icon: 'table' }
      }
    ]
  },

  {
    path: '/exhibitionManagement',
    component: Layout,
    redirect: '/exhibitionManagement/table',
    children: [
      {
        path: 'ExhibitionManagement',
        name: 'ExhibitionManagement',
        component: () => import('@/views/exhibitionManagement/ExhibitionManagement'),
        meta: { title: '展会管理', icon: 'form' }
      }
    ]
  },

  {
    path: '/exchangecenter',
    component: Layout,
    redirect: '/exchangecenter/table',
    children: [
      {
        path: 'ExchengeCenter',
        name: 'ExchengeCenter',
        component: () => import('@/views/exchangecenter/ExchangeCenter'),
        meta: { title: '交流中心', icon: 'nested' }
      }
    ]
  },

  {
    path: '/setup',
    component: Layout,
    redirect: '/setup/table',
    children: [
      {
        path: 'SetUp',
        name: 'SetUp',
        component: () => import('@/views/setup/SetUp'),
        meta: { title: '设置', icon: 'link' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
