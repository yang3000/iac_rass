const rootPath = '/api' // 后端 API 根路径

var result_json = {
  login: {
    userId: 1,
    userName: 'yanghao',
    name: '杨浩'
  },
  menus: [
    {
      id: 1,
      url: "/",
      name: "系统管理",
      icon: "fa fa-pie-chart",
      children: [{
          id: 1,
          name: "用户管理",
          url: "main/userManage",
          pathName: 'userManage',
          filePath: 'SystemManage/UserManage',
          icon: "default"
        },
        {
          id: 2,
          name: "任务管理",
          url: "main/demanManage",
          pathName: 'demanManage',
          filePath: 'SystemManage/DemanManage',
          icon: "default"
        }
      ]
    },
    {
      id: 2,
      url: "/",
      name: "需求管理",
      icon: "fa fa-pie-chart",
      children: [{
          id: 1,
          name: "创建需求",
          url: "/main/createDemand",
          pathName: 'createDemand',
          filePath: 'DemanManage/UserManage',
          icon: "default"
        },
        {
          id: 2,
          name: "任务管理",
          url: "/main/demanManage",
          pathName: 'demanManage',
          filePath: 'DemanManage/DemanManage',
          icon: "default"
        }
      ]
    },
  ]
}

const xhr = ({
  method = 'get',
  url,
  body = null
}) => {
  const defer = $.Deferred()
  setTimeout(function () {
    if (url.indexOf('getMenu') != -1)
      defer.resolve({
        data: result_json.menus
      })
    else if (url.indexOf('checkLogin') != -1)
      defer.resolve({
        data: result_json.login
      })

  }, 0)
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
