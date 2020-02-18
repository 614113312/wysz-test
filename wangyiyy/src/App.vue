<template>
  <div id="wrap">
    <router-view></router-view>
    <FooterNav/>
  </div>  
</template>

<script>
import FooterNav from './components/FooterNav/FooterNav'

export default {
  name: 'app',
  components:{FooterNav}
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  html,body{
    height 100%
  }
  *{
    margin 0
    padding 0
  }
  #wrap
    width 100%
    height 100%
</style>
