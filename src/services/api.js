import xhr from './xhr/'

export default {
   /**
   * 检测当前用户是否已经登录
   * @resolve {Object} userData / null
   */
  checkLogin () {
    return xhr({
      url: '/auth/checkLogin'
    })
  },

  /**
   * 登录
   * @param  {String} userData.username
   * @return {Object} userData
   */
  login (userData) {
    return xhr({
      method: 'post',
      url: '/auth/login',
      body: userData
    })
  }

}