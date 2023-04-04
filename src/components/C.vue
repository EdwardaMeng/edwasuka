<template>
  <div>
    <h1 style="color: #eeeeee">{{head}}</h1>
    <p style="color: #eeeeee">{{description}}</p>
  </div>
  <div>
    <swiper
        :slidesPerView="1"
        :spaceBetween="30"
        :loop="true"
        :pagination="{
        clickable: true,
      }"
        :navigation="true"
        :modules="modules"
        class="mySwiper"
    >
      <swiper-slide><img :src=img1 alt="img"></swiper-slide>
      <swiper-slide><img :src=img2 alt="img"></swiper-slide>
      <swiper-slide><img :src=img3 alt="img"></swiper-slide>
      <swiper-slide><img :src=img4 alt="img"></swiper-slide>
      <swiper-slide><img :src=img5 alt="img"></swiper-slide>
      <swiper-slide><img :src=img6 alt="img"></swiper-slide>
      <swiper-slide><img :src=img7 alt="img"></swiper-slide>
      <swiper-slide><img :src=img8 alt="img"></swiper-slide>
      <swiper-slide><img :src=img9 alt="img"></swiper-slide>
    </swiper>
  </div>

</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import "swiper/css/navigation"
import 'swiper/css/pagination';
import {Pagination,Navigation} from "swiper";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "PageC",
  data(){
    return{
      img1:require("../assets/IMG_2173.jpg"),
      img2:require("../assets/IMG_2179.jpg"),
      img3:require("../assets/IMG_2181.jpg"),
      img4:require("../assets/IMG_2185.jpg"),
      img5:require("../assets/IMG_2187.jpg"),
      img6:require("../assets/IMG_2192.jpg"),
      img7:require("../assets/IMG_2195.jpg"),
      img8:require("../assets/IMG_2199.jpg"),
      img9:require("../assets/IMG_2203.jpg"),
      head: "Adidas D-Rose 4 Restomod 'Boardwalk'",
      description: "The D Rose 4 Boardwalk is a basketball shoe worn by Derrick Rose during the 2013 NBA season.\n" +
          "    Its design was inspired by the boardwalks of Chicago's beaches,\n" +
          "    featuring a blue seaside color scheme with white and brown accents.\n" +
          "    The shoe's upper is made of brown leather with casual shoe lacing and surfboard-inspired details,\n" +
          "    creating a relaxed and comfortable beach vacation atmosphere.\n" +
          "    The shoe also features Sprintframe technology in its outsole,\n" +
          "    providing excellent support and responsiveness for players to move and turn freely.\n" +
          "    The D Rose 4 Boardwalk is not only stylish, but also has excellent performance,\n" +
          "    making it a favorite of many basketball enthusiasts and D Rose fans."
    }
  },

  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination, Navigation],
    };
  },
}
</script>

<style scoped>
</style>
