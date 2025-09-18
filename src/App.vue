<template>
  <div>
    <navbar />
    <Dashboard/>
    <router-view />
  </div>
</template>

<script>
  import Navbar from './components/Navbar.vue';
  import Dashboard from './pages/Dashboard.vue'

  export default {
    components: { Navbar, Dashboard }
  };
</script>
