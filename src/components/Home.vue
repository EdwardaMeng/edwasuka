<template>
  <v-row>
    <template v-for="(image,imgIdx) in imageLayout" :key="imgIdx">
      <v-col :cols="image.cols">
        <v-img
            :src="img1"
            cover
            height="100%"
        ></v-img>
      </v-col>

      <v-col v-if="image.children" cols="6" class="d-flex flex-column">
        <v-row>
          <v-col v-for="(children,childIdx) in image.children" :key="childIdx" :cols="children.cols">
            <v-img
                :src="`https://picsum.photos/500/300?image=${children.cols + childIdx}`"
                cover
                height="100%"
            ></v-img>
          </v-col>
        </v-row>
      </v-col>
    </template>
  </v-row>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "HOME",
  data(){
    return{
      // eslint-disable-next-line no-undef
      bgColor: 'black',
      img1: require('../assets/img1.jpg'),
      imageLayout: [
        { cols: 4 },
        {
          cols: 8,
          children: [{ cols: 12 }, { cols: 12 }],
        },
        { cols: 6 },
        { cols: 3 },
        { cols: 9 },
        { cols: 4 },
        { cols: 8 },
      ]
    }
  }
}
</script>

<style scoped>

</style>
