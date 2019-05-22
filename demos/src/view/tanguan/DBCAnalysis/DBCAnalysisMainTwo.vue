<template>
  <div class="DBCAnalysisMainTwo_BigBox" :class="this.$store.state.tanguan.ShowDBCMainTwo == true?'':'hide'">
    <div class="DBCA_mebu">
      <div class="DBCA_content">
        <!--        头部公用-->
        <div class="DBCA_content_Tit">
          <div class="DBCA_zhi">
            <div class="DBCA_word_Box">
              <span class="fl checked_dui">
                <i class="el-icon-check"></i>
              </span>
              <div class="DBCA_CAN fl">
                <span class="fl">CAN_SEND_ID</span>
                <input type="text" class="fl">
                <span class="fl marginss">一 一</span>
                <input type="text" class="fl">
                <div class="botelv fl">
                  <span class="fl">波特率</span>
                  <div class="bote_num fl">500K</div>
                  <span class="fl">&nbsp;&nbsp;&nbsp;K</span>
                </div>
              </div>
              <div class="DBCA_but_box">
                <div class="DBCjiexi_but fl">DBC解析</div>
                <div class="daochu_but fl">导出协议</div>
              </div>
            </div>
          </div>
        </div>
        <!--        表格数据-->
        <div class="DBCA_con_tab">
          <div class="table_Box">
            <table>
              <tbody>
                <tr>
                  <td class="table_num">1</td>
                  <td class="table_Part_NO">Part</td>
                  <td class="table_Type">Type</td>
                  <td class="table_Time">Time(ms)</td>
                  <td class="table_CAN_SEND_ID">CAN_SEND_ID</td>
                  <td class="table_Message_send">Message_SEND</td>
                  <td class="table_CAN_REV_ID">CAN_REV_ID</td>
                  <td class="table_Length_SEND">Length_REV</td>
                  <td class="table_Message_REV">Message_REV</td>
                </tr>

                <tr
                  v-for="(val,index) in CANList"
                  :class="ischeckeds == index ? 'active' : ''"
                  v-on:click="selectMessageREV(val.id,index)"
                >
                  <td class="table_num">{{index+2}}</td>
                  <td class="table_Part_NO">{{val.part_no}}</td>
                  <td class="table_Type">{{val.order_type}}</td>
                  <td class="table_Time">{{val.delay_time}}</td>
                  <td class="table_CAN_SEND_ID">{{val.can_send_id}}</td>
                  <td class="table_Message_send">{{val.message_send}}</td>
                  <td class="table_CAN_REV_ID">{{val.can_rev_id}}</td>
                  <td class="table_Length_SEND">{{val.length_rev}}</td>
                  <td class="table_Message_REV">{{val.message_rev}}</td>
                </tr>
              </tbody>
            </table>
          </div>
<!--          底部-->
          <footer>
            <div class="DBC_bottom">
              <div class="DBC_Tit_Bot">
                <span>DBC解析</span>
              </div>
<!--              DPC解析头部下底部box-->
              <div class="DBX_BOX">
                <div class="Select_message_REV_Box">
                <div class="Select_message_word">
                  <p>
                    <span class="fl">Part.NO:</span>
                    <span class="fl">1</span>
                  </p>
                  <table>
                    <tbody>
                      <tr>
                        <td class="name">Message_REV</td>
                        <td v-for="val in arr2">{{val}}</td>
                      </tr>
                      <tr>
                        <td class="name">二进制数</td>
                        <td v-for="val in arr1">{{val}}</td>
<!--                        <td>0000 1111</td>-->
<!--                        <td>0000 1111</td>-->
<!--                        <td>0000 1111</td>-->
<!--                        <td>0000 1111</td>-->
<!--                        <td>0000 1111</td>-->
<!--                        <td>0000 1111</td>-->
<!--                        <td>0000 1111</td>-->
<!--                        <td>0000 1111</td>-->
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
                <div class="addDBC_Jiexi_Box">
                  <div class="addDBC_Left fl">
                    <p>DBC解析</p>
                    <table>
                      <tbody>
                        <tr>
                          <th style="width: 25%;">Signel.&nbsp;Name</th>
                          <th style="width: 10%;">起始段</th>
                          <th style="width: 10%;">起始位</th>
                          <th style="width: 10%;">位数</th>
                          <th style="width: 8%;">单位</th>
                          <th style="width: 7%;"></th>
                          <th style="width: 10%;">Max</th>
                          <th style="width: 10%;">Min</th>
                          <th style="width: 10%;"><img src="../../../assets/tanguan/img/add.png" alt="" v-on:click="ADDZhiling"></th>
                        </tr>
                        <tr v-for="(values,index) in DBCGUI" :key="index">
                          <td class="Signel_Name">
                            <input
                              type="text"
                              v-model="values.name"
                              @blur="changeZhiWord(values.id,values.name,1,values.is_check)"
                            >
                          </td>
                          <td class="start_duan">
                            <input
                              type="text"
                              v-model="values.start_paragraph"
                              @blur="changeZhiWord(values.id,values.start_paragraph,2,values.is_check)"
                            >
                          </td>
                          <td class="end_duan">
                            <input
                              type="text"
                              v-model="values.start_place"
                              @blur="changeZhiWord(values.id,values.start_place,3,values.is_check)"
                            >
                          </td>
                          <td class="weishu">
                            <input
                              type="number"
                              v-model="values.places"
                              @blur="changeZhiWord(values.id,values.places,4,values.is_check)"
                            >
                          </td>
                          <td class="unit">
                            <input
                              type="text"
                              v-model="values.unit"
                              @blur="changeZhiWord(values.id,values.unit,5,values.is_check)"
                            >
                          </td>
                          <td class="checkeds_DBC">
                            <span v-on:click="changeChecked(values.id,index)">
                              <i class="el-icon-check" :class="values.is_check == true?'':'hide'"></i>
                            </span>
                          </td>
                          <td class="Max">
                            <input
                              type="text"
                              v-model="values.max"
                              @blur="changeZhiWord(values.id,values.max,6,values.is_check,values.min)"
                              :disabled="!values.is_check"
                            >
                          </td>
                          <td class="Min">
                            <input
                              type="text"
                              v-model="values.min"
                              @blur="changeZhiWord(values.id,values.min,7,values.is_check,values.max)"
                              :disabled="!values.is_check"
                            >
                          </td>
                          <td class="Delete" v-on:click="DeleteJX(index,values.id)">2</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="showDBC_Right fl">
                    <div class="DBC_Nmae_Zhi">
                      <span class="Name fl">名称</span>
                      <span class="Num fl">数值</span>
                      <span class="unit fl">单位</span>
                      <span class="states fl">状态</span>
                    </div>
                    <div class="Table_scrollY">
                      <div class="Table_scroll_Box">
                        <table>
                          <tr v-for="val in DBCTable">
                            <td class="Name fl">{{val.name}}</td>
                            <td class="Num fl">{{val.num}}</td>
                            <td class="unit fl">{{val.unit}}</td>
                            <td class="states fl">
                              <span :class="val.status == 1?'greens': val.status == 2 ? 'reds':'' "></span>
                            </td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
          <div class="but" v-on:click="aaaa">
            确定
            <span></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      props:{
        CANList:{
          type:Array
        }
      },
        name: "DBCAnalysisMainTwo",
      data(){
        return{
          ischeckeds:-1,
          arr1:[],
          arr2:[],
          DBCGUI:[],            //DBC解析规则
          zhilingID:-1,
          DBCTable:[]




        }
      },
      methods:{
        aaaa(){
          console.log(this.zhilingID);
          if(this.zhilingID == -1){
            return
          }
          this.$axios({
            method:"post",
            url:`carbon_tank/ana_rules/?order=${this.zhilingID}`,
            data:this.DBCGUI
          }).then(res=>{
            console.log(res.data)
            this.DBCTable = res.data.result_list
            console.log(this.DBCTable)
            this.DBCGUI = res.data.rule_list
            // status   0是不存在   1是范围之内(green)  2是范围之外（red）
          }).catch(err=>{
            console.log(err)
          })
        },
        // 获取二进制十六进制
        selectMessageREV(id,index){
          this.ischeckeds = index;
          this.zhilingID = id;
          this.$axios({
            method:"get",
            url:`carbon_tank/orders/${id}`
          }).then(res=>{
            console.log(res.data.b_message_rev)
            if(res.data.b_message_rev === null){
              this.arr1 = []
              this.arr2 = []
            }
            let arr = [];
              var str = '';
            var a = 0;
            for(var i =0;i<res.data.b_message_rev.length;i++){
              a++;
              if(i%4 == 0){
                str +=" ";
              }
              if(a%8 == 0){
                str += res.data.b_message_rev[i];
                arr.push(str)
                str = ''
              }else{
                str += res.data.b_message_rev[i]
              }
            }
            console.log(arr)
            this.arr1 = arr
            var str2 = ""
            var arr2 = [];
            var c = 0
            for(var j = 0;j<res.data.message_rev.length;j++){
              if(c == 2){
                arr2.push(str2)
                c = 0
                str2 = ""
              }
              if(res.data.message_rev[j] != " "){
                c++;
                str2 += res.data.message_rev[j]
              }
            }
            if(str2 != ""){
              arr2.push(str2)
            }
            this.arr2 = arr2
          }).catch(err=>{
            console.log(err.data)
          })
          //  获取某条指令的全部解析规则

          this.$axios({
            method:"get",
            url:`carbon_tank/ana_rules/?order=${id}`
          }).then(res=>{
            console.log(res.data)
            this.DBCGUI = res.data
          }).catch(err=>{
            console.log(err)
          })

        },


        // 改变指令解析选中状态
        changeChecked(id,index){
          this.DBCGUI[index].is_check = !this.DBCGUI[index].is_check
          if(this.DBCGUI[index].is_check){
            this.$notify({
            title: '警告',
              message: '选择之后Max与Min为必填项',
              type: 'warning'
          });
          }else{
            this.DBCGUI[index].max = null;
            this.DBCGUI[index].min = null;
          }
          this.changeZhiWord(id,this.DBCGUI[index].is_check,9)
        },
        // 更改单个指令内容
        changeZhiWord(id,val,zhi,is_check,valuc){
          if(id == null){
            return
          }
          let ObjData = {};
          if(zhi == 1){
            ObjData={
              id:this.zhilingID,
              name:val,
              is_check:is_check
            }
          }else if(zhi == 2){
            ObjData={
              id:this.zhilingID,
              start_paragraph:val,
              is_check:is_check
            }
          }else if(zhi == 3){
            ObjData={
              id:this.zhilingID,
              start_place:val,
              is_check:is_check
            }
          }else if(zhi == 4){
            ObjData={
              id:this.zhilingID,
              places:val,
              is_check:is_check
            }
          }else if(zhi == 5){
            ObjData={
              id:this.zhilingID,
              unit:val,
              is_check:is_check
            }
          }else if(zhi == 6){
            ObjData={
              id:this.zhilingID,
              max:val,
              is_check:is_check,
              min:valuc
            }
          }else if(zhi == 7){
            ObjData={
              id:this.zhilingID,
              min:val,
              is_check:is_check,
              max:valuc
            }
          }else if(zhi == 9){
            ObjData={
              id:this.zhilingID,
              is_check:val,
            }
          }

          this.$axios({
            method:'patch',
            url:`carbon_tank/ana_rules/${id}/`,
            data:ObjData
          }).then(res=>{
            console.log(res.data)
            this.DBCTable = res.data
          }).catch(err=>{
            console.log(err)
          })
        },

        // 添加DBC解析
        ADDZhiling(){
          if(this.zhilingID == -1){
            return
          }
          let Object={
            id: null,
            order: this.zhilingID,
            name: null,
            start_paragraph: null,
            start_place: null,
            places: null,
            is_check: false,
            unit: null,
            max: null,
            min: null
          }
            this.DBCGUI.push(Object)
        },
        //删除某条解析
        DeleteJX(index,id){
          console.log(id,index)
          //
          this.$axios({
            method:'delete',
            url:`/carbon_tank/ana_rules/${id}/ `
          }).then(res=>{
            this.DBCGUI.splice(index,1);
            this.aaaa()
            console.log(res)
          }).catch(err=>{
            console.log(err)
          })



        },
      },
      created(){
      },
      watch:{
        CANList(news,old){
            this.ischeckeds = -1;
            this.zhilingID = -1;
            this.arr1 = [];
            this.arr2 = [];
            this.DBCGUI = [];
            this.DBCTable = [];
            console.log('监听')
        }
      },
      destroyed() {
        this.$store.commit('SHOWDBC_MAINTWO',false)
      }
    }
</script>


<style lang="scss" scoped>

  .DBCAnalysisMainTwo_BigBox{
    width: 100%;
    height:100%;
    .DBCA_mebu{
      width: 100%;
      height:100%;
      padding:.13rem .41rem .23rem .17rem;
      box-sizing: border-box;
      .DBCA_content{
        width: 100%;
        height:100%;
        .DBCA_content_Tit{
          width: 100%;
          height:.55rem;
          border:1px solid rgba(30,45,113,1);
          /*padding支架*/
          .DBCA_zhi{
            padding: .09rem .28rem .15rem .15rem;
            .DBCA_word_Box{
              height: .34rem;
              overflow: hidden;
              position: relative;
              /*checked*/
              .checked_dui{
                width: .15rem;
                height:.15rem;
                border:1px solid SiceColor();
                position: relative;
                margin-top: .05rem;
                .el-icon-check{
                  font-size: .16rem;
                  color:SiceColor();
                  position: absolute;
                  left: 0;
                  top: 0;
                }
              }
              .DBCA_CAN{
                span{
                  font-size:.12rem;
                  color:SiceColor();
                  line-height:.26rem;
                  margin-right: .11rem;
                }
                margin-left: .25rem;
                input{
                  width:.8rem;
                  height:.24rem;
                  border:1px solid SiceColor();
                  outline: none;
                  text-indent: .1rem;
                  font-size: .12rem;
                  background: transparent;
                  color:SiceColor();
                }
                .marginss{
                  margin: 0 .05rem;
                }
                .botelv{
                  overflow: hidden;
                  margin-left: .29rem;
                  .bote_num{
                    width:.7rem;
                    height:.24rem;
                    border:1px solid SiceColor();
                    font-size: .12rem;
                    line-height: .24rem;
                    text-indent: .12rem;
                    color:SiceColor();
                  }
                }
              }
              .DBCA_but_box{
                overflow: hidden;
                position: absolute;
                right: 0;
                top:.04rem;
                div{
                  width:.81rem;
                  height:.27rem;
                  border-radius:5px;
                  color:#fff;
                  line-height: .27rem;
                  text-align: center;
                  font-family:MicrosoftYaHei;
                  font-size: .14rem;
                  margin-left: .17rem;
                }
                .DBCjiexi_but{
                  background:rgba(8,201,121,1);
                }
                .daochu_but{
                  background:rgba(8,194,201,1);
                }
              }
            }
          }
        }
        .DBCA_con_tab{
          width: 100%;
          height:9.09rem;
          border:1px solid rgba(30,45,113,1);
          overflow: hidden;
          position: relative;
          .table_Box{
            /*width: 14.45rem;*/
            width: 100%;
            height: 3.41rem;
            border-bottom: 1px solid #1E2D71;
            overflow: auto;
            table{
              width: 100%;
              tbody{
                tr{
                  border-bottom: 1px solid #1E2D71;
                  height:.37rem;
                  td{
                    height:.37rem;
                    border-right: 1px solid #1E2D71;
                    font-size: .12rem;
                    color:SiceColor();
                    text-align: center;
                  }
                  .table_num{
                    width:5.68%;
                  }
                  .table_Part_NO{
                    width:6.68%;
                  }
                  .table_Type{
                    width: 5%;
                  }
                  .table_Time{
                    width: 9%;
                  }
                  .table_CAN_SEND_ID{
                    width:11.55%;
                  }
                  .table_Message_send{
                    width:18.23%;
                  }
                  .table_CAN_REV_ID{
                    width:11.26%;
                  }
                  .table_Length_SEND{
                    width: 14.67%;
                  }
                  .table_Message_REV{
                    width:24.54%;
                  }
                  &.active{
                    background: #416ab1;
                    border-color:#416ab1;
                  }
                }
              }
            }
            &::-webkit-scrollbar {/*滚动条整体样式*/
              width: 20px;     /*高宽分别对应横竖滚动条的尺寸*/
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
          /*底部FOOTER*/
          footer{
            width: 100%;
            .DBC_bottom{
              width: 100%;
              .DBC_Tit_Bot{
                span{
                  @include SizeStyle(#FEFFFF);
                  width:.87rem;
                  height:.24rem;
                  background:rgba(18,49,95,1);
                  text-align: center;
                  line-height: .24rem;
                }
              }
              .DBX_BOX{
                padding: 0 .12rem .1rem .24rem;
                .Select_message_REV_Box{
                  width: 100%;
                  .Select_message_word{
                    width: 100%;
                    p{
                      overflow: hidden;
                      span{
                        @include SizeStyle();
                        line-height: .55rem;
                        margin-right: .1rem;
                      }
                    }
                    table{
                      height: .65rem;
                      tr{
                        margin-bottom: .21rem;
                        td{
                          width: .8rem;
                          text-align: center;
                          font-size: .12rem;
                          color:SiceColor();
                        }
                        .name{
                          text-align: left;
                          width: .1rem;
                        }
                      }
                    }
                  }
                }
                .addDBC_Jiexi_Box{
                 overflow: hidden;
                  margin-top: .23rem;
                  .addDBC_Left{
                    /*width: 5.95rem;*/
                    height:3.05rem;
                    width: 45%;
                    border:1px solid SiceColor();
                    p{
                      font-size:.23rem;
                      font-family:MicrosoftYaHei;
                      color:SiceColor();
                      line-height:.58rem;
                      text-indent: .27rem;
                      border-bottom: 2px solid #057D8C;
                    }
                    table{
                      width: 100%;
                      tr{
                        th,td{
                          text-align: center;
                          font-size: .14rem;
                          height:.31rem;
                          line-height: .31rem;
                          color:SiceColor();
                          white-space: nowrap;
                          input{
                            border: 0;
                            background: transparent;
                            border-bottom: 1px solid #057D8C;
                            outline: none;
                            color:SiceColor();
                            display: block;
                            margin:0 auto;
                            input::-webkit-input-placeholder {
                              color:SiceColor();
                            }
                            text-align: center;
                          }
                          input[type="number"] {
                            -moz-appearance: textfield;
                          }
                          input[type="number"]::-webkit-inner-spin-button,
                          input[type="number"]::-webkit-outer-spin-button {
                            -webkit-appearance: none;
                            margin: 0;
                          }
                          img{
                            width: .27rem;
                            height:.27rem;
                            display: block;
                            cursor: pointer;
                          }
                        }
                        /*Signel_Name   start_duan   end_duan  weishu    checkeds_DBC   unit  Max  Min  Delete*/
                        .Signel_Name{
                          width:25%;
                          input{
                            width: 80%;
                          }
                        }
                        .start_duan{
                          width:10%;
                          input{
                            width: 80%;
                          }
                        }
                        .end_duan{
                          width:10%;
                          input{
                            width: 80%;
                          }
                        }
                        .weishu{
                          width:10%;
                          input{
                            width: 80%;
                          }
                        }
                        .checkeds_DBC{
                          width:7%;
                          span{
                            width: .2rem;
                            height:.2rem;
                            display: block;
                            border:1px solid SiceColor();
                            position: relative;
                            margin:0 auto;
                            i{
                              position: absolute;
                              font-size: .2rem;
                              color:SiceColor();
                              left: 0;
                              top: 0;
                              &.hide{
                                display: none;
                              }
                            }
                          }
                        }
                        .unit{
                          width:8%;
                          input{
                            width: 80%;
                        }
                        }
                        .Max{
                          width:10%;
                          input{
                            width: 80%;
                          }
                        }
                        .Min{
                          width:10%;
                          input{
                            width: 80%;
                          }
                        }
                        .Delete{
                          width:10%;
                        }
                      }
                      & tr:first-child{
                        td{
                          background: #152D58;
                        }
                      }
                    }
                  }
                  .showDBC_Right{
                    /*width: 6.49rem;*/
                    width: 45%;
                    height:3.05rem;
                    border:1px solid SiceColor();
                    margin-left: .05rem;
                    background: #0E163A;
                    .DBC_Nmae_Zhi{
                      width:100%;
                      height:.35rem;
                      border-bottom: 1px solid #0B365A;
                      overflow: hidden;
                      span{
                        height:100%;
                        border-right: 1px solid #0B365A;
                        font-size: .14rem;
                        text-align: center;
                        line-height: .35rem;
                        color:#00FCFF;
                      }
                      .Name{
                        width: 38.4%;
                      }
                      .Num{
                        width: 19.2%;
                      }
                      .unit{
                        width: 19.3%;
                      }
                      .states{
                        width: 18.3%;
                      }
                    }
                    .Table_scrollY{
                      height:2.69rem;
                      overflow: hidden;
                      .Table_scroll_Box{
                        height:100%;
                        overflow: auto;
                        overflow-x: hidden;
                        &::-webkit-scrollbar {/*滚动条整体样式*/
                          width: 20px;     /*高宽分别对应横竖滚动条的尺寸*/
                          height: 4px;
                        }
                        &::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
                          border-radius:2px;
                          -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
                          background: #0F64AB;
                        }
                        &::-webkit-scrollbar-track {/*滚动条里面轨道*/
                          -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
                          border-radius: 0;
                          background:#0E163A;
                        }
                        table{
                          width: 100%;
                          table-layout:fixed;
                          word-break:break-all;
                          tr{
                            overflow: hidden;
                            td{
                              height:.35rem;
                              border-right: 1px solid #0B365A;
                              border-bottom: 1px solid #0B365A;
                              font-size: .14rem;
                              color:#1C83D0;
                              text-align: center;
                              line-height: .35rem;
                            }
                            .Name{
                              width: 38.4%;
                            }
                            .Num{
                              width: 19.2%;
                            }
                            .unit{
                              width:19.3%
                            }
                            .states{
                              width: 18.3%
                            }
                              .reds{
                                width:16px;
                                height:16px;
                                background:rgba(255,3,9,1);
                                border-radius:50%;
                                display: block;
                                margin:0 auto;
                                margin-top:.11rem;
                              }
                              .greens{
                                width:16px;
                                height:16px;
                                background:rgba(3,255,33,1);
                                border-radius:50%;
                                display: block;
                                margin:0 auto;
                                margin-top:.11rem;
                              }
                          }
                        }

                      }
                    }
                  }
                }
              }

            }
          }
          .but{
            width:1.19rem;
            height:.4rem;
            background:rgba(8,194,201,1);
            border-radius:5px;
            position: absolute;
            right: .56rem;
            bottom:.1rem;
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
        }
      }
    }
    &.hide{
      display: none;
    }
  }
</style>
