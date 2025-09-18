import Vue from 'vue'
import router from './router'
import App from './App.vue'

// Option 1: Direct mounting (works in plain HTML with UMD build)
export function mount(el, props = {}) {
  new Vue({
    router,
    render: h => h(App, { props })
  }).$mount(el)
}

// Option 2: Vue plugin (works when imported into another Vue app)
const LeadIntelligenceModule = {
  install(Vue) {
    Vue.component('LeadIntelligenceModule', App)
  },
  App,
  router,
}

export default LeadIntelligenceModule

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(LeadIntelligenceModule)
}