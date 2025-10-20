import { SET_TEST } from '../../mutation-types';
import Vue from 'vue';

// Vuex 1.x compatible module - only state and mutations
const state = {
  test: ''
};

const mutations = {
  [SET_TEST](state, data) {
    Vue.set(state, 'test', data);
  }
};

export default {
    state,
    mutations
};