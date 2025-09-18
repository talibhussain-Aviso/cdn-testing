import Vue from 'vue'
import router from './router'
import App from './App.vue'

import Dashboard from './pages/Dashboard.vue'

// Option 1: Direct mounting (works in plain HTML with UMD build)
export function mount(el, props = {}) {
  new Vue({
    router,
    render: h => h(App, { props })
  }).$mount(el)
}

// Collect all components
const components = {
  'LeadIntelligenceModule': App,
  Dashboard
}

// Option 2: Vue plugin
const LeadIntelligenceModule = {
  install(Vue) {
    Object.entries(components).forEach(([name, component]) => {
      Vue.component(name, component)
    })
  },
  ...components, // so they’re also accessible directly
  router,
}

export default LeadIntelligenceModule

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(LeadIntelligenceModule)
}