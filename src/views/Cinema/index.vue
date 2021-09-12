<template>
    <div>
        <Header />
        <ul>
            <li>
                <aside>
                    <span>1763.5km</span>
                </aside>
                <article>
                    <h2>大地影院(澳东世纪店) <span>22.9</span><mark>元起</mark></h2>
                    <p>金州区大连经济技术开发区澳东世纪3层</p>
                    <p>
                        <span>小吃</span> <span>折扣卡</span>
                    </p>
                </article>
            </li>
            <li>
                <aside>
                    <span>1763.5km</span>
                </aside>
                <article>
                    <h2>大地影院(澳东世纪店) <span>22.9</span><mark>元起</mark></h2>
                    <p>金州区大连经济技术开发区澳东世纪3层</p>
                    <p>
                        <span>小吃</span> <span>折扣卡</span>
                    </p>
                </article>
            </li>
        </ul>
    </div>
</template>

<script>
import Header from '@/components/Header'

export default {
  name: 'Cinema',
  components: {
    Header
  }
}
</script>

<style lang="scss" scoped>
div{
    width: 100%;
    ul{
        width: 100%;
        li{
            height: 76px;
            overflow: hidden;
            border-bottom: 1px solid #E6E6E6;
            margin:0 20px;
            padding: 20px 0;
            article{

                overflow: hidden;
                h2{
                    font-size: 17px;
                    font-weight: normal;
                    span{
                        color: #F03D37;
                        // font-weight: bold;
                        font-size: 17px;
                        font-family: "SimHei";
                    }
                    mark{
                        color: #F03D37;
                        font-size: 11px;
                        background-color: white;
                    }
                }
                p{
                    margin-top: 8px;
                    color: #666666;
                    font-size: 13px;
                    line-height: 20px;
                    span{
                        color: #FF9900;
                        border: 1px solid #FF9900;
                        padding: 0 3px;
                        border-radius: 3px;
                    }
                }
            }
            aside{
                width: 60px;
                float: right;
                line-height: 76px;
                span{
                    color: #666666;
                    font-size: 13px;

                }
            }
        }
    }
}
</style>
