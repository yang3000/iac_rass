export default {
    state: {
        menuRouteLoaded:false,    // 菜单和路由是否已经加载
        bodyBackGroundColor: '#777777'
    },
    getters: {
  
    },
    mutations: {
        menuRouteLoaded(state, menuRouteLoaded){  // 改变菜单和路由的加载状态
            state.menuRouteLoaded = menuRouteLoaded;
        },
        bodyBackGroundColor(state, bodyBackGroundColor){  // 改变菜单和路由的加载状态
            state.bodyBackGroundColor = bodyBackGroundColor;
        }
    },
    actions: {
    }
}