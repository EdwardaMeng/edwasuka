<template>
  <div class="head">
    <transition-group>
      <Transition name="fade">
        <h1 v-if="showTitle" class="welcome">Welcome To</h1>
      </Transition>
      <Transition name="fade">
        <h1 v-if="showTitle" class="BlackSword" @click="handleClick()">{{ title }}</h1>
      </Transition>
    </transition-group>
  </div>

  <div class="fullscreen-image blur-image">
    <img :src=img1 alt="">
  </div>
</template>

<script>


export default {


  // eslint-disable-next-line vue/multi-word-component-names
  name: "HomeImage",

  // eslint-disable-next-line vue/no-unused-components
  data(){
    return{
      showNav:false,
      img1: require('../assets/IMG_3259-2.jpg'),
      showTitle: false,
      title:"EdwAsuka's Gallery",

    }
  },
  methods: {
    handleClick() {
      this.$router.push('/Home')
    }
  },
  mounted () {
    this.$store.commit('setHideNavbar', true)
    setTimeout(() => {
      this.showTitle = true
    }, 2000) // 5秒后显示标题
  }
}

</script>

<style>
.fullscreen-image {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: -1; /* 将图片设置到最底层，避免遮挡其他内容 */
}

.fullscreen-image img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* 保持图片比例不变并填满容器 */
  position: absolute;
  top: 0;
  left: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
@font-face {
  font-family: Black Sword;
  src: url("@/font/Blacksword.otf") format("opentype");
  font-weight: normal;
  font-style: normal;
}
.BlackSword{
  font-family: Black Sword,serif;
  font-size: 100px;
  word-break: break-word;
}
.head{
  width: 500px;
  height: 200px;
  margin-top: 150px;
  margin-left: 100px;
}
.welcome{
  font-family: Black Sword,serif;
  font-size: 50px;
  word-break: break-word;
}

</style>
