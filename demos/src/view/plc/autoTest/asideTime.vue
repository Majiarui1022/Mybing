<template>
  <div class="aside_box">
    <div class="content-box">
      <div class="jb">测试脚本</div>
      <div class="select_box">
        <div class="select fl" @click="select_k">
          <div>{{script_data[ischeck].name}}</div>
          <img class="right" src="../../../assets/plc/img/right_down.png" alt>
        </div>
        <div class="reset fl">
          <img src="../../../assets/plc/img/load.png" alt>
        </div>
        <div class="list" :class="select_ == false ? '':'hide'">
          <p
            v-for="(item,index) in script_data"
            :key="item.id"
            @click="getPart(item.id,index)"
          >{{item.name}}</p>
        </div>
      </div>
      <div class="select_list" :class="select_ == true ? '':'hide'">
        <ul>
          <li :class="select_ == true ? '':'hide'" v-for="(item,index) in part_data" :key="index">
<!--            <span class="one">Part {{index+1}}</span>-->
            <span class="one">{{item.serial_num}}</span>
            <span class="two">{{item.name}}</span>
            <input
              type="number"
              class="three"
              v-model="item.cycle_num"
              @keyup.enter="changeNum(item.id,$event,item.is_check)"
            >
            <span class="four" @click="select_num(index,item.id,item.cycle_num,item.is_check)">
              <i class="el-icon-check" :class="item.is_check != true ? 'hide':''"></i>
            </span>
          </li>
        </ul>
        <div class="select_box_info">
          <div class="select_all">
            <div class="all">全选</div>
            <div class="check_all" @click="select_alls">
              <i class="el-icon-check" :class="all == true? '':'hide'"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="set_">
        <div class="set_box">
          <div class="set_time_box">
            <div class="set_time">{{sysList == undefined ?'设定时间(min)':sysList.set_time === 0?'设定次数':'设定时间(min)'}}</div>
            <div class="num">{{sysList == undefined ? '0':sysList.set_time===  0?`${sysList.set_num}`:`${sysList.set_time}`}}</div>
          </div>
          <div class="set_time_box">
            <div class="set_time">运行时间(min)</div>
            <div class="num">{{RunTimermin}}:{{RunTimerseconds}}</div>
          </div>
          <div class="set_time_box">
            <div class="set_time">撞击次数</div>
            <div class="num">{{Plcnum?`${Plcnum}`:'0'}}</div>
          </div>
        </div>
        <div class="set_box">
          <div class="set_start_time">
            <div class="start_time">开始时间</div>
            <div class="num">
              <div>{{isTimers}}</div>
<!--              <div v-if="timers" class="asa">{{timers.timers}}</div>-->
<!--              <div v-else="isTimers">{{isTimers}}</div>-->
              <div>{{isyears}}</div>
            </div>
          </div>
          <div class="set_start_time">
            <div class="start_time">结束时间</div>
            <div class="num">
              <div>{{endtimesT}}</div>
              <div>{{endyearsT}}</div>
            </div>
          </div>
          <div class="set_start_time">
            <div class="start_time">设备状态</div>
            <div class="num">{{showRun == true?'运行中':'未运行'}}</div>
          </div>
        </div>
      </div>
      <!-- 进度条 -->
      <div class="Progress_box">
        <div class="text">{{press}}%</div>
        <div class="style_box">
          <div class="bg">
            <div class="gress" :style="{width:press+'%'}"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "asideTime",
  props: {
    script_data: {
      type: Array
    },
    part_data: {
      type: Array
    },
    all: {
      type: Boolean
    },
    sysList:{
    }
  },
  data() {
    return {
      select_: true, //控制是否显示脚本
      ischeck: 0,
      defaultid: "",
      PartList: [], //脚本列表数据
      press: 30,
      isyears:'',      //当前年月日
      isTimers:'',      //当前时分秒
      timer:null,         //清除定时器
      a:{},                  //标识符
      select_all:false,
      hou:{},
      ceshi:{},         //测试专用
      runTimers:null,
      RunTimerSc:'0',
      RunTimerseconds:0,
      RunTimermin:0,

      stopTimers:null,


      endYeartime:false,
      endyearsT:'',
      endtimesT:'',
      showRun:false
    };
  },
  created(){
    this.sartTimer()
  },
  methods: {



    select_k() {
      this.select_ = !this.select_;
    },

    getPart(id,i) {
      //获取脚本下的part
      this.ischeck = i;
      this.select_ = true;
      let ids = id;


      this.$store.commit('SCRIPT_ID',this.script_data[i].id)

      console.log(id,i)




      this.$emit("list_pro",id);


    },


    select_num(index,id,words,checkeds) {
      console.log(id)
      let checkeda = !checkeds

      //单选
      // console.log(this.PartList)
      // if(this.PartList[index].select){
      //   this.PartList[index].select = false
      // }else{
      //   this.PartList[index].select = true
      // }
      this.$emit("changeCheck", index,id);
    },

    select_alls() {
      // let list = this.PartList;
      //全选
      // if (this.select_allx) {
      //   this.select_allx = false;
      //   for (let i = 0; i < list.length; i++) {
      //     list[i].select = false;
      //   }
      // } else {
      //   this.select_allx = true;
      //   for (let i = 0; i < list.length; i++) {
      //     list[i].select = true;
      //   }
      // }
      this.$emit("select_all");
    },
    //修改大循环次数
    changeNum(id,e,checheds){
      console.log(e.target.value)
      this.$emit("changeNum",id,e.target.value,checheds)
    },

    // 初始时间
    sartTimer(){
      this.timer = setInterval(()=>{
        var myDate = new Date();
        myDate.getFullYear();    //获取完整的年份(4位,1970-????)
        myDate.getMonth();       //获取当前月份(0-11,0代表1月)
        myDate.getDate();        //获取当前日(1-31)
        myDate.getHours();       //获取当前小时数(0-23)
        myDate.getMinutes();     //获取当前分钟数(0-59)
        myDate.getSeconds();     //获取当前秒数(0-59)
        var strYears = `${ myDate.getFullYear()}/${  myDate.getMonth()+1}/${myDate.getDate()}`,
          sttTimer = `${ myDate.getHours()}:${  myDate.getMinutes()}:${myDate.getSeconds()}`;
        this.isyears = strYears;
        this.isTimers = sttTimer
        this.endyearsT=strYears
        this.endtimesT=sttTimer

      },1000)
    },
    // 运作时间
    runTimer(){
      console.log(this.sysList.set_time)
      if(this.sysList.set_time !== 0){
        let a = this.sysList.set_time * 60 *1000
        let timestamp = new Date().getTime();//当前的时间戳
        timestamp = timestamp + a;
        var dateAfter = new Date(timestamp);
        var endY = `${ dateAfter.getFullYear()}/${  dateAfter.getMonth()+1}/${dateAfter.getDate()}`,
          endT = `${ dateAfter.getHours()}:${  dateAfter.getMinutes()}:${dateAfter.getSeconds()}`;
        this.endyearsT = endY;
        this.endtimesT = endT;
      }

      this.runTimers = setInterval(()=>{
        this.RunTimerseconds++
        if(this.RunTimerseconds>=59){
          this.RunTimerseconds = 0;
          this.RunTimermin++
        }

      },1000)
    },

  },

  watch: {
    //监听状态机
    stateZTJsa(news,old){
      console.log(news)
      console.log('我监听到啦')
      if(news === 1){
        console.log('开始运行')
        clearInterval(this.timer)
        this.showRun = true
        this.runTimer()
      }else if(news === 2){
        console.log('暂停运行')
        this.showRun = false
        clearInterval(this.timer)
        clearInterval(this.runTimers)
      }else if(news === -1){
        console.log('----------------------')
        this.showRun = false
        this.RunTimerseconds = 0;
        this.RunTimermin = 0
        clearInterval(this.runTimers)
        this.sartTimer()
      }
    },

    sysList(news,old){

      console.log(news)
    },

    script_data(news, olds) {},
    all(news, olds) {
      // console.log(news);
      // console.log(olds);
    },
    timers(){
      console.log('属性值变化了')
    },


  },

  // vuex传值
  computed:{
    timers(){
      this.a = this.$store.state.plc.readytimer;
      return this.$store.state.plc.readytimer
    },
    stateZTJsa(){
      return this.$store.state.plc.ZTJstates
    },
    /**
     * @return {number}
     */
    Plcnum(){
      return this.$store.state.plc.PLCNUM
    }
  },

  //浏览器跳转清除定时器
  destroyed(){
    if(this.timer) { //如果定时器在运行则关闭
      clearInterval(this.timer);
    }
  },




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
    @extend %clearfix;
    position: relative;
    .list {
      width: 100%;
      height: 3.02rem;
      max-height: 3.02rem;
      overflow: auto;
      font-size: 0.24rem;
      color: #02f6ff;
      background: rgba(2, 246, 255, 0.2);
      z-index: 1;
      padding: 0.1rem;
      box-sizing: border-box;
      margin-bottom: 1.7rem;
      p {
        height: 0.38rem;
        line-height: 0.38rem;
      }
      &.hide {
        display: none;
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
      }
    }

    .reset {
      width: 0.46rem;
      height: 0.42rem;
      img {
        width: 100%;
        height: 100%;
        display: block;
      }
    }
  }

  .select_list {
    width: 100%;
    position: relative;
    background: rgba(2, 246, 255, 0.2);
    margin-bottom: 1.7rem;
    ul {
      width: 100%;
      max-height: 3.02rem;
      height: 3.02rem;
      overflow: auto;
      li {
        &.hide {
          display: none;
        }
        font-size: 0.2rem;
        color: #02f6ff;
        padding: 0 0.15rem;
        box-sizing: border-box;
        height: 0.5rem;
        line-height: 0.5rem;
        position: relative;
        .one {
          width: 1.03rem;
          display: inline-block;
        }
        .two {
          width: 2.25rem;
          display: inline-block;
        }
        .three {
          width: 0.4rem;
          height: 0.23rem;
          line-height: 0.23rem;
          background: rgba(17, 84, 107, 1);
          display: inline-block;
          margin-right: 0.59rem;
          border: 0;
          outline: none;
        }

        .four {
          width: 0.2rem;
          height: 0.2rem;
          line-height: 0.2rem;
          display: inline-block;
          border: 2px solid #02f6ff;
          position: absolute;
          right: 0.11rem;
          top: 50%;
          transform: translateY(-50%);
          .el-icon-check {
            &.hide {
              display: none;
            }
          }
          .hehe {
            &.hide {
              display: none;
            }
          }
        }
        input[type="number"] {
          -moz-appearance: textfield;
          text-align: center;
        }
        input[type="number"]::-webkit-inner-spin-button,
        input[type="number"]::-webkit-outer-spin-button {
          -webkit-appearance: none;
          margin: 0;
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

    .select_box_info {
      width: 100%;
      height: 0.41rem;
      background: rgba(17, 84, 107, 1);
      position: absolute;
      bottom: -.41;
      &.hide {
        display: none;
      }
      .select_all {
        position: relative;
        height: 100%;
        .all {
          width: 0.67rem;
          height: 100%;
          line-height: 0.41rem;
          font-size: 0.2rem;
          color: #02f6ff;
          position: absolute;
          right: 0.91rem;
        }

        .check_all {
          width: 0.2rem;
          height: 0.2rem;
          border: 2px solid #02f6ff;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          right: 0.19rem;
          .el-icon-check {
            font-size: 0.2rem;
            color: #02f6ff;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            left: 0;
            &.hide {
              display: none;
            }
          }
        }
      }
    }
    &.hide {
      display: none;
    }
  }

  .set_ {
    margin-bottom: 0.35rem;
    .set_box {
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-bottom: 0.29rem;
      .set_time_box {
        width: 1.45rem;
        font-size: 0.2rem;
        color: #02f6ff;
        .set_time {
          padding-bottom: 0.12rem;
        }
        .num {
          width: 100%;
          height: 0.5rem;
          line-height: 0.5rem;
          background: url("../../../assets/plc/img/set.png");
          background-size: 100% 100%;
          background-repeat: no-repeat;
          box-sizing: border-box;
          padding: 0 0.22rem;
        }
      }
    }

    .set_box {
      width: 100%;
      display: flex;
      justify-content: space-around;
      margin-bottom: 0.29rem;
      .set_start_time {
        width: 1.45rem;
        font-size: 0.2rem;
        color: #02f6ff;
        .start_time {
          padding-bottom: 0.12rem;
        }
        .num {
          width: 100%;
          height: 0.62rem;
          line-height: 0.62rem;
          background: url("../../../assets/plc/img/bigset.png");
          background-size: 100% 100%;
          background-repeat: no-repeat;
          box-sizing: border-box;
          padding: 0 0.22rem;
          div {
            height: 50%;
            line-height: 0.31rem;
            font-size: 0.14rem;
          }
        }
      }
    }
  }

  .Progress_box {
    width: 100%;
    font-size: 0.14rem;
    background: url("../../../assets/plc/img/bigset.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    .text {
      width: 100%;
      height: 0.37rem;
      line-height: 0.37rem;
      text-align: right;
      color: #02f6ff;

      border-bottom: 1px solid rgba(0, 0, 0, 0.5);
      padding-right: 0.26rem;
      box-sizing: border-box;
    }
    .style_box {
      padding: 0.1rem 0.14rem;
      box-sizing: border-box;
      .bg {
        height: 0.42rem;
        background: rgba(7, 42, 53, 1);
        box-shadow: -1px -1px 6px 0px rgba(0, 0, 0, 0.5),
          1px 1px 6px 0px rgba(0, 0, 0, 0.5);
        border-radius: 5px;
        position: relative;
        .gress {
          height: 0.38rem;
          position: absolute;
          top: 50%;
          left: 0.5%;
          transform: translateY(-50%);
          background-image: url("../../../assets/plc/img/press.png");
          background-size: 200% 100%;
          border-top-right-radius: 2.5px;
          border-bottom-right-radius: 2.5px;
          background-repeat: no-repeat;
        }
      }
    }
  }
}
</style>
