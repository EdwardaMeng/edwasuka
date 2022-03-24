<template>
  <div id="Index">
    <h1>Welcome to EdwAsuka's Page</h1>
    <img  src="src/assets/IMG_3259-2.jpg" :onerror="onImgError">
    <button>Discover More</button>
  </div>
</template>

<script>
export default {
  name: "FrontPage",
  data() {
    return {
      onImgError: 'this.src=" ' + require('../assets/IMG_3259-2.jpg') + '"'
    }
  }
}
</script>

<style scoped>
#Index {
  font-family: "Arial Black", serif;
  color: black;
  font-size: 40px;

}

img{
  height: auto;
  width: 100%;
}



</style>
