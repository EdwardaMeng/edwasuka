<template id="app">
  <v-app>
    <Navigation v-if="!hideNavbar"></Navigation>
    <router-view></router-view>
  </v-app>

</template>

<script>

// import Navigation from "@/components/Navigation";
import Home from "./components/Home"
import CTO from "./components/CapturingTheOrdinary.vue"
import Rose4 from "./components/Rose4.vue"
import Navigation from "./components/Navigation"


export default {

  name: 'App',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Navigation,
    // Index,
    // eslint-disable-next-line vue/no-unused-components
    Home,
    // eslint-disable-next-line vue/no-unused-components
    CTO,
    // eslint-disable-next-line vue/no-unused-components
    Rose4,
    // eslint-disable-next-line vue/no-unused-components
  },
  computed: {
    hideNavbar () {
      return this.$store.state.hideNavbar
    }
  },


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

</style>
