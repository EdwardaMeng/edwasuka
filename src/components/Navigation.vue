<template>
  <nav class="navbar navbar-expand-lg bg-dark">
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
          <li class="nav-item">
            <a class="nav-link" @click="toHomeImage">Home Image</a>
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
      showNav:true
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
    const toHomeImage = (() =>{
      router.push({
        name: 'HomeImage'
      })
    })
    return {
      toHOME,
      toPageB,
      toPageC,
      toHomeImage
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

a{
  color: white;
}

</style>
