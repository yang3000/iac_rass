var xhr = require('./jquery').default

/**
 * XHR 请求接口定义
 * @param  {String} options.method 请求方法（默认为 get）
 * @param  {String} options.url    请求路径（基于 rootPath 地址）
 * @param  {Object} options.body   请求体（例如后端 Express 可使用 req.body 获取该对象）
 * @return {Promise}
 *
 * 本 Demo 的 API 封装格式为 { success: <Boolean>, errMsg: <String>, data: <Any> }
 */
export default xhr
