import Vue from 'vue'
import 'lib-flexible/flexible'
import router from './router'
import App from './App.vue'
import BScroll from 'better-scroll'  
import Swiper from 'swiper'

Vue.config.productionTip = false
Vue.prototype.goPath = function (path) {

  this.$router.replace(path);

};
 
new Vue({
  el:'#app',
  components:{App},
  template: '<App/>',
  router,
  BScroll,
  Swiper
})
