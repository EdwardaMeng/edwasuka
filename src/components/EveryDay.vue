<template>
    <v-container class="container">
        <div style=" width: 33%; margin-right: 10px">
            <v-row>
                <v-col cols="12" v-for="(image, index) in images1" :key="index">
                    <img :src="image.url" >
                </v-col>
            </v-row>
        </div>
        <div style=" width: 33%; margin-right: 10px">
                <v-row>
                    <v-col cols="12" v-for="(image, index) in images2" :key="index">
                        <img :src="image.url" >
                    </v-col>
                </v-row>
        </div>
        <div style="width: 33%;">
                <v-row>
                    <v-col cols="12" v-for="(image, index) in images3" :key="index">
                        <img :src="image.url" >
                    </v-col>
                </v-row>
        </div>
    </v-container>



</template>

<script>
export default {
  components:{
  },
  data(){
    return{

        images1:[
        {
          url:"https://i.imgur.com/yIipDVG.jpg",
        },
        {
            url:"https://i.imgur.com/r4n709X.jpg",
        },
        {
            url:"https://i.imgur.com/AuReLVT.jpg",
        }
        ],
        images2:
        [
        {
            url:"https://i.imgur.com/fClyOYT.jpg",
        },
        {
            url:"https://i.imgur.com/HI1Lnis.jpg",
        },
        {
            url:"https://i.imgur.com/0WprWts.jpg",
        },

        ],
        images3:
        [
        {
            url:"https://i.imgur.com/wK0WiUW.jpg",
        },
        {
            url:"https://i.imgur.com/CqoELT6.jpg",
        },
            {
                url:"https://i.imgur.com/ubUFFHh.jpg",
            },
        ]
    }
  },
  computed: {

  },
  methods:{

  },

}
</script>


<style scoped>
.container{
    display:flex;
}
</style>
