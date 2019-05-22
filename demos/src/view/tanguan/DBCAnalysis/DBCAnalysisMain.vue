<template>
  <div class="DBCAnalysisMain_BigBox" :class="this.$store.state.tanguan.ShowDBCMainTwo ==  true?'hide':''">
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
                <div class="DBCjiexi_but fl" @click="changeDBC">DBC解析</div>
                <div class="daochu_but fl">导出协议</div>
              </div>
            </div>
          </div>
        </div>
<!--        表格数据-->
        <div class="DBCA_con_tab">
          <div class="table_Box">
            <div class="Table">
              <div class="Table_row">
                <div class="table_num fl">1</div>
                <div class="table_Part_NO fl">Part.NO</div>
                <div class="table_Type fl">Type</div>
                <div class="table_Time fl">Time(ms)</div>
                <div class="table_CAN_SEND_ID fl">CAN_SEND_ID</div>
                <div class="table_Message_send fl">Message_SEND</div>
                <div class="table_CAN_REV_ID fl">CAN_REV_ID</div>
                <div class="table_Length_SEND fl">Length_REV</div>
                <div class="table_Message_REV fl">Message_REV</div>
              </div>
              <div class="Table_row" v-for="(val,index) in CANList">
                <div class="table_num fl">{{index+2}}</div>
                <div class="table_Part_NO fl">{{val.part_no}}</div>
                <div class="table_Type fl">{{val.order_type}}</div>
                <div class="table_Time fl">{{val.delay_time}}</div>
                <div class="table_CAN_SEND_ID fl">{{val.can_send_id}}</div>
                <div class="table_Message_send fl">{{val.message_send}}</div>
                <div class="table_CAN_REV_ID fl">{{val.can_rev_id}}</div>
                <div class="table_Length_SEND fl">{{val.length_rev}}</div>
                <div class="table_Message_REV fl">{{val.message_rev}}</div>
              </div>
            </div>
<!--            <table>-->
<!--              <tbody>-->
<!--              <tr>-->
<!--                <td class="table_num"></td>-->
<!--                <td class="table_Part_NO"></td>-->
<!--                <td class="table_CAN_SEND_ID"></td>-->
<!--                <td class="table_Message_send"></td>-->
<!--                <td class="table_CAN_REV_ID"></td>-->
<!--                <td class="table_Length_SEND"></td>-->
<!--                <td class="table_Message_REV"></td>-->
<!--              </tr>-->
<!--              <tr>-->
<!--                <td class="table_num"></td>-->
<!--                <td class="table_Part_NO"></td>-->
<!--                <td class="table_CAN_SEND_ID"></td>-->
<!--                <td class="table_Message_send"></td>-->
<!--                <td class="table_CAN_REV_ID"></td>-->
<!--                <td class="table_Length_SEND"></td>-->
<!--                <td class="table_Message_REV"></td>-->
<!--              </tr>-->
<!--              <tr>-->
<!--                <td class="table_num"></td>-->
<!--                <td class="table_Part_NO"></td>-->
<!--                <td class="table_CAN_SEND_ID"></td>-->
<!--                <td class="table_Message_send"></td>-->
<!--                <td class="table_CAN_REV_ID"></td>-->
<!--                <td class="table_Length_SEND"></td>-->
<!--                <td class="table_Message_REV"></td>-->
<!--              </tr>-->
<!--              <tr>-->
<!--                <td class="table_num"></td>-->
<!--                <td class="table_Part_NO"></td>-->
<!--                <td class="table_CAN_SEND_ID"></td>-->
<!--                <td class="table_Message_send"></td>-->
<!--                <td class="table_CAN_REV_ID"></td>-->
<!--                <td class="table_Length_SEND"></td>-->
<!--                <td class="table_Message_REV"></td>-->
<!--              </tr>-->
<!--              <tr>-->
<!--                <td class="table_num"></td>-->
<!--                <td class="table_Part_NO"></td>-->
<!--                <td class="table_CAN_SEND_ID"></td>-->
<!--                <td class="table_Message_send"></td>-->
<!--                <td class="table_CAN_REV_ID"></td>-->
<!--                <td class="table_Length_SEND"></td>-->
<!--                <td class="table_Message_REV"></td>-->
<!--              </tr>-->
<!--              <tr>-->
<!--                <td class="table_num"></td>-->
<!--                <td class="table_Part_NO"></td>-->
<!--                <td class="table_CAN_SEND_ID"></td>-->
<!--                <td class="table_Message_send"></td>-->
<!--                <td class="table_CAN_REV_ID"></td>-->
<!--                <td class="table_Length_SEND"></td>-->
<!--                <td class="table_Message_REV"></td>-->
<!--              </tr>-->
<!--              <tr>-->
<!--                <td class="table_num"></td>-->
<!--                <td class="table_Part_NO"></td>-->
<!--                <td class="table_CAN_SEND_ID"></td>-->
<!--                <td class="table_Message_send"></td>-->
<!--                <td class="table_CAN_REV_ID"></td>-->
<!--                <td class="table_Length_SEND"></td>-->
<!--                <td class="table_Message_REV"></td>-->
<!--              </tr>-->
<!--              <tr>-->
<!--                <td class="table_num"></td>-->
<!--                <td class="table_Part_NO"></td>-->
<!--                <td class="table_CAN_SEND_ID"></td>-->
<!--                <td class="table_Message_send"></td>-->
<!--                <td class="table_CAN_REV_ID"></td>-->
<!--                <td class="table_Length_SEND"></td>-->
<!--                <td class="table_Message_REV"></td>-->
<!--              </tr>-->
<!--              <tr>-->
<!--                <td class="table_num"></td>-->
<!--                <td class="table_Part_NO"></td>-->
<!--                <td class="table_CAN_SEND_ID"></td>-->
<!--                <td class="table_Message_send"></td>-->
<!--                <td class="table_CAN_REV_ID"></td>-->
<!--                <td class="table_Length_SEND"></td>-->
<!--                <td class="table_Message_REV"></td>-->
<!--              </tr>-->
<!--              <tr>-->
<!--                <td class="table_num"></td>-->
<!--                <td class="table_Part_NO"></td>-->
<!--                <td class="table_CAN_SEND_ID"></td>-->
<!--                <td class="table_Message_send"></td>-->
<!--                <td class="table_CAN_REV_ID"></td>-->
<!--                <td class="table_Length_SEND"></td>-->
<!--                <td class="table_Message_REV"></td>-->
<!--              </tr>-->
<!--              <tr>-->
<!--                <td class="table_num"></td>-->
<!--                <td class="table_Part_NO"></td>-->
<!--                <td class="table_CAN_SEND_ID"></td>-->
<!--                <td class="table_Message_send"></td>-->
<!--                <td class="table_CAN_REV_ID"></td>-->
<!--                <td class="table_Length_SEND"></td>-->
<!--                <td class="table_Message_REV"></td>-->
<!--              </tr>-->
<!--              <tr>-->
<!--                <td class="table_num"></td>-->
<!--                <td class="table_Part_NO"></td>-->
<!--                <td class="table_CAN_SEND_ID"></td>-->
<!--                <td class="table_Message_send"></td>-->
<!--                <td class="table_CAN_REV_ID"></td>-->
<!--                <td class="table_Length_SEND"></td>-->
<!--                <td class="table_Message_REV"></td>-->
<!--              </tr>-->
<!--              <tr>-->
<!--                <td class="table_num"></td>-->
<!--                <td class="table_Part_NO"></td>-->
<!--                <td class="table_CAN_SEND_ID"></td>-->
<!--                <td class="table_Message_send"></td>-->
<!--                <td class="table_CAN_REV_ID"></td>-->
<!--                <td class="table_Length_SEND"></td>-->
<!--                <td class="table_Message_REV"></td>-->
<!--              </tr>-->
<!--              <tr>-->
<!--                <td class="table_num"></td>-->
<!--                <td class="table_Part_NO"></td>-->
<!--                <td class="table_CAN_SEND_ID"></td>-->
<!--                <td class="table_Message_send"></td>-->
<!--                <td class="table_CAN_REV_ID"></td>-->
<!--                <td class="table_Length_SEND"></td>-->
<!--                <td class="table_Message_REV"></td>-->
<!--              </tr>-->
<!--              <tr>-->
<!--                <td class="table_num"></td>-->
<!--                <td class="table_Part_NO"></td>-->
<!--                <td class="table_CAN_SEND_ID"></td>-->
<!--                <td class="table_Message_send"></td>-->
<!--                <td class="table_CAN_REV_ID"></td>-->
<!--                <td class="table_Length_SEND"></td>-->
<!--                <td class="table_Message_REV"></td>-->
<!--              </tr>-->
<!--              <tr>-->
<!--                <td class="table_num"></td>-->
<!--                <td class="table_Part_NO"></td>-->
<!--                <td class="table_CAN_SEND_ID"></td>-->
<!--                <td class="table_Message_send"></td>-->
<!--                <td class="table_CAN_REV_ID"></td>-->
<!--                <td class="table_Length_SEND"></td>-->
<!--                <td class="table_Message_REV"></td>-->
<!--              </tr>-->
<!--              <tr>-->
<!--                <td class="table_num"></td>-->
<!--                <td class="table_Part_NO"></td>-->
<!--                <td class="table_CAN_SEND_ID"></td>-->
<!--                <td class="table_Message_send"></td>-->
<!--                <td class="table_CAN_REV_ID"></td>-->
<!--                <td class="table_Length_SEND"></td>-->
<!--                <td class="table_Message_REV"></td>-->
<!--              </tr>-->
<!--              <tr>-->
<!--                <td class="table_num"></td>-->
<!--                <td class="table_Part_NO"></td>-->
<!--                <td class="table_CAN_SEND_ID"></td>-->
<!--                <td class="table_Message_send"></td>-->
<!--                <td class="table_CAN_REV_ID"></td>-->
<!--                <td class="table_Length_SEND"></td>-->
<!--                <td class="table_Message_REV"></td>-->
<!--              </tr>-->
<!--              <tr>-->
<!--                <td class="table_num"></td>-->
<!--                <td class="table_Part_NO"></td>-->
<!--                <td class="table_CAN_SEND_ID"></td>-->
<!--                <td class="table_Message_send"></td>-->
<!--                <td class="table_CAN_REV_ID"></td>-->
<!--                <td class="table_Length_SEND"></td>-->
<!--                <td class="table_Message_REV"></td>-->
<!--              </tr>-->
<!--              <tr>-->
<!--                <td class="table_num"></td>-->
<!--                <td class="table_Part_NO"></td>-->
<!--                <td class="table_CAN_SEND_ID"></td>-->
<!--                <td class="table_Message_send"></td>-->
<!--                <td class="table_CAN_REV_ID"></td>-->
<!--                <td class="table_Length_SEND"></td>-->
<!--                <td class="table_Message_REV"></td>-->
<!--              </tr>-->
<!--              <tr>-->
<!--                <td class="table_num"></td>-->
<!--                <td class="table_Part_NO"></td>-->
<!--                <td class="table_CAN_SEND_ID"></td>-->
<!--                <td class="table_Message_send"></td>-->
<!--                <td class="table_CAN_REV_ID"></td>-->
<!--                <td class="table_Length_SEND"></td>-->
<!--                <td class="table_Message_REV"></td>-->
<!--              </tr>-->
<!--              <tr>-->
<!--                <td class="table_num"></td>-->
<!--                <td class="table_Part_NO"></td>-->
<!--                <td class="table_CAN_SEND_ID"></td>-->
<!--                <td class="table_Message_send"></td>-->
<!--                <td class="table_CAN_REV_ID"></td>-->
<!--                <td class="table_Length_SEND"></td>-->
<!--                <td class="table_Message_REV"></td>-->
<!--              </tr>-->
<!--              <tr>-->
<!--                <td class="table_num"></td>-->
<!--                <td class="table_Part_NO"></td>-->
<!--                <td class="table_CAN_SEND_ID"></td>-->
<!--                <td class="table_Message_send"></td>-->
<!--                <td class="table_CAN_REV_ID"></td>-->
<!--                <td class="table_Length_SEND"></td>-->
<!--                <td class="table_Message_REV"></td>-->
<!--              </tr>-->
<!--              <tr>-->
<!--                <td class="table_num"></td>-->
<!--                <td class="table_Part_NO"></td>-->
<!--                <td class="table_CAN_SEND_ID"></td>-->
<!--                <td class="table_Message_send"></td>-->
<!--                <td class="table_CAN_REV_ID"></td>-->
<!--                <td class="table_Length_SEND"></td>-->
<!--                <td class="table_Message_REV"></td>-->
<!--              </tr>-->
<!--              <tr>-->
<!--                <td class="table_num"></td>-->
<!--                <td class="table_Part_NO"></td>-->
<!--                <td class="table_CAN_SEND_ID"></td>-->
<!--                <td class="table_Message_send"></td>-->
<!--                <td class="table_CAN_REV_ID"></td>-->
<!--                <td class="table_Length_SEND"></td>-->
<!--                <td class="table_Message_REV"></td>-->
<!--              </tr>-->
<!--              <tr>-->
<!--                <td class="table_num"></td>-->
<!--                <td class="table_Part_NO"></td>-->
<!--                <td class="table_CAN_SEND_ID"></td>-->
<!--                <td class="table_Message_send"></td>-->
<!--                <td class="table_CAN_REV_ID"></td>-->
<!--                <td class="table_Length_SEND"></td>-->
<!--                <td class="table_Message_REV"></td>-->
<!--              </tr>-->
<!--              </tbody>-->
<!--            </table>-->
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
        name: "DBCAnalysisMain",
      methods:{
        changeDBC(){
          this.$store.commit('SHOWDBC_MAINTWO',true)
        }
      },
      destroyed() {
        this.$store.commit('SHOWDBC_MAINTWO',false)
      }
    }
</script>

<style lang="scss" scoped>

  .DBCAnalysisMain_BigBox{
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
                  cursor: pointer;
                }
                .daochu_but{
                  background:rgba(8,194,201,1);
                  cursor: pointer;
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
          .table_Box{
            /*width: 14.45rem;*/
            width: 100%;
            height:100%;
            overflow: auto;
            .Table{
              width: 100%;
              height:100%;
              .Table_row{
                border-bottom: 1px solid #1E2D71;
                height:.37rem;
                overflow: hidden;
                div{
                  height:.37rem;
                  border-right: 1px solid #1E2D71;
                  font-size: .12rem;
                  color:SiceColor();
                  text-align: center;
                  line-height: .37rem;
                }
                .table_num{
                  /*width:addWidth(.42rem,12.45);*/
                  width:3.37%;
                }
                .table_Part_NO{
                  width:10.68%;
                }
                .table_Type{
                  width: 5%;
                }
                .table_Time{
                  width: 9%;
                }
                .table_CAN_SEND_ID{
                  /*width:18.55%;*/
                  width:11.55%;
                }
                .table_Message_send{
                  width:18.23%;
                }
                .table_CAN_REV_ID{
                  /*width:15.26%;*/
                  width:11.26%;
                }
                .table_Length_SEND{
                  /*width:17.67%;*/
                  width: 14.67%;
                }
                .table_Message_REV{
                  width:15.54%;
                }
              }
            }
            table{
              width: 100%;
              height:100%;
              tbody{
                tr{
                  border-bottom: 1px solid #1E2D71;
                  height:.37rem;
                  td{
                    height:.37rem;
                    border-right: 1px solid #1E2D71;
                  }
                  .table_num{
                    width:addWidth(.42rem,12.45);
                  }
                  .table_Part_NO{
                    width:addWidth(1.33rem,12.45);
                  }
                  .table_CAN_SEND_ID{
                    width:addWidth(2.31rem,12.45);
                  }
                  .table_Message_send{
                    width:addWidth(2.27rem,12.45);
                  }
                  .table_CAN_REV_ID{
                    width:addWidth(1.9rem,12.45);
                  }
                  .table_Length_SEND{
                    width:addWidth(2.2rem,12.45);
                  }
                  .table_Message_REV{
                    width:addWidth(2.01rem,12.45);
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
        }
      }
    }
    &.hide{
      display: none;
    }
  }
</style>
