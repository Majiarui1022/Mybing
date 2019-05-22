<template>
  <div class="aside_box">
    <div class="content-box">
      <div class="jb">测试时序</div>
      <div class="select_box">
        <div class="select fl" v-on:click="chengeHide">
          {{scriptdata[scriptIndex].name}}
          <img class="right" src="../../../assets/plc/img/right_down.png" alt>
        </div>
        <div class="reset fl">
          <img src="../../../assets/plc/img/load.png" alt>
        </div>
        <div class="script_box" :class="ishide == true?'':'hide'">
          <ul>
            <li v-for="(val,index) in scriptdata" :key="index" v-on:click="showPart(val.id,index)">
              <span :id="val.id">{{val.name}}</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="select_list">
        <ul  :class=" ishide == true ?'hide':''">
          <li
            class="ListDom"
            :class="partClick === val.id ? 'lisDom' : ''"
            :id="val.id"
            v-for="(val,index) in PartList"
            :key="index"
            v-on:click="selectStep(val.id)"
          >
            <span class="one fl">{{val.serial_num}}</span>
            <span class="two fl">{{val.name}}</span>
          </li>
          <!--          <li class="lisDom">-->
          <!--            <span class="one fl">Part 2</span>-->
          <!--            <span class="two fl">稳定测试</span>-->
          <!--          </li>-->
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "timingaside",
  props:{
    scriptdata:{
      type: Array
    },
    PartList:{
      type: Array
    }
  },
  data() {
    return {
      ishide:false,
      scriptIndex:0,      //初始脚本的下标
      partClick:-1,
    }
  },
  methods:{



    chengeHide(){
      this.ishide = !this.ishide
    },
    showPart(id,index){
      this.scriptIndex = index;
      this.ishide = !this.ishide;
      this.$emit('script_id',id);
    },


    // 选择part后展示此part的全部指令
    selectStep(id){
      this.$emit('Part_id',id);
    },



  }
};
</script>
<style lang='scss' scoped>
@import "../../../assets/style/clear.scss";
.aside_box {
  width: 100%;
  height: 100%;
}
.content-box {
  height: 100%;
  width: 100%;
  padding: 0.22rem 0.41rem 0.41rem 0.27rem;
  box-sizing: border-box;
  .jb {
    width: 1.77rem;
    height: 0.44rem;
    line-height: 0.44rem;
    color: #fff;
    font-size: 0.2rem;
    background: linear-gradient(
      90deg,
      rgba(31, 178, 204, 1) 0%,
      rgba(11, 18, 39, 0.44) 100%
    );
    box-sizing: border-box;
    padding-left: 0.14rem;
    margin-bottom: 0.29rem;
  }


  .select_box {
      width: 100%;
      position: relative;
      @extend %clearfix;
      .select {
        width: 4.62rem;
        height: 0.42rem;
        line-height: 0.42rem;
        background-image: url("../../../assets/plc/img/side_down.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        font-size: 0.24rem;
        color: #02f6ff;
        box-sizing: border-box;
        padding-left: 0.14rem;
        position: relative;
        .right {
          position: absolute;
          right: 0.17rem;
          bottom: 0.12rem;
          width: 0.23rem;
          height: 0.13rem;
        }
      }

      .reset {
        width: 0.46rem;
        height: 0.42rem;
        position: relative;
        img {
          width: 100%;
          height: 100%;
          display: block;
        }
      }


      .script_box{
        width: 100%;
        position: absolute;
        left: 0;
        top: .4rem;
        z-index: 999;
        background: rgba(2, 246, 255, 0.2);
        overflow: hidden;
        &.hide{
          display: none;
        }
        ul{
          width: 100%;
          height: 3rem;
          overflow: auto;
          li{
            font-size: 0.24rem;
            color: #02f6ff;
            height: 0.5rem;
            line-height: 0.5rem;
            position: relative;
            span{
              font-size: 0.24rem;
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
      }
    }

  .select_list {
    width: 100%;
    max-height: 3.02rem;
    height: 3.02rem;
    position: relative;
    background: rgba(2, 246, 255, 0.2);
    padding-top: 0.14rem;
    box-sizing: border-box;
    overflow: hidden;
    ul {
      width: 100%;
      height: 2.88rem;
      overflow: auto;
      @extend %clearfix;
      &.hide{
        display: none;
      }
      .lisDom{
        background: #2d408a;
      }
      .ListDom{
        font-size: 0.2rem;
        color: #02f6ff;
        height: 0.5rem;
        line-height: 0.5rem;
        position: relative;
        .one {
          width: 30%;
          display: inline-block;
          padding-left: 0.12rem;
          box-sizing: border-box;
        }
        .two {
          width: 70%;
          height: 100%;
          display: inline-block;
          position: relative;
          div {
            width: 0.67rem;
            height: 0.26rem;
            border: 1px solid #02f6ff;
            line-height: 0.26rem;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
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

    .color {
      width: 100%;
      height: 0.41rem;
      background: #11546b;
      position: absolute;
      bottom: 0;
    }
  }
}
</style>
