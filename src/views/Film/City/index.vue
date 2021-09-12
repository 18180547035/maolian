<template>
    <div>
        <aside>
            <section>
                <p>A</p>
                <p>B</p>
                <p>C</p>
                <p>D</p>
                <p>E</p>
            </section>
        </aside>
        <article>
            <ul>
                <li>
                    <h2>热门城市</h2>
                    <section>
                        <div>上海</div>
                        <div>北京</div>
                        <div>上海</div>
                        <div>上海</div>
                        <div>北京</div>
                        <div>上海</div>
                        <div>上海</div>
                        <div>北京</div>
                    </section>
                </li>
                <li>
                    <dl>
                        <dt>A</dt>
                        <dd>阿拉善盟</dd>
                        <dd>鞍山</dd>
                        <dd>安庆</dd>
                        <dd>安阳</dd>
                    </dl>
                </li>
                <li>
                    <dl>
                        <dt>B</dt>
                        <dd>北京</dd>
                        <dd>保定</dd>
                        <dd>蚌埠</dd>
                        <dd>包头</dd>
                    </dl>
                </li>
                <li>
                    <dl>
                        <dt>B</dt>
                        <dd>北京</dd>
                        <dd>保定</dd>
                        <dd>蚌埠</dd>
                        <dd>包头</dd>
                    </dl>
                </li>
                <li>
                    <dl>
                        <dt>B</dt>
                        <dd>北京</dd>
                        <dd>保定</dd>
                        <dd>蚌埠</dd>
                        <dd>包头</dd>
                    </dl>
                </li>
            </ul>
        </article>

    </div>
</template>

<script>
export default {
  name: 'City'
}
</script>

<style lang="scss" scoped>
div{
    width: 100%;
    background-color: #FFF5F0;
    overflow: hidden;
    height: 100%;
    aside{
        width: 20px;
        float: right;
        text-align: center;
        height: 100%;
        background-color: white;
        line-height: 100%;
        border-left: 1px solid #E6E6E6;
    }
    article{
        height: 100%;
        overflow-y: scroll;
        overflow-x: hidden;

        ul{
            padding-top: 20px;

            li{
                width: 100%;
                h2{
                    padding-left: 10px;
                    line-height: 30px;
                    background-color: #F0F0F0;
                    font-weight: normal;
                    font-size: 14px;
                }
                section{
                    width: 100%;
                    padding: 6px;
                    text-align: center;
                    overflow: hidden;

                    div{
                        float: left;
                        margin: 6px;
                        width: 28%;
                        height: 30px;
                        border: 1px solid #E6E6E6;
                        background-color: white;
                        line-height: 30px;

                    }
                }
                dl{
                    dt{
                        padding-left: 10px;
                        line-height: 30px;
                        background-color: #F0F0F0;
                        font-weight: normal;
                        font-size: 14px;
                    }
                    dd{
                        margin: 10px;
                    }
                }
            }

        }
    }
}
</style>
