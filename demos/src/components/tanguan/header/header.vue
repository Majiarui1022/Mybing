<template>
  <div>
    <el-header>
        <header>
          <div class="headerLeft fl">
            <span>配置协议</span>
          </div>
          <div class="headerRight fl">
            <div class="router_linkTab fl">
              <router-link :to="{name:'DBCAnalysisMain'}" class="fl">
                <p>DBC解析</p>
              </router-link>
              <router-link :to="{name:'Configure'}" class="fl">
                <p>配置协议</p>
              </router-link>
            </div>
          </div>
          <div class="headerBack fr">
            <span>返回</span>
          </div>
        </header>
    </el-header>
  </div>
</template>

<script>
    export default {
        name: "Vheader"
    }
</script>

<style lang="scss">

  .el-header{
    width: 100%;
    height:.8rem;
    padding:0;
  }
  header{
    width: 100%;
    height:100% !important;
    background:linear-gradient(0deg,rgba(18,22,51,1) 0%,rgba(10,17,36,1) 100%);
    box-shadow:0px 3px 3px 0px rgba(0, 0, 0, 0.23);
    overflow: hidden;
    .headerLeft{
      width: 5.76rem;
      height:100%;
      span{
        font-size:.3rem;
        font-family:MicrosoftYaHei;
        color:SiceColor();
        line-height:.8rem;
        background:linear-gradient(0deg,rgba(0,137,221,1) 0%, rgba(0,228,255,1) 100%);
        -webkit-background-clip:text;
        -webkit-text-fill-color:transparent;
        display: block;
        text-indent: .34rem;
      }
    }
    .headerRight{
      height:100%;
      overflow: hidden;
      .router_linkTab{
        a{
          width: 2.49rem;
          height:.8rem;
          line-height:.8rem;
          font-size:.3rem;
          font-family:$FontFamily;
          color:#00C8F4;
          -webkit-background-clip:text;
          text-align: center;
        }
      }
    }
    .headerBack{
      font-size:.2rem;
      font-family:MicrosoftYaHei;
      color:rgba(18,22,51,1);
      line-height:.8rem;
      background:linear-gradient(0deg,rgba(0,137,221,1) 0%, rgba(0,228,255,1) 100%);
      -webkit-background-clip:text;
      -webkit-text-fill-color:transparent;
      margin-right: .56rem;
    }
  }


  .router-link-active p {
    //.router-link-active 指定
    color: #fff;
    background: url("../../../assets/tanguan/img/linkactive.png") !important;
    background-repeat: no-repeat !important;
    background-size: 100% 100% !important;
  }
</style>
