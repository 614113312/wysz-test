<template>
  <div class="footerContainer">
    <div class="navItem">
      <span>首页</span>
    </div>
    <div class="navItem">
      <span>分类</span>
    </div>
    <div class="navItem">
      <span>值得买</span>
    </div>
    <div class="navItem">
      <span>购物车</span>
    </div>
    <div class="navItem">
      <span>个人中心</span>
    </div>
  </div>
</template>

<script>
export default {
 
}
</script>


<style lang="stylus" rel="stylesheet/stylus">
  .footerContainer
    width 100%
    position fixed
    left 0
    bottom 0
    .navItem
      float left  
      width 20%
      text-align center
      &.active
        color orange 
      span 
        font-size 26px
      
</style>
