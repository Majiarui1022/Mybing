<template>
  <div class="Configiremaxin-menu">
    <div class="Config-tit">
      <span>System</span>
    </div>
    <div class="menu_box">
      <div class="tab_data">
        <div class="tab_data_scroll" :class="isSystem ==1 || isSystem ==0 ? '':'hide'">
          <table>
            <tbody v-if="SystemList">
              <tr>
                <td class="Num fl">1</td>
                <td class="Name fl">Name</td>
                <td class="Nature fl">Nature</td>
              </tr>
              <tr>
                <td class="Num fl">2</td>
                <td class="Name fl">项目名称</td>
                <td class="Nature fl">
                  <span v-if="SystemList">{{SystemList.project_name}}</span>
                </td>
              </tr>
              <tr>
                <td class="Num fl">3</td>
                <td class="Name fl">设定时间</td>
                <td class="Nature fl"><span>{{SystemList.set_time}}</span></td>
              </tr>
              <tr>
                <td class="Num fl">4</td>
                <td class="Name fl">间隔运行</td>
                <td class="Nature fl"><span>{{SystemList.is_interval == 1?'ON':'OFF'}}</span></td>
              </tr>
              <tr>
                <td class="Num fl">5</td>
                <td class="Name fl">休息时间</td>
                <td class="Nature fl"><span>{{SystemList.rest_time}}</span></td>
              </tr>
              <tr>
                <td class="Num fl">6</td>
                <td class="Name fl">运行时间</td>
                <td class="Nature fl"><span>{{SystemList.run_time}}</span></td>
              </tr>
              <tr>
                <td class="Num fl">7</td>
                <td class="Name fl">设定次数</td>
                <td class="Nature fl"><span>{{SystemList.set_num}}</span></td>
              </tr>
              <tr>
                <td class="Num fl">8</td>
                <td class="Name fl"></td>
                <td class="Nature fl"></td>
              </tr>
              <tr>
                <td class="Num fl">9</td>
                <td class="Name fl"></td>
                <td class="Nature fl"></td>
              </tr>
              <tr>
                <td class="Num fl">10</td>
                <td class="Name fl"></td>
                <td class="Nature fl"></td>
              </tr>
              <tr>
                <td class="Num fl">11</td>
                <td class="Name fl"></td>
                <td class="Nature fl"></td>
              </tr>
              <tr>
                <td class="Num fl">12</td>
                <td class="Name fl"></td>
                <td class="Nature fl"></td>
              </tr>
              <tr>
                <td class="Num fl">13</td>
                <td class="Name fl"></td>
                <td class="Nature fl"></td>
              </tr>
              <tr>
                <td class="Num fl">14</td>
                <td class="Name fl"></td>
                <td class="Nature fl"></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="tab_data_scroll-Y" :class="isSystem == 2 || isSystem == 3 ?'':'hide'">
<!--          <table>-->
<!--            <tbody>-->
<!--              <tr>-->
<!--                <td class="Can_num">122221323</td>-->
<!--                <td class="CAN_Part_NO">2</td>-->
<!--                <td class="Can_Type">3</td>-->
<!--                <td class="CAN_Time">4</td>-->
<!--                <td class="Can_SEND_ID">5</td>-->
<!--                <td class="CAN_Length_SEND">6</td>-->
<!--                <td class="CAN_Message">7</td>-->
<!--                <td class="CAN_Timout">8</td>-->
<!--              </tr>-->
<!--            </tbody>-->
<!--          </table>-->
          <div class="table_Sec">
            <div class="Can_num fl">1</div>
            <div class="CAN_Part_NO fl">Part.NO</div>
            <div class="Can_Type fl">Type</div>
            <div class="CAN_Time fl">Time(ms)</div>
            <div class="Can_SEND_ID fl">CAN_SEND_ID</div>
            <div class="CAN_Length_SEND fl">Length_SEND</div>
            <div class="CAN_Message fl">Message_SEND</div>
            <div class="CAN_Timout fl">Timeout(ms)</div>
          </div>
          <div class="table_Sec"  v-for="(val,index) in TableData" :class="selectRow == index?'active':''" :key="index" v-on:click="aaa(index,val.id)">
            <div class="Can_num fl">{{index+2}}</div>
            <div class="CAN_Part_NO fl">
              <input
                type="text"
                v-model="val.part_no"
                @blur="changeCAN(val.part_no,val.id,1)"
              >
            </div>
            <div class="Can_Type fl">
              <input
                type="text"
                v-model="val.order_type"
                disabled='false'
              >
            </div>
            <div class="CAN_Time fl">
              <input
                type="text"
                v-model="val.delay_time"
                @blur="changeCAN(val.delay_time,val.id,2)"
              >
            </div>
            <div class="Can_SEND_ID fl">
              <input
                type="text"
                v-model="val.can_send_id"
                @blur="changeCAN(val.can_send_id,val.id,3)"
              >
            </div>
            <div class="CAN_Length_SEND fl">
              <input
                type="text"
                v-model="val.length_send"
                @blur="changeCAN(val.length_send,val.id,4)"
              >
            </div>
            <div class="CAN_Message fl">
              <input
                type="text"
                v-model="val.message_send"
                @blur="changeCAN(val.message_send,val.id,5)"
              >
            </div>
            <div class="CAN_Timout fl">
              <input
                type="text"
                v-model="val.timeout"
                @blur="changeCAN(val.timeout,val.id,6)"
              >
            </div>
          </div>
        </div>
      </div>
      <div class="tab_qie">
<!--        支架   勿删-->
        <div class="cheng">
<!--          选择器-->
          <div class="tab_select">
            <div class="select_System fl but" :class="isSystem == 0?'active':''" v-on:click="changeBg(0)">System</div>
            <div class="select_Pary fl but" :class="isSystem == 1?'active':''" v-on:click="changeBg(1)">Pary</div>
            <div class="select_CAN fl but" :class="isSystem == 2?'active':''" v-on:click="changeBg(2)">CAN</div>
            <div class="select_CAN fl but" :class="isSystem == 3?'active':''" v-on:click="changeBg(3)">DELAY</div>

          </div>
          <div class="new_script" v-on:click="newAddScript">新建脚本</div>
<!--            System-->
          <div class="System tab_fix" :class="isSystem == 0?'':'hide'">
            <div class="pro_name">
              <span class="fl">项目名称：</span>
              <input
                type="text"placeholder="请输入项目名称"
                class="fl"
                v-model="produNmae"
              >
            </div>
            <div class="set_time_Num">
              <div class="setTime fl">
                <el-radio v-model="timeORnum" label="0" class="fl">设定时间：</el-radio>
                <input
                  type="number"
                  placeholder="请输入设定时间"
                  class="fl"
                  :disabled="timeORnum == 1? true : false "
                  v-model="set_Time"
                >
                <div style="clear: both"></div>
              </div>
              <div class="setNum fl">
                <el-radio v-model="timeORnum" label="1" class="fl">设定次数：</el-radio>
                <input
                  type="number"
                  placeholder="请输入设定次数"
                  class="fl"
                  :disabled="timeORnum == 1? false : true "
                  v-model="set_Num"
                >
                <div style="clear: both"></div>
              </div>
              <div style="clear: both"></div>
            </div>
            <div class="runFshi">
              <span class="fl">间隔运行</span>
              <el-radio v-model="ONOFF" label="1" class="fl marginR">ON</el-radio>
              <el-radio v-model="ONOFF" label="2" class="fl">OFF</el-radio>
              <div style="clear: both"></div>
            </div>
            <div class="restTimer">
              <span class="fl">休息时间：</span>
              <input
                type="text"
                placeholder="请输入休息时间"
                class="fl"
                v-model="restTime"
              >
            </div>
            <div class="runTimer">
              <span class="fl">运行时间：</span>
              <input
                type="text"
                placeholder="请输入运行时间"
                class="fl"
                v-model="RunTime"
              >
            </div>
            <div class="but" v-on:click="SendSysteamData">
              确定
              <span></span>
            </div>
          </div>
<!--          Part-->
          <div class="Part tab_fix" :class="isSystem == 1?'':'hide'">
            <div class="Part_part">
              <span class="fl">Part</span>
              <input type="number" class="Part_Num fl" v-model="PartNum">
              <label>
                <input type="text" placeholder="请输入名称" class="fl" v-model="PartName">
              </label>
            </div>
            <div class="but" v-on:click="ADDPart">
              确定
              <span></span>
            </div>
          </div>
<!--          CAN-->
          <div class="CAN tab_fix" :class="isSystem == 2?'':'hide'">
            <div class="CAN_BOX">
              <span class="fl">Part NO</span>
              <input type="text" class="Part_NO fl" v-model="Part_No">
              <span class="fl">CAN_SEND</span>
              <span class="fl">ID</span>
              <input type="text" class="ID_WEI fl" v-model="CAN_SEND_ID">
              <span class="fl">长度</span>
              <input type="text" class="lang fl" v-model="Length_SEND">
              <span class="fl">报文</span>
              <input type="text" class="bao_words fl" v-model="Message_SEND">
              <span class="fl">Timeout(ms)</span>
              <input type="text" class="TimeOut fl" v-model="Timeout">
            </div>

            <div class="but" v-on:click="SendTableData">
              确定
              <span></span>
            </div>
          </div>
          <!--          DELAY-->
          <div class="CAN tab_fix" :class="isSystem == 3?'':'hide'">
            <div class="CAN_BOX">
              <span class="fl">Part NO</span>
              <input type="text" class="Part_NO fl" v-model="DELAY_Part_No">
              <span class="fl">DELAY</span>
              <input type="text" class="ID_WEI fl" v-model="DELAY_">
            </div>

            <div class="but" v-on:click="SendDELAYData">
              确定
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      props:{
        SystemList:{

        },
        CANList:{
          type:Array
        }
      },
        name: "Configuremain",
      data(){
          return{
            isSystem:0,






            // Can表格整体数据
            TableData:[],
            // Can表格内容
            Part_No:null,
            CAN_SEND_ID:null,
            Length_SEND:null,
            Message_SEND:null,
            Timeout:null,
             //CAN表格删除
            isCtrl:false,     //ctrl按下为true
            selectRow:-1,      //选中某一行的下标

            //Pary
            PartNum:'',
            PartName:'',


            //System整体数据
            Systems:{},
            //System表格内容
            timeORnum:'1',    //0为设定时间  1为设定次数
            ONOFF:'1',        //1为ON   2为OFF
            produNmae:'',
            set_Time:'',
            set_Num:'',
            Run:'',
            restTime:'',
            RunTime:'',



            //DELAY数据
            DELAY_Part_No:'',
            DELAY_:''
          }
      },
      created(){

      },
      mounted(){
        var sUserAgent = navigator.userAgent;
        var isWin = (navigator.platform == "Win32") || (navigator.platform == "Windows");
        var isMac = (navigator.platform == "Mac68K") || (navigator.platform == "MacPPC") || (navigator.platform == "Macintosh") || (navigator.platform == "MacIntel");
        document.addEventListener('keydown', e => {
          if((e.keyCode === 17 && isWin) || (e.keyCode === 91 && isMac)){
            this.isCtrl = true
          }
        })
        document.addEventListener('keyup', e => {
          if((e.keyCode === 17 && isWin) || (e.keyCode === 91 && isMac)){
            this.isCtrl = false
          }
        })

      },
      methods:{
          // 切换选项卡
        changeBg(i){
          this.isSystem = i;
        },

       //System数据  start
        SendSysteamData(){

          if(this.timeORnum == 0){
            this.set_Num = 0
          }else if(this.timeORnum == 1){
            this.set_Time = 0
          }
          this.Systems = {
            project_name:this.produNmae,
            set_time:this.set_Time,
            set_num:this.set_Num,
            is_interval:this.ONOFF,
            rest_time:this.restTime,
            run_time:this.RunTime,
            script:this.$store.state.tanguan.ScriptID
          }
          console.log(this.Systems)
          this.$emit('SyetemJSON',this.Systems)
        },
        //System数据  end---------

        // =================================分割线======================================

        // CAM数据  start--------------------
        // 发送用户输入内容
        SendTableData(){

          if(this.Part_No == ""){
            this.Part_No = null
          }
          if(this.Length_SEND == ""){
            this.Length_SEND = null
          }
          if(this.Timeout == ""){
            this.Timeout = null
          }
          let Obj = {
            part_no:this.Part_No,
            order_type:0,
            delay_time:null,
            can_send_id:this.CAN_SEND_ID,
            length_send:this.Length_SEND,
            message_send:this.Message_SEND,
            timeout:this.Timeout,
            part:this.$store.state.tanguan.PartID
          };
          this.$axios({
            method:'post',
            data:Obj,
            url:"carbon_tank/orders/"
          }).then(res=>{
            console.log(res)
            this.TableData.push(res.data)

            //置空input输入内容
            this.Part_No = null;
            this.CAN_SEND_ID = null;
            this.Length_SEND = null;
            this.Message_SEND = null;
            this.Timeout = null;
          }).catch(err=>{
            console.log(err)
            console.log(err.response.data)
          })
        },

        //修改CAN某行某个数据
        changeCAN(val,id,index){
          var CANData = {}
          if(index == 1){
            CANData={
              id:id,
              part_no:val,
            }
          }else if(index == 2){
            CANData={
              id:id,
              delay_time:val,
            }
          }else if(index == 3){
            CANData={
              id:id,
              can_send_id:val,
            }
          }else if(index == 4){
            CANData={
              id:id,
              length_send:val,
            }
          }else if(index == 5){
            CANData={
              id:id,
              message_send:val,
            }
          }else if(index == 6){
            CANData={
              id:id,
              timeout:val,
            }
          }
          this.$axios({
            method:"patch",
            url:`carbon_tank/orders/${id}/`,
            data:CANData
          }).then(res=>{
            console.log(res.data)
          }).catch(err=>{
            console.log(err)
          })
        },

        // 删除某行数据
        aaa(index,id){
          if(this.isCtrl){
            this.selectRow = index
            console.log(this.selectRow,index)
            this.$confirm('此操作将永久删除该行, 是否继续?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {

              this.$axios({
                method:"delete",
                url:`carbon_tank/orders/${id}/`
              }).then(res=>{
                this.$message({
                  type: 'success',
                  message: '删除成功!'
                });
                this.TableData.splice(index,1);
                this.selectRow = -1;
              })

            }).catch(() => {
              // this.$message({
              //   type: 'info',
              //   message: '已取消删除'
              // });
              this.selectRow = -1;
            });
          }
        },

        //CAN数据 end-------
// =================================分割线======================================
//         添加part
        ADDPart(){
          // PartNum:'',
          //   PartName:'',PartNum   PartName
          let ObjDom={
            serial_num:this.PartNum,
            name:this.PartName,
            script:this.$store.state.tanguan.ScriptID
          };
          this.PartName = "";
          this.PartNum = "";
          this.$emit("ADDParts",ObjDom)

        },


// =================================分割线======================================
        // DELAY数据
        SendDELAYData(){
          // DELAY_Part_No    DELAY_
          let DELAYObj={
            part_no:this.DELAY_Part_No,
            order_type:1,
            delay_time:this.DELAY_,
            part:this.$store.state.tanguan.PartID
          }
          this.$axios({
            method:"post",
            url:"carbon_tank/orders/",
            data:DELAYObj
          }).then(res=>{
            console.log(res)
            this.TableData.push(res.data)


            this.DELAY_Part_No = null
            this.DELAY_ = null

          }).catch(err=>{
            console.log(err)
          })
        },

        //新添加脚本
        newAddScript(){
          this.$store.commit('SHOWENIT_HIDE',true)
        }
      },
      watch:{
        SystemList(news,old){
          console.log('监听')
          console.log(news)
        },
        CANList(news,olds){
          this.TableData = news;
        }
      }
    }
</script>

<style lang="scss">

  .Configiremaxin-menu{
    height: 100%;
    .Config-tit{
     width: 100%;
      height:.4rem;
      margin-bottom: .22rem;
      span{
        width: 1.3rem;
        height:.4rem;
        background: url("../../../assets/tanguan/img/tag.png") no-repeat;
        background-size: cover;
        font-size:.17rem;
        color:rgba(13,105,119,1);
        display: block;
        text-align: center;
        line-height: .4rem;
        margin-left: -.17rem;
        margin-top: -.05rem;
      }
    }
    .menu_box{
      margin: 0 .41rem 0 .17rem;
      width: 12.84rem;
      height:7.92rem;
      border:1px solid #1E2D71;
      .tab_data{
        width:100%;
        height: 5.59rem;
        border-bottom: 1px solid  #1E2D71;
        overflow: hidden;
        .tab_data_scroll{
          width:100%;
          height:100%;
          overflow: auto;
          table{
            width: 12.65rem;
            height: 5.59rem;
            tr{
              height:.37rem;
              font-size:.12rem;
              color:SiceColor();
              overflow: hidden;
              td{
                text-align: center;
                line-height: .37rem;
                border-right:1px solid #1E2D71;
                border-bottom: 1px solid #1E2D71;;
                height: .38rem;
              }
              .Num{
                width: 3.5%;
              }
              .Name{
                width: 7%;
                text-align: left;
                text-indent: 5px;
              }
              .Nature{
                width: 89.1%;
                text-align: left;
                text-indent: 14px;
              }
            }
          }
          &::-webkit-scrollbar {/*滚动条整体样式*/
            width: 18px;     /*高宽分别对应横竖滚动条的尺寸*/
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
          &.hide{
            display: none;
            display: none;
          }
        }
        .tab_data_scroll-Y{
          width: 100%;
          height:100%;
          overflow-x: hidden;
          overflow-y: auto;
          table{
            width: 12.52rem;
            height: 5.59rem;
            table-layout: fixed;
            word-break: break-all;
            tr{
              height:.37rem;
              font-size:.12rem;
              color:SiceColor();
              overflow: hidden;
              td{
                text-align: center;
                line-height: .37rem;
                border-right:1px solid #1E2D71;
                border-bottom: 1px solid #1E2D71;;
              }
              /*           */
              .Can_num{
                width: 4%;
              }
              .CAN_Part_NO,.CAN_Time,.Can_SEND_ID,.CAN_Length_SEND,.CAN_Message,.CAN_Timout{
                width: 14.28%;
              }
              .Can_Type{
                width: 10%;
              }
            }
          }
          .table_Sec{
            width: 100%;
            overflow: hidden;
            div{
              height:.37rem;
              font-size:.12rem;
              color:SiceColor();
              text-align: center;
              line-height: .37rem;
              border-right:1px solid #1E2D71;
              border-bottom: 1px solid #1E2D71;;
            }
            input{
              width: 100%;
              height:100%;
              display: block;
              text-align: center;
              background: transparent;
              border: 0;
              outline: none;
              color:SiceColor();
            }
            .Can_num{
              width: 4%;
            }
            .CAN_Part_NO,.CAN_Time,.Can_SEND_ID,.CAN_Length_SEND,.CAN_Message{
              width: 14.28%;
            }
            .Can_Type{
              width: 10%;
            }
            .CAN_Timout{
              width: 13.7%;
            }
          }
          & .active{
            background: #416ab1;
          }
          &::-webkit-scrollbar {/*滚动条整体样式*/
            width: 18px;     /*高宽分别对应横竖滚动条的尺寸*/
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
          &.hide{
            display: none;
          }
        }
      }


      /*底部切换*/
      .tab_qie{
        width: 100%;
        height:2.33rem;
        .cheng{
          width: 100%;
          height:100%;
          position: relative;
          /*tab切换*/
          .tab_select{
            width: 2.6rem;
            height:.24rem;
            .but{
              /*padding:8px 15px 7px 16px;*/
              width: 23.5%;
              height:100%;
              font-size: .12rem;
              color:SiceColor();
              text-align: center;
              line-height: .24rem;
              border:1px solid SiceColor();
              cursor: pointer;
              &.active{
                color:#fff;
                background:rgba(18,49,95,1);
              }
            }
          }
          /*新建脚本*/
          .new_script{
            cursor: pointer;
            width:.97rem;
            height:.32rem;
            border:1px solid rgba(32,39,189,1);
            border-radius:2px;
            text-align: center;
            line-height: .32rem;
            font-size:.16rem;
            font-family:MicrosoftYaHei;
            color:SiceColor();
            position: absolute;
            right: .27rem;
            top:0;
          }
          /*集体样式*/
          .tab_fix{
            width: 100%;
            height:100%;
            padding-top:.17rem;
            padding-left: .15rem;
            box-sizing: border-box;
            position: relative;
            input{
              width: 2.29rem;
              height:.24rem;
              color:SiceColor();
              font-size: .12rem;
              text-indent: .17rem;
              line-height: .24rem;
              outline: none;
              border:1px solid SiceColor();
              background: transparent;
            }
            input::-webkit-input-placeholder {
              color:SiceColor();
            }
          }
          /*System*/
          .System{

            .pro_name{
              overflow: hidden;
              span{
                font-size: .12rem;
                color:SiceColor();
                line-height: .24rem;
              }
              input{
                width: 2.14rem;
              }
            }
            .set_time_Num{
              margin-top:.25rem;
                input[type="number"] {
                  -moz-appearance: textfield;
                }
                input[type="number"]::-webkit-inner-spin-button,
                input[type="number"]::-webkit-outer-spin-button {
                  -webkit-appearance: none;
                  margin: 0;
                }
                .setTime{
                  margin-right: .45rem;

                  .el-radio{
                    color:#127D81;
                    margin-right: 0;
                    line-height: .24rem;
                  }
                  .el-radio__input.is-checked+.el-radio__label{
                    color:#02F6FF;
                  }
                  .el-radio__inner{
                    background-color: #071225;
                    border: 1px solid #00EBF5;
                    &:after{
                      background-color: #00F6FF;
                    }
                  }



                }
                .setNum{

                  .el-radio{
                    color:#127D81;
                    margin-right: 0;
                    line-height: .24rem;
                  }
                  .el-radio__input.is-checked+.el-radio__label{
                    color:#02F6FF;
                  }
                  .el-radio__inner{
                    background-color: #071225;
                    border: 1px solid #00EBF5;
                    &:after{
                      background-color: #00F6FF;
                    }
                  }




                }
              }
            .runFshi{
              margin-top:.12rem;
              span{
                font-size: .12rem;
                color:SiceColor();
                margin-right: .19rem;
                margin-left: .25rem;
              }
              label{
                span{
                  margin: 0;
                }
              }
              .marginR{
                margin-right: .42rem;
              }

              .el-radio{
                color:#127D81;
                line-height: .24rem;
                margin-right: .3rem;
              }
              .el-radio__input.is-checked+.el-radio__label{
                color:#02F6FF;
              }
              .el-radio__inner{
                background-color: #071225;
                border: 1px solid #00EBF5;
                &:after{
                  background-color: #00F6FF;
                }
              }

            }
            .restTimer{
              overflow: hidden;
              margin-top:.08rem;
              span{
                font-size:.12rem;
                color:SiceColor();
                line-height: .24rem;
                margin-left: .32rem;
              }
            }
            .runTimer{
              overflow: hidden;
              margin-top:.08rem;
              span{
                font-size:.12rem;
                color:SiceColor();
                line-height: .24rem;
                margin-left: .32rem;
              }
            }
            .but{
              width:1.19rem;
              height:.4rem;
              background:rgba(8,194,201,1);
              border-radius:5px;
              position: absolute;
              right: .56rem;
              bottom: .4rem;
              font-size:.16rem;
              font-family:MicrosoftYaHei;
              color:rgba(255,255,255,1);
              line-height:.4rem;
              text-align: center;
              cursor: pointer;
              span{
                width: 100%;
                height:100%;
                display: block;
                position: relative;
                top: -.4rem;
                border-radius:5px;
              }
              &:hover{
                span{
                  background: #fff;
                  opacity: .2;
                }
              }
            }
            &.hide{
              display: none;
            }
          }
          /*Part*/
          .Part{
            .Part_part{
              overflow: hidden;
              span{
                font-size: .12rem;
                font-family:MicrosoftYaHei;
                color:SiceColor();
                line-height: .24rem;
                margin-right:.1rem;
              }
              input{
                width:1.94rem
              }
              input[type="number"] {
                -moz-appearance: textfield;
              }
              input[type="number"]::-webkit-inner-spin-button,
              input[type="number"]::-webkit-outer-spin-button {
                -webkit-appearance: none;
                margin: 0;
              }
              .Part_Num{
                width: .64rem;
                margin-right:.12rem;
              }
            }
            .but{
              width:1.19rem;
              height:.4rem;
              background:rgba(8,194,201,1);
              border-radius:5px;
              position: absolute;
              right: .56rem;
              bottom: .4rem;
              font-size:.16rem;
              font-family:MicrosoftYaHei;
              color:rgba(255,255,255,1);
              line-height:.4rem;
              text-align: center;
              cursor: pointer;
              span{
                width: 100%;
                height:100%;
                display: block;
                position: relative;
                top: -.4rem;
                border-radius:5px;
              }
              &:hover{
                span{
                  background: #fff;
                  opacity: .2;
                }
              }
            }
            &.hide{
              display: none;
            }
          }
          .CAN{
            .CAN_BOX{
              overflow: hidden;
              span{
                font-size: .12rem;
                line-height: .24rem;
                color:SiceColor();
              }
              .Part_NO{
                width: .45rem;
                text-indent: 0;
                text-align: center;
                margin-left:.07rem;
                margin-right:.13rem;
              }
              .ID_WEI{
                width:1.53rem;
                margin-left:.07rem;
                margin-right:.29rem;
              }
              .lang{
                width:.45rem;
                margin-left:.07rem;
                margin-right:.28rem;
              }
              .bao_words{
                width:1.91rem;
                margin-left:.07rem;
                margin-right:.36rem;
              }
              .TimeOut{
                width: 1.16rem;
                margin-left:.11rem;
              }
            }
            .but{
              width:1.19rem;
              height:.4rem;
              background:rgba(8,194,201,1);
              border-radius:5px;
              position: absolute;
              right: .56rem;
              bottom: .4rem;
              font-size:.16rem;
              font-family:MicrosoftYaHei;
              color:rgba(255,255,255,1);
              line-height:.4rem;
              text-align: center;
              cursor: pointer;
              span{
                width: 100%;
                height:100%;
                display: block;
                position: relative;
                top: -.4rem;
                border-radius:5px;
              }
              &:hover{
                span{
                  background: #fff;
                  opacity: .2;
                }
              }
            }
            &.hide{
              display: none;
            }
          }
        }
      }
    }
    .el-message--success{
      width: .2rem;
      height:.2rem;
    }
  }
  .el-message{
    width: 2rem !important;
    min-width: 2rem;
    .el-icon-success{
      font-size: .4rem !important;
    }
  }
</style>
