<template>
  <div class="footerContainer">
    <div class="zhanwei">
      <div class="footerNav">
        <a class="navItem" :class="{active: $route.path === '/msite'}"  @click="goPath('/firstview')">
          <i class="iconfont icon-shouye " ></i>
          <span >首页</span>
        </a>
        <a class="navItem" :class="{active: $route.path === '/msite'}" @click="goPath('/classification')">
          <i class="iconfont icon-icon-test" ></i>
          <span >分类</span>
        </a>
        <a class="navItem" :class="{active: $route.path === '/msite'}" @click="goPath('/canbuy')">
          <i class="iconfont icon-zhaopian" ></i>
          <span >值得买</span>
        </a>
        <a class="navItem" :class="{active: $route.path === '/msite'}" @click="goPath('/shoopping_cart')">
          <i class="iconfont icon-gouwuche" ></i>
          <span >购物车</span>
        </a>
        <a class="navItem" :class="{active: $route.path === '/msite'}" @click="goPath('/personal_center')">
          <i class="iconfont icon-user" ></i>
          <span >个人中心</span>
        </a>
      </div>
    </div>
    
  </div>
</template>

<script>
  
export default {
    // methods: {
    //   goPath(path){
    //     this.$router.replace(path)
    //   }
    // }
}
</script>


<style lang="stylus" rel="stylesheet/stylus">
  .footerContainer
    width 100%
    height 1.30667rem
    line-height  1.30667rem
    background-color #fff
    position fixed
    left: 0;
    bottom: 0;
    display block
    border-top: 1px solid #d9d9d9;
    box-sizing border-box
    .zhanwei
      width 100%
      height 1.30667rem
      display block
      .footerNav
        height: 1.30667rem
        width 100%
        display flex
        justify-content: space-around
        flex-flow: row nowrap;
        -webkit-box-align: center
        position: relative;
        z-index: 6;
        
        .navItem
          position relative
          width 20%
          text-align center
          height auto 
          i 
            width: .53333rem;
            height: .53333rem;
            font-size 36px
          .active
            color #DD1A21 
          span 
            margin-left .05rem 
        
        
        
        
        
      
      
</style>
