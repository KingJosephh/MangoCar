<template>
  <section class="">
        <div class="d-flex justify-content-center">
            <img src="../assets/car-img/title1.png" alt="熱門車款">
        </div>
        <p class="text-center mb-6">這裡是在還在等家的浪浪們，若您正巧在找個家人，不訪來認識一下唄</p>
        <div class="row px-lg-6 m-0 d-flex justify-content-center">
            <div class="col-lg-12">
                <div class="row m-0 row-cols-lg-3 row-cols-1 gy-3 px-4">
                  <swiper
                    :slidesPerView="3"
                    :spaceBetween="30"
                    :freeMode="true"
                    :pagination="{
                      clickable: true,
                    }"
                    :modules="modules"
                    class="mySwiper"
                  >
                    <swiper-slide class="p-0"><div class="col bg-transparent">
                        <div class="card border-0 hover-shadow-lg img-opacity rounded-4 h-100">
                            <router-link to="/page6" class="card-link d-block h-100 link-unstyled text-reset text-decoration-none position-relative">
                                <div class="card-header p-0">
                                    <img class="rounded-top-4" src="../assets/car-img/mercedes.jpg" alt="mercedes logo">
                                    <div class="car-bg-img" :style="{backgroundImage: `url(${require('@/assets/car-img/gt43.jpg')})`}"></div>
                                </div>
                                <div class="card-body">
                                    <div class="p-2">
                                        <h5 class="fw-bold mb-3">2019年 BENZ GT43</h5>
                                        <p class="mb-1">2019年 | 4.2萬km | CC</p>
                                        <p class="mb-1">負責人: Ama</p>
                                        <h5 class="fw-bold mb-5">NT$458.3萬元</h5>
                                    </div>
                                </div>
                                <div class="card-footer bg-white text-center border-0 rounded-4 position-absolute bottom-0 w-100 pt-0 pb-1">
                                    <hr class="text-fire mx-3">
                                    <button class="kalma border-0 bg-transparent">MORE</button>
                                </div>
                            </router-link>
                        </div>
                    </div></swiper-slide>
                    <!-- <swiper-slide><div class="col bg-transparent px-4">
                        <div class="card border-0 hover-shadow-lg img-opacity rounded-4 h-100">
                            <router-link to="/page6" class="card-link d-block h-100 link-unstyled text-reset text-decoration-none position-relative">
                                <div class="card-header p-0">
                                    <img class="rounded-top-4" src="../assets/car-img/mercedes.jpg" alt="mercedes logo">
                                    <div class="car-bg-img" :style="{backgroundImage: `url(${require('@/assets/car-img/gt43.jpg')})`}"></div>
                                </div>
                                <div class="card-body">
                                    <div class="p-2">
                                        <h5 class="fw-bold mb-3">2019年 BENZ GT43</h5>
                                        <p class="mb-1">2019年 | 4.2萬km | CC</p>
                                        <p class="mb-1">負責人: Ama</p>
                                        <h5 class="fw-bold mb-5">NT$458.3萬元</h5>
                                    </div>
                                </div>
                                <div class="card-footer bg-white text-center border-0 rounded-4 position-absolute bottom-0 w-100">
                                    <hr class="text-fire mx-5">
                                    <button class="kalma border-0 bg-transparent">MORE</button>
                                </div>
                            </router-link>
                        </div>
                    </div></swiper-slide><swiper-slide><div class="col bg-transparent px-4">
                        <div class="card border-0 hover-shadow-lg img-opacity rounded-4 h-100">
                            <router-link to="/page6" class="card-link d-block h-100 link-unstyled text-reset text-decoration-none position-relative">
                                <div class="card-header p-0">
                                    <img class="rounded-top-4" src="../assets/car-img/mercedes.jpg" alt="mercedes logo">
                                    <div class="car-bg-img" :style="{backgroundImage: `url(${require('@/assets/car-img/gt43.jpg')})`}"></div>
                                </div>
                                <div class="card-body">
                                    <div class="p-2">
                                        <h5 class="fw-bold mb-3">2019年 BENZ GT43</h5>
                                        <p class="mb-1">2019年 | 4.2萬km | CC</p>
                                        <p class="mb-1">負責人: Ama</p>
                                        <h5 class="fw-bold mb-5">NT$458.3萬元</h5>
                                    </div>
                                </div>
                                <div class="card-footer bg-white text-center border-0 rounded-4 position-absolute bottom-0 w-100">
                                    <hr class="text-fire mx-5">
                                    <button class="kalma border-0 bg-transparent">MORE</button>
                                </div>
                            </router-link>
                        </div>
                    </div></swiper-slide>
                    <swiper-slide><div class="col bg-transparent px-4">
                        <div class="card border-0 hover-shadow-lg img-opacity rounded-4 h-100">
                            <router-link to="/page6" class="card-link d-block h-100 link-unstyled text-reset text-decoration-none position-relative">
                                <div class="card-header p-0">
                                    <img class="rounded-top-4" src="../assets/car-img/mercedes.jpg" alt="mercedes logo">
                                    <div class="car-bg-img" :style="{backgroundImage: `url(${require('@/assets/car-img/gt43.jpg')})`}"></div>
                                </div>
                                <div class="card-body">
                                    <div class="p-2">
                                        <h5 class="fw-bold mb-3">2019年 BENZ GT43</h5>
                                        <p class="mb-1">2019年 | 4.2萬km | CC</p>
                                        <p class="mb-1">負責人: Ama</p>
                                        <h5 class="fw-bold mb-5">NT$458.3萬元</h5>
                                    </div>
                                </div>
                                <div class="card-footer bg-white text-center border-0 rounded-4 position-absolute bottom-0 w-100">
                                    <hr class="text-fire mx-5">
                                    <button class="kalma border-0 bg-transparent">MORE</button>
                                </div>
                            </router-link>
                        </div>
                    </div></swiper-slide><swiper-slide><div class="col bg-transparent px-4">
                        <div class="card border-0 hover-shadow-lg img-opacity rounded-4 h-100">
                            <router-link to="/page6" class="card-link d-block h-100 link-unstyled text-reset text-decoration-none position-relative">
                                <div class="card-header p-0">
                                    <img class="rounded-top-4" src="../assets/car-img/mercedes.jpg" alt="mercedes logo">
                                    <div class="car-bg-img" :style="{backgroundImage: `url(${require('@/assets/car-img/gt43.jpg')})`}"></div>
                                </div>
                                <div class="card-body">
                                    <div class="p-2">
                                        <h5 class="fw-bold mb-3">2019年 BENZ GT43</h5>
                                        <p class="mb-1">2019年 | 4.2萬km | CC</p>
                                        <p class="mb-1">負責人: Ama</p>
                                        <h5 class="fw-bold mb-5">NT$458.3萬元</h5>
                                    </div>
                                </div>
                                <div class="card-footer bg-white text-center border-0 rounded-4 position-absolute bottom-0 w-100">
                                    <hr class="text-fire mx-5">
                                    <button class="kalma border-0 bg-transparent">MORE</button>
                                </div>
                            </router-link>
                        </div>
                    </div></swiper-slide>
                    <swiper-slide><div class="col bg-transparent px-4">
                        <div class="card border-0 hover-shadow-lg img-opacity rounded-4 h-100">
                            <router-link to="/page6" class="card-link d-block h-100 link-unstyled text-reset text-decoration-none position-relative">
                                <div class="card-header p-0">
                                    <img class="rounded-top-4" src="../assets/car-img/mercedes.jpg" alt="mercedes logo">
                                    <div class="car-bg-img" :style="{backgroundImage: `url(${require('@/assets/car-img/gt43.jpg')})`}"></div>
                                </div>
                                <div class="card-body">
                                    <div class="p-2">
                                        <h5 class="fw-bold mb-3">2019年 BENZ GT43</h5>
                                        <p class="mb-1">2019年 | 4.2萬km | CC</p>
                                        <p class="mb-1">負責人: Ama</p>
                                        <h5 class="fw-bold mb-5">NT$458.3萬元</h5>
                                    </div>
                                </div>
                                <div class="card-footer bg-white text-center border-0 rounded-4 position-absolute bottom-0 w-100">
                                    <hr class="text-fire mx-5">
                                    <button class="kalma border-0 bg-transparent">MORE</button>
                                </div>
                            </router-link>
                        </div>
                    </div></swiper-slide><swiper-slide><div class="col bg-transparent px-4">
                        <div class="card border-0 hover-shadow-lg img-opacity rounded-4 h-100">
                            <router-link to="/page6" class="card-link d-block h-100 link-unstyled text-reset text-decoration-none position-relative">
                                <div class="card-header p-0">
                                    <img class="rounded-top-4" src="../assets/car-img/mercedes.jpg" alt="mercedes logo">
                                    <div class="car-bg-img" :style="{backgroundImage: `url(${require('@/assets/car-img/gt43.jpg')})`}"></div>
                                </div>
                                <div class="card-body">
                                    <div class="p-2">
                                        <h5 class="fw-bold mb-3">2019年 BENZ GT43</h5>
                                        <p class="mb-1">2019年 | 4.2萬km | CC</p>
                                        <p class="mb-1">負責人: Ama</p>
                                        <h5 class="fw-bold mb-5">NT$458.3萬元</h5>
                                    </div>
                                </div>
                                <div class="card-footer bg-white text-center border-0 rounded-4 position-absolute bottom-0 w-100">
                                    <hr class="text-fire mx-5">
                                    <button class="kalma border-0 bg-transparent">MORE</button>
                                </div>
                            </router-link>
                        </div>
                    </div></swiper-slide>
                    <swiper-slide><div class="col bg-transparent px-4">
                        <div class="card border-0 hover-shadow-lg img-opacity rounded-4 h-100">
                            <router-link to="/page6" class="card-link d-block h-100 link-unstyled text-reset text-decoration-none position-relative">
                                <div class="card-header p-0">
                                    <img class="rounded-top-4" src="../assets/car-img/mercedes.jpg" alt="mercedes logo">
                                    <div class="car-bg-img" :style="{backgroundImage: `url(${require('@/assets/car-img/gt43.jpg')})`}"></div>
                                </div>
                                <div class="card-body">
                                    <div class="p-2">
                                        <h5 class="fw-bold mb-3">2019年 BENZ GT43</h5>
                                        <p class="mb-1">2019年 | 4.2萬km | CC</p>
                                        <p class="mb-1">負責人: Ama</p>
                                        <h5 class="fw-bold mb-5">NT$458.3萬元</h5>
                                    </div>
                                </div>
                                <div class="card-footer bg-white text-center border-0 rounded-4 position-absolute bottom-0 w-100">
                                    <hr class="text-fire mx-5">
                                    <button class="kalma border-0 bg-transparent">MORE</button>
                                </div>
                            </router-link>
                        </div>
                    </div></swiper-slide><swiper-slide><div class="col bg-transparent px-4">
                        <div class="card border-0 hover-shadow-lg img-opacity rounded-4 h-100">
                            <router-link to="/page6" class="card-link d-block h-100 link-unstyled text-reset text-decoration-none position-relative">
                                <div class="card-header p-0">
                                    <img class="rounded-top-4" src="../assets/car-img/mercedes.jpg" alt="mercedes logo">
                                    <div class="car-bg-img" :style="{backgroundImage: `url(${require('@/assets/car-img/gt43.jpg')})`}"></div>
                                </div>
                                <div class="card-body">
                                    <div class="p-2">
                                        <h5 class="fw-bold mb-3">2019年 BENZ GT43</h5>
                                        <p class="mb-1">2019年 | 4.2萬km | CC</p>
                                        <p class="mb-1">負責人: Ama</p>
                                        <h5 class="fw-bold mb-5">NT$458.3萬元</h5>
                                    </div>
                                </div>
                                <div class="card-footer bg-white text-center border-0 rounded-4 position-absolute bottom-0 w-100">
                                    <hr class="text-fire mx-5">
                                    <button class="kalma border-0 bg-transparent">MORE</button>
                                </div>
                            </router-link>
                        </div>
                    </div></swiper-slide> -->
                  </swiper>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

// import required modules
import { FreeMode, Pagination } from 'swiper/modules'

export default {
  props: {
    topFiveEarlyProp: {
      type: Array,
      default: () => []
    }
  },
  watch: {
    getTopFiveEarlyProp () {
      this.topFiveEarlyCar = this.topFiveEarlyProp
    }
  },
  data () {
    return {
      topFiveEarlyCar: []
    }
  },
  components: {
    Swiper,
    SwiperSlide
  },
  setup () {
    return {
      modules: [FreeMode, Pagination]
    }
  },
  mounted () {
  },
  // 使用 scoped 属性，将样式限定在组件范围内
  scoped: true,

  // 样式只在当前组件中生效
  styles: `
  #app {
  height: 100%;
}
html,
body {
  position: relative;
  height: 100%;
}

body {
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
  `
}
</script>

<style scoped>
#app {
  height: 100%;
}
html,
body {
  position: relative;
  height: 100%;
}

body {
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  /* text-align: center; */
  /* font-size: 18px; */

  /* Center slide text vertically */
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
}

/* .swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
} */
</style>
