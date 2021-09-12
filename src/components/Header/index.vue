<template>
    <header>
        <i class="iconfont icon-maoyou iconfont-size"></i>
        <span>猫脸电影</span>
    </header>
</template>
<script>
export default {
  name: 'Header'
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
