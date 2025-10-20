import Vue from 'vue';

export function registerChildStore(store, moduleName, moduleDef, opts = {}) {
  if (!store) {
    console.error('registerChildStore: store is required');
    return false;
  }

  if (store.state && store.state[moduleName]) {
    console.error(`registerChildStore: ${moduleName} already present on store.state`);
    return false;
  }

  // Prefer using the host store's VM $set so we use the same Vue instance
  const hostVm = store._vm || (store._wrappedGetters && store._wrappedGetters._vm) || null;
  const doSet = (target, key, val) => {
    if (hostVm && typeof hostVm.$set === 'function') {
      hostVm.$set(target, key, val);
    } else {
      Vue.set(target, key, val);
    }
  };

  try {

    doSet(store.state, moduleName, {});
    const hostModuleState = store.state[moduleName];
    const sourceState = (moduleDef && moduleDef.state) || {};
    Object.keys(sourceState).forEach((k) => {
      doSet(hostModuleState, k, sourceState[k]);
    });

    if (moduleDef && moduleDef.mutations) {
      const prefix = opts.namespaced ? `${moduleName}/` : '';

      Object.keys(moduleDef.mutations).forEach((key) => {
        const fullKey = `${prefix}${key}`;
        store._mutations[fullKey] = store._mutations[fullKey] || [];

        const wrapped = function wrappedMutationHandler() {
          let realPayload;
          if (arguments.length === 0) {
            realPayload = undefined;
          } else if (arguments.length === 1) {
            const a0 = arguments[0];
            if (a0 && typeof a0 === 'object' && Object.prototype.hasOwnProperty.call(a0, 'payload')) {
              realPayload = a0.payload;
            } else if (a0 === store || a0 === store.state || (typeof a0 === 'object' && Object.keys(a0 || {}).length > 0 && Object.keys(store.state || {}).every(k => k in a0))) {
              realPayload = undefined;
            } else {
              realPayload = a0;
            }
          } else {
            realPayload = arguments[1];
          }

          try {
            moduleDef.mutations[key](hostModuleState, realPayload);
          } catch (err) {
            console.error(`Error running mutation ${fullKey}:`, err);
          }
        };

        store._mutations[fullKey].push(wrapped);
        console.log(`✅ registered mutation: ${fullKey}`);
      });
    }

    console.log(`✅ registerChildStore: "${moduleName}" registered. Host module keys:`, Object.keys(store.state[moduleName]));
    return true;
  } catch (err) {
    console.error('registerChildStore failed:', err);
    return false;
  }
}