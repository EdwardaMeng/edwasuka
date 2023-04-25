<template>
    <v-toolbar class="justify-start" height="100px" color="black">
      <!--        <v-navigation-drawer></v-navigation-drawer>-->
      <v-toolbar-title class="text-left" style="color: #eeeeee" title="EdwAsuka Photography">EdwAsuka Photography</v-toolbar-title>
      <v-toolbar-items class="justify-start">
        <v-spacer></v-spacer>
        <v-btn class="justify-start" text @click="toHOME">HOME</v-btn>
        <v-btn class="justify-start" text @click="toFelineFotos">FelineFotos</v-btn>
        <v-btn class="justify-start" text @click="toRose4">ROSE4</v-btn>
        <v-btn class="justify-start" text @click="toEveryDay">EveryDay</v-btn>
        <v-btn class="justify-start" text @click="toSneakerVision">SneakerVision</v-btn>

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
    const toFelineFotos = (() => {
      router.push({
        name: 'FelineFotos'
      })
    })
    const toRose4 = (() => {
      router.push({
        name: 'Rose4'
      })
    })
    const toEveryDay = (() => {
      router.push({
        name: 'EveryDay'
      })
    })
    const toSneakerVision = (() => {
      router.push({
        name: 'SneakerVision'
      })
    })
    return {
      toHOME,
      toFelineFotos,
      toRose4,
      toEveryDay,
      toSneakerVision
    }
    },

  // eslint-disable-next-line vue/multi-word-component-names
  name: "Navigation"
}
</script>

<style scoped>
template{
  border-style: dashed;
  border-radius: 3px;
  border-color: #039be5;
}
</style>
