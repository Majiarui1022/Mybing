


  const state =  {
    ScriptID:-1,
    PartID:-1,
    ShowEnit:false,
    ShowDBCMainTwo:false,
    setNIT:{},
    stateZTJ:-1,
    DBCStateZTJ:-1
  };
  const mutations = {
    // 存储SCRPIT ID
    TANSCRIPT_ID(state,data){
      state.ScriptID = data;
    },
    //存储PART  ID
    PART_ID(state,id){
      state.PartID = id;
    },
    //控制添加脚本显示隐藏
    SHOWENIT_HIDE(state,showEnit){
      state.ShowEnit = showEnit;
    },
    //控制DBCMain的显示与隐藏
    SHOWDBC_MAINTWO(state,showDBC){
      state.ShowDBCMainTwo = showDBC;
    },

    //脚本的设定时间设定次数和ID
    SCRIPT_SETNUM(state,setNTI){
      // console.log(setNTI)
      state.setNIT = setNTI;
    },

    // 改变状态机状态
    CHANGE_ZTJSTATE(state,val){
      state.stateZTJ = val
      // stateZTJ
    },
    //DBC状态机
    CHANGE_DBCZTJSTATE(state,val){
      state.DBCStateZTJ = val
      console.log(val)
    }
  };
  const action = {
    TIMER_RUN(){
      console.log(1)
    }
  }

export default {
  state,
  mutations,
  action
}
