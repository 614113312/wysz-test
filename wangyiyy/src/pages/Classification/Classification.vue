<template>
    <div class="outWarp">
        <div class="upContainer">
            <div class="headerWrap">
                <div class="headerContent">
                    <div class="search">
                        <i class="iconfont icon-search3 searchImg"></i>
                        <span class="placeholder">搜索商品, 共22001款好物</span>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="footerWrap">
            <div class="leftList">
                <ul>
                    <li class="firLi">
                        <a class="active bor-lef" style="font-weight:bold">推荐专区</a>
                    </li>
                    <li class="lits">
                        <a style="font-weight:bold">宅家防护</a>
                    </li>
                    <li class="lits">
                        <a style="font-weight:bold">爆品专区</a>
                    </li>
                    <li class="lits">
                        <a style="font-weight:bold">新品专区</a>
                    </li>
                    <li class="lits">
                        <a style="font-weight:bold">居家生活</a>
                    </li>
                    <li class="lits">
                        <a style="font-weight:bold">服饰鞋包</a>
                    </li>
                    <li class="lits">
                        <a style="font-weight:bold">美食酒水</a>
                    </li>
                    <li class="lits">
                        <a style="font-weight:bold">个护清洁</a>
                    </li>
                    <li class="lits">
                        <a style="font-weight:bold">母婴亲子</a>
                    </li>
                    <li class="lits">
                        <a style="font-weight:bold">运动旅行</a>
                    </li>
                    <li class="lits">
                        <a style="font-weight:bold">数码家电</a>
                    </li>
                    <li class="lits">
                        <a style="font-weight:bold">全球特色</a>
                    </li>
                </ul>
            </div>
        <div class="righrCaontainer">
            <div class="tit">
                <img class="titImg" src="https://yanxuan.nosdn.127.net/868844d3288f130c1aa808312dbbd1d8.png?quality=75&type=webp&imageView&thumbnail=0x196">
            </div>
            <div class="shopsContainer">
                <ul>
                    <li class="shopsWrap mar-rig ">
                        <div class="imgWrap">
                            <img src="https://yanxuan.nosdn.127.net/c117ea2f1c4d978eb1f310d6d9ec3226.png?quality=75&type=webp&imageView&thumbnail=144x144">
                        </div>
                        <div class="name">精选好物15元起</div>
                    </li>
                    <li class="shopsWrap mar-rig ">
                        <div class="imgWrap">
                            <img src="https://yanxuan.nosdn.127.net/cda4a56526a230055bea8221a6b7ab11.png?quality=75&type=webp&imageView&thumbnail=144x144">
                        </div>
                        <div class="name">999+好评</div>
                    </li>
                    <li class="shopsWrap">
                        <div class="imgWrap">
                            <img src="https://yanxuan.nosdn.127.net/71a5f1a0299e278f8193c193d8b7d1e4.png?quality=75&type=webp&imageView&thumbnail=144x144">
                        </div>
                        <div class="name">明星商品低至69元</div>
                    </li>
                    <li class="shopsWrap mar-rig ">
                        <div class="imgWrap">
                            <img src="https://yanxuan.nosdn.127.net/da5ac697d47e43bd6ad9ce8b1e5e0060.png?quality=75&type=webp&imageView&thumbnail=144x144">
                        </div>
                        <div class="name">断货补单王39元起</div>
                    </li>
                    <li class="shopsWrap mar-rig ">
                        <div class="imgWrap">
                            <img src="https://yanxuan.nosdn.127.net/25daae363ef6662629d06e70846b983f.png?quality=75&type=webp&imageView&thumbnail=144x144">
                        </div>
                        <div class="name">9.9元超值好物</div>
                    </li>
                    <li class="shopsWrap">
                        <div class="imgWrap">
                            <img src="https://yanxuan.nosdn.127.net/a449c1305adff30ce82922f2e3546cf2.png?quality=75&type=webp&imageView&thumbnail=144x144">
                        </div>
                        <div class="name">宅家囤美食</div>
                    </li>
                    <li class="shopsWrap mar-rig ">
                        <div class="imgWrap">
                            <img src="https://yanxuan.nosdn.127.net/1aa18004d8b43e7bc55d54dd03ee5f29.png?quality=75&type=webp&imageView&thumbnail=144x144">
                        </div>
                        <div class="name">降温降价39元起</div>
                    </li>
                    <li class="shopsWrap">
                        <div class="imgWrap">
                            <img src="https://yanxuan.nosdn.127.net/0cb19987ddd873c693272c60352ba6a7.png?quality=75&type=webp&imageView&thumbnail=144x144">
                        </div>
                        <div class="name">50元幸福好物</div>
                    </li>
                </ul>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .outWarp
        width 100%
        height 100%
        position relative
        .upContainer
            width 100%
            height 88px
            .headerWrap
                width 100%
                height 88px
                position fixed
                left 0
                top 0
                z-index 9
                border-bottom 1px solid #d9d9d9
                .headerContent
                    width 100%
                    height 100%
                    padding 0 .4rem
                    box-sizing  border-box
                    align-items center 
                    display flex
                    background-color #fff
                    
                    .search
                        width 100%
                        height .74667rem
                        font-size .37333rem
                        justify-content center
                        align-items center
                        text-align center
                        background-color #ededed
                        border-radius .10667rem
                        line-height 1.5
                        
                        .searchImg
                            display inline-block
                            vertical-align middle
                            line-height 1.5
                        span 
                            display inline-block
                            color #666
                            margin-left .1rem
                            line-height 1.5
                            font-size .37333rem
        .footerWrap
            height 1072px
            width 100%
            overflow auto
            .leftList
                float left
                width 2.16rem
                height 100%
                background-color #fff
                position relative
                padding .53333rem 0
                box-sizing border-box
                border-right 1px solid #d9d9d9
                .firLi
                    width 100%
                    height: .66667rem;
                    text-align: center;
                    font-size 24px
                    position relative
                    line-height 1.5
                    .bor-lef:before
                        content: ' ';
                        position: absolute;
                        top: 0;
                        left: 0;
                        bottom: 0;
                        width: .08rem;
                        background-color: #ab2b2b;
                .active
                    color  #ab2b2b  
                .lits
                    width: 100%;
                    height: .66667rem;
                    text-align: center;
                    border: none;
                    font-size 24px
                    margin-top: .53333rem
                    line-height 1.5
                    a
                        display: block;
                        line-height: .66667rem;
            .righrCaontainer
                margin-left: 2.16rem;
                padding: .4rem .4rem .28rem;
                height: 1072px;
                overflow: hidden
                box-sizing border-box
                .tit
                    width: 100%;
                    height: 2.56rem;
                    margin-bottom: .42667rem
                    .titImg
                        width: 100%;
                        height: 2.56rem
                .shopsContainer
                    ul
                        .shopsWrap
                            display: inline-block;
                            font-size: 0;
                            width: 1.92rem;
                            vertical-align: top;
                            .name
                                height: .96rem;
                                font-size: .32rem;
                                color: #333;
                                text-align: center;
                                line-height: .48rem;
                                display: block;
                            .imgWrap
                                width: 1.92rem;
                                height: 1.92rem;
                                img 
                                    display: block;
                                    width: 100%;
                                    background: #fff;
                                    height: 100%;
                        .mar-rig 
                            margin-right .45333rem   
                            
                                
</style>