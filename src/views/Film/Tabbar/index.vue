<template>
    <ul>
        <router-link tag="li" to="/film/city"><div><span>成都</span><i class="sanjiao"></i></div></router-link>
        <router-link tag="li" to="/film/nowplaying">正在热映</router-link>
        <router-link tag="li" to="/film/comingsoon">即将上映</router-link>
        <router-link tag="li" to="/film/search"><i class="iconfont icon-fangdajing"></i></router-link>
    </ul>
</template>
<script>
export default {
  name: 'Tabbar'
}
</script>

<style lang="scss" scoped>
ul{
    width: 100%;
    height: 45px;
    border-bottom: 1px solid #E6E6E6;
    display: flex;
    width: 100%;
    justify-content: space-around;
    li{

        line-height: 45px;
        color: #666666;
        position: relative;
        text-align: center;
        font-size: 15px;
        font-weight: bold;
        cursor: pointer;
        div{
            width: 44px;
            span{
                margin-right: 25px;
                font-size: 16px;
                color: black;
                font-weight: normal;
            }
            .sanjiao{
                position: absolute;
                top: 45%;
                left: 38px;
                border: 4px solid transparent;
                border-top-color: #000;
                width: 0px;
                // border-top: 2px solid #000;

            }
        }

        .icon-fangdajing{
            color: #FF000F;
            font-size: 20px;

        }

    }
    li.router-link-active{
        color: #EF4238;
        border-bottom: 2px solid #EF4238;
    }
}
</style>
