<template>
  <v-row>
    <template v-for="(image,imgIdx) in imageLayout" :key="imgIdx">
      <v-col :cols="image.cols">
        <v-img
            cover
            height="100%"
        >
          <AdvancedImage :cldImg="Img1" /></v-img>
      </v-col>

      <v-col v-if="image.children" cols="6" class="d-flex flex-column">
        <v-row>
          <v-col v-for="(children,childIdx) in image.children" :key="childIdx" :cols="children.cols">
            <v-img
                cover
                height="100%"
            >
              <AdvancedImage :cld-img="Img2" alt=""/>
            </v-img>
          </v-col>
        </v-row>
      </v-col>
    </template>
  </v-row>
</template>
<script>


export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Rose4",
  data(){
    return{
      head: "Adidas D-Rose 4 Restomod 'Boardwalk'",
      description: "The D Rose 4 Boardwalk is a basketball shoe worn by Derrick Rose during the 2013 NBA season.\n" +
          "    Its design was inspired by the boardwalks of Chicago's beaches,\n" +
          "    featuring a blue seaside color scheme with white and brown accents.\n" +
          "    The shoe's upper is made of brown leather with casual shoe lacing and surfboard-inspired details,\n" +
          "    creating a relaxed and comfortable beach vacation atmosphere.\n" +
          "    The shoe also features Sprintframe technology in its outsole,\n" +
          "    providing excellent support and responsiveness for players to move and turn freely.\n" +
          "    The D Rose 4 Boardwalk is not only stylish, but also has excellent performance,\n" +
          "    making it a favorite of many basketball enthusiasts and D Rose fans.",

    }
  },

  components: {

  },
}
</script>

<style scoped>
</style>
