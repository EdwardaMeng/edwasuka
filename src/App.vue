<template id="app">
  <Navigation v-if="!hideNavbar"></Navigation>
  <router-view></router-view>
</template>

<script>

// import Navigation from "@/components/Navigation";
import Home from "./components/Home"
import Rose4 from "./components/Rose4.vue"
import Navigation from "./components/Navigation"
import FelineFotos from "@/components/FelineFotos.vue";
import SneakerVision from "@/components/SneakerVision.vue";
import EveryDay from "@/components/EveryDay.vue";



export default {

  name: 'App',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Navigation,
    // Index,
    // eslint-disable-next-line vue/no-unused-components
    Home,
    // eslint-disable-next-line vue/no-unused-components
    EveryDay,
    // eslint-disable-next-line vue/no-unused-components
    Rose4,
    // eslint-disable-next-line vue/no-unused-components
    SneakerVision,
    // eslint-disable-next-line vue/no-unused-components
    FelineFotos,
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
  background-color: black;
}
body{
  background-color: black;
}

</style>
