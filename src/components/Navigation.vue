<template>
    <v-toolbar class="justify-start" height="100px" color="black">
      <!--        <v-navigation-drawer></v-navigation-drawer>-->
      <v-toolbar-title class="text-left" style="color: #eeeeee" title="EdwAsuka Photography">EdwAsuka Photography</v-toolbar-title>
      <v-toolbar-items class="justify-start">
        <v-spacer></v-spacer>
        <v-btn class="justify-start" text @click="toHOME">HOME</v-btn>
        <v-btn class="justify-start" text @click="toPageB">PAGE-B</v-btn>
        <v-btn class="justify-start" text @click="toRose4">ROSE4</v-btn>
      </v-toolbar-items>
    </v-toolbar>
</template>

<script>
import { useRouter } from 'vue-router'



export default {
  components: {

  },
  data(){
    return{
      showNav:true,
    }

  },
  setup () {
    const router = useRouter()
    const toHOME = (() => {
      router.push({
        name: 'Home'
      })
    })
    const toPageB = (() => {
      router.push({
        name: 'PageB'
      })
    })
    const toRose4 = (() => {
      router.push({
        name: 'Rose4'
      })
    })
    return {
      toHOME,
      toPageB,
      toRose4,
    }
    },

  // eslint-disable-next-line vue/multi-word-component-names
  name: "Navigation"
}
</script>

<style scoped>
  a{
    color: #eeeeee;
  }
</style>
