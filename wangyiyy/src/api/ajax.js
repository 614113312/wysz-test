import axios from 'axios'
// import router from '../router'
import {MessageBox} from 'mint-ui'
import qs from 'qs'

const instance = axios.create({
    baseURL: '/api', // 请求的基本路径
    timeout: 10000, // 超时时间
})
instance.interceptors.request.use(config => {
    //批量修改数据
    if(config.method.toUpperCase() === 'POST' && (config.data instanceof Object)){
      config.data = qs.stringify(config.data)
    }
})    
instance.interceptors.response.use(
    response => response.data,
    error => {
      
       if(error.response.status === 404){
          // 3. 请求404
          MessageBox.alert('请求的资源不存在')
        }else {
          // 4. 其他
          MessageBox.alert('请求出错')
        }
      return new Promise(() => {}) // 手动返回状态pending的promise实例，避免在错误情况下进入下一个成功的回调
    }
  )
  
  
  
  
  export default instance
  