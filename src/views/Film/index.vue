<template>
    <div>
        <Header />
        <Tabbar />

        <section>
            <router-view />
        </section>
    </div>
</template>

<script>
import Header from '@/components/Header'

import Tabbar from '@/views/Film/Tabbar'
export default {
  name: 'Film',
  components: {
    Tabbar,
    Header
  }

}
</script>

<style lang="scss" scoped>
div{
    width: 100%;
    height: 100%;
    section{
        width: 100%;
        height: calc(100% - 148px);
        overflow: hidden;
    }
}
</style>
