<template>
  <el-container>
    <el-aside>
      <Configureside
        :BigScriptList="BigScriptList"
        :PartLists="PartLists"
        @showPartAndSystem="showPartAndSystem"
        @SHowPartAllData="SHowPartAllData"
      ></Configureside>
    </el-aside>
    <el-main>
      <Configuremain
        :SystemList="SystemList"
        :CANList="CANList"
        @SyetemJSON="SyetemJSON"
        @ADDParts="ADDParts"
      ></Configuremain>
    </el-main>
    <ConfigureEnit
      :BigScriptList="BigScriptList"
      @ADDScript="ADDScript"
    ></ConfigureEnit>
  </el-container>
</template>

<script>
    import Configureside from "@/view/tanguan/Configure/Configureside";
    import Configuremain from "@/view/tanguan/Configure/Configuremain";
    import ConfigureEnit from "@/view/tanguan/Configure/enit";
    export default {
        name: "Configure",
      components: {ConfigureEnit, Configuremain, Configureside},

      data(){
        return{
          BigScriptList:[],
          PartLists:[],
          SystemList:{},
          CANList:[],    ///CAN列表数据
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

          console.log('我执行了')
          this.$axios({
            //获取Part
            method: "get",
            url: `parts/?script=${this.$store.state.tanguan.ScriptID}`
          }).then(res=>{
            console.log(res.data)
            this.PartLists = res.data;
            if(res.data.length>0){
              this.$store.commit("PART_ID",res.data[0].id)              //存入vuex协议ID
            }else{
              this.$store.commit("PART_ID",-1)              //存入vuex协议ID
            }
            this.getSystemList()
            this.getCan()
          }).catch(err=>{
            console.log(err)
          });
        },


        // 初始获取SystemList  and   点击协议获取System
      getSystemList(){
          let that = this

          this.$axios({
            //获取Part
            method: "get",
            url: `/sequences/${this.$store.state.tanguan.ScriptID}`
          }).then(res=>{
            console.log(res.data)
            this.SystemList = res.data
            console.log(this.SystemList)
            }).catch(err=>{
            console.log(err)
          });
        },

        //子组件传值修改System
        SyetemJSON(objs){
          this.$axios({
            method:"post",
            url:'sequences/',
            header:{
              responseType:"json"
            },
            data:objs,
          }).then(res=>{
            this.SystemList = res.data
          }).catch(err=>{
            console.log(err.response.data)
            console.log(JSON.stringify(err.request.response))
          })
        },

        //添加Part
        ADDParts(ObjData){
          this.$axios({
            method:"post",
            url:"parts/",
            data:ObjData
          }).then(res=>{
            console.log(res.data)
            this.PartLists.push(res.data)
          }).catch(err=>{
            console.log(err)
          })

        },


        // 初始获取CAN表格数据

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

        //子组件点击协议再次请求part  system
        showPartAndSystem(){
          this.getPartList()
        },
        //子组件点击part再次请求其余数据
        SHowPartAllData(){
          this.getCan();
          this.getSystemList()
        },
        // 新增脚本
        ADDScript(objs){
          this.BigScriptList.push(objs)
        }
      },
      created() {
          this.getScriptList()
      }
    }
</script>

<style lang="scss" scoped>
  .el-aside{
    width: 5.76rem !important;
  }
  .el-main{
    padding: 0;
    background: #071225;
  }
</style>
