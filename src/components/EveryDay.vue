<template>
  <waterfall :line-gap="200" :watch="images">
    <!-- each component is wrapped by a waterfall slot -->
    <waterfall-slot
        v-for="(item, index) in images"
        :width="item.width"
        :height="item.height"
        :order="index"
        :key="item.id"
    >
      <img :src="item.url" alt="">
    </waterfall-slot>
  </waterfall>


</template>

<script>

export default {
  components:{

  },
  data(){
    return{
      images:[
        {
          url:"https://i.imgur.com/yIipDVG.jpg",
          // width:1920,
          // height:1080,
        },
        {
          url:"https://i.imgur.com/ubUFFHh.jpg", type:2
        },
        {url:"https://i.imgur.com/r4n709X.jpg", type:1
        },
        {
          url:"https://i.imgur.com/wK0WiUW.jpg", type:1
        },
        {
          url:"https://i.imgur.com/CqoELT6.jpg", type:1
        },
        {
          url:"https://i.imgur.com/fClyOYT.jpg", type:1
        },
        {
          url:"https://i.imgur.com/HI1Lnis.jpg", type:1
        },
        {
          url:"https://i.imgur.com/0WprWts.jpg", type:1
        },
        {
          url:"https://i.imgur.com/AuReLVT.jpg", type:2
        }

      ]
    }
  },
  computed: {

  },
  methods:{

  }
}
</script>

<style scoped>
</style>
