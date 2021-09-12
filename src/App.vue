<template>
  <div id="main-height">
    <keep-alive>
      <router-view/>
    </keep-alive>
    <Footer />
  </div>

</template>
<script>
import Footer from '@/components/Footer'
export default {
  components: {
    Footer
  }

}
</script>
<style lang="scss">
*{ margin : 0; padding : 0;}
ul,li{ list-style: none;}
img{ display: block;}
html,body{ height:100%; font-family: 'Microsoft YaHei','Times New Roman', Times, serif;}
a{text-decoration: none; color: #E54847;}
.clearfix:after{ content:""; display: block; clear:both;}

#main-height{
  width: 100%;
  height: 100%;
}

</style>
