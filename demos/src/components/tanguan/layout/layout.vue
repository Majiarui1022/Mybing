<template>
  <div class="layout">
    <el-container direction="vertical">
      <Vheader></Vheader>
     <router-view></router-view>
    </el-container>
  </div>
</template>

<script>
  import Vheader from '../header/header'
    export default {
        name: "layout",
      components:{
        Vheader,
      }
    }
</script>

<style lang="scss" scoped>
  .layout {
    /*width: 19.206rem;*/
    /*height: 19.206rem;*/
    /*margin:0 auto;*/
    height: 100%;
  }
  .el-container {
    height: 100%;
  }

</style>
