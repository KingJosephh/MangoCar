<template>
    <swiper
      :spaceBetween="30"
      :centeredSlides="true"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
      :pagination="{
        clickable: true,
      }"
      :navigation="true"
      :modules="modules"
      @autoplayTimeLeft="onAutoplayTimeLeft"
      class="mySwiper swiper"
    >
      <swiper-slide v-for="(item, index) in carImg" :key="index"><img class="p-0" :src="item"></swiper-slide>
      <template #container-end>
        <div class="autoplay-progress">
          <svg viewBox="0 0 48 48" ref="progressCircle">
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref="progressContent"></span>
        </div>
      </template>
    </swiper>
  </template>
<script>
import { ref } from 'vue'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'

import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

export default {
  props: {
    carImg: {
      type: Object,
      default () { return {} }
    }
  },
  components: {
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      carList: []
    }
  },
  setup () {
    const progressCircle = ref(null)
    const progressContent = ref(null)
    const onAutoplayTimeLeft = (s, time, progress) => {
      progressCircle.value.style.setProperty('--progress', 1 - progress)
      progressContent.value.textContent = `${Math.ceil(time / 1000)}s`
    }
    return {
      onAutoplayTimeLeft,
      progressCircle,
      progressContent,
      modules: [Autoplay, Pagination, Navigation]
    }
  },
  methods: {
    getImg () {
      const api = 'http://localhost:3000'
      this.$http.get(api + '/car')
        .then((res) => {
          this.carList = res.data
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  created () {
    this.getImg()
  }
}
</script>
<style>
#app {
  height: 100%;
}
html,
body {
  position: relative;
  height: 100%;
}

body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper {
  width: 100%;
  height: 539px;
}
.swiper-slide {
  padding: 0;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.autoplay-progress {
  position: absolute;
  right: 16px;
  bottom: 16px;
  z-index: 10;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: var(--swiper-theme-color);
}

.autoplay-progress svg {
  --progress: 0;
  position: absolute;
  left: 0;
  top: 0px;
  z-index: 10;
  width: 100%;
  height: 100%;
  stroke-width: 4px;
  stroke: var(--swiper-theme-color);
  fill: none;
  stroke-dashoffset: calc(125.6 * (1 - var(--progress)));
  stroke-dasharray: 125.6;
  transform: rotate(-90deg);
}

</style>
