<template id="app">
  <Navigation></Navigation>
  <router-view></router-view>
</template>

<script>

// import Navigation from "@/components/Navigation";
import A from "./components/Home"
import B from "./components/B"
import C from "./components/C"
// import Index from "./components/Index"
import Navigation from "./components/Navigation"


export default {

  name: 'App',
  components: {
    // Index,
    Navigation,
    // eslint-disable-next-line vue/no-unused-components
    A,
    // eslint-disable-next-line vue/no-unused-components
    B,
    // eslint-disable-next-line vue/no-unused-components
    C
  }
}
</script>

<style>
#app {

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

@import'~bootstrap/dist/css/bootstrap.css';

</style>
