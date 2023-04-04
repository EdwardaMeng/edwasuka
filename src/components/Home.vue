<template>
  <Navigation></Navigation>
  <div v-bind:style="{backgroundColor: bgColor}">

  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "HOME",
  data(){
    return{
      // eslint-disable-next-line no-undef
      bgColor: 'black',
    }
  }
}
</script>

<style scoped>

</style>
