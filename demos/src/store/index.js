import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import plc from './plc'
import tanguan from './tanguan'

export default new Vuex.Store({

  modules:{
    plc:plc,
    tanguan:tanguan
  }

});



