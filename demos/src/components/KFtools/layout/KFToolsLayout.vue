<template>
  <div class="ToolsBox">
    <el-container direction="vertical">
      <Toolsheader></Toolsheader>
      <el-container>
        <el-aside>
          <div class="side">
            <ul>
              <li>
                <router-link to="/CKWLTS">CAN调试</router-link>
              </li>
              <li>
                <router-link to="/CKWLTS">电机调试</router-link>
              </li>
              <li>
                <router-link to="/CKWLTS">串口网络调试</router-link>
              </li>
            </ul>
          </div>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
    import Toolsheader from "@/components/KFtools/header/Toolsheader";
    export default {
        name: "KFToolsLayout",
      components: {Toolsheader}
    }
</script>

<style scoped lang="scss">
  $ToolsWidth:19.206rem;
  $ToolsHeight:10.804rem;
  .ToolsBox {
    width: $ToolsWidth;
    height:$ToolsHeight ;
    margin: 0 auto;
  }
  .el-container {
    width: $ToolsWidth;
    height: 100%;
    .el-aside{
      width: 2.5rem !important;
      background:linear-gradient(270deg,rgba(18,22,51,1) 0%,rgba(10,17,36,1) 52%);
      box-shadow:3px 0px 3px 0px rgba(0, 0, 0, 0.23);
      .side{
        ul{
          li{
            padding:.33rem .43rem .29rem .85rem;
            border-bottom: 1px solid #060B22;
            a{
              font-size:.2rem;
              line-height: .2rem;
              font-family:MicrosoftYaHei;
              color:rgba(255,255,255,1);
              display: block;
              &.active{
                background: #14224D;
              }
            }
          }
        }
      }
    }
    .el-main{
      padding:0;
    }
  }

</style>
