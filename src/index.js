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
    console.log('options', options)
    console.log('store', options.store)
    Vue.mixin({
      beforeCreate() {
        const storeInstance = this.$store;
        if (!storeInstance) return;
    
        const opts = this.$options || {};
        const compName = opts.name || (this.$vnode && this.$vnode.tag && this.$vnode.tag.replace(/^vue-component-/, ''));
        const isMicroByName = compName && Object.prototype.hasOwnProperty.call(components, compName);
        const ctorOpts = opts.Ctor && opts.Ctor.options ? opts.Ctor.options : opts;
        const isMicroByFlag = ctorOpts && ctorOpts.__IS_MICRO_COMPONENT;
    
        if (!isMicroByName && !isMicroByFlag) {
          return;
        }
    
        try {
          registerChildStore(storeInstance, MODULE_NAME, leadIntelligenceChild);
        } catch (err) {
          console.error('Failed to register child module from mixin:', err);
        }
      },
    });
  },

  ...components,
  router,
  store,
}

export default LeadIntelligenceModule

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(LeadIntelligenceModule)
}
