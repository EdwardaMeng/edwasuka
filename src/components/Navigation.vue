<template>
  <nav class="navbar navbar-expand-lg fixed-top bg-dark">
    <div class="container-fluid">
      <div id="logodiv">
        <img id="logo" :src="logo">
      </div>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" @click="toHOME">HOME</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" @click="toPageB">Page B</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" @click="toPageC">Page C</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
  data(){
    return{
      logo: require('../assets/Logo.png')
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
    const toPageC = (() => {
      router.push({
        name: 'PageC'
      })
    })
    return {
      toHOME,
      toPageB,
      toPageC
    }
    },

  // eslint-disable-next-line vue/multi-word-component-names
  name: "Navigation"
}
</script>

<style scoped>
#logo{
  height: auto;
  width:40px;
  margin: 4px;
}
.nav-item{
  margin-left: 20px;
  padding-left: 20px;
}
#logodiv{
  size: 30px;
  background-color: aliceblue;
  border-radius: 100px;
  border: solid white;
}

a{
  color: blue;
}

</style>
