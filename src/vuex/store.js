import Vue from 'vue'
import Vuex from 'vuex'
import leadIntelligenceChild from './modules/leadIntelligenceChild/leadIntelligenceChild'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    leadIntelligenceChild
  }
})