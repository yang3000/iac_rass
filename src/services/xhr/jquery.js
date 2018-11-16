const rootPath = '/api' // 后端 API 根路径


const xhr = ({ method = 'get', url, body = null }) => {
  const defer = $.Deferred()
  setTimeout(function(){
    defer.resolve(
      {
        data:[
              {
                id:1,
                url: "/",
                name: "系统管理",
                icon: "fa fa-pie-chart",
                children: [
                  {
                    id:1,
                    url: "/userManage",
                    name: "用户管理",
                    icon: "default"
                  },
                  {
                    id:2,
                    url: "/systemSetting",
                    name: "系统设置",
                    icon: "default"
                  }
                ]
              }
        ]
      }
    )
  },100)
  return defer.promise()
}


// const xhr = ({ method = 'get', url, body = null }) => {
//   // 由于引入了 es6-shim，因此这里完全可以使用原生 Promise
//   const defer = $.Deferred()

  

//   $.ajax({
//     type: method,
//     url: rootPath + url,
//     data: body
//   })
//   .done(res => {
//     const { success, errMsg, data } = res
//     if (!success) {
//       $.toast({ heading: '操作失败', text: errMsg, icon: 'warning' })
//       return defer.reject(res)
//     }
//     defer.resolve(data)
//   })
//   .fail(err => {
//     $.toast({ heading: '请求 API 失败', icon: 'error', stack: false })
//     console.warn(err)
//   })

//   return defer.promise()
// }

export default xhr
