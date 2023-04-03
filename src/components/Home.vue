<template>
  <Navigation></Navigation>
  <div>
    <img id="img1" :src="img1">
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "HOME",
  data(){
    return{
      img1: require('../assets/img1.jpg')
    }
  }
}
</script>

<style scoped>
#img1{
  width: 100%;
  height: auto;
}
</style>
