<template>
  <div class="Configure-side-box">
    <p>编辑协议</p>

    <div class="ListBox">
      <div class="ScriptFirst_name" v-on:click="ChangeScript">
        <span v-if="BigScriptList[ShowScript]">{{BigScriptList[ShowScript].name}}</span>
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
        name: "Configureside",
      data(){
          return{
            isScript:false,
            ShowScript:0            //默认显示协议的下标
          }
      },
      created(){
        // ParstList({
        //
        // }).then(res=>{
        //   console.log(res)
        // })

        // this.$axios({
        //   method:'get',
        //   url:'../../../static/data/PartList.json',
        // }).then(res=>{
        //   console.log(res)
        // }).catch(err=>{
        //   console.log(err)
        // })
      },
      methods:{

          // 控制脚本显示与隐藏
        ChangeScript(){
          this.isScript = !this.isScript
        },

        ShowSystem(id){
          console.log(123)
          this.$store.commit("PART_ID",id)
          this.$emit("SHowPartAllData")
        },


        selectScript(id,index){
          this.$store.commit("TANSCRIPT_ID",id)
          this.isScript = !this.isScript;
          this.ShowScript = index
          this.$emit("showPartAndSystem")
        }
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

<style lang="scss" scoped>

  .Configure-side-box{
    width: 100%;
    height:100%;
    background:linear-gradient(270deg,rgba(18,22,51,1) 0%,rgba(10,17,36,1) 52%);
    box-shadow:3px 0px 3px 0px rgba(0, 0, 0, 0.23);
    padding:.32rem .41rem 0 .27rem;
    box-sizing: border-box;
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
            .One{
              margin-right:.36rem;
              cursor: pointer;
            }
            .Two{
              cursor: pointer;
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
            .One{
              margin-right:.36rem;
              cursor: pointer;
            }
            .Two{
              cursor: pointer;
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
    }
  }
</style>
