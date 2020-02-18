<template>
    <div class="container">
        <div class="headerWrap">
            <div class="title">
                <a class="log"><img class="wangyi" src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png?imageView&type=webp"></a>
                <div class="search">
                    <img class="icon" src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png?imageView&type=webp">
                    <span>搜好物</span>
                </div>
                <botton class="loginBtn">登录</botton>
            </div>
            <div class="tabList"></div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                
            }
        }
    }
</script>
    
<style lang="stylus" rel="stylesheet/stylus">
    .container
        height 100%
        width 100%
        .headerWrap
            height 148px
            width 100%
            .title
                display flex
                align-items center
                height 88px
                width 100%
                padding  15px
                box-sizing border-box
                float left
                vertical-align middle
                .log
                    display inline-block
                    height 100%
                    .wangyi
                        padding-top 10px
                        width 138px
                        height 40px
                        margin-right 10px
                .search
                    display inline-block
                    width 442px
                    height 56px    
                    text-align left 
                    line-height 56px
                    border-radius 5px
                    background-color #EDEDED
                    .icon
                        display inline-block
                        width 28px
                        height 28px
                        margin-left 20px
                        margin-right 5px
                
                    

                    
                
                    

                



</style>    
