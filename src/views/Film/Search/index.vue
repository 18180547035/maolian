<template>
    <div>
        <article>
            <div>
                <i class="iconfont icon-fangdajing"></i>
                <input type="text">
            </div>
        </article>
        <section>
            <h2>电影/电视剧/综艺</h2>
        </section>
        <main>
            <ul>
                <li>
                    <div>
                        <img src="/movie_1.jpg" alt="">
                        <hgroup>
                            <h3>无名之辈</h3>
                            <p>A Cool Fish</p>
                            <p>剧情，喜剧，犯罪</p>
                            <p>2018-11-16</p>
                        </hgroup>
                    </div>
                    <aside>
                        <span>8.5</span>
                    </aside>

                </li>
                <li>
                    <div>
                        <img src="/movie_1.jpg" alt="">
                        <hgroup>
                            <h3>无名之辈</h3>
                            <p>A Cool Fish</p>
                            <p>剧情，喜剧，犯罪</p>
                            <p>2018-11-16</p>
                        </hgroup>
                    </div>
                    <aside>
                        <span>8.5</span>
                    </aside>

                </li>
                <li>
                    <div>
                        <img src="/movie_1.jpg" alt="">
                        <hgroup>
                            <h3>无名之辈</h3>
                            <p>A Cool Fish</p>
                            <p>剧情，喜剧，犯罪</p>
                            <p>2018-11-16</p>
                        </hgroup>
                    </div>
                    <aside>
                        <span>8.5</span>
                    </aside>

                </li>
                <li>
                    <div>
                        <img src="/movie_1.jpg" alt="">
                        <hgroup>
                            <h3>无名之辈</h3>
                            <p>A Cool Fish</p>
                            <p>剧情，喜剧，犯罪</p>
                            <p>2018-11-16</p>
                        </hgroup>
                    </div>
                    <aside>
                        <span>8.5</span>
                    </aside>

                </li>
                <li>
                    <div>
                        <img src="/movie_1.jpg" alt="">
                        <hgroup>
                            <h3>无名之辈</h3>
                            <p>A Cool Fish</p>
                            <p>剧情，喜剧，犯罪</p>
                            <p>2018-11-16</p>
                        </hgroup>
                    </div>
                    <aside>
                        <span>8.5</span>
                    </aside>

                </li>
            </ul>
        </main>
    </div>
</template>

<script>
export default {
  name: 'Search'
}
</script>

<style lang="scss" scoped>
div{
    width: 100%;
    height: 100%;
    article{

        padding: 8px 10px;
        background-color: #F5F5F5;
        div{
            background-color: white;
            border-radius: 6px;
            border: 1px solid #E6E6E6;
            box-sizing: border-box;
            height: 30px;
            line-height: 30px;
            display: flex;

            i{
                margin: 0 4px 0 10px;
                font-size: 14px;
            }
            input{
                flex: 1;

                border: none;
                background-color: transparent;
                outline: none;
            }
        }
    }
    section{
        height: 38px;
        line-height: 38px;
        border-top: 1px solid #E6E6E6;
        border-bottom: 1px solid #E6E6E6;
        h2{
            margin-left: 12px;
            color: #999999;
            font-size: 15px;
        }
    }
    main{
        height: calc(100% - 86px);
        overflow: auto;

        ul{
            width: 100%;
            li{
                padding: 10px 12px;
                display: flex;
                border-bottom: 1px dashed #C9C9C9;
                div{
                    flex: 1;
                    img{
                        float: left;
                        width: 60px;
                        height: 84px;
                    }
                    hgroup{
                        margin-left: 12px;
                        float: left;
                        h3{
                            font-size: 18px;
                            font-weight: normal;
                        }
                        p{
                            font-size: 12px;
                            line-height: 20px;
                        }
                    }
                }
                aside{
                    width: 20px;
                    span{
                        font-family: SimHei;
                        color: #FD7103;
                    }
                }
            }
        }
    }
}
</style>
