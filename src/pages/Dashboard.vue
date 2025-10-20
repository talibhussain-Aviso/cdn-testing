<template>
  <div style="background-color: red; padding: 20px;">
    <h2>This is Micro Frontend App Dashboard </h2>
    data : {{ getTest }}
    <input type="text" v-model="test" />
    <button @click="setTest(test)">Set Test</button>
    <!-- <lead-intel-grid /> -->
  </div>
</template>

<script>
import { getTest } from '../vuex/modules/leadIntelligenceChild/getters.leadIntelligenceChild';
import { setTest } from '../vuex/modules/leadIntelligenceChild/actions.leadIntelligenceChild';

  export default {
    props: {
      description: {
        type: String
      },
    },
    data() {
      return {
        test: ''
      };
    },
    vuex: {
      getters: {
        getTest
      },
      actions: {
        setTest
      }
    }
  };
</script>
