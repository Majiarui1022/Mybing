<template>
  <div class="ShowDataSideBox">
    <div class="Side_tit">
      <p>碳罐脱附能力测试设备</p>
    </div>
    <div class="menu">
      <div class="Side_Link">
        <a href="javascript:void(0)" class="active fl">选择测试脚本</a>
        <router-link to="/Configure" class="fl">配置协议</router-link>
      </div>
      <div class="List">
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
              <li v-if="PartLists" v-for="(value,inx) in PartLists" :key="inx">
                <span class="One fl">{{value.serial_num}}</span>
                <span class="Two fl">{{value.name}}</span>
                <span class="Three fr" v-on:click="selectPart(inx,value.id)"><i class="el-icon-check" :class="value.is_check === true ?'':'hide'"></i></span>
              </li>
            </ul>
            <div class="allselect">
              <span class="fl">全选</span>
              <span class="selectAlls fr" v-on:click="selectAll"><i class="el-icon-check" :class="alls === true?'':'hide'"></i></span>
            </div>
          </div>
        </div>
      </div>
      <div class="timer">
        <div class="box fl">
          <span>{{setNTIS.set_num != 0 ? `${setNTIS.set_num}`:setNTIS.set_time != 0?`${setNTIS.set_time}`:'0'}}</span>
          <p>{{setNTIS.set_num == 0? '设定时间(min)':'设定次数'}}</p>
        </div>
        <div class="box fl">
          <span>{{MinTimer}}:{{SecTimer}}</span>
          <p>运行时间(min)</p></div>
        <div class="box fl">
          <span>
            <i class="fl">{{startTimer === ''?'00:00:00':`${startTimer}`}}</i>
            <i class="fl Years">{{startYears === ''?'1937/01/01':`${startYears}`}}</i>
          </span>
          <p>开始时间</p></div>
        <div class="box fl">
          <span>
            <i class="fl">{{endTimers === ''?'00:00:00':`${endTimers}`}}</i>
            <i class="fl Years">{{endYears === ''?'1937/01/01':`${endYears}`}}</i>
          </span>
          <p>结束时间</p></div>
      </div>
      <div class="RuningBox">
        <div class="RunBg">
          <p>25.46%</p>
        </div>
        <div class="RunBox">
          <div class="wai_RunBox">
            <div class="RunGo"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="LinkBox">
      <div class="zhi">
        <div class="Link fl LIn" v-on:click="changeStateOne">
          <img :src="states === -1? imgUrl.mduanLink:imgUrl.Link" alt="">
          <p>{{linkYJ}}</p>
        </div>
        <div class="Link fl Start" v-on:click="changeStateTwo">
          <img src="../../../assets/tanguan/img/start.png" alt="">
          <p>{{states === 1?'暂停':'开始'}}</p>
        </div>
        <div class="Link fl" v-on:click="changeStateThree">
          <img src="../../../assets/tanguan/img/end.png" alt="">
          <p>重置</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { Loading } from 'element-ui';
    export default {
      props:{
        BigScriptList:{
          type:Array
        },
        PartLists:{
          type:Array
        }
      },
        name: "ShowDataSide",
      data(){
        return{
          isScript:false,
          isScriptIndex:0,              //默认显示协议的下标
          alls:true,
          states:-1,


          imgUrl:{
            Link:require('../../../assets/tanguan/img/link.png'),
            mduanLink:require('../../../assets/tanguan/img/duanLink.png')
          },

          timer:null,

          startYears:'',
          startTimer:'',
          endYears:'',
          endTimers:'',

          //获取初始设置次数  以及设定时间
          setNTIS:{},
          ZTJTimers:null,
          SecTimer:0,
          MinTimer:0,


          linkYJ:'连接设备'
        }
      },
      methods:{

        //改变状态   连接设备
        changeStateOne(){
          console.log(this.states)
          if(this.states === -1){
            this.states = 0
            this.$store.commit('CHANGE_ZTJSTATE',this.states)
            this.linkYJ = '断开连接'
          }else if(this.states === 1 || this.states === 2 || this.states === 0){
            this.states = -1
            this.$store.commit('CHANGE_ZTJSTATE',this.states)
            this.linkYJ = '连接设备'
          }

        },

        //开始运行
        changeStateTwo(){
          if(this.states === 0){
            this.states = 1
            this.$store.commit('CHANGE_ZTJSTATE',this.states)
          }else if(this.states === 1){
            this.states = 2
            this.$store.commit('CHANGE_ZTJSTATE',this.states)
          }else if(this.states === 2){
            this.states = 1
            this.$store.commit('CHANGE_ZTJSTATE',this.states)
          }else{
            this.warning('您还未连接设备')
          }
        },

        //结束运行
        changeStateThree(){
          // if(this.states === 1 || this.states === 2 || this.states === 0){
          //   this.states = -1
          //   this.$store.commit('CHANGE_ZTJSTATE',this.states)
          // }else{
          //   this.warning('您还未连接设备')
          // }
          if(this.states === -1){
            this.warning('您还未连接设备')
            return false
          }else if(this.states === 2){

          }else{
            this.warning('请先暂停设备')
          }
        },



        //public  警告
        warning(words){
          this.$message({
            message:`${words}`,
            type: 'warning'
          });
        },

        ChangeScript(){
          this.isScript = !this.isScript
        },


        // 点击脚本
        selectScript(id,index){
          this.$store.commit("TANSCRIPT_ID",id);
          this.isScript = !this.isScript;
          this.isScriptIndex = index;
          this.$emit("showPartAndSystem")
        },

        //单选
        selectPart(i,id){
          console.log(this.PartLists[i].is_check);
          this.PartLists[i].is_check =  !this.PartLists[i].is_check;

          let lists = this.PartLists;
          let isflag = lists.every(function(lists) {
            return lists.is_check == true;
          });
          if (isflag) {
            this.alls = true;
          } else {
            this.alls = false;
          }

          this.$axios({
            method:'put',
            url:`parts/${id}/`,
            data:{
              is_check:this.PartLists[i].is_check
            }
          }).then(res=>{
            console.log(res)
          }).catch(err=>{
            console.log(err)
          })
        },

        //全选
        selectAll(){
          if(this.alls){
            this.alls = false;
            for(var i in this.PartLists){
              this.PartLists[i].is_check = false
            }
          }else{
            this.alls = true;
            for(var i in this.PartLists){
              this.PartLists[i].is_check = true
            }
          }


          this.$axios({
            method:'put',
            url:`all_parts/${this.$store.state.tanguan.ScriptID}/`,
            data:{
              is_all_check:this.alls
            }
          }).then(res=>{
            console.log(res)
          }).catch(err=>{
            console.log(err)
          })
        },
        // 获取当前时间
        GetTiemr(){
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


            this.startYears = strYears;
            this.startTimer = sttTimer;
            this.endYears = strYears;
            this.endTimers = sttTimer;
            // startYears:'',
            //   startTimer:'',
            //   endYears:'',
            //   endTimers:''
          },1000)
        },

        // 状态机运行时间
        RunZTJTiemr(){
          if(this.setNTIS.set_time != 0){
            let a = this.setNTIS.set_time * 60 *1000
            let timestamp = new Date().getTime();//当前的时间戳
            timestamp = timestamp + a;
            var dateAfter = new Date(timestamp);
            var endY = `${ dateAfter.getFullYear()}/${  dateAfter.getMonth()+1}/${dateAfter.getDate()}`,
              endT = `${ dateAfter.getHours()}:${  dateAfter.getMinutes()}:${dateAfter.getSeconds()}`;
            this.endYears = endY;
            this.endTimers = endT;
          }
          this.ZTJTimers = setInterval(()=>{
            this.SecTimer++;
            if(this.SecTimer>59){
              this.SecTimer = 0;
              this.MinTimer++
            }
          },1000)
        }
      },
      created() {
        this.GetTiemr()
        this.loadingInstance = Loading.service({ text: '玩命加载中...' });
      },
      mounted(){

          this.loadingInstance.close();

      },
      watch:{
        PartLists(news,old){
          for(var i = 0;i <news.length;i++){
            if(news[i].is_check == false){
              this.alls = false;
              return
            }
          }
        },
        setnum(news,old){
          console.log(news)
          this.setNTIS = news
        },
        //监听状态机
        stateZTJs(news,old){
          console.log('我监听到啦'+news)
          if(news == 1){
            clearInterval(this.timer)
            this.RunZTJTiemr()
          }else if(news == 2){
            clearInterval(this.ZTJTimers)
          }else if(news == -1){
            this.SecTimer = 0;
            this.MinTimer = 0
            clearInterval(this.ZTJTimers)
            this.GetTiemr()
          }
        }
      },
      computed:{
        setnum(){
          return this.$store.state.tanguan.setNIT
        },
        stateZTJs(){
          return this.$store.state.tanguan.stateZTJ
        }
      },
      destroyed() {
        clearInterval(this.timer)
        clearInterval(this.ZTJTimers)
      }
    }
</script>

<style lang="scss">

  .ShowDataSideBox{
    width: 100%;
    height:100%;
    .Side_tit{
      padding: .27rem 0 .28rem .3rem;
      background:rgba(5,25,40,1);
      p{
        font-size:.28rem;
        color:rgba(131,182,223,1);
        line-height: .28rem;
      }
    }
    .menu{
      padding-left: .34rem;
      .Side_Link{
        padding:.28rem 0 .22rem 0;
        overflow: hidden;
        a{
          width:1.75rem;
          height:.5rem;
          background:rgba(18,42,62,1);
          box-shadow:1px 1px 6px 0px rgba(0, 0, 0, 0.5);
          font-size:.20rem;
          font-family:MFLiHei_Noncommercial-Regular;
          color:rgba(43,100,146,1);
          line-height:.5rem;
          text-align: center;
          margin-right:.46rem;
          &.active{
            background:rgba(5,104,135,1);
            box-shadow:1px 1px 6px 0px rgba(0, 0, 0, 0.5);
            color:rgba(2,246,255,1);
          }
        }
      }
      .List{
        .ListBox{
          width: 5rem;
          height:3.3rem;
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
                span{
                  cursor: pointer;
                }
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
          .PartList{
            ul{
              width: 100%;
              height:88%;
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
                .Three{
                  width: .25rem;
                  height:.25rem;
                  border:1px solid #02f6ff;
                  margin-top: .12rem;
                  margin-right: .2rem;
                  line-height: .25rem;
                  i{
                    font-size: .24rem;
                    text-align: center;
                    &.hide{
                      display: none;
                    }
                  }
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
            .allselect{
              width: 100%;
              height:.3rem;
              overflow: hidden;
              span{
                font-size: .12rem;
                color:SiceColor();
                text-indent: .2rem;
              }
              .selectAlls{
                width: .25rem;
                height:.25rem;
                border:1px solid #02f6ff;
                text-indent: 0;
                cursor: pointer;
                margin-right: .25rem;
                i{
                  font-size: .24rem;
                  text-align: center;
                  line-height: .25rem;
                  &.hide{
                    display: none;
                  }
                }
              }
            }
            &.hide{
              display: none;
            }
          }
        }
      }
      .timer{
        overflow: hidden;
        .box{
          width:2.23rem;
          background:rgba(5,25,40,1);
          box-shadow:0px 2px 10px 0px rgba(0, 64, 45, 0.35);
          border-radius:3px;
          margin-right:.27rem;
          margin-bottom: .17rem;
          padding:.18rem 0 .13rem .18rem;
          span{
            display: block;
            font-size:.25rem;
            font-family:MFShangHei_Noncommercial-Regular;
            color:rgba(131,182,223,1);
            line-height: .25rem;
            margin-bottom: .16rem;
            overflow: hidden;
            white-space: nowrap;
            i{
              font-style: normal;
              white-space: nowrap;
              &.Years{
                font-size: .16rem;
                margin-left: .1rem;
              }
            }
          }
          p{
            font-size:.16rem;
            font-family:MicrosoftYaHei;
            color:rgba(173,204,217,1);
            line-height: .16rem;
          }
          &:nth-child(2n){
            margin-right: 0;
          }
        }
      }
      .RuningBox{
        width: 5.1rem;
        height:1.1rem;
        background:rgba(5,25,40,1);
        box-shadow:1px 1px 6px 0px rgba(0, 0, 0, 0.5);
        .RunBg{
          width: 100%;
          background: #051928;
          p{
            line-height: .52rem;
            text-align: right;
            font-size:.18rem;
            font-family:MFLiHei_Noncommercial-Regular;
            font-weight: 900;
            color:rgba(2,246,255,1);
            margin-right: .49rem;
          }
        }
        .RunBox{
          padding: 0 .14rem .14rem .15rem;
          .wai_RunBox{
            width: 4.81rem;
            height:.44rem;
            background:rgba(21,59,90,1);
            box-shadow:-1px -1px 6px 0px rgba(0, 0, 0, 0.5);
            border-radius:5px;
            position: relative;
            .RunGo{
              position: absolute;
              top: 0;
              left: 0;
              width: 25.46%;
              height: 100%;
              background: url("../../../assets/tanguan/img/press.png") no-repeat;
              background-size: cover;
            }
          }
        }
      }
    }

    .LinkBox{
      width:100%;
      height:1.83rem;
      background:rgba(5,25,40,1);
      box-shadow:0px 7px 16px 0px rgba(1, 44, 31, 0.35);
      border-radius:3px;
      margin-top:.3rem;
      .zhi{
        padding:.46rem .83rem .28rem .68rem;
        overflow: hidden;
        img{
          width:.68rem;
          height:.68rem;
          display: block;
          margin: 0 auto;
        }
        p{
          font-size:.24rem;
          font-family:MFShangHei_Noncommercial-Regular;
          color:rgba(131,182,223,1);
          margin-top: .1rem;
        }
        .Link{
          text-align: center;
          cursor: pointer;
        }
        .LIn{
          margin-right: .8rem;
        }
        .Start{
          margin-right: .8rem;
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
