<template>
  <div class="content">
    <div class="select_Timer">

      <el-date-picker
        v-model="value2"
        type="daterange"
        align="right"
        unlink-panels
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        value-format="yyyy-MM-dd"
        :picker-options="pickerOptions">
      </el-date-picker>



      <el-select v-model="value" placeholder="循环次数">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>

      <div class="ImgDao" v-on:click="ExportEXL">
        <img src="../../../assets/plc/img/exportEXL.png" alt="">
      </div>
    </div>
    <div class="data_sheet">
      <div class="loop">当前循环次数:{{xunhuanData}}次</div>
      <div id="myChart" :style="{width: '100%', height: '6.52rem'}"></div>
    </div>
    <div class="device_box">
      <div class="device_box_info">
        <div class="item fl" v-on:click="linkEquipment">
          <img :src="state === -1?image.Link:image.weiLink" alt>
          {{linkSheB}}
        </div>
        <div class="item fl" v-on:click="stareLink">
          <img src="../../../assets/plc/img/start.png" alt>
          {{stateWords}}
        </div>
        <div class="item fl" v-on:click="endLink">
          <img src="../../../assets/plc/img/end.png" alt>
          重置
        </div>
      </div>
      <!-- <button @click="change1" ref="btn">改变</button> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Vcontent",
  data() {
    return {

      pickerOptions: {
        shortcuts: [{
          text: '最近一周',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近一个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近三个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            picker.$emit('pick', [start, end]);
          }
        }]
      },
      value2: '',

      options: [],
      value: '',










      image:{
        Link:require("../../../assets/plc/img/link.png"),
        weiLink:require("../../../assets/plc/img/duanLink.png"),
      },
      ccaabb:0,
      TableDataX:0,
      TableDataY:[],
      TableData:[],
      state:-1,    //-1代表未选择  0代表链接 1代表开始   2代表结束
      stateWords:'开始',
      objTimer:{},   //共享属性传值


      linkSheB:'链接设备',
      xunhuanData:0
    };
  },
  created(){

    this.select_Exeport()
    setTimeout(()=>{
      this.drawLine()
    })
    // console.log(this.echarts_data.series[0].data)
    // console.log(this.echarts_data.xAxis.data)
  },
  methods: {
    drawLine() {
      var that = this
      // 基于准备好的dom，初始化echarts实例
      /* TableDataX:[],
         TableDataY:[],
         TableData:[],*/
      let arrY = this.TableDataY
      let arrX =this.TableDataX
      let Data = this.TableData
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      // 绘制图表
      myChart.setOption({
        title: {
          text: "曲线示意图",
          textStyle: {
            //标题颜色
            fontSize: 24,
            fontWeight: "normal",
            color: "#02F6FF"
          },
          x: "center",
          y: "top",
          top: 0
        },
        grid: {
          y: 100
        },
        legend: {
          data: ["撞击曲线"],
          right:'10%',
          textStyle: {
            color: "#02F6FF",
            fontSize: "16"
          },
          y: 50
        },
        tooltip: {},
        xAxis: {
          splitLine:{
            show:false
          },
          axisLine: {
            lineStyle: {
              width: 1,
              color: "#0F1C56"
            }
          },

          axisLabel: {
            show: true,
            textStyle: {
              color: "#00FFD2"
            },
            interval:0
          },
          min: arrX,
        },

        // dataZoom: [
        //   {
        //     type: 'slider',
        //     xAxisIndex: 0,
        //     filterMode: 'empty',
        //     borderColor:"#0f1c56",
        //     handleStyle: {      //阴影颜色
        //       borderColor: "#07232c",
        //       borderWidth: "1",
        //       shadowBlur: 2,
        //       background: "#07232c",
        //       shadowColor: "#07232c",
        //     },
        //     height:20,
        //
        //     bottom:20,
        //
        //
        //
        //
        //   },
        // ],
        yAxis: {
          axisLine: {
            lineStyle: {
              width: 1,
              color: "#0F1C56"
            }
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: "#00FFD2"
            }
          },
          splitLine: {
            lineStyle: {
              color: "#0F1C56"
            }
          }
        },
        series: [
          {
            name: "撞击曲线",
            type: "line",
            data: Data,
            color: "#02F6FF"
          }
        ]
      });
      window.addEventListener("resize", function() {
        myChart.resize();
      });
    },
    // change1() {
    //   let data = this.echarts_data;
    //   data.xAxis.data = ["10", "20", "30", "40", "50", "60", "70","80","90","100"];
    //   data.series[0].data = [5, 10, 16, 10, 5, 20,23,45,6,1];
    //   //      //更新数据
    //   this.drawLine(data)
    //   console.log(this.$refs)
    // }


    // 选择设备进行连接
    linkEquipment(){
      var that = this
      console.log(that.state)
      if(that.state == -1){


        this.$axios({
          method:'post',
          url:'/plc/connect/',
          data:{
            "script_id":`${this.$store.state.plc.scriptID}`,
          }
        }).then(res=>{
          console.log(res)
          that.state = 0;    //在他连接成功后加入标识该值为0
          console.log("我已经链接")
          this.linkSheB='断开连接'
        }).catch(err=>{
          console.log(err)
        })



      }else if(that.state === 2 || that.state === 0){




        this.$axios({
          method:'post',
          url:'/plc/disconnect/',
        }).then(res=>{
          console.log(res)
          that.state = -1;
          // that.stateWords = "开始"

          this.objTimer.state =  this.state;
          this.$store.commit('SEND_TIEMR',this.objTimer);

          this.TableData=[]
          this.$store.commit('PLCZJNUM',0)
          this.xunhuanData = 0
          this.TableDataX = 0



          this.linkSheB='连接设备'

          this.websock.close()
        }).catch(err=>{
          console.log(err)
        })
      }else{
        that.tit("请先暂停")
      }

      },
    // 开始链接
      stareLink(){
        var that = this
        if(that.state == 0){




          this.$axios({
            method:'post',
            url:'/plc/start/',
          }).then(res=>{
            console.log(res)
            that.state = 1;
            that.stateWords = "暂停"
            //获取当前日期以及存储数据
            var myDate = new Date();
            myDate.getFullYear();    //获取完整的年份(4位,1970-????)
            myDate.getMonth();       //获取当前月份(0-11,0代表1月)
            myDate.getDate();        //获取当前日(1-31)
            myDate.getHours();       //获取当前小时数(0-23)
            myDate.getMinutes();     //获取当前分钟数(0-59)
            myDate.getSeconds();     //获取当前秒数(0-59)
            var strYears = `${ myDate.getFullYear()}/${  myDate.getMonth()+1}/${myDate.getDate()}`,
              sttTimer = `${ myDate.getHours()}:${  myDate.getMinutes()}:${myDate.getSeconds()}`;
            this.objTimer.years = strYears;       //年月日
            this.objTimer.timers = sttTimer;      //时分秒
            this.objTimer.state =  this.state;    //当前状态
            this.objTimer.num = 0
            this.$store.commit('SEND_TIEMR',this.objTimer);





            this.initWebSocket()
          }).catch(err=>{
            console.log(err)
          })

          // this.$axios({
          //   methods: "get",
          //   url: "get_set_numtime/" + id + ""
          // }).then(res => {
          //   console.log(res.data);
          // });




        }else if(that.state == 1){

          this.$axios({
            method:'post',
            url:'/plc/stop/',
          }).then(res=>{
            console.log(res)
            this.stateWords = "开始";
            that.state = 2
            this.objTimer.state =  this.state;
            this.$store.commit('SEND_TIEMR',this.objTimer);
          }).catch(err=>{
            console.log(err)
          })



        }else if(that.state == 2){

          this.$axios({
            method:'post',
            url:'/plc/start/',
          }).then(res=>{
            console.log(res)
            that.state = 1;
            that.stateWords = "暂停"
            this.objTimer.state =  this.state;    //当前状态
            this.$store.commit('SEND_TIEMR',this.objTimer);
            // this.initWebSocket()
          }).catch(err=>{
            console.log(err)
          })




        }else{
          that.tit("请先连接")
        }
      },
      // 结束连接
      endLink(){

      if(this.state !== 2){
        this.tit("请在暂停时重置")
        return
      }
        this.$axios({
          method:'post',
          url:'/plc/reset/',
        }).then(res=>{
          console.log(res)
          console.log('开始重置')
          this.xunhuanData = 0

          this.tit("已重置")
          this.TableDataX = []
          this.TableData = []
          let a={
            state:-1
          }
          this.$store.commit('SEND_TIEMR',a)
          let b={
            state:2
          }
          setTimeout(()=>{
            this.$store.commit('SEND_TIEMR',b)
          })


        }).catch(err=>{
          console.log(err)
        })

      },




    initWebSocket() {
      const wsuri = `ws://10.102.100.28:8001/project/plc_01/`;
      this.websock = new WebSocket(wsuri);//这里面的this都指向vue
      this.websock.onopen = this.websocketopen;
      this.websock.onmessage = this.websocketonmessage;
      this.websock.onclose = this.websocketclose;
      this.websock.onerror = this.websocketerror;
    },
    websocketopen() {//打开
      // console.log("WebSocket连接成功")
    },
    websocketonmessage(e) { //数据接收
      let ObjData = JSON.parse(e.data);
      // console.log(ObjData)

      // if(ObjData.text.has_strike){
      //   if(this.TableData.length>10){
      //     this.TableData.splice(0,1)
      //   }
      //   this.TableData.push(ObjData.text.has_strike)
      // }
      //
      // console.log(this.TableData)



      if(ObjData.text.has_strike){
        // this.TableDataX.push(ObjData.text.strike_time)

      // setTimeout(()=>{
      //
      // },300)
        this.TableData.push(ObjData.text.has_strike[0])
        if( this.TableData.length>16){
          // this.ccaabb++
          // if()
          this.TableData.splice(0,3)
          this.TableDataX = this.TableData[0][0]
        }
        this.TableData.push(ObjData.text.has_strike[1])
        if( this.TableData.length>16){
          // this.ccaabb++
          // if()
          this.TableData.splice(0,1)
          this.TableDataX = this.TableData[0][0]
        }
        // console.log(this.TableDataX)
        console.log()
      }



      // if(this.TableDataX.length>23){
      //   this.TableDataX.splice(0,1)
      //   this.TableData.splice(0,1)
      // }
      if(ObjData.text.is_stop ==1){
        this.stateWords = "开始";
        this.state = 2
        this.objTimer.state =  this.state;
        this.$store.commit('SEND_TIEMR',this.objTimer);
        console.log('程序执行完毕')
      }

      if(ObjData.text.strike_num){
          this.$store.commit('PLCZJNUM',ObjData.text.strike_num)
        console.log(ObjData.text.strike_num)
      }


      if(ObjData.text.run_num){
        this.xunhuanData = ObjData.text.run_num
      }

      // console.log(this.echarts_data)   xunhuanData


      // let arrY = this.TableDataY
      // let arrX =this.TableDataX
      // let Data = this.TableData


      // console.log(ObjData.text.has_strike)
      //
      // console.log(parseInt(ObjData.text.has_strike))
      // console.log(typeof  ObjData.text.has_strike)
    },
    websocketclose() {  //关闭
      // console.log("WebSocket关闭");

    },
    websocketerror() {  //失败
      //  console.log("WebSocket连接失败");
    },


    // 下拉框初始显示

    select_Exeport(){
      setTimeout(()=>{
        this.$axios({
          method:'get',
          url:`/plc/export_excel/?script_id=${this.$store.state.plc.scriptID}`
        }).then(res=>{
          console.log(res.data)

          for(var i in res.data){
            this.options.push({
              label:res.data[i].operation_id,
              value:res.data[i].id
            })
          }

        }).catch(err=>{
          console.log(err)
        })
      },500)

    },


    //点击导出表格
    ExportEXL(){
      console.log('123')
      if(this.value !== ''){
        //表示只选择了循环次数  且导出
        let url_Dom = `/plc/export_excel/${this.value}/`
        this.$axios({
          method:'get',
          url:url_Dom
        }).then(res=>{
          console.log(res)
          console.log(url_Dom)
          window.open(`http://10.102.100.28:8001/plc/export_excel/${this.value}/`)
        }).catch(err=>{
          console.log(err)
        })
      }else if(this.value === '' && this.value2 !== ''){

        //表示只选择了日期没有选择次数
        let url_Dom = `plc/export_list_datetime/?start_time=${this.value2[0]}&end_time=${this.value2[1]}&script_id=${this.$store.state.plc.scriptID}`
        this.$axios({
          method:'get',
          url:url_Dom
        }).then(res=>{
          console.log(res)
          window.open(`http://10.102.100.28:8001/plc/export_list_datetime/?start_time=${this.value2[0]}&end_time=${this.value2[1]}&script_id=${this.$store.state.plc.scriptID}`)
        }).catch(err=>{
          console.log(err)
        })


      }else if(this.value !== '' && this.value2 !== ''){
        //表示日期循环次数都进行了选择


      }else if(this.value === '' && this.value2 === ''){
        //表示日期循环次数都没有选择
        let urlDom = `http://10.102.100.28:8001/plc/export_latest_n/?script_id=${this.$store.state.plc.scriptID}`
        window.open(urlDom,'_blank')

        console.log(urlDom)


        // var $form = $('<form method="GET"></form>');
        // $form.attr('action',urlDom);
        // $form.appendTo($('body'));
        // $form.submit();
      }
      console.log(this.value2)
      console.log(this.value)
    },


      // 未选择的提示框
    tit(title){
      const h = this.$createElement;
      this.$notify({
        title: '警告',
        message: h('i', { style: 'color: teal'}, `${title}`)
      });
    }
  },
  mounted() {
    var data = this.echarts_data;
    setTimeout(() => {
      this.drawLine(data);
    });
  },


  destroyed(){
    if(this.websock){
      this.websock.close()
    }
  },
  watch:{
    TableDataX(){
      this.drawLine()
    },
    TableData(){
      this.drawLine()
    },
    value2(news,old){
      console.log(news)
      if(news.length >1){
        this.$axios({
          method:'get',
          url:`/plc/list_datetime/?start_time=${this.value2[0]}&end_time=${this.value2[1]}&script_id=${this.$store.state.plc.scriptID}`
        }).then(res=>{
          console.log(res)
          this.options = []
          for(var i in res.data){
            this.options.push({
              label:res.data[i].operation_id,
              value:res.data[i].id
            })
          }
          console.log(this.options)
        }).catch(err=>{
          console.log(err)
        })
      }
    }
  },
  components: {}
};



//
</script>
<style lang='scss'>
@import "../../../assets/style/clear.scss";
.el-date-range-picker.has-sidebar{
  border-color: #02F6FF;
  left: 3.9rem !important
}
.el-select-dropdown{
  background: #0c1127 !important;
  border-color: #02F6FF;
  .el-select-dropdown__item{
    color: #02F6FF;
  }
  .el-select-dropdown__item.hover, .el-select-dropdown__item:hover{
    background: rgba(2, 246, 255, 0.2);
  }


}


.el-picker-panel__icon-btn{
  color: #02F6FF;
}

.el-picker-panel [slot=sidebar], .el-picker-panel__sidebar{
  background: #0c1127 !important;
  border-color: #02F6FF;
  .el-picker-panel__shortcut:hover{
    color: #02F6FF;
  }
}
.el-date-range-picker__content.is-left{
  background: #0c1127 !important;
  color: #02F6FF;
  border-color: #02F6FF;
  table{
    th{
      border-color: #02F6FF;
    }
  }
  .el-picker-panel__icon-btn.is-disabled{
      color: #02F6FF;
  }
}
.el-date-range-picker__content.is-right{
  background: #0c1127 !important;
  color: #02F6FF;
  table{
    th{
      border-color: #02F6FF;
    }
  }
  .el-picker-panel__icon-btn.is-disabled{
    color: #02F6FF;
  }
}
.el-date-table td.in-range div, .el-date-table td.in-range div:hover, .el-date-table.is-week-mode .el-date-table__row.current div, .el-date-table.is-week-mode .el-date-table__row:hover div{
  background: rgba(2, 246, 255, 0.2);
}
.content{

  width: 100%;
  height: 100%;
  background: #0c1127;
  .data_sheet {
    height: 6.52rem;
    width: 100%;
    padding: 0 0.1rem;
    padding-top: .3rem;
    /*padding-top: 0.62rem;*/
    // padding-right: 1rem;
    margin-bottom: 0.5rem;
    box-sizing: border-box;
    position: relative;
    .loop {
      font-size: 0.16rem;
      color: #00ffd2;
      top: 13%;
      left: 1.29rem;
      position: absolute;
    }
    .ve-line {
      padding: 0 1.4rem 0 0.82rem;
      box-sizing: border-box;
    }
  }
    .el-main {
      padding: 0;
    }


    /*头部选择时间以及循环次数*/
    .select_Timer{

      border-bottom: 1px solid black;
      height: .58rem;
      overflow: hidden;
      padding-top: .16rem;
      padding-left: 0.5rem;
      position: relative;
      .el-range-editor.el-input__inner{
        float: left;
        border-color: #02F6FF;
        margin-right: .4rem;
        background: #0c1127 !important;
        .el-range-input{
          background: #0c1127 !important;
          color: #02F6FF;
        }
        ::-webkit-input-placeholder {
          color: #02F6FF;
          /*text-align: center;*/
        }
        /*日历小图标*/
        .el-range__icon,.el-range-separator,.el-range__close-icon
        {
          color: #02F6FF;
        }
      }
      .el-select{
        float: left;
        .el-input__inner{
          background: #0c1127;
          color: #02F6FF;
          border-color: #02F6FF;
          width: 250px;
        }
        ::-webkit-input-placeholder {
          color: #02F6FF;
          /*text-align: center;*/
        }
      }
      .ImgDao{
        width: .4rem;
        height: .4rem;
        position: absolute;
        right: .5rem;
        top: .2rem;
        cursor: pointer;
        img{
          display: block;
          width: 100%;
          height:100%;
        }
      }
    }

    .device_box {
      width: 100%;
      height: 1.82rem;
      border-top: 2px solid #0f1c56;
      padding: 0.38rem 0 0.36rem 0;
      box-sizing: border-box;
      position: relative;
      .device_box_info {
        @extend %clearfix;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        .item {
          font-size: 0.24rem;
          color: #009fff;
          text-align: center;
          width: 1.03rem;
          margin-right: 1rem;
          cursor: pointer;
          img {
            width: 0.64rem;
            height: 0.63rem;
            display: block;
            margin: 0 auto;
            margin-bottom: 0.22rem;
          }
        }
      }
    }
}
</style>
