<template>
  <div class="CKWLTS_Section">
    <div class="CKWLTS_Menu">
      <div class="CKWLTS_Left">
        <div class="CKTS_LeftSid">
          <div class="CK_setting">
            <p>串口设置</p>
            <div class="CKH">
              <span>串口号</span>
              <div class="selectC">
                <el-select v-model="valueC" placeholder="请选择">
                  <el-option
                    v-for="item in chuankouhao"
                    :key="item.valueC"
                    :label="item.label"
                    :value="item.valueC"
                  >
                  </el-option>
                </el-select>
              </div>

            </div>
            <div class="CKH">
              <span>波特率</span>
              <div class="selectC">

                <el-select v-model="valueB" placeholder="请选择">
                  <el-option
                    v-for="item in botelv"
                    :key="item.valueB"
                    :label="item.label"
                    :value="item.valueB"
                  >
                  </el-option>
                </el-select>
              </div>
            </div>
            <div class="CKH">
              <span>校验位</span>
              <div class="selectC">
                <el-select v-model="valueX" placeholder="请选择">
                  <el-option
                    v-for="item in xiaojian"
                    :key="item.valueX"
                    :label="item.label"
                    :value="item.valueX"
                  >
                  </el-option>
                </el-select>
              </div>
            </div>
            <div class="CKH">
              <span>数据位</span>
              <div class="selectC">
                <el-select v-model="valueS" placeholder="请选择">
                  <el-option
                    v-for="item in shuju"
                    :key="item.valueS"
                    :label="item.label"
                    :value="item.valueS"
                  >
                  </el-option>
                </el-select>
              </div>
            </div>
            <div class="CKH">
              <span>停止位</span>
              <div class="selectC">
                <el-select v-model="valueW" placeholder="请选择">
                  <el-option
                    v-for="item in StopW"
                    :key="item.valueW"
                    :label="item.label"
                    :value="item.valueW"
                  >
                  </el-option>
                </el-select>
              </div>
            </div>
            <div class="But">
              <span></span>
              <i>打开</i>
            </div>
          </div>
          <div class="JKQ_Setting CK_setting">
            <p>接收区设置</p>
            <div class="select_SL">
              <div class="ckeckBox"></div>
              <span>十六进制显示</span>
            </div>
            <div class="BC_Data">
              <a href="javascript:void(0)">保存数据</a>
              <a href="javascript:void(0)">清除显示</a>
            </div>
          </div>
          <div class="JKQ_Setting CK_setting">
            <p>发送区设置</p>
            <div class="select_SL">
              <div class="ckeckBox"></div>
              <span>十六进制显示</span>
            </div>
            <div class="BC_Data">
              <a href="javascript:void(0)">
                文件载入
                <input type="file">
              </a>
              <a href="javascript:void(0)">清除输入</a>
            </div>
          </div>
        </div>
        <div class="CKJS_LeftSec">
          <div class="CKJS_Tit">
            <span>串口数据接收</span>
          </div>
          <div class="CKJS_DataBox">
            <div class="CKJS_DataMenu">
              <div class="CKJS_TAB">
                <div class="CKJS_Send">
                  <div class="SendWord">
                    <span>发送</span>
                  </div>
                  <div class="Send_WEn">
                    <span>00 11 00 11 </span>
                  </div>
                </div>
                <div class="CKJS_Jie">
                  <div class="SendWord">
                    <span>接收</span>
                  </div>
                  <div class="Send_WEn">
                    <span>00 11 00 11 </span>
                  </div>
                </div>
              </div>
              <div class="CKJS_TAB">
                <div class="CKJS_Send">
                  <div class="SendWord">
                    <span>发送</span>
                  </div>
                  <div class="Send_WEn">
                    <span>00 11 00 11 </span>
                  </div>
                </div>
                <div class="CKJS_Jie">
                  <div class="SendWord">
                    <span>接收</span>
                  </div>
                  <div class="Send_WEn">
                    <span>00 11 00 11 </span>
                  </div>
                </div>
              </div>
              <div class="CKJS_TAB">
                <div class="CKJS_Send">
                  <div class="SendWord">
                    <span>发送</span>
                  </div>
                  <div class="Send_WEn">
                    <span>00 11 00 11 </span>
                  </div>
                </div>
                <div class="CKJS_Jie">
                  <div class="SendWord">
                    <span>接收</span>
                  </div>
                  <div class="Send_WEn">
                    <span>00 11 00 11 </span>
                  </div>
                </div>
              </div>
              <div class="CKJS_TAB">
                <div class="CKJS_Send">
                  <div class="SendWord">
                    <span>发送</span>
                  </div>
                  <div class="Send_WEn">
                    <span>00 11 00 11 </span>
                  </div>
                </div>
                <div class="CKJS_Jie">
                  <div class="SendWord">
                    <span>接收</span>
                  </div>
                  <div class="Send_WEn">
                    <span>00 11 00 11 </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="Send_Bottom">
            <div class="SendWord">
              <div class="Words"></div>
              <div class="Send_Btn">
                <div class="Send_BG">发送</div>
              </div>
            </div>
            <div class="JF_num">
              <span>接收：0</span>
              <span>发送：0</span>
            </div>
          </div>
        </div>
      </div>
      <div class="CKWLTS_Right">
        <div class="CKJS_LeftSec">
          <div class="CKJS_Tit">
            <span>网络数据</span>
          </div>
          <div class="CKJS_DataBox">
            <div ref="box" class="CKJS_DataMenu">

              <div class="CKJS_TAB" v-for="val in showArr">
                <div class="CKJS_Send">
                  <div class="SendWord">
                    <span>发送</span>
                  </div>
                  <div class="Send_WEn">
                    <span>{{val.sends}}</span>
                  </div>
                </div>
                <div class="CKJS_Jie">
                  <div class="SendWord">
                    <span>接收</span>
                  </div>
                  <div class="Send_WEn">
                    <span>{{val.jie}}</span>
                  </div>
                </div>
              </div>


              <div class="CKJS_TAB" v-for="val in ServerList">
                <div :class="val.cls == 1?'CKJS_Send':'CKJS_Jie'">
                  <div class="SendWord">
                    <span>{{val.cls == 1?'发送':'接收'}}</span>
                  </div>
                  <div class="Send_WEn">
                    <span>{{val.cont}}</span>
                  </div>
                </div>




<!--                <div class="CKJS_Jie">-->
<!--                  <div class="SendWord">-->
<!--                    <span>接收</span>-->
<!--                  </div>-->
<!--                  <div class="Send_WEn">-->
<!--                    <span>{{val.jie}}</span>-->
<!--                  </div>-->
<!--                </div>-->
              </div>

            </div>
          </div>
          <div class="Send_Bottom">
            <div class="SendWord">
              <div class="Words">
                <textarea name="" id="" cols="30" rows="10" v-model="SendDataB"></textarea>
              </div>
              <div class="Send_Btn" v-on:click="SendWords">
                <div class="Send_BG">发送</div>
              </div>
            </div>
            <div class="JF_num">
              <span>接收：0</span>
              <span>发送：0</span>
            </div>
          </div>
        </div>
        <div style="margin-left: .023rem;" class="CKTS_LeftSid">
          <div class="CK_setting">
            <p>(1)协议类型</p>
            <div class="CKH">
              <div class="selectC">
                <el-select v-model="value" placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </div>

            <p>(2)本地IP地址</p>
            <div class="CKH">
              <div class="selectC">
                <input
                  type="text"
                  v-model="LocalhostIP"
                >
              </div>
            </div>
            <p>(3)本地端口号</p>
            <div class="CKH">
              <div class="selectC">
                <input
                  type="number"
                  v-model="LocalhostDKH"
                >
              </div>
            </div>
            <div class="But" v-on:click="SendData" :class="linkS === true?'active':''">
              <span></span>
              <i>{{linkS === true?'关闭连接':'开始连接'}}</i>
            </div>
          </div>
          <div class="JKQ_Setting CK_setting">
            <p>接收区设置</p>
            <div class="select_SL">
              <div class="ckeckBox"></div>
              <span>十六进制显示</span>
            </div>
            <div class="BC_Data">
              <a href="javascript:void(0)">保存数据</a>
              <a href="javascript:void(0)">清除显示</a>
            </div>
          </div>
          <div class="JKQ_Setting CK_setting">
            <p>发送区设置</p>
            <div class="select_SL">
              <div class="ckeckBox"></div>
              <span>十六进制显示</span>
            </div>
            <div class="BC_Data">
              <a href="javascript:void(0)">
                文件载入
                <input type="file">
              </a>
              <a href="javascript:void(0)">清除输入</a>
            </div>
          </div>
          <div class="JKQ_Setting CK_setting">
            <div class="selectCLI">
              <el-select v-model="valueCil" placeholder="请选择">
                <el-option
                  v-for="item in cliList"
                  :key="item.valueCil"
                  :label="item.label"
                  :value="item.valueCil">
                </el-option>
              </el-select>
            </div>
          </div>


        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "CKWLTS",
      data() {
        return {
          options: [{
            value: '1',
            label: 'TCP.Server'
          }, {
            value: '0',
            label: 'TCP.client'
          },],

          chuankouhao: [
            {
              valueC: '1',
              label: 'TCP.Server'
            },
            {
              valueC: '0',
              label: 'TCP.client'
            },
          ],
          botelv:[
            {
              valueB: '1',
              label: 'TCP.Server'
            },
            {
              valueB: '0',
              label: 'TCP.client'
            },
          ],
          xiaojian:[
            {
              valueX: '1',
              label: 'TCP.Server'
            },
            {
              valueX: '0',
              label: 'TCP.client'
            },
          ],
          shuju:[
            {
              valueS: '1',
              label: 'TCP.Server'
            },
            {
              valueS: '0',
              label: 'TCP.client'
            },
          ],
          StopW:[
            {
              valueW: '1',
              label: 'TCP.Server'
            },
            {
              valueW: '0',
              label: 'TCP.client'
            },
          ],
          cliList: [
            {
            valueCil: 'all',
            label: 'all'
          },
          ],
          value: '',
          valueC:'',
          valueB:'',
          valueX:'',
          valueS:'',
          valueW:'',
          valueCil:'',  //客户端IP
          LocalhostIP:'10.102.24.81',
          LocalhostDKH:'102',
          SendDataB:'',
          showArr:[],
          ShowBeiArr:[],
          ServerList:[],

          ceshi:[],

          //
          linkS:false,
          Num:0,
          ServerORClien:1
        }
      },
      created(){

      },
      methods:{
        SendData(){
          if(this.value == 0){
            if(this.linkS){
              this.$axios({
                method:'post',
                url:'/hw_debug/cli_disconnect/',
              }).then(res=>{
                console.log('本地已断开')
                this.websock.close()
                this.linkS = !this.linkS
              }).catch(err=>{
                console.log(err)
              })
            }else{
              this.$axios({
                method:'post',
                url:'/hw_debug/cli_connect/',
                data:{
                  host:this.LocalhostIP,
                  port:this.LocalhostDKH
                }
              }).then(res=>{
                console.log('本地已连接')
                this.initWebSocket();
                this.linkS = !this.linkS
                this.ServerORClien = 1
              }).catch(err=>{
                console.log(err)
              })
            }
          }else{
            if(this.linkS){
              this.$axios({
                method:'post',
                url:'/hw_debug/ser_disconnect/',
              }).then(res=>{
                console.log('服务器已断开')

                this.cliList = [{
                  valueCil: 'all',
                  label: 'all'
                }]

                this.websock.close()
                this.linkS = !this.linkS
              }).catch(err=>{
                console.log(err)
              })
            }else {
              this.$axios({
                method: 'post',
                url: '/hw_debug/ser_connect/',
              }).then(res => {
                console.log('服务器已连接')
                this.ServerORClien = 2
                this.initWebSocket();
                this.linkS = !this.linkS
              }).catch(err => {
                console.log(err)
              })
            }
          }









          // 请求成功后调用

        },

        //发送内容
        /**
         * @return {boolean}
         */
        SendWords(){
          if(this.SendDataB === ""){
            return false
          }
          if(this.value == 0){
            this.$axios({
              method:'post',
              url:'/hw_debug/cli_send_data/',
              data:{
                content:this.SendDataB
              }
            }).then(res=>{
              console.log(res)
              // this.ShowBeiArr.push(this.SendDataB)
              this.showArr.push({
                sends:this.SendDataB,
                jie:null
              })
              var div = this.$refs.box
              console.log(this.showArr)
              setTimeout(()=>{
                div.scrollTop = div.scrollHeight;
              })
              this.SendDataB=''
            }).catch(err=>{
              console.log(err)
            })
          }else{

            this.$axios({
              method:'post',
              url:'/hw_debug/ser_send_data/',
              data:{
                content:this.SendDataB,
                client_addr:this.valueCil
              }
            }).then(res=>{
              console.log(res)
              this.ServerList.push({
                cls:1,
                cont:this.SendDataB
              })
              var div = this.$refs.box
              console.log(this.showArr)
              setTimeout(()=>{
                div.scrollTop = div.scrollHeight;
              })
              this.SendDataB=''
            }).catch(err=>{
              console.log(err)
            })


          // <div class="CKJS_TAB">
          //     <div class="CKJS_Send"><div class="SendWord"><span>发送</span></div> <div class="Send_WEn"><span>33</span></div></div>
          //   <div class="CKJS_Jie row"><div class="SendWord"><span>接收</span></div> <div class="Send_WEn"><span></span></div></div>
          //   </div>
          }


        },


        initWebSocket() {
          var wsuri=''
          if(this.ServerORClien === 1){
            wsuri = `ws://10.102.24.46:8001/project/888888/`;
          }else{
            wsuri = `ws://10.102.24.46:8001/project/666666/`;
          }
          this.websock = new WebSocket(wsuri);//这里面的this都指向vue
          this.websock.onopen = this.websocketopen;
          this.websock.onmessage = this.websocketonmessage;
          this.websock.onclose = this.websocketclose;
          this.websock.onerror = this.websocketerror;
          console.log(123)
        },
        websocketopen() {//打开
          console.log("WebSocket连接成功")
        },
        websocketonmessage(e) { //数据接收

          this.productinfos = JSON.parse(e.data);
          if(this.ServerORClien === 1){
            this.showArr[this.Num].jie = this.productinfos.text;
            this.Num++
          }else{
            this.ServerList.push({
              cls:0,
              cont:`【Form ${this.productinfos.text.client_addr} AND ${this.productinfos.text.recv_data}】`
            })

            let a = 0;
            for(var i in this.cliList){
              if(this.cliList[i].label == this.productinfos.text.client_addr){
                a = 1;
                return
              }
            }

            if(a === 0){
              this.cliList.push({
                valueCil: this.productinfos.text.client_addr,
                label: this.productinfos.text.client_addr
              })
            }
            // {
            //   valueCil: '10.20.24.20',
            //     label: '10.20.24.20'
            // },
          }
          // if(this.productinfos.text.recv_data != undefined){
          //   // this.showArr[this.Num].jie = this.productinfos.text.recv_data
          //
          //   console.log(this.productinfos.text)
          // }

          console.log(this.productinfos.text)
          // // console.log(this.productinfos.text.left_time)
          // this.$emit('times',this.productinfos.text.left_time);
          // this.$emit('websodong',this.rid);
          // if(this.productinfos.text.left_time == 0){
          //   this.$router.push({
          //     name:'Lovelist',
          //     query:{
          //       id:this.proid
          //     }
          //   })
          // }
        },
        websocketclose() {  //关闭
          console.log("WebSocket关闭");
          this.showArr = [];
          this.cliList = [{
            valueCil: 'all',
            label: 'all'
          }]
        },
        websocketerror() {  //失败
           console.log("WebSocket连接失败");
        },

      },
      destroyed() {
        this.websock.close() //离开路由之后断开websocket连接
      },
    }
</script>

<style lang="scss">

  .CKWLTS_Section{
    width: 100%;
    height:100%;
    padding:.17rem .16rem;
    box-sizing: border-box;
    background: #0C1127;

    .CKWLTS_Menu{
      overflow: hidden;
      width: 100%;
      height:100%;
      .CKWLTS_Left,.CKWLTS_Right{
        float: left;
        width: 50%;
        height:100%;
        .CKTS_LeftSid{
          width: 30%;
          background: #0C1127;
          height: 100%;
          float: left;
          .CK_setting{
            /*width:2.36rem;*/
            width: 100%;
            height:2.76rem;
            background:rgba(12,17,39,1);
            box-shadow:3px -3px 4px 0px #060a18, -3px 3px 4px 0px #060a18;
            padding:.14rem 0 .16rem .2rem;
            box-sizing: border-box;
            p{
              font-size:.16rem;
              font-family:MicrosoftYaHei;
              color:rgba(0,246,255,1);
              line-height:.16rem;
              margin-bottom: .12rem;
            }
            .CKH{
              height: .23rem;
              overflow: hidden;
              margin-bottom: .12rem;
              span{
                font-size:.18rem;
                font-family:MicrosoftYaHei;
                color:rgba(0,246,255,1);
                line-height:.23rem;
                display: block;
                float: left;
                margin-right: .14rem;
              }
              .selectC{
                width: .94rem;
                height:.2rem;
                border:1px solid #077E8D;
                float: left;
                font-size:.15rem;
                font-family:CambriaMath;
                color:rgba(2,246,255,1);
                line-height:.2rem;
                .el-select{
                  width: 100%;
                  height: 100%;
                  .el-input{
                    width: 100%;
                    height: 100%;
                    input{
                      padding: 0;
                      display: block;
                      width: 100%;
                      height: 100%;
                      background: transparent;
                      border: 0;
                      text-indent: .05rem;
                      color:rgba(2,246,255,1);
                      line-height: .23rem;
                    }
                    span{
                      line-height: .16rem;
                      margin: 0;
                      i{
                        line-height: .1rem;
                        color:rgba(2,246,255,1);
                        font-size: .16rem;
                      }
                    }
                  }
                }
              }
            }
            .But{
              width:1.58rem;
              height:.34rem;
              box-sizing: border-box;
              padding:.09rem .61rem .07rem .61rem;
              background:rgba(8,63,80,1);
              border:1px solid rgba(32,39,189,1);
              border-radius:2px;
              position: relative;
              cursor: pointer;
              i {
                font-size: .17rem;
                font-family: MicrosoftYaHei;
                color: rgba(255, 255, 255, 1);
                line-height: .17rem;
                display: block;
                font-style: normal;
                white-space: nowrap;
              }
              span{
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height:100%;
                background: #fff;
                opacity: .1;
                display: none;
              }
              &:hover{
                span{
                  display: block;
                }
              }
              &.active{
                background: red;
              }
            }
          }
          .JKQ_Setting{
            width: 100%;
            height: 1.42rem;
            box-sizing: border-box;
            padding:.15rem 0 .3rem .19rem;
            margin-top: .1rem;
            .select_SL{
              overflow: hidden;
              margin-bottom: .3rem;
              .ckeckBox{
                float: left;
                width:.17rem;
                height:.17rem;
                border:2px solid rgba(2,246,255,1);
                margin-right: .14rem;
              }
              span{
                float: left;
                font-size:.14rem;
                font-family:MicrosoftYaHei;
                color:rgba(0,246,255,1);
                line-height:.17rem;
                display: block;
              }
            }
              .BC_Data{

                overflow: hidden;
                a{
                  font-size:.13rem;
                  font-family:MicrosoftYaHei;
                  text-decoration:underline;
                  color:rgba(0,246,255,1);
                  float: left;
                  &:first-child{
                    margin-right: .34rem;
                    position: relative;
                    input{
                      position: absolute;
                      left: 0;
                      top: 0;
                      width: 100%;
                      hegiht:100%;
                      display: block;
                      opacity: 0;
                      cursor: pointer;
                    }
                  }
                }
              }
            .selectCLI{
              height: .2rem;
              border: 1px solid #077E8D;
              float: left;
              width: 80%;
              font-size: .14rem;
              font-family: CambriaMath;
              color: #02f6ff;
              line-height: .2rem;
              .el-select{
                width: 100%;
                height: 100%;
                .el-input{
                  width: 100%;
                  height: 100%;
                  input{
                    padding: 0;
                    display: block;
                    width: 100%;
                    height: 100%;
                    background: transparent;
                    border: 0;
                    text-indent: .05rem;
                    color:rgba(2,246,255,1);
                    line-height: .23rem;
                  }
                  span{
                    line-height: .16rem;
                    margin: 0;
                    i{
                      line-height: .1rem;
                      color:rgba(2,246,255,1);
                      font-size: .16rem;
                    }
                  }
                }
              }
            }
          }
        }
        .CKJS_LeftSec{
          width: 69%;
          float: left;
          height: 100%;
          background:rgba(37,48,95,1);
          .CKJS_Tit{
            padding:.12rem 4.54rem .12rem .17rem;
            border-bottom:2px solid rgba(12,17,39,1);
            span{
              font-size:.14rem;
              font-family:MicrosoftYaHei;
              color:rgba(0,246,255,1);
              line-height:.14rem;
              display: block;
              white-space: nowrap;
            }
          }
          .CKJS_DataBox{
            width: 100%;
            height:7.33rem;
            overflow: hidden;
            border-bottom: 2px solid #0c1127;
            .CKJS_DataMenu{
              width: 100%;
              height:100%;
              overflow-x: hidden;
              overflow-y: auto;
              .CKJS_TAB{
                width: 100%;
                .CKJS_Send,.CKJS_Jie{
                  width: 100%;
                  overflow: hidden;
                  border-bottom:1px solid rgba(12,17,39,1);
                  .SendWord{
                    width: 6.3%;
                    padding:.07rem 0;
                    float: left;
                    height: 100%;
                    box-sizing: border-box;
                    span{
                      font-size:.12rem;
                      font-family:MicrosoftYaHei;
                      color:rgba(0,246,255,1);
                      line-height:.12rem;
                      display: block;
                      text-align: center;
                    }
                  }
                  .Send_WEn{
                    width: 92.6%;
                    border-right: 1px solid rgba(12,17,39,1);
                    border-left: 1px solid rgba(12,17,39,1);
                    float: left;
                    min-height: .26rem;
                    span{
                      display: block;
                      font-size: .12rem;
                      line-height: .26rem;
                      padding:0 .05rem;
                      text-align: left;
                      color:rgba(0,246,255,1);

                    }
                  }
                }
                .CKJS_Jie{
                  .SendWord{
                    span{
                      color: #00FF36;
                    }
                  }
                  .Send_WEn{
                    span{
                      color: #00FF36;
                    }
                  }
                }
              }

              &::-webkit-scrollbar {/*滚动条整体样式*/
                width:13px;    /*高宽分别对应横竖滚动条的尺寸*/
                height: 4px;
              }
              &::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
                border-radius: 5px;
                -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
                background: #0F64AB;
              }
              &::-webkit-scrollbar-track {/*滚动条里面轨道*/
                -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
                border-radius: 0;
                background: rgba(0,0,0,0.1);
              }
            }
          }
          .Send_Bottom{
            width: 100%;
            height:1.6rem;
            padding:.08rem .1rem .21rem .1rem;
            box-sizing: border-box;
            .SendWord{
              padding:.03rem;
              overflow: hidden;
              .Words{
                float: left;
                width:3.76rem;
                height:.96rem;
                background:rgba(37,48,95,1);
                box-shadow:3px -3px 4px 0px #060a18, -3px 3px 4px 0px #060a18;
                margin-right: .08rem;
              }
              .Send_Btn{
                float: left;
                width:1.54rem;
                height:.95rem;
                background:#11566A;
                border-radius:2px;
                position: relative;
                cursor:pointer;
                .Send_BG{
                  position: absolute;
                  width: 1.4rem;
                  height:.85rem;
                  left: 50%;
                  top: 50%;
                  margin-left: -.7rem;
                  margin-top: -.425rem;
                  line-height: .95rem;
                  text-align: center;
                  font-size:.2rem;
                  font-family:MicrosoftYaHei;
                  font-weight:bold;
                  color:rgba(80,216,214,1);
                  background: #083F50;
                  opacity:0.3;
                }
              }
            }
            .JF_num{
              overflow: hidden;
              span{
                float: right;
                font-size:.16rem;
                font-family:MicrosoftYaHei;
                color:rgba(255,0,42,1);
                margin-right: .37rem;
                margin-top: .2rem;
                &:last-child{
                  color:#00F6FF;
                }
              }
            }
          }
        }
      }
      .CKWLTS_Right{
        float: left;
        width: 50%;
        background: black;
        height:100%;
        .CKTS_LeftSid{
          .CK_setting{
            .CKH{
              .selectC{
                width: 80%;
                font-size: .14rem;

                font-family:CambriaMath;
                color:rgba(2,246,255,1);
                line-height:.2rem;
                input{
                  border: 0;
                  outline: none;
                  width: 100%;
                  height:100%;
                  display: block;
                  background: transparent;
                  color:rgba(2,246,255,1);
                  text-indent: .05rem;
                }
                input[type="number"] {
                  -moz-appearance: textfield;
                }
                input[type="number"]::-webkit-inner-spin-button,
                input[type="number"]::-webkit-outer-spin-button {
                  -webkit-appearance: none;
                  margin: 0;
                }
              }

            }
            .But{
              width:1.60rem;
              height:.34rem;
              background:rgba(8,63,80,1);
              border:1px solid rgba(32,39,189,1);
              border-radius:2px;
              padding: 0;
              i{
                display: block;
                width: 100%;
                height:100%;
                line-height: .34rem;
                text-align: center;
              }
            }
          }
        }
        .CKJS_LeftSec{
          .Words{
            textarea{
              width: 100%;
              height:100%;
              background: transparent;
              display: block;
              border: 0;
              resize: none;
              outline: none;
              color:#00f6ff;
            }
          }
        }
      }
    }
  }
  .el-select-dropdown{
    background: red;
    ul{
      .el-select-dropdown__item{
        &:hover{
          background: blue;
        }
      }
      .selected{
        color:black
      }
    }
  }

  .el-select-dropdown__item.hover, .el-select-dropdown__item:hover{

    background: red;
  }
  .popper__arrow{
    &:after{
    }
  }
</style>
