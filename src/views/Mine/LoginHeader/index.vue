<template>
    <header>
        <i class="iconfont icon-maoyou iconfont-size"></i>
        <span>登录猫脸</span>
    </header>
</template>
<script>
export default {
  name: 'LoginHeader'
}
</script>

<style lang="scss" scoped>
header{
    width: 100%;
    height: 50px;
    background-color: #e54847;
    position: relative;
    text-align: center;
    line-height: 50px;
    color: white;

    .iconfont-size{
        font-size: 40px;
        position: absolute;
        top:5px;
        left: 10px
    }

}
</style>
