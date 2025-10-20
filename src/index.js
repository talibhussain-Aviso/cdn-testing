import Vue from 'vue'
import router from './router'
import App from './App.vue'
import store from './vuex/store'
import leadIntelligenceChild from './vuex/modules/leadIntelligenceChild/leadIntelligenceChild'
import { registerChildStore } from './vuex/register-child-store'
import Dashboard from './pages/Dashboard.vue'

const MODULE_NAME = 'leadIntelligenceChild'

export function mount(el, props = {}) {
  new Vue({
    router,
    store,
    render: h => h(App, { props })
  }).$mount(el)
}

const components = {
  'LeadIntelligenceModule': App,
  Dashboard
}

const LeadIntelligenceModule = {
  install(Vue, options) {
    Object.entries(components).forEach(([name, component]) => {
      Vue.component(name, component)
    })
    console.log('options >>', options)
    console.log('store >>>', options.store)

    const storeInstance = options.store;
    if (!storeInstance) return;

    try {
      registerChildStore(storeInstance, MODULE_NAME, leadIntelligenceChild);
    } catch (err) {
      console.error('Failed to register child module from mixin:', err);
    }
  },

  ...components,
  router,
  store,
}

export default LeadIntelligenceModule

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(LeadIntelligenceModule)
}
