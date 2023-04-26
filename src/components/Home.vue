<template>
    <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Castoro+Titling">
    <v-container style="color: white;" class="text-center">
        <v-row>
            <v-col cols=6 style="max-height: 90vh">
                <img src="https://i.imgur.com/nUA3Wdy.jpg" style="max-height: 100%; width: auto">
            </v-col>
            <v-col col="6">
                <div class="justify-center align-center">
                    <h1 style="font-size: 90px; margin-bottom: 100px; margin-top: 50px">YUTAO EDWARD MENG</h1>
                    <h2 style="font-size: 30px; margin-bottom: 10px">BORN IN LANGFANG, HEBEI, CHINA</h2>
                    <h2 style="font-size: 30px;  margin-bottom: 100px">LIVING IN MONTREAL</h2>
                    <p style="font-size: 30px">"CAPTURING THE ESSENCE OF LIFE THROUGH THE LENS, WITH A FOCUS ON BASKETBALL, SNEAKERS, AND THE BEAUTY OF EVERYDAY MOMENTS."</p>
                </div>

            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "HOME",
  components:{
  },

  data(){
    return{
    }
  }
}
</script>

<style scoped>
p,h1,h2{
    font-family: 'castorotitling', serif;
}
v-col{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}


</style>
