<template>
  <el-header>
    <div class="ToolsHeader">
      <div class="ToolsTit">
        <span>控福调试系统</span>
      </div>
      <div class="Close">
        <span>退出</span>
      </div>
    </div>
  </el-header>
</template>

<script>
    export default {
        name: "Toolsheader"
    }
</script>

<style scoped lang="scss">
  $ToolsWidth:19.206rem;
  $ToolsHeight:10.804rem;
  header{
    height:.8rem !important;
    padding: 0 !important;
  }
  .ToolsHeader{
    padding:.25rem .56rem .25rem .68rem;
    overflow: hidden;
    background:linear-gradient(0deg,rgba(18,22,51,1) 0%,rgba(10,17,36,1) 100%);
    box-shadow:0px 3px 3px 0px rgba(0, 0, 0, 0.23);
    .ToolsTit{
      float: left;
      span{
        font-size:.3rem;
        line-height: .3rem;
        color:rgba(2,246,255,1);
        background:linear-gradient(0deg,rgba(0,137,221,1) 0%, rgba(0,228,255,1) 100%);
        -webkit-background-clip:text;
        -webkit-text-fill-color:transparent;
        display: block;
      }
    }
    .Close{
      float: right;
      span{
        font-size:.2rem;
        font-family:MicrosoftYaHei;
        color:rgba(18,22,51,1);
        line-height:.22rem;
        background:linear-gradient(0deg,rgba(0,137,221,1) 0%, rgba(0,228,255,1) 100%);
        -webkit-background-clip:text;
        -webkit-text-fill-color:transparent;
        display: block;
      }
    }
  }
</style>
