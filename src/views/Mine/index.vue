<template>
    <div>
        <LoginHeader />
        <section>
            <input type="text" placeholder="账户名/手机号/Email" name="">
        </section>
        <section>
            <input type="password" placeholder="请输入您的密码" name="">
        </section>
        <aside>
            <button>登录</button>
        </aside>
        <article>
            <a href="#">立即注册</a>
            <a href="#">找回密码</a>
        </article>
    </div>
</template>
<script>
import LoginHeader from '@/views/Mine/LoginHeader'
export default {
  name: 'Mine',
  components: {
    LoginHeader
  }
}
</script>
<style lang="scss" scoped>
div{
    width: 100%;
    section{
        width: 100%;
        line-height: 44px;
        border-bottom: 1px solid #CCCCCC;
        input{
            padding: 0 10px;
            width: 100%;
            border: none;
            outline:none;
            box-sizing: border-box;
        }
    }
    aside{

        padding: 14px 10px;
        box-sizing: border-box;
        button{
            width: 100%;
            height: 50px;
            border: none;
            background-color: #E54847;
            font-size: 20px;
            line-height: 50px;
            color: white;
            border-radius: 4px;
        }
    }
    article{
        padding: 0 6px;
        box-sizing: border-box;
        width: 100%;
        display: flex;
        justify-content: space-between;
        a{
            font-size: 12px;
        }
    }
}
</style>
