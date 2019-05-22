<template>
  <el-container>
    <el-aside>
      <DBCAnalysisSide
        :BigScriptList="BigScriptList"
        :PartLists="PartLists"
        @showPartAndSystem="showPartAndSystem"
        @SHowPartAllData="SHowPartAllData"
      ></DBCAnalysisSide>
    </el-aside>
    <el-main>
      <DBCAnalysisMain
        :CANList="CANList"
      ></DBCAnalysisMain>
      <DBCAnalysisMainTwo
        :CANList="CANList"
      ></DBCAnalysisMainTwo>
<!--      <router-view></router-view>-->
    </el-main>
  </el-container>
</template>

<script>
    import DBCAnalysisSide from "@/view/tanguan/DBCAnalysis/DBCAnalysisSide";
    import DBCAnalysisMain from "@/view/tanguan/DBCAnalysis/DBCAnalysisMain";
    import DBCAnalysisMainTwo from "@/view/tanguan/DBCAnalysis/DBCAnalysisMainTwo";
    export default {
        name: "DBCAnalysis",
      components: {DBCAnalysisMainTwo, DBCAnalysisMain,DBCAnalysisSide},
      data(){
          return{
            BigScriptList:[],
            PartLists:[],
            CANList:[]
          }
      },
      methods:{

        // 请求协议列表
        getScriptList(){
          this.$axios({
            method: "get",
            url: "scripts/"
          }).then(res=>{
            // console.log(res.data)
            this.BigScriptList = res.data;
            this.$store.commit("TANSCRIPT_ID",res.data[0].id)                //存入vuex协议ID
            this.getPartList()
          }).catch(err=>{
            console.log(err)
          })
        },


        // // 请求Part列表
        getPartList(){
          let that = this

          this.$axios({
            //获取Part
            method: "get",
            url: `parts/?script=${this.$store.state.tanguan.ScriptID}`
          }).then(res=>{
            console.log(res.data)
            this.PartLists = res.data;
            if(res.data.length>0){
              this.$store.commit("PART_ID",res.data[0].id)              //存入vuex协议ID
              this.getCan()
            }else{
              this.$store.commit("PART_ID",-1)              //存入vuex协议ID
              this.CANList = []
            }
          }).catch(err=>{
            console.log(err)
          });
        },


        getCan(){
          this.$axios({
            method:"get",
            url:`carbon_tank/orders/?part=${this.$store.state.tanguan.PartID}`
          }).then(res=>{
            console.log(res.data)
            this.CANList = res.data;
          }).catch((err=>{
            console.log(err)
          }))
        },


        SHowPartAllData(){
          this.getCan();
        },
        //子组件点击协议再次请求part  system
        showPartAndSystem(){
          this.getPartList()
        },
      },
      created() {
        this.getScriptList()
      }
    }
</script>

<style scoped lang="scss">
  .el-aside{
    width: 5.76rem !important;
  }
  .el-main{
    padding: 0;
    background: #071225;
  }
</style>
