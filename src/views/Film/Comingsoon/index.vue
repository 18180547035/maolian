<template>
    <div>
        <ul>
            <li>
                <section>
                    <img src="/movie_1.jpg" alt="" style="width: 64px; height: 90px">
                </section>
                <article>
                    <h3>无名之辈</h3>
                    <p>17746人想看</p>
                    <p>主演：xxx</p>
                    <p>2018-11-30上映</p>
                </article>
                <aside>
                    <button>预售</button>
                </aside>
            </li>
            <li>
                <section>
                    <img src="/movie_1.jpg" alt="" style="width: 64px; height: 90px">
                </section>
                <article>
                    <h3>无名之辈</h3>
                    <p>17746人想看</p>
                    <p>主演：xxx</p>
                    <p>2018-11-30上映</p>
                </article>
                <aside>
                    <button>预售</button>
                </aside>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'Comingsoon'
}
</script>

<style lang="scss" scoped>
div{
    width: 100%;
    ul{
        width: 100%;
        li{
            display: flex;
            margin: 0 12px;
            padding: 12px 0;
            border-bottom: 1px solid #E6E6E6;
            section{
                width: 64px;
                height: 90px;
            }
            article{
                margin-left: 10px;
                height: 90px;
                flex: 1;
                overflow: hidden;
                h3{
                    margin-top: 3px;
                    margin-bottom: 3px;
                    font-size: 18px;
                }
                p{
                    font-size: 12px;
                    color: #666666;
                    width: 100%;
                    line-height: 18px;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    span{
                        font-weight: bold;
                        color: #FAAF00;
                    }
                }
            }
            aside{
                line-height: 90px;
                text-align: right;
                width: 100px;
                button{
                    padding: 4px 8px;
                    color: white;
                    background-color: #3C9FE6;
                    border: 2px solid #3C9FE6;
                    border-radius: 4px;
                    cursor: pointer;
                }
            }
        }
    }
}
</style>
