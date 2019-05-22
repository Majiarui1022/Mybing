<template>
  <div class="ShowDataMain">
    <div class="MainBox">
      <div class="aaa">
        <div class="bbb fl">
          <div class="bbb_tit">
            <span class="fl">车速</span>
            <p class="fr exports"><img src="../../../assets/tanguan/img/exports.png" alt="">导出</p>
          </div>
          <div class="ccc">
            <div class="ddd">
              <div class="eee">
                <div id="fff">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bbb fl">
          <div class="bbb_tit">
            <span class="fl">发动机转速</span>
            <p class="fr exports"><img src="../../../assets/tanguan/img/exports.png" alt="">导出</p>
          </div>
          <div class="ccc">
            <div class="ddd">
              <div class="eee">
                <div id="fffb">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bbb fl">
          <div class="bbb_tit">
            <span class="fl">油量</span>
            <p class="fr exports"><img src="../../../assets/tanguan/img/exports.png" alt="">导出</p>
          </div>
          <div class="ccc">
            <div class="ddd">
              <div class="eee">
                <div id="fffa">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bbb fl">
          <div class="bbb_tit">
            <span class="fl">催化温度</span>
            <p class="fr exports"><img src="../../../assets/tanguan/img/exports.png" alt="">导出</p>
          </div>
          <div class="parper-Box">206</div>
        </div>
        <div class="bbb fr" style="margin-right: .065rem;">
          <div class="bbb_tit">
            <span class="fl">节气门开度</span>
            <p class="fr exports"><img src="../../../assets/tanguan/img/exports.png" alt="">导出</p>
          </div>
          <div class="parper-Box parper-BoxBlue">206</div>
        </div>
      </div>
    </div>



    <div style="height: 71%;overflow: hidden">
      <div class="content">
        <div style="margin-right: 1%" class="Main_Left fl">
          <!--        <div class="Left_tit">-->
          <!--          <div class="youbi_Data fl">-->
          <!--            <div class="DataBox">-->
          <!--              <p>0.0</p>-->
          <!--              <span>00d-vehicle speed</span>-->
          <!--            </div>-->
          <!--          </div>-->
          <!--          <div class="youbi_Data fl">-->
          <!--            <div class="DataBox">-->
          <!--              <p>704.3</p>-->
          <!--              <span>00d-vehicle speed</span>-->
          <!--            </div>-->
          <!--          </div>-->
          <!--        </div>-->
          <div class="OneData">
            <div class="OneTit">脱附流量折线表</div>
            <div class="DataTab">
              <div id="myCharts"></div>
            </div>
            <p class="exports"><img src="../../../assets/tanguan/img/exports.png" alt="">导出</p>
            <div class="RemoveLR">
              <span class="fl" v-on:click="RemoveLeft">
                <img src="../../../assets/tanguan/img/left.png" alt="">
              </span>
              <span class="fl" v-on:click="RemoveRight">
                <img src="../../../assets/tanguan/img/right.png" alt="">
              </span>
            </div>
          </div>
          <!--        <div class="OneData">-->
          <!--          <div class="OneTit">发动机转速折线表</div>-->
          <!--          <div class="DataTab">-->
          <!--            <div id="myCharts_Two"></div>-->
          <!--          </div>-->
          <!--        </div>-->
          <div class="OneData TwoData">
            <div class="OneTit">氧气含量折线表</div>
            <div class="DataTab">
              <div id="myCharts_Three"></div>
            </div>
            <p class="exports"><img src="../../../assets/tanguan/img/exports.png" alt="">导出</p>
            <div class="RemoveLR">
              <span class="fl" v-on:click="RemoveLeftT">
                <img src="../../../assets/tanguan/img/left.png" alt="">
              </span>
              <span class="fl" v-on:click="RemoveRightT">
                <img src="../../../assets/tanguan/img/right.png" alt="">
              </span>
            </div>
          </div>
          <!--        <div class="OneData">-->
          <!--          <div class="OneTit">电源值折线表</div>-->
          <!--          <div class="DataTab">-->
          <!--            <div id="myCharts_Four"></div>-->
          <!--          </div>-->
          <!--        </div>-->

        </div>
        <div style="margin-left: 1%;" class="Main_Right fl">
          <!--        <div class="OneData FiveData">-->
          <!--          <div class="OneTit">流量 节气门开度折线表</div>-->
          <!--          <div class="DataTab_Five">-->
          <!--            <div id="myCharts_Five"></div>-->
          <!--          </div>-->
          <!--        </div>-->
          <div class="OneData SixData">
            <div class="OneTit">流量信号积分折线表</div>
            <div class="DataTab">
              <div id="myCharts_Six"></div>
            </div>
            <p class="exports"><img src="../../../assets/tanguan/img/exports.png" alt="">导出</p>
            <div class="RemoveLR">
              <span class="fl" v-on:click="RemoveLeftH">
                <img src="../../../assets/tanguan/img/left.png" alt="">
              </span>
              <span class="fl" v-on:click="RemoveRightH">
                <img src="../../../assets/tanguan/img/right.png" alt="">
              </span>
            </div>
          </div>
          <!--        <div class="OneData">-->
          <!--          <div class="OneTit">催化温度折线表</div>-->
          <!--          <div class="DataTab">-->
          <!--            <div id="myCharts_Seven"></div>-->
          <!--          </div>-->
          <!--        </div>-->
          <div class="OneData myCharts_Eight">
            <div class="OneTit">燃油压力折线表</div>
            <div class="DataTab">
              <div id="myCharts_Eight"></div>
            </div>
            <p class="exports"><img src="../../../assets/tanguan/img/exports.png" alt="">导出</p>
            <div class="RemoveLR">
              <span class="fl" v-on:click="RemoveLeftF">
                <img src="../../../assets/tanguan/img/left.png" alt="">
              </span>
              <span class="fl" v-on:click="RemoveRightF">
                <img src="../../../assets/tanguan/img/right.png" alt="">
              </span>
            </div>
          </div>
        </div>
        <footer>
          <div class="footer">
            <div class="proData fl">
              <div class="tab_th">
                <div class="th_name fl">名称</div>
                <div class="th_num fl">数值</div>
                <div class="th_unit fl">单位</div>
                <div class="th_state fl">状态</div>
              </div>
              <div class="tab_box">
                <div class="tab_th">
                  <div class="th_name fl">名称</div>
                  <div class="th_num fl">数值</div>
                  <div class="th_unit fl">单位</div>
                  <div class="th_state fl">状态</div>
                </div>
                <div class="tab_th">
                  <div class="th_name fl">名称</div>
                  <div class="th_num fl">数值</div>
                  <div class="th_unit fl">单位</div>
                  <div class="th_state fl">状态</div>
                </div>
                <div class="tab_th">
                  <div class="th_name fl">名称</div>
                  <div class="th_num fl">数值</div>
                  <div class="th_unit fl">单位</div>
                  <div class="th_state fl">状态</div>
                </div>
                <div class="tab_th">
                  <div class="th_name fl">名称</div>
                  <div class="th_num fl">数值</div>
                  <div class="th_unit fl">单位</div>
                  <div class="th_state fl">状态</div>
                </div>
                <div class="tab_th">
                  <div class="th_name fl">名称</div>
                  <div class="th_num fl">数值</div>
                  <div class="th_unit fl">单位</div>
                  <div class="th_state fl">状态</div>
                </div>
                <div class="tab_th">
                  <div class="th_name fl">名称</div>
                  <div class="th_num fl">数值</div>
                  <div class="th_unit fl">单位</div>
                  <div class="th_state fl">状态</div>
                </div>
                <div class="tab_th">
                  <div class="th_name fl">名称</div>
                  <div class="th_num fl">数值</div>
                  <div class="th_unit fl">单位</div>
                  <div class="th_state fl">状态</div>
                </div>
                <div class="tab_th">
                  <div class="th_name fl">名称</div>
                  <div class="th_num fl">数值</div>
                  <div class="th_unit fl">单位</div>
                  <div class="th_state fl">状态</div>
                </div>
              </div>
            </div>
            <div class="shu"></div>
            <div class="proData  fr">
              <div class="tab_th">
                <div class="th_name fl">名称</div>
                <div class="th_num fl">数值</div>
                <div class="th_unit fl">单位</div>
                <div class="th_state fl">状态</div>
              </div>
              <div class="tab_box">
                <div class="tab_th">
                  <div class="th_name fl">名称</div>
                  <div class="th_num fl">数值</div>
                  <div class="th_unit fl">单位</div>
                  <div class="th_state fl">状态</div>
                </div>
                <div class="tab_th">
                  <div class="th_name fl">名称</div>
                  <div class="th_num fl">数值</div>
                  <div class="th_unit fl">单位</div>
                  <div class="th_state fl">状态</div>
                </div>
                <div class="tab_th">
                  <div class="th_name fl">名称</div>
                  <div class="th_num fl">数值</div>
                  <div class="th_unit fl">单位</div>
                  <div class="th_state fl">状态</div>
                </div>
                <div class="tab_th">
                  <div class="th_name fl">名称</div>
                  <div class="th_num fl">数值</div>
                  <div class="th_unit fl">单位</div>
                  <div class="th_state fl">状态</div>
                </div>
                <div class="tab_th">
                  <div class="th_name fl">名称</div>
                  <div class="th_num fl">数值</div>
                  <div class="th_unit fl">单位</div>
                  <div class="th_state fl">状态</div>
                </div>
                <div class="tab_th">
                  <div class="th_name fl">名称</div>
                  <div class="th_num fl">数值</div>
                  <div class="th_unit fl">单位</div>
                  <div class="th_state fl">状态</div>
                </div>
                <div class="tab_th">
                  <div class="th_name fl">名称</div>
                  <div class="th_num fl">数值</div>
                  <div class="th_unit fl">单位</div>
                  <div class="th_state fl">状态</div>
                </div>
                <div class="tab_th">
                  <div class="th_name fl">名称</div>
                  <div class="th_num fl">数值</div>
                  <div class="th_unit fl">单位</div>
                  <div class="th_state fl">状态</div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>


  </div>
</template>
<script>
    export default {
        name: "ShowDataMain",
      data(){
          return{
            gauge_value:192,


            chesu:100,
            zhuansu:2500,
            YouLingB:50,

            OneTableY:['0','5','10','15'],
            OneTableX:['11:19', '11:20', '11:21', '11:22', '11:23', '11:24'],
            OneShowData:[10,5,6,7,3,8],


            TwoTableX: ['11:19', '11:20', '11:21', '11:22', '11:23', '11:24'],
            TwoTableY:['0','5','10','15'],
            TwoShowData:[10,5,6,7,3,8],


            ThreeTableX: ['11:19', '11:20', '11:21', '11:22', '11:23', '11:24'],
            ThreeTableY:['0','5','10','15'],
            ThreeShowData: [2,1,3,10,8,11],

            FourTableX: ['11:19', '11:20', '11:21', '11:22', '11:23', '11:24'],
            FourTableY:['0','5','10','15'],
            FourShowData: [2,1,3,10,8,11],


            One:0,
            Two:0,
            Three:0,
            Four:0,
          }
      },
      created(){
        setTimeout(() => {
          this.cart_sudu()
          this.Car_zhuan()
          this.Car_you()
          this.OneTable()
          this.TwoTable()
          this.ThreeTable()
          this.FourTable()
        });

      },
      methods:{
        drawLine(data,Threedata,SixData,eightData) {
          //六




          //八

        },


        //图表  左侧第一个
        OneTable(){
          let arrY  = this.OneTableY
          let arrX = this.OneTableX
          let OneshowData = this.OneShowData
          let myChart = this.$echarts.init(document.getElementById("myCharts"));
          myChart.setOption(
            {
            title: {
            },
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                lineStyle: {
                  color: '#57617B'
                }
              }
            },
            legend: {
              icon: 'rect',
              itemWidth: 10,
              itemHeight: 10,
              itemGap: 13,
              data: ['脱附流量'],
              left: '4%',
              bottom:'-7',
              textStyle: {
                fontSize: 12,
                color: '#F1F1F3'
              }
            },
            grid: {
              top:'10%',
              left: '0',
              right: '4%',
              bottom: '20',
              containLabel: true
            },
            xAxis: [{
              type: 'category',
              boundaryGap: false,
              axisLine: {
                lineStyle: {
                  color: '#57617B'
                }
              },
              data: arrX
            }],
            yAxis: [{
              type: 'value',
              axisTick: {
                show: false
              },
              axisLine: {
                lineStyle: {
                  color: '#57617B'
                }
              },
              axisLabel: {
                margin: 10,
                textStyle: {
                  fontSize: 14
                }
              },
              splitLine: {
                lineStyle: {
                  color: '#36627E'
                }
              },
              data:arrY
            }],
            series: [{
              name: '脱附流量',
              type: 'line',
              smooth: true,
              lineStyle: {
                normal: {
                  width: 1
                }
              },
              areaStyle: {
                normal: {
                  color:'#264A5F'
                }
              },
              itemStyle: {
                normal: {
                  color: '#05C7D0',
                }
              },
              data:OneshowData
            }, ]
          });
          window.addEventListener("resize", function() {
            myChart.resize();
          });
        },


        //图标   左侧第二个

        TwoTable(){
          let arrx = this.TwoTableX
          let arry = this.TwoTableY
          let TwoshowData = this.TwoShowData
          let myChart_Three = this.$echarts.init(document.getElementById("myCharts_Three"));
          myChart_Three.setOption({
            title: {
            },
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                lineStyle: {
                  color: '#57617B'
                }
              }
            },
            legend: {
              icon: 'rect',
              itemWidth: 10,
              itemHeight: 10,
              itemGap: 13,
              data: ['00C-Engline RPM[rpm]'],
              left: '4%',
              bottom:'-7',
              textStyle: {
                fontSize: 12,
                color: '#F1F1F3'
              }
            },
            grid: {
              top:'10%',
              left: '0',
              right: '4%',
              bottom: '20',
              containLabel: true
            },
            xAxis: [{
              type: 'category',
              boundaryGap: false,
              axisLine: {
                lineStyle: {
                  color: '#57617B'
                }
              },
              data:arrx
            }],
            yAxis: [{
              type: 'value',
              axisTick: {
                show: false
              },
              axisLine: {
                lineStyle: {
                  color: '#FF3267'
                }
              },
              axisLabel: {
                margin: 10,
                textStyle: {
                  fontSize: 14
                }
              },
              splitLine: {
                lineStyle: {
                  color: '#36627E'
                }
              },
              data:arry
            }],
            series: [{
              name: '00C-Engline RPM[rpm]',
              type: 'line',
              smooth: true,
              lineStyle: {
                normal: {
                  width: 1
                }
              },
              areaStyle: {
                normal: {
                  color:'#FF3267',
                  opacity:.2
                }
              },
              itemStyle: {
                normal: {
                  color: '#FF3267',
                }
              },
              data: TwoshowData
            }, ]
          });
          window.addEventListener("resize", function() {
            myChart_Three.resize();
          });
        },

        //图表  右一
        ThreeTable(){

          let threeDataX = this.ThreeTableX
          let threeDataY = this.ThreeTableY
          let Threeshow = this.ThreeShowData
          let myCharts_Six = this.$echarts.init(document.getElementById("myCharts_Six"));
          myCharts_Six.setOption({
            title: {
            },
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                lineStyle: {
                  color: '#57617B'
                }
              }
            },
            legend: {
              icon: 'rect',
              itemWidth: 10,
              itemHeight: 10,
              itemGap: 13,
              data: ['00C-Engline RPM[rpm]','01C-Engline RPM[rpm]'],
              left: '4%',
              bottom:'-7',
              textStyle: {
                fontSize: 12,
                color: '#F1F1F3'
              }
            },
            grid: {
              top:'10%',
              left: '0',
              right: '4%',
              bottom: '20',
              containLabel: true
            },
            xAxis: [{
              type: 'category',
              boundaryGap: false,
              axisLine: {
                lineStyle: {
                  color: '#57617B'
                }
              },
              data: threeDataX
            }],
            yAxis: [{
              type: 'value',
              axisTick: {
                show: false
              },
              axisLine: {
                lineStyle: {
                  color: '#70C1B3'
                }
              },
              axisLabel: {
                margin: 10,
                textStyle: {
                  fontSize: 14
                }
              },
              splitLine: {
                lineStyle: {
                  color: '#70C1B3'
                }
              },
              data:threeDataY
            }],
            series: [{
              name: '00C-Engline RPM[rpm]',
              type: 'line',
              smooth: true,
              lineStyle: {
                normal: {
                  width: 1
                }
              },
              areaStyle: {
                normal: {
                  color:'#30F1DE',
                  opacity:.2
                }
              },
              itemStyle: {
                normal: {
                  color: '#30F1DE',
                }
              },
              data: [10,5,6,7,3,8]
            },
              {
                name: '01C-Engline RPM[rpm]',
                type: 'line',
                smooth: true,
                lineStyle: {
                  normal: {
                    width: 1
                  }
                },
                areaStyle: {
                  normal: {
                    color:'#7479E5',
                    opacity:.2
                  }
                },
                itemStyle: {
                  normal: {
                    color: '#7479E5',
                  }
                },
                data:Threeshow
              },]
          });
          window.addEventListener("resize", function() {
            myCharts_Six.resize();
          });
        },

        //图表  右二
        FourTable(){
          //FourTableX  FourTableY  FourShowData
          let FourDataX = this.FourTableX
          let FourDataY = this.FourTableY
          let FourshowData = this.FourShowData
          let myCharts_Eight = this.$echarts.init(document.getElementById("myCharts_Eight"));
          myCharts_Eight.setOption({
            title: {
            },
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                lineStyle: {
                  color: '#57617B'
                }
              }
            },
            legend: {
              icon: 'rect',
              itemWidth: 10,
              itemHeight: 10,
              itemGap: 13,
              data: ['00C-Engline RPM[rpm]'],
              left: '4%',
              bottom:'-7',
              textStyle: {
                fontSize: 12,
                color: '#F1F1F3'
              }
            },
            grid: {
              top:'10%',
              left: '0',
              right: '4%',
              bottom: '20',
              containLabel: true
            },
            xAxis: [{
              type: 'category',
              boundaryGap: false,
              axisLine: {
                lineStyle: {
                  color: '#57617B'
                }
              },
              data:FourDataX
            }],
            yAxis: [{
              type: 'value',
              axisTick: {
                show: false
              },
              axisLine: {
                lineStyle: {
                  color: '#32FFE9'
                }
              },
              axisLabel: {
                margin: 10,
                textStyle: {
                  fontSize: 14
                }
              },
              splitLine: {
                lineStyle: {
                  color: '#36627E'
                }
              },
              data:FourDataY
            }],
            series: [{
              name: '00C-Engline RPM[rpm]',
              type: 'line',
              smooth: true,
              lineStyle: {
                normal: {
                  width: 1
                }
              },
              areaStyle: {
                normal: {
                  color:'#32FFE9',
                  opacity:.2
                }
              },
              itemStyle: {
                normal: {
                  color: '#32FFE9',
                }
              },
              data: FourshowData
            }, ]
          });
          window.addEventListener("resize", function() {
            myCharts_Eight.resize();
          });
        },

        //仪表盘一    车速
        cart_sudu(){
          // //九
          let originsa = this.chesu
          let afff = this.$echarts.init(document.getElementById("fff"));
          afff.setOption({
            backgroundColor: '',
            title: {
              show: true,
              x: "center",
              y: "76%",
              text: '车速',
              textStyle: {
                fontSize: '12%',
                fontWeight: 'bolder',
                fontStyle: 'normal',
                color: "#fff"
              }
            },
            tooltip: {
              show: true,
              formatter: "{a}{b}：{c}",
              backgroundColor: '#6eba44',
              borderColor: '#6eba44',
              borderWidth: '1px',
              textStyle: {
                color: 'white'
              }
            },
            series: [{
              name: '车速',
              type: 'gauge',
              splitNumber: 12,
              min: 0,
              max: 240,
              radius: '100%',
              axisLine: {
                show: true,
                lineStyle: {
                  width: 0,
                  shadowBlur: 10,
                  shadowColor:'#3E4A53',
                  color: [
                    [0.2, '#666663'],
                    [0.8, '#666663'],
                    [1, 'background:linear-gradient(90deg,rgba(95,95,92,1) 0%,rgba(231,231,229,1) 100%)']
                  ]
                }
              },
              axisTick: {
                show: true,
                lineStyle: {
                  color: "#6A6A67",
                  width: 3
                },
                length: 10,
                splitNumber: 2
              },
              splitLine: {
                show: true,
                length: 10,
                lineStyle: {
                  color: '#6A6A67'
                }
              },
              axisLabel: {
                distance: 0,
                textStyle: {
                  color: "#fff",
                  fontSize: "12",
                },
                formatter: function(e) {
                  return e;
                }
              },
              pointer: {
                show: true,
              },
              itemStyle: {
                color: "#C11240",
                opacity: 1,
                borderWidth: 0,
                borderType: "solid",
                borderColor: "#000",
                shadowBlur: 10,
              },
              detail: { //指针评价
                show: true,
                offsetCenter: [0, 100],
                textStyle: {
                  fontSize: 12,
                  color: "#fff"
                },

              },
              title: {
                textStyle: {
                  fontSize: 30,
                  fontWeight: 'bolder',
                  fontStyle: 'normal',
                  color: "#6eba44"
                },
                offsetCenter: [0, 15]
              },
              data: [{
                name: "",
                value:originsa
              }]
            }]
          });
          window.addEventListener("resize", function() {
            afff.resize();
          });
        },

        //仪表盘二  发动机转速
        Car_zhuan(){
          // //十
          let ZhuanSu = this.zhuansu
          let Fadong = this.$echarts.init(document.getElementById("fffb"));
          Fadong.setOption({
            backgroundColor: '',
            title: {
              show: true,
              x: "center",
              y: "76%",
              text: '发动机转速',
              textStyle: {
                fontSize: '12%',
                fontWeight: 'bolder',
                fontStyle: 'normal',
                color: "#fff"
              }
            },
            tooltip: {
              show: true,
              formatter: "{a}{b}：{c}",
              backgroundColor: '#6eba44',
              borderColor: '#6eba44',
              borderWidth: '1px',
              textStyle: {
                color: 'white'
              }
            },
            series: [{
              name: '发动机转速',
              type: 'gauge',
              splitNumber: 11,
              min: 0,
              max: 5500,
              radius: '100%',
              axisLine: {
                show: true,
                lineStyle: {
                  width: 0,
                  shadowBlur: 10,
                  shadowColor:'#3E4A53',
                  color: [
                    [0.2, '#666663'],
                    [0.8, '#666663'],
                    [1, 'background:linear-gradient(90deg,rgba(95,95,92,1) 0%,rgba(231,231,229,1) 100%)']
                  ]
                }
              },
              axisTick: {
                show: true,
                lineStyle: {
                  color: "#6A6A67",
                  width: 3
                },
                length: 10,
                splitNumber: 2
              },
              splitLine: {
                show: true,
                length: 10,
                lineStyle: {
                  color: '#6A6A67'
                }
              },
              axisLabel: {
                distance: 0,
                textStyle: {
                  color: "#fff",
                  fontSize: "12",
                },
                formatter: function(e) {
                  return e;
                }
              },
              pointer: {
                show: true,
              },
              itemStyle: {
                color: "#F0FF00",
                opacity: 1,
                borderWidth: 0,
                borderType: "solid",
                borderColor: "#000",
                shadowBlur: 10,
              },
              detail: { //指针评价
                show: true,
                offsetCenter: [0, 100],
                textStyle: {
                  fontSize: 12,
                  color: "#fff"
                },

              },
              title: {
                textStyle: {
                  fontSize: 30,
                  fontWeight: 'bolder',
                  fontStyle: 'normal',
                  color: "#6eba44"
                },
                offsetCenter: [0, 15]
              },
              data: [{
                name: "",
                value: ZhuanSu
              }]
            }]
          });
          window.addEventListener("resize", function() {
            Fadong.resize();
          });
        },


        //仪表盘三   油量
        Car_you(){
          // //十一
          let YouliangS = this.YouLingB
          let Youliang = this.$echarts.init(document.getElementById("fffa"));
          Youliang.setOption({
            backgroundColor: '',
            title: {
              show: true,
              x: "center",
              y: "76%",
              text: '油量',
              textStyle: {
                fontSize: '12%',
                fontWeight: 'bolder',
                fontStyle: 'normal',
                color: "#fff"
              }
            },
            tooltip: {
              show: true,
              formatter: "{a}{b}：{c}",
              backgroundColor: '#6eba44',
              borderColor: '#6eba44',
              borderWidth: '1px',
              textStyle: {
                color: 'white'
              }
            },
            series: [{
              name: '油量',
              type: 'gauge',
              splitNumber: 12,
              min: 0,
              max: 120,
              radius: '100%',
              axisLine: {
                show: true,
                lineStyle: {
                  width: 0,
                  shadowBlur: 10,
                  shadowColor:'#3E4A53',
                  color: [
                    [0.2, '#666663'],
                    [0.8, '#666663'],
                    [1, 'background:linear-gradient(90deg,rgba(95,95,92,1) 0%,rgba(231,231,229,1) 100%)']
                  ]
                }
              },
              axisTick: {
                show: true,
                lineStyle: {
                  color: "#6A6A67",
                  width: 3
                },
                length: 10,
                splitNumber: 2
              },
              splitLine: {
                show: true,
                length: 10,
                lineStyle: {
                  color: '#6A6A67'
                }
              },
              axisLabel: {
                distance: 0,
                textStyle: {
                  color: "#fff",
                  fontSize: "12",
                },
                formatter: function(e) {
                  return e;
                }
              },
              pointer: {
                show: true,
              },
              itemStyle: {
                color: "#00E6E9",
                opacity: 1,
                borderWidth: 0,
                borderType: "solid",
                borderColor: "#000",
                shadowBlur: 10,
              },
              detail: { //指针评价
                show: true,
                offsetCenter: [0, 100],
                textStyle: {
                  fontSize: 12,
                  color: "#fff"
                },

              },
              title: {
                textStyle: {
                  fontSize: 30,
                  fontWeight: 'bolder',
                  fontStyle: 'normal',
                  color: "#6eba44"
                },
                offsetCenter: [0, 15]
              },
              data: [{
                name: "",
                value:YouliangS
              }]
            }]
          });
          window.addEventListener("resize", function() {
            Youliang.resize();
          });
        },

        //One
        RemoveLeft(){
          this.One = this.One + 5;
          if(this.One >= 0){
            this.One = 0
          }
          let _that = this
          $("#myCharts").css({
            left:`${_that.One}%`
          })
        },
        RemoveRight(){
          this.One = this.One - 5;
          if(this.One <= -100){
            this.One = -100
          }
          let _that = this
          $("#myCharts").css({
            left:`${_that.One}%`
          })
        },

        //Two
        RemoveLeftT(){
          this.Two = this.Two + 5;
          if(this.Two >= 0){
            this.Two = 0
          }
          let _that = this
          $("#myCharts_Three").css({
            left:`${_that.Two}%`
          })
        },
        RemoveRightT(){
          this.Two = this.Two - 5;
          if(this.Two <= -100){
            this.Two = -100
          }
          let _that = this
          $("#myCharts_Three").css({
            left:`${_that.Two}%`
          })
        },

        // Three
        RemoveLeftH(){
          this.Three = this.Three + 5;
          if(this.Three >= 0){
            this.Three = 0
          }
          let _that = this
          $("#myCharts_Six").css({
            left:`${_that.Three}%`
          })
        },
        RemoveRightH(){
          this.Three = this.Three - 5;
          if(this.Three <= -100){
            this.Three = -100
          }
          let _that = this
          $("#myCharts_Six").css({
            left:`${_that.Three}%`
          })
        },

        //Four
        RemoveLeftF(){
          this.Four = this.Four + 5;
          if(this.Four >= 0){
            this.Four = 0
          }
          let _that = this
          $("#myCharts_Eight").css({
            left:`${_that.Four}%`
          })
        },
        RemoveRightF(){
          this.Four = this.Four - 5;
          if(this.Four <= -100){
            this.Four = -100
          }
          let _that = this
          $("#myCharts_Eight").css({
            left:`${_that.Four}%`
          })
        },
      },


      mounted() {
          // setInterval(()=>{
          //   this.chesu = this.chesu + 20
          // },1000)
          setTimeout(()=>{
            this.chesu = 200;
            this.zhuansu = 3000;
            this.YouLingB = 100;
            this.OneTableX.push('11:25')
            this.OneShowData.push(11)


            this.TwoTableX.push('11:25')
            this.TwoShowData.push(12)

            this.ThreeTableX.push('11:25')
            this.ThreeShowData.push(12)

            this.FourTableX.push('11:25')
            this.FourShowData.push(12)
          },2000)

        var data = this.OneData;
        var ThreeData = this.ThreeData;
        var SixData = this.SixData;
        var eightData = this.eightData;
        setTimeout(() => {
          this.drawLine(data,ThreeData,SixData,eightData);
        });
      },
      watch:{
        chesu(){
          this.cart_sudu()
        },
        zhuansu(){
          this.Car_zhuan()
        },
        YouLingB(){
          this.Car_you()
        },
        OneTableX(){
          this.OneTable()
        },
        TwoTableX(){
          this.TwoTable()
        },
        ThreeTableX(){
          this.ThreeTable()
        },
        FourTableX(){
          this.FourTable()
        }
      }
    }
</script>
<style scoped lang="scss">
  .ShowDataMain{
    width: 100%;
    height:100%;
    .MainBox{
      padding:.12rem .24rem .17rem .18rem;
      overflow: hidden;

      .aaa{
        width: 100%;
        height:2.54rem;
        padding: .12rem 0;
        overflow: hidden;
        .bbb{
          width:19%;
          height:2.5rem;
          background:rgba(11,42,68,1);
          box-shadow:-3px -3px 5px 1px rgba(3,22,38,0.8), 3px 3px 5px 1px rgba(3,22,38,0.8);
          border-radius:2px;
          position: relative;
          margin-right: 0.5%;
          margin-left: 0.5%;
          .bbb_tit{
            span{
              font-size:.14rem;
              font-family:MicrosoftYaHei;
              color:rgba(1,255,246,1);
              text-indent: .12rem;
              margin-top: .12rem;
            }
            .exports{
              font-size: .12rem;
              color:rgba(198,244,255,1);
              margin-right: .1rem;
              margin-top: .12rem;
              background:rgba(45,90,128,1);
              border-radius:12px;
              padding:.06rem .08rem .06rem .27rem;
              line-height: .12rem;
              position: relative;
              img{
                position: absolute;
                width: .15rem;
                height: .15rem;
                left:.03rem;
                top: .04rem;
              }
            }
          }
          .ccc{
            width:2.07rem;
            height:2.06rem;
            background:linear-gradient(-90deg,rgba(95,95,92,1) 0%,rgba(231,231,229,1) 100%);
            border-radius:50%;

            position: absolute;
            left: 50%;
            top: 55%;
            margin-top:-1.03rem;
            margin-left: -1.03rem;
            .ddd{
              width:2rem;
              height:2rem;
              background:linear-gradient(90deg,rgba(95,95,92,1) 0%,rgba(231,231,229,1) 100%);
              border-radius:50%;
              position: absolute;
              left: 50%;
              top: 50%;
              margin-top:-1rem;
              margin-left: -1rem;
              .eee{
                width:1.89rem;
                height:1.88rem;
                background:rgba(26,22,23,1);
                border-radius:50%;
                position: absolute;
                left: 50%;
                top: 50%;
                margin-top:-0.945rem;
                margin-left:-0.945rem;
                z-index: 2;
                #fff{
                  z-index: 3;
                  width:1.8rem;
                  height:1.8rem;
                  border-radius:50%;
                  position: absolute;
                  left: 50%;
                  top: 50%;
                  margin-top:-0.9rem;
                  margin-left:-0.9rem;
                  background:url("../../../assets/tanguan/img/bgaaa.png") no-repeat;
                  background-size: cover;
                }
                #fffb{
                  z-index: 3;
                  width:1.8rem;
                  height:1.8rem;
                  border-radius:50%;
                  position: absolute;
                  left: 50%;
                  top: 50%;
                  margin-top:-0.9rem;
                  margin-left:-0.9rem;
                  background:url("../../../assets/tanguan/img/bgaaa.png") no-repeat;
                  background-size: cover;
                }
                #fffa{
                  z-index: 3;
                  width:1.8rem;
                  height:1.8rem;
                  border-radius:50%;
                  position: absolute;
                  left: 50%;
                  top: 50%;
                  margin-top:-0.9rem;
                  margin-left:-0.9rem;
                  background:url("../../../assets/tanguan/img/bgaaa.png") no-repeat;
                  background-size: cover;
                }

              }
            }
          }
          .parper-Box{
            width:2.07rem;
            height:2.06rem;
            border-radius:50%;
            position: absolute;
            left: 50%;
            top: 55%;
            margin-top:-1.03rem;
            margin-left: -1.03rem;
            background: url("../../../assets/tanguan/img/bgporper.png") no-repeat;
            background-size: 100%;
            /*background-position: 10% 30%;*/

            font-size:.24rem;
            font-family:MicrosoftYaHei;
            color:rgba(255,255,255,1);
            text-align: center;
            line-height: 2.06rem;
          }
          .bbb_tit{
            span{
              font-size:.14rem;
              font-family:MicrosoftYaHei;
              color:rgba(1,255,246,1);
              text-indent: .12rem;
              margin-top: .12rem;
            }
            .exports{
              font-size: .12rem;
              color:rgba(198,244,255,1);
              margin-right: .1rem;
              margin-top: .12rem;
              background:rgba(45,90,128,1);
              border-radius:12px;
              padding:.06rem .08rem .06rem .27rem;
              line-height: .12rem;
              position: relative;
              img{
                position: absolute;
                width: .15rem;
                height: .15rem;
                left:.03rem;
                top: .04rem;
              }
            }
          }
          .parper-BoxBlue{
            background: url("../../../assets/tanguan/img/bgblue.png") no-repeat;
            background-size: 100%;
          }
        }
      }





    }

    .content{
      padding:.12rem .24rem .17rem .18rem;
      overflow-y: auto;
      overflow-x: hidden;
      height: 7.9rem;
      width: 97.15%;
      .Main_Left,.Main_Right{
        width: 49%;
        .Left_tit{
          overflow: hidden;
          .youbi_Data{
            padding:.27rem .2rem .24rem .29rem;
            width: 3rem;
            height:1rem;
            box-sizing: border-box;
            overflow: hidden;
            background:rgba(18,49,75,1);
            border:1px solid rgba(9, 30, 47, 1);
            box-shadow:3px 3px 7px 1px rgba(3,22,38,0.79);
            border-radius:5px;
            .DataBox{
              position: relative;
              p{
                font-size:.36rem;
                font-family:MFShangHei_Noncommercial-Regular;
                font-weight:bold;
                color:rgba(0,255,156,1);
                line-height: .36rem;
                margin-bottom: .1rem;
                white-space: nowrap;
              }
              span{
                font-size:.14rem;
                font-family:ArialMT;
                color:rgba(186,234,190,1);
                line-height: .14rem;
                display: block;
                white-space: nowrap;
              }
            }
            &:first-child{
              margin-right: .3rem;
            }
            &:last-child{
              background:rgba(18,74,75,1);
              border:1px solid rgba(11, 47, 9, 1);
              box-shadow:3px 3px 7px 1px rgba(3,22,38,0.79);
              border-radius:5px;
              p{
                color:rgba(0,255,234,1);
              }
            }
          }
        }
        .OneData{
          width: 100%;
          height:4.27em;
          background:rgba(18,49,75,1);
          box-shadow:3px 3px 5px 1px rgba(3,22,38,0.8);
          border-radius:5px;
          position: relative;
          .OneTit{
            background:rgba(9,30,47,1);
            border-radius:5px;
            line-height: .49rem;
            font-size:.12rem;
            font-family:MicrosoftYaHei;
            font-weight:400;
            color:rgba(0,235,232,1);
            text-indent: .16rem;
            margin-top: .19rem;
          }
          .DataTab{
            height:3.6rem;
            overflow: hidden;
            #myCharts{
              width: 200%;
              height: 3.5rem;
            }
            #myCharts_Three{
              width: 200%;
              height: 3.5rem;
            }
            #myCharts_Six{
              width: 200%;
              height: 3.5rem;
            }
            #myCharts_Eight{
              height: 3.5rem;
              width: 200%;
            }
          }
          .exports{
            font-size: .12rem;
            color:rgba(198,244,255,1);
            background:rgba(45,90,128,1);
            border-radius:12px;
            padding:.06rem .08rem .06rem .27rem;
            line-height: .12rem;
            position: absolute;
            right: .83rem;
            bottom: .08rem;
            img{
              position: absolute;
              width: .15rem;
              height: .15rem;
              left:.03rem;
              top: .04rem;
            }
          }

          .RemoveLR{
            position: absolute;
            right: .3rem;
            bottom: .1rem;
            overflow: hidden;
            span{
              cursor: pointer;
              img{
                width: .17rem;
                height:.17rem;
                display: block;
              }
              &:first-child{
                margin-right:8px;
              }
            }
          }

        }

        /*.TwoData{*/
        /*  height: 3.76rem;*/
        /*  .DataTab{*/
        /*    height: 3.2rem;*/
        /*    #myCharts_Three{*/
        /*      height:3.1rem;*/
        /*      width: 200%;*/
        /*    }*/
        /*  }*/
        /*}*/
        /*.SixData{*/
        /*  height:4.08rem;*/
        /*  .DataTab{*/
        /*    height: 3.58rem;*/
        /*    #myCharts_Six{*/
        /*      height:3.48rem;*/
        /*      width: 200%;*/
        /*    }*/
        /*  }*/

        /*}*/
        /*.myCharts_Eight{*/
        /*  height: 3.95rem;*/
        /*  .DataTab{*/
        /*    height: 3.4rem;*/
        /*    #myCharts_Eight{*/
        /*      height:3.3rem;*/
        /*      width: 200%;*/
        /*    }*/
        /*  }*/
        /*}*/
      }

      footer{
        width: 100%;
        height:2.92rem;
        background:rgba(9,30,47,1);
        box-shadow:3px -2px 9px 0px rgba(3,22,38,0.6);
        padding-top: .3rem;
        padding-bottom: .3rem;
        float: left;
        margin-top: .23rem;
        position: relative;
        .footer{

          .tab_th{
            height: .35rem;
            width: 100%;
            overflow: hidden;
            border-bottom: 1px solid #0B365A;
            div{
              border-right: 1px solid #0B365A;
              height: 100%;
              font-size:.14rem;
              font-family:MicrosoftYaHei;
              color:rgba(0,252,255,1);
              text-align: center;
              line-height: .35rem;
            }
            .th_name{
              width: 39.36%;
            }
            .th_num{
              width: 19.7%;
            }
            .th_unit{
              width: 19.7%;
            }
            .th_state{
              width: 18.7%;
            }
          }
          .proData{
            width: 48%;
            height:2.83rem;
            overflow: hidden;
            border:1px solid rgba(5,25,40,1);
            box-shadow:0px 8px 7px 1px rgba(0, 0, 0, 0.35);
            border-radius:2px;
            margin:0rem .12rem 0rem .09rem;
            .tab_box{
              height: 75%;
              overflow-x: hidden;
              overflow-y: auto;

              &::-webkit-scrollbar
              {
                width: 13px;
                height: 8px;
                background-color: #0B2A44;
              }

              /*定义滚动条轨道 内阴影+圆角*/
              &::-webkit-scrollbar-track
              {
                -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
                border-radius: 10px;
                background-color: #0B2A44;
              }

              /*定义滑块 内阴影+圆角*/
              &::-webkit-scrollbar-thumb
              {
                border:1px solid rgba(5,25,40,1);
                box-shadow:0px 8px 7px 1px rgba(0, 0, 0, 0.35);
                border-radius:2px;
                background: #0F64AB;
              }
              .tab_th{
                height: .35rem;
                width: 100%;
                overflow: hidden;
                border-bottom: 1px solid #0B365A;
                div{
                  border-right: 1px solid #0B365A;
                  height: 100%;
                  font-size:.14rem;
                  font-family:MicrosoftYaHei;
                  color:rgba(0,252,255,1);
                  text-align: center;
                  line-height: .35rem;
                }
                .th_name{
                  width: 40%;
                }
                .th_num{
                  width: 20%;
                }
                .th_unit{
                  width: 20%;
                }
                .th_state{
                  width: 19%;
                }
              }
            }
            &:first-child{
            }
          }
          .shu{
            float: left;
            width: 1px;
            height: 2.52rem;
            background:#0B2A44;
            margin-top: .14rem;
            position: absolute;
            left: 50%;
            margin-left: -1px;
          }
        }
      }

      &::-webkit-scrollbar
      {
        width: 0px;
        height: 0px;
        background-color: transparent;
      }

      /*定义滚动条轨道 内阴影+圆角*/
      &::-webkit-scrollbar-track
      {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        border-radius: 10px;
        background-color: transparent;
      }

      /*定义滑块 内阴影+圆角*/
      &::-webkit-scrollbar-thumb
      {
        border-radius:2px;
        background: transparent;
      }
    }
  }
</style>
