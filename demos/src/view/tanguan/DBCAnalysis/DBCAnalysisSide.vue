<template>
  <div class="Big_box">
    <div class="DBCAnalysisSide-side-box">
      <div class="DBCAnalysisSide-side">
        <p>编辑协议</p>
<!--        <div class="ListBox">-->
<!--          <div class="ScriptFirst_name">-->
<!--            <span>{{BigScriptList[isScriptIndex].name}}</span>-->
<!--            <div class="low-jian">-->
<!--              <img src="../../../assets/tanguan/img/right_down.png" alt="">-->
<!--            </div>-->
<!--          </div>-->

<!--          <div class="ScriptList">-->
<!--            <ul>-->
<!--              <li v-if="BigScriptList" v-for="(val,index) in BigScriptList">-->
<!--                &lt;!&ndash;            <span class="One fl">Part1</span>&ndash;&gt;-->
<!--                <span class="Two fl" :id="val.id" v-on:click="selectScript(val.id,index)">{{val.name}}</span>-->
<!--              </li>-->
<!--            </ul>-->
<!--          </div>-->
<!--          <div class="PartList">-->
<!--            <ul>-->
<!--              <li>-->
<!--                <span class="One fl">Part1</span>-->
<!--                <span class="Two fl">CAN_无线通讯验证</span>-->
<!--              </li>-->
<!--            </ul>-->
<!--          </div>-->
<!--        </div>-->
        <div class="ListBox">
          <div class="ScriptFirst_name" v-on:click="ChangeScript">
            <span v-if="BigScriptList[isScriptIndex]">{{BigScriptList[isScriptIndex].name}}</span>
            <div class="low-jian">
              <img src="../../../assets/tanguan/img/right_down.png" alt="" :class="isScript == true?'active':''">
            </div>
          </div>

          <div class="ScriptList" :class="isScript == true?'':'hide'">
            <ul>
              <li v-if="BigScriptList" v-for="(val,index) in BigScriptList">
                <!--            <span class="One fl">Part1</span>-->
                <span class="Two fl" :id="val.id" v-on:click="selectScript(val.id,index)">{{val.name}}</span>
              </li>
            </ul>
          </div>
          <div class="PartList"  :class="isScript == true?'hide':''">
            <ul>
              <li v-if="PartLists" v-for="value in PartLists" v-on:click="ShowSystem(value.id)">
                <span class="One fl">{{value.serial_num}}</span>
                <span class="Two fl">{{value.name}}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <footer>
      <div class="Linking_Device__Box fl btn_Device" style="margin-right:.84rem;margin-left: .68rem" v-on:click="changeStateOne">
        <img src="../../../assets/tanguan/img/link.png" alt="">
        <p>连接设备</p>
      </div>
      <div class="Start_Device__Box fl btn_Device" style="margin-right:.84rem" v-on:click="changeStateTwo">
        <img src="../../../assets/tanguan/img/start.png" alt="">
        <p>{{DBCstates === 1?'暂停':'开始'}}</p>
      </div>
      <div class="End_Device__Box fl btn_Device" v-on:click="changeStateThree">
        <img src="../../../assets/tanguan/img/end.png" alt="">
        <p>结束</p>
      </div>
    </footer>
  </div>
</template>

<script>
    export default {
      props:{
        BigScriptList:{
          type:Array
        },
        PartLists:{
          type:Array
        }

      },
        name: "DBCAnalysisSide",
      data(){
        return{
          isScript:false,
          isScriptIndex:0,              //默认显示协议的下标
          DBCstates:-1
        }
      },
      methods:{
        // 控制脚本显示与隐藏
        ChangeScript(){
          this.isScript = !this.isScript
        },
        // 点击脚本
        selectScript(id,index){
          this.$store.commit("TANSCRIPT_ID",id)
          this.isScript = !this.isScript;
          this.isScriptIndex = index
          this.$emit("showPartAndSystem")
        },
        //点击part
        ShowSystem(id){
          this.$store.commit("PART_ID",id)
          this.$emit("SHowPartAllData")
        },


        //改变状态   连接设备
        changeStateOne(){
          if(this.DBCstates != -1){
            this.warning('您已经连接了设备')
            return;
          }
          this.DBCstates = 0
          this.$store.commit('CHANGE_DBCZTJSTATE',this.DBCstates)
        },

        //开始运行
        changeStateTwo(){
          if(this.DBCstates === 0){
            this.DBCstates = 1
            this.$store.commit('CHANGE_DBCZTJSTATE',this.DBCstates)
          }else if(this.DBCstates === 1){
            this.DBCstates = 2
            this.$store.commit('CHANGE_DBCZTJSTATE',this.DBCstates)
          }else if(this.DBCstates === 2){
            this.DBCstates = 1
            this.$store.commit('CHANGE_DBCZTJSTATE',this.DBCstates)
          }else{
            this.warning('您还未连接设备')
          }
        },

        //结束运行
        changeStateThree(){
          if(this.DBCstates === 1 || this.DBCstates === 2 || this.DBCstates === 0){
            this.DBCstates = -1
            this.$store.commit('CHANGE_DBCZTJSTATE',this.DBCstates)
          }else{
            this.warning('您还未连接设备')
          }
        },

        //public  警告
        warning(words){
          this.$message({
            message:`${words}`,
            type: 'warning'
          });
        },
      },
      watch:{
        BigScriptList(news,old){
          console.log(news[0].name)
        },
        PartLists(news,old){
          console.log(news)
        }
      }
    }
</script>


<style lang="scss">

  .Big_box{
    width: 100%;
    height:100%;
    position: relative;
    .DBCAnalysisSide-side-box{
      width: 100%;
      height:100%;
      background:linear-gradient(270deg,rgba(18,22,51,1) 0%,rgba(10,17,36,1) 52%);
      box-shadow:3px 0px 3px 0px rgba(0, 0, 0, 0.23);
      padding:.32rem .41rem 0 .27rem;
      box-sizing: border-box;
      .DBCAnalysisSide-side{
        width: 100%;
        height:100%;
        p{
          width:2.31rem;
          height:.44rem;
          background:linear-gradient(90deg,rgba(31,178,204,1) 0%,rgba(11,18,39,0.02) 100%);
          font-size:.20rem;
          font-family:MicrosoftYaHei;
          font-weight:400;
          color:rgba(255,255,255,1);
          line-height:.44rem;
          text-indent: .14rem;
        }
        .ListBox{
          width: 5rem;
          height:4rem;
          max-height:4rem;
          overflow: hidden;
          margin-top:.28rem;
          .ScriptFirst_name{
            width:4.9rem;
            height:.42rem;
            position: relative;
            border:1px solid rgba(2,246,255,1);
            position: relative;
            span{
              display: block;
              font-size:.24rem;
              font-family:CambriaMath;
              color:SiceColor();
              line-height:.42rem;
              text-indent: .14rem;
            }
            .low-jian{
              position: absolute;
              right:.13rem;
              top:50%;
              width: .23rem;
              height: .13rem;
              margin-top: -.065rem;
              img{
                display: block;
                transition:transform 0.5s;
                transform: rotateZ(0deg);
                transform-origin: center center;
                &.active{
                  transition:transform 0.5s;
                  transform: rotateZ(180deg);
                  transform-origin: center center;
                }
              }
            }
          }
          .ScriptList,.PartList{
            width:4.9rem;
            height:2.52rem;
            background:rgba(2, 246, 255, 0.2);
            border: 1px solid rgba(2, 246, 255, 0.2);
            overflow:hidden;
          }
          .ScriptList{
            ul{
              width: 100%;
              height:100%;
              overflow: auto;
              padding-left: .14rem;
              box-sizing: border-box;
              li{
                width: 100%;
                line-height: .56rem;
                overflow: hidden;
                font-size:.2rem;
                font-family:CambriaMath;
                color:SiceColor();
                cursor: pointer;
                .One{
                  margin-right:.36rem;
                }
              }
              &::-webkit-scrollbar {/*滚动条整体样式*/
                width: 8px;     /*高宽分别对应横竖滚动条的尺寸*/
                height: 4px;
              }
              &::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
                border-radius: 5px;
                -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
                background: #06A9AF;
              }
              &::-webkit-scrollbar-track {/*滚动条里面轨道*/
                -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
                border-radius: 0;
                background: rgba(0,0,0,0.1);
              }
            }
            &.hide{
              display: none;
            }
          }
          .PartList{
            ul{
              width: 100%;
              height:100%;
              overflow: auto;
              padding-left: .14rem;
              box-sizing: border-box;
              li{
                width: 100%;
                line-height: .56rem;
                overflow: hidden;
                font-size:.2rem;
                font-family:CambriaMath;
                color:SiceColor();
                cursor:pointer;
                .One{
                  margin-right:.36rem;
                }
              }
              &::-webkit-scrollbar {/*滚动条整体样式*/
                width: 4px;     /*高宽分别对应横竖滚动条的尺寸*/
                height: 4px;
              }
              &::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
                border-radius: 5px;
                -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
                background: #06A9AF;
              }
              &::-webkit-scrollbar-track {/*滚动条里面轨道*/
                -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
                border-radius: 0;
                background: rgba(0,0,0,0.1);
              }
            }
            &.hide{
              display: none;
            }
          }
        }
      }
    }
    footer{
      width: 100%;
      height:1.86rem;
      background:rgba(12,17,45,1);
      box-shadow:0px 7px 16px 0px rgba(1, 44, 31, 0.35);
      border-radius:3px;
      position: absolute;
      left: 0;
      bottom: 0;
      z-index: 6;
      overflow: hidden;
      padding-top:.49rem;
      box-sizing: border-box;
      .btn_Device{
        width: 1.01rem;
        height:100%;
        cursor: pointer;
        img{
          width: .64rem;
          height:.63rem;
          display: block;
          margin:0 auto;
        }
        p{
          font-size:.24rem;
          font-family:MFShangHei_Noncommercial-Regular;
          color:rgba(131,182,223,1);
          text-align: center;
          line-height: .66rem;
        }
      }
    }
  }
  .el-message{
    min-width: 3rem;
    .el-message__icon{
      font-size: .3rem;
    }
  }
</style>
