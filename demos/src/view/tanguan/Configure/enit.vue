<template>
    <div class="addAgreement" :class="this.$store.state.tanguan.ShowEnit == true?'':'hide'">
      <div class="addTtit">
        <i class="el-icon-close" v-on:click="hideEnit"></i>
      </div>
      <div class="addMenu">
        <div class="Agreement_name">
          <label for="" class="fl">协议名称：</label>
          <input type="text" class="fl" placeholder="输入协议名称" v-model="readScriptNmae">
        </div>
        <div class="Select_Agreement_Box">
          <label for="" class="fl">选择已有协议:</label>
          <div class="Select_Agreement fl">
            <span v-on:click="showScriptList" id="cehsi">{{showScriptNanme}}</span>
            <img src="../../../assets/tanguan/img/right_down.png" alt="">

<!--              协议列表-->
            <div class="Agreement_List" :class="ScriptHide == true?'':'hide'">
              <ul>
                <li v-for="val in BigScriptList">
                  <i class="fl" :id="val.id" v-on:click="SelectScript(val.id,val.name)">{{val.name}}</i>
                </li>

              </ul>
            </div>




          </div>

        </div>
        <div class="but" v-on:click=ADDNewPart>
          确定
          <span></span>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      props:{
        BigScriptList:{
          type:Array
        }
      },
        name: "enit",
      data(){
          return{
            ScriptHide:false,
            showScriptNanme:'',       //需要显示的协议名称
            readScriptNmae:'',          //手动填写协议名称
            ScriptID:null,              //选择也有协议的id
          }
      },
      mounted(){

          // document.addEventListener('click',(e)=>{
          //   if(!document.getElementById("cehsi").contatins(e.target)) this.ScriptHide = !this.ScriptHide
          // })

      },
      methods:{
          // 显示与隐藏弹框
        hideEnit(){
          this.$store.commit('SHOWENIT_HIDE',false)
        },
        //显示与隐藏协议列表
        showScriptList(){
          this.ScriptHide = !this.ScriptHide;
          console.log(this.ScriptHide)
          // let a = document.getElementById("cehsi")
          //   if(!a.contatins(event.target)){
          //     this.ScriptHide = !this.ScriptHide;
          // }
        },
        // 选择协议
        SelectScript(id,name){
          this.ScriptHide = !this.ScriptHide;
          this.showScriptNanme = name;
          this.ScriptID = id;    //复制ID
        },

        // 确定新建
        ADDNewPart(){
          console.log(this.readScriptNmae,this.ScriptID);

          this.$axios({
            method:'post',
            url:'/carbon_tank/scripts/ ',
            data:{
              name:this.readScriptNmae,
              copy_script_id:this.ScriptID
            }
          }).then(res=>{
            console.log(res)
            this.$store.commit('SHOWENIT_HIDE',false)
            this.ScriptHide = false;
            this.showScriptNanme = '';
            this.readScriptNmae = '';
            this.ScriptID = null
            this.$emit('ADDScript',res.data)
          }).catch(err=>{
            console.log(err)
          })
          //readScriptNmae
          this.$store.commit('SHOWENIT_HIDE',false)
        }
      },
      destroyed() {
        // 初始化所有数据
        this.$store.commit('SHOWENIT_HIDE',false)
        this.ScriptHide = false;
        this.showScriptNanme = '';
        this.readScriptNmae = '';
        this.ScriptID = null

        // ScriptHide:false,
        //   showScriptNanme:'',       //需要显示的协议名称
        //   readScriptNmae:'',          //手动填写协议名称
        //   ScriptID:'',
      }
    }
</script>

<style lang="scss" scoped>

  .addAgreement{
    /*整体隐藏*/
    /*------------*/
    width:4.32rem;
    height:2.88rem;
    position: fixed;
    top:50%;
    left: 50%;
    margin-top:-1.44rem;
    margin-left:-2.16rem;
    .addTtit{
      width: 100%;
      height:.44rem;
      background:rgba(65,106,177,1);
      border-radius:5px;
      position: relative;
      .el-icon-close{
        position: absolute;
        right: .18rem;
        font-size: .24rem;
        color:#fff;
        line-height: .44rem;
        cursor: pointer;
      }
    }
    .addMenu{
      width: 100%;
      height:2.44rem;
      background: #2C4775;
      position: relative;
      label{
        @include text-overflow(1.09rem,block);
        line-height: .28rem;
        margin-right:.13rem;
        color:SiceColor();
        font-size: .16rem;
      }
      input{
        border:0;
        border-bottom:1px solid SiceColor();
        width: 2.28rem;
        height:.28rem;
        text-indent: .22rem;
        background: transparent;
        color:SiceColor();
        font-size: .16rem;
      }
      input::-webkit-input-placeholder {
        color:SiceColor();
      }
      .Agreement_name{
        overflow: hidden;
        padding-top:.51rem;
        margin-left:.29rem;
        input{
          outline: none;
        }
      }
      .Select_Agreement_Box{
        margin-top:.28rem;
        margin-left:.29rem;
        .Select_Agreement{
          width: 2.29rem;
          height:.28rem;
          border:1px solid SiceColor();
          position: relative;
          span{
            height: 100%;
            width: 100%;
            display: block;
            font-size: .16rem;
            font-family:MicrosoftYaHei;
            color:SiceColor();
            line-height:.22rem;
            text-indent: .15rem;
          }
          img{
            width:.16rem;
            height:.1rem;
            position: absolute;
            right: .1rem;
            top:50%;
            margin-top:-.05rem;
          }
          .Agreement_List{
            /*列表隐藏*/
            /*---------*/
            /*-----------*/
            width: 100%;
            height:2rem;
            position: absolute;
            left: 0;
            top:.29rem;
            background: rgba(2, 246, 255, 0.2);
            overflow: hidden;
            z-index: 66;
            ul{
              width: 100%;
              height:100%;
              overflow: auto;
              li{
                width: 100%;
                height:.35rem;
                overflow: hidden;
                text-indent: .15rem;
                i{
                  font-size: .16rem;
                  line-height: .35rem;
                  cursor: pointer;
                  display: inline-block;
                  color:SiceColor();
                  font-style: normal;
                }
              }
            }
            ul::-webkit-scrollbar {/*滚动条整体样式*/
              width: 4px;     /*高宽分别对应横竖滚动条的尺寸*/
              height: 4px;
            }
            ul::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
              border-radius: 5px;
              -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
              background: rgba(0,0,0,0.2);
            }
            ul::-webkit-scrollbar-track {/*滚动条里面轨道*/
              -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
              border-radius: 0;
              background: rgba(0,0,0,0.1);
            }
            &.hide{
              display: none;
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
    }
    &.hide{
      display: none;
    }
  }
</style>
