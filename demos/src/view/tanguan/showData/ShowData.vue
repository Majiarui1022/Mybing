<template>
  <el-container>
    <el-aside>
     <ShowDataSide
      :BigScriptList="BigScriptList"
      :PartLists="PartLists"
      @showPartAndSystem="showPartAndSystem"
     ></ShowDataSide>
    </el-aside>
    <el-main>
    <ShowDataMain></ShowDataMain>
    </el-main>
  </el-container>
</template>

<script>
    import ShowDataSide from "@/view/tanguan/showData/ShowDataSide";
    import ShowDataMain from "@/view/tanguan/showData/ShowDataMain";
    export default {

        name: "ShowData",
      components: {ShowDataMain, ShowDataSide},
      data(){
          return{
            BigScriptList:[],
            PartLists:[]
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
            this.getScriptNum()
            if(res.data.length>0){
              this.$store.commit("PART_ID",res.data[0].id)              //存入vuex协议ID
            }else{
              this.$store.commit("PART_ID",-1)              //存入vuex协议ID
            }
          }).catch(err=>{
            console.log(err)
          });
        },

        //请求脚本设置时间和次数
        getScriptNum(){
          this.$axios({
            //获取Part
            method: "get",
            url: `/scripts/${this.$store.state.tanguan.ScriptID}/`
          }).then(res=>{
            console.log(res.data)
            this.$store.commit('SCRIPT_SETNUM',res.data)
          }).catch(err=>{
            console.log(err)
          });

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
  .el-container{
    width: 100%;
    height:100%;
  }
  .el-aside{
    width: 5.76rem !important;
    height: 100%;
    overflow: hidden;
    background:rgba(9,30,47,1);
    box-shadow:4px 0px 30px 2px rgba(0, 0, 0, 0.6);
  }
  .el-main{
    padding: 0;
    background: #0B2A44;
    overflow: hidden;


  }
</style>
