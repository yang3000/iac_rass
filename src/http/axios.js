import axios from 'axios';
import router from '@/router'

export default function $axios(options) {
  return new Promise((resolve, reject) => {
    const instance = axios.create({
      baseURL: 'http://localhost:8081',
      headers: {'Content-Type': 'application/json;charset=UTF-8'},
      timeout: 10000
    })
    
    // response 拦截器
    instance.interceptors.response.use(
      response => {
        let data;
        // IE9时response.data是undefined，因此需要使用response.request.responseText(Stringify后的字符串)
        if (response.data == undefined) {
          data = JSON.parse(response.request.responseText)
        } else {
          data = response.data
        }
        return data
      },
      err => {
        console.error(err)
        return Promise.reject(err) // 返回接口返回的错误信息
      }
    )

    // 请求处理
    instance(options).then(res => {
      resolve(res)
    }).catch(error => {
      reject(error)
    })
  })
}