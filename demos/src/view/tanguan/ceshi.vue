<template>
  <div class="aaa">
    <div id="bbb"></div>
  </div>
</template>

<script>
    export default {
        name: "ceshi",
      mounted(){
          this.aa()
      },
      methods:{
        aa(){
          let _that = this
          let myChart = this.$echarts.init(document.getElementById('bbb'))
            console.log(this.$echarts)
          var symbolSize = 20;
          var data = [[15, 0], [-50, 10], [-56.5, 20], [-46.5, 30], [-22.1, 40],[90,1]];

          myChart.setOption({
            title: {
              text: 'Try Dragging these Points'
            },
            tooltip: {
              triggerOn: 'none',
              formatter: function (params) {
                return 'X: ' + params.data[0].toFixed(2) + '<br>Y: ' + params.data[1].toFixed(2);
              }
            },
            grid: {
            },
            xAxis: {
              min: -100,
              max: 80,
              type: 'value',
              axisLine: {onZero: false}
            },
            yAxis: {
              min: -30,
              max: 60,
              type: 'value',
              axisLine: {onZero: false}
            },
            dataZoom: [//给x轴设置滚动条
              {
                start:0,//默认为0
                end: 100-1500/31,//默认为100
                type: 'slider',
                show: true,
                xAxisIndex: [0],
                handleSize: 0,//滑动条的 左右2个滑动条的大小
                height: 8,//组件高度
                left: 50, //左边的距离
                right: 40,//右边的距离
                bottom: 26,//右边的距离
                handleColor: '#ddd',//h滑动图标的颜色
                handleStyle: {
                  borderColor: "#cacaca",
                  borderWidth: "1",
                  shadowBlur: 2,
                  background: "#ddd",
                  shadowColor: "#ddd",
                },
                fillerColor: new $echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                  //给颜色设置渐变色 前面4个参数，给第一个设置1，第四个设置0 ，就是水平渐变
                  //给第一个设置0，第四个设置1，就是垂直渐变
                  offset: 0,
                  color: '#1eb5e5'
                }, {
                  offset: 1,
                  color: '#5ccbb1'
                }]),
                backgroundColor: '#ddd',//两边未选中的滑动条区域的颜色
                showDataShadow: false,//是否显示数据阴影 默认auto
                showDetail: false,//即拖拽时候是否显示详细数值信息 默认true
                handleIcon: 'M-292,322.2c-3.2,0-6.4-0.6-9.3-1.9c-2.9-1.2-5.4-2.9-7.6-5.1s-3.9-4.8-5.1-7.6c-1.3-3-1.9-6.1-1.9-9.3c0-3.2,0.6-6.4,1.9-9.3c1.2-2.9,2.9-5.4,5.1-7.6s4.8-3.9,7.6-5.1c3-1.3,6.1-1.9,9.3-1.9c3.2,0,6.4,0.6,9.3,1.9c2.9,1.2,5.4,2.9,7.6,5.1s3.9,4.8,5.1,7.6c1.3,3,1.9,6.1,1.9,9.3c0,3.2-0.6,6.4-1.9,9.3c-1.2,2.9-2.9,5.4-5.1,7.6s-4.8,3.9-7.6,5.1C-285.6,321.5-288.8,322.2-292,322.2z',
                filterMode: 'filter',
              },
              //下面这个属性是里面拖到
              {
                type: 'inside',
                show: true,
                xAxisIndex: [0],
                start: 0,//默认为1
                end: 100-1500/31,//默认为100
              },
            ],
            series: [
              {
                id: 'a',
                type: 'line',
                smooth: true,
                symbolSize: symbolSize,
                data: data
              }
            ]
          });


          if (!app.inNode) {
            setTimeout(function () {
              // Add shadow circles (which is not visible) to enable drag.
              myChart.setOption({
                graphic: _that.$echarts.util.map(data, function (item, dataIndex) {
                  return {
                    type: 'circle',
                    position: myChart.convertToPixel('grid', item),
                    shape: {
                      cx: 0,
                      cy: 0,
                      r: symbolSize / 2
                    },
                    invisible: true,
                    draggable: true,
                    ondrag:  _that.$echarts.util.curry(onPointDragging, dataIndex),
                    onmousemove:  _that.$echarts.util.curry(showTooltip, dataIndex),
                    onmouseout:  _that.$echarts.util.curry(hideTooltip, dataIndex),
                    z: 100
                  };
                })
              });
            }, 0);

            window.addEventListener('resize', updatePosition);
          }

          myChart.on('dataZoom', updatePosition);

          function updatePosition() {
            myChart.setOption({
              graphic: $echarts.util.map(data, function (item, dataIndex) {
                return {
                  position: myChart.convertToPixel('grid', item)
                };
              })
            });
          }

          function showTooltip(dataIndex) {
            myChart.dispatchAction({
              type: 'showTip',
              seriesIndex: 0,
              dataIndex: dataIndex
            });
          }

          function hideTooltip(dataIndex) {
            myChart.dispatchAction({
              type: 'hideTip'
            });
          }

          function onPointDragging(dataIndex, dx, dy) {
            data[dataIndex] = myChart.convertFromPixel('grid', this.position);

            // Update data
            myChart.setOption({
              series: [{
                id: 'a',
                data: data
              }]
            });
          }

        }
      },
      created() {
          console.log(this)
      }
    }
</script>

<style scoped lang="scss">

  .aaa{
    width: 8.66rem;
    height: 4.32rem;
    margin:0 auto;
    #bbb{
      width: 100%;
      height: 100%;
    }
  }
</style>
