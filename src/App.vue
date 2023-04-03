<template id="app">
  <Navigation v-if="!hideNavbar"></Navigation>
  <router-view></router-view>
</template>

<script>

// import Navigation from "@/components/Navigation";
import A from "./components/Home"
import B from "./components/B"
import C from "./components/C"
import HomeImage from "@/components/HomeImage.vue";
// import Index from "./components/Index"
import Navigation from "./components/Navigation"


export default {

  name: 'App',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Navigation,
    // Index,
    // eslint-disable-next-line vue/no-unused-components
    A,
    // eslint-disable-next-line vue/no-unused-components
    B,
    // eslint-disable-next-line vue/no-unused-components
    C,
    // eslint-disable-next-line vue/no-unused-components
    HomeImage
  },
  computed: {
    hideNavbar () {
      return this.$store.state.hideNavbar
    }
  },


}


</script>

<style>
@import '~bootstrap/dist/css/bootstrap.css';

#app {

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
