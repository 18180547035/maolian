<template>
    <footer>
        <ul>
            <router-link tag="li" to="/film">
                <div>
                    <i class="iconfont icon-dianying"></i><br>电影
                </div>
            </router-link>
            <router-link tag="li" to="/cinema">
                <div>
                    <i class="iconfont icon-yingyuan "></i><br>影院
                </div>
            </router-link>
            <router-link tag="li" to="/mine">
                <div>
                    <i class="iconfont icon-wode "></i><br>我的
                </div>
            </router-link>
        </ul>
    </footer>
</template>

<script>
export default {
  name: 'Header'
}
</script>
<style lang="scss" scoped>
footer{
    height: 50px;
    position: fixed;
    background-color: white;
    bottom: 0;
    width: 100%;
    border-top: 2px solid #EBE8E3;
    ul{
        display: flex;
        height: 100%;
        width: 100%;
        li{
            flex: 1;
            text-align: center;
            font-size: 14px;
            height: 100%;
            cursor: pointer;
            div{
                margin-top: 5px;
                i{
                    font-size: 20px;
                }
            }
        }
        li.router-link-active{
            color: #f03d37;
        }
    }
}
</style>
