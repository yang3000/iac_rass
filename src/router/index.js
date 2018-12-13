import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
//import Main from '@/components/Main/'
import Login from '@/components/Login'
import api from '@/services/api/'
import {
  resolve
} from 'url';

Vue.use(Router)
const Main = () => import( /* webpackChunkName: "main-page" */ '@/components/Main')

const router = new Router({
  routes: [{
      path: '/',
      redirect: '/main'
    },
    {
      path: '/main',
      component: Main, //resolve => require([`@/components/Main`],resolve),
      children: [{
        path: '',
        component: {
          template: '<div class="content-wrapper">欢迎使用RASS系统</div>'
        }
      }]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    // {
    //   path: '/main',
    //   component: Main,//resolve => require([`@/components/Mcontent/MainContent`],resolve),
    //   children: [{
    //       path: '*',
    //       redirect: '/main'
    //     }
    //   ]
    // },
    {
      path: '*',
      component: {
        template: '<div>404</div>'
      }
    }



  ],
  mode: "history"
})

router.beforeEach((to, from, next) => {
  console.log(router.options.routes)

  // 登录界面登录成功之后，会把用户信息保存在会话
  // 存在时间为会话生命周期，页面关闭即失效。
  let userName = sessionStorage.getItem('user')
  if (to.path === '/login') {
    // 如果是访问登录界面，如果用户会话信息存在，代表已登录过，跳转到主页
    if (userName) {
      next({
        path: '/main'
      })
    } else {
      next()
    }
  } else {
    if (!userName) {
      // 如果访问非登录界面，且户会话信息不存在，代表未登录，则跳转到登录界面
      next({
        path: '/login'
      })
    } else {
      // 加载动态菜单和路由
      addDynamicMenuAndRoutes(userName, to, from)
      next()
    }
  }
})

/**
 * 加载动态菜单和路由
 */
function addDynamicMenuAndRoutes(userName, to, from) {

  if (store.state.app.menuRouteLoaded) {
    console.log(JSON.stringify(store.state.menu.menuTree))
    console.log('动态菜单和路由已经存在.')
    return
  }
  let menuIsInSession = sessionStorage.getItem('menuRouteLoaded')

  if (menuIsInSession) {
    let menu = JSON.parse(sessionStorage.getItem('menuTree'))
    addRouter(menu)
    // 保存加载状态
    store.commit('menuRouteLoaded', true)
    store.commit('setMenuTree', menu)
    router.push({path: to.fullPath})
    return
  }

  api.getMenusInfo()
    .then(res => {

      addRouter(res.data)
      // 保存加载状态
      store.commit('menuRouteLoaded', true)
      sessionStorage.setItem('menuRouteLoaded', true)

      // 保存菜单树
      store.commit('setMenuTree', res.data)
      sessionStorage.setItem('menuTree', JSON.stringify(res.data))
      //let a = () => import(/* webpackChunkName: "admin-lte" */ 'admin-lte')
      //a()

    })
}

function addRouter(data) {
  // 添加动态路由
  let dynamicRoutes = addDynamicRoutes(data)
  //console.log(JSON.stringify(dynamicRoutes))
  //alert(JSON.stringify(dynamicRoutes))
  router.options.routes[1].children = router.options.routes[1].children.concat(dynamicRoutes)

  //console.log(router.options.routes[1].children)
  router.addRoutes(router.options.routes)
}


/**
 * 添加动态(菜单)路由
 * @param {*} menuList 菜单列表
 * @param {*} routes 递归创建的动态(菜单)路由
 */
function addDynamicRoutes(menuList = [], routes = []) {
  var temp = []
  for (let i = 0; i < menuList.length; i++) {
    if (menuList[i].children && menuList[i].children.length > 0) {
      let children_menus = menuList[i].children;
      for (let j = 0; j < children_menus.length; j++) {
        let menu = children_menus[j]
        if (menu.url && /\S/.test(menu.url)) {
          menu.url = menu.url.replace(/^\//, '')
          // 创建路由配置
          var route = {
            path: menu.pathName,
            component: () => import( /* webpackChunkName: "main-page" */ `@/components/Mcontent/${menu.filePath}`), //resolve => require([`@/components/Mcontent/${menu.filePath}`], resolve),
            name: menu.pathName
          }
          routes.push(route)
        }
      }

    }
  }
  //console.log('动态路由加载...')
  //console.log(routes)
  // console.log('动态路由加载完成.')
  return routes
}

export default router
