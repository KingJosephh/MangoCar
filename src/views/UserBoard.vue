<template>
    <div>
      <NavBar></NavBar>
      <!-- <section>
        <div class="bg-img-size mb-5" :style="{ backgroundImage: `url(${require('@/assets/car-img/f-page3.jpg')})`, height: '650px' }">
            <div class="position-absolute text-center text-secondary" style="top: 50%; left: 15%; transform: translate(-25%, -50%); text-align: center;">
                <div class="position-absolute top-50 start-50 translate-middle">
                <p class="display-1 fw-bold text-secondary">芒果 國際</p>
                <hr class="mb-1 mx-n3 text-secondary">
                <p class="h4 mt-3 text-center fw-bold text-fire">英雄可以沒有家</p>
                <p class="h4 mt-3 text-center fw-bold text-fire">但是不能沒有戰馬</p>
            </div>
        </div>
    </section> -->
    <swiper
    :style="{
      '--swiper-navigation-color': '#fff',
      '--swiper-pagination-color': '#fff',
    }"
    :speed="600"
    :parallax="true"
    :pagination="{ clickable: true }"
    :navigation="true"
    :modules="modules"
    class="mySwiper mb-5"
  >
    <template #container-start>
      <div
        class="parallax-bg"
        :style="{ backgroundImage: `url(${require('@/assets/car-img/f-page3.jpg')})`}"
        data-swiper-parallax="-23%"
      ></div>
    </template>

    <swiper-slide>
      <div class="title" data-swiper-parallax="-300"></div>
      <div class="subtitle" data-swiper-parallax="-200"></div>
      <div class="text position-absolute top-50 start-50 translate-middle" data-swiper-parallax="-100">
                <p class="display-1 fw-bold text-secondary">芒果 國際</p>
                <hr class="mb-1 mx-n3 text-secondary">
                <p class="h4 mt-3 text-center fw-bold text-fire">英雄可以沒有家</p>
                <p class="h4 mt-3 text-center fw-bold text-fire">但是不能沒有戰馬</p>
      </div>
    </swiper-slide>

    <swiper-slide>
      <div class="title fw-bold" data-swiper-parallax="-300">芒果國際销售服务</div>
      <div class="subtitle fw-bold mb-3" data-swiper-parallax="-200">我们的服务特点</div>
      <div class="text" data-swiper-parallax="-100">
        <p>🌟多款认证二手车，品质保证</p>
          <p>💰 弹性贷款计划，让您轻松拥有心仪座驾</p>
            <p>🚗 全方位车辆检测，确保您的安全驾驶</p>
              <p>📈 交易透明，无隐费用，绝对信任</p>
                <p>🎁 限时特惠：购车即享多项福利！</p>
                  <p>📞 预约试驾请致电：123-456-7890</p>
                    <p>📍 地址：芒果国际汽车广场，期待为您服务！</p>
      </div>
    </swiper-slide>

    <swiper-slide>
      <div class="title fw-bold" data-swiper-parallax="-300">芒果國際 x 流浪动物關懷项目</div>
      <div class="subtitle fw-bold mb-3" data-swiper-parallax="-200">✨ 為您的購車賦予更多意義</div>
      <div class="text" data-swiper-parallax="-100">
        <p>🏡 收养一辆车，我们将捐赠给流浪动物关怀项目</p>
        <p>🌈 一部分销售额将用于流浪动物医疗和庇护所支持</p>
        <p>🎁 每一位购车顾客将获得一份流浪动物关怀捐赠证书</p>
      </div>
    </swiper-slide>
  </swiper>
    <section class="mb-5">
        <div class="row d-flex justify-content-center m-0">
            <div class="col-lg-10 p-0">
                <div class="row d-flex flex-row-reverse justify-content-center m-0 row-cols-1 row-cols-lg-2">
                    <div class="col d-flex flex-column justify-content-center">
                        <h2 class="fw-bold mb-4 animate__animated animate__shakeY animate__infinite">您出錢 我出力 一起助浪浪</h2>
                        <h4 class="mb-3 fw-bold d-flex"><i class="bi bi-car-front-fill mx-3 text-fire"></i><p>線上填寫表單即可預約看車</p></h4>
                        <h4 class="mb-3 fw-bold d-flex"><i class="bi bi-car-front-fill mx-3 text-fire"></i><p>填寫表單專人到府估車</p></h4>
                        <h4 class="mb-3 fw-bold d-flex"><i class="bi bi-car-front-fill mx-3 text-fire"></i><p>價格公道透明</p></h4>
                        <h4 class="mb-5 fw-bold d-flex"><i class="bi bi-car-front-fill mx-3 text-fire"></i><p>每台車獲利捐出30%給流浪動物基金會</p></h4>
                        <button type="button" class="btn btn-outline-fire mb-lg-0 mb-4 mx-auto fw-bold" @click.prevent="toIntroduce">詳細服務介紹</button>
                    </div>
                    <div class="col">
                        <img class="garage-size" src="../assets/car-img/car-garage.jpg" alt="車庫圖">
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div class="container mb-5">
            <div class="d-flex justify-content-center pb-5">
                <img src="../assets/car-img/title2.png" alt="近期好車">
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="row g-4 m-0 row-cols-lg-4 row-cols-2 px-lg-0 px-4">
                        <div class="col" v-for="(item, index) in topFive" :key="index">
                            <div class="card border-0 text-white show-card-detail">
                              <router-link :to="{name:'page6', params:{carListId:item.id}}" @click="getCarDetail(item.id)">
                                <img class="card-img car-model rounded-4" :src="`${item.imgUrl}`" alt="s63">
                                <div class="card-img-overlay d-flex flex-column justify-content-end">
                                    <p class="c2 fw-bold mb-0 text-white">車種</p>
                                    <p class="c2 text-nowrap m-0 title text-white">{{ item.carName }}</p>
                                    <div class="c2 d-flex justify-content-between">
                                      <div class="c2 d-flex justify-content-between">
                                        <i class="bi bi-fire text-fire me-2"></i>
                                        <p class="m-0 text-white animate__animated animate__heartBeat animate__infinite">{{ item.fire }}</p>
                                      </div>
                                      <p class="m-0 text-white">負責人: {{ item.salesManager.name }}</p>
                                    </div>
                                    <div class="c1 card-img-overlay gradient car-model rounded-4">
                                      <div class="d-flex justify-content-center h-100">
                                        <p class="d-flex align-items-center h5 text-white fw-bold">點我</p>
                                      </div>
                                    </div>
                                </div>
                              </router-link>
                            </div>
                        </div>
                        <!-- <div class="col">
                            <div class="card border-0 text-white show-card-detail">
                                <img class="card-img car-model rounded-4" src="../assets/car-img/911turbo.jpg" alt="911turbo">
                                <div class="card-img-overlay d-flex flex-column justify-content-end">
                                    <p class="c2 fw-bold mb-0">車種</p>
                                    <p class="c2 text-nowrap m-0 title">porsche-911 turbo S</p>
                                    <div class="c1 card-img-overlay gradient car-model rounded-4  ">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card border-0 text-white show-card-detail">
                                <img class="card-img car-model rounded-4" src="../assets/car-img/x6.jpg" alt="x6">
                                <div class="card-img-overlay d-flex flex-column justify-content-end">
                                    <p class="c2 fw-bold mb-0">車種</p>
                                    <p class="c2 text-nowrap m-0 title">BMW X6</p>
                                    <div class="c1 card-img-overlay gradient car-model rounded-4">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card border-0 text-white show-card-detail">
                                <img class="card-img car-model rounded-4" src="../assets/car-img/r4.jpg" alt="r4">
                                <div class="card-img-overlay d-flex flex-column justify-content-end">
                                    <p class="c2 fw-bold mb-0">車種</p>
                                    <p class="c2 text-nowrap m-0 title">toyota Corolla Cross</p>
                                    <div class="c1 card-img-overlay gradient car-model rounded-4  ">
                                    </div>
                                </div>
                            </div>
                        </div> -->
                    </div>
                </div>
            </div>
        </div>
    </section>
    <hot-swiper ref="hotSwiper" :topFiveEarlyProp="topFiveEarly"></hot-swiper>
    <section class="">
        <div class="d-flex justify-content-center">
            <img src="../assets/car-img/title1.png" alt="熱門車款">
        </div>
        <p class="text-center mb-6">這裡是在還在等家的浪浪們，若您正巧在找個家人，不訪來認識一下唄</p>
        <div class="row px-lg-6 m-0 d-flex justify-content-center">
            <div class="col-lg-12">
                <div class="row m-0 row-cols-lg-3 row-cols-1 gy-3 px-4">
                    <!-- <div class="col bg-transparent px-4">
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
                    </div>
                    <div class="col bg-transparent px-4">
                        <div class="card border-0 hover-shadow-lg img-opacity rounded-4 h-100">
                            <router-link to="/page6" class="card-link d-block h-100 link-unstyled text-reset text-decoration-none position-relative">
                                <div class="card-header p-0">
                                    <img class="rounded-top-4" src="../assets/car-img/bmw.jpg" alt="bmw logo">
                                    <div class="car-bg-img" :style="{backgroundImage: `url(${require('@/assets/car-img/m4.jpg')})`}"></div>
                                </div>
                                <div class="card-body">
                                    <div class="p-2">
                                        <h5 class="fw-bold">BMW-M4</h5>
                                        <p class="pb-5">全新世代BMW M4強眼設計的無邊框雙腎型進氣格柵，營造強烈的視覺衝擊力，而簡潔的車身線條勾勒出靈動的輪廓，在不經意間，迸發強勢本色，併發更多對速度的渴望！</p>
                                    </div>
                                </div>
                                <div class="card-footer bg-white text-center border-0 rounded-4 position-absolute bottom-0 w-100">
                                    <hr class="text-fire mx-5">
                                    <button class="kalma border-0 bg-transparent">MORE</button>
                                </div>
                            </router-link>
                        </div>
                    </div>
                    <div class="col bg-transparent px-4">
                        <div class="card border-0 hover-shadow-lg img-opacity rounded-4 h-100">
                            <router-link to="/page6" class="card-link d-block h-100 link-unstyled text-reset text-decoration-none position-relative">
                                <div class="card-header p-0">
                                    <img class="rounded-top-4" src="../assets/car-img/porshe.jpg" alt="porsche logo">
                                    <div class="car-bg-img" :style="{backgroundImage: `url(${require('@/assets/car-img/911turbo.jpg')})`}"></div>
                                </div>
                                <div class="card-body">
                                    <div class="p-2">
                                        <h5 class="fw-bold">Porsche-911</h5>
                                        <P class="mb-5">我們的工程師們非常喜歡將 911 Turbo 稱為最完美的跑車。具備極端的跑車性能卻同時非常舒適，且能夠無限制而完美地掌握日常生活所需。911 Turbo 系列持續貫徹自己的道路。
                                        </P>
                                    </div>
                                </div>
                                <div class="card-footer bg-white text-center border-0 rounded-4 position-absolute bottom-0 w-100">
                                    <hr class="text-fire mx-5">
                                    <button class="kalma border-0 bg-transparent">MORE</button>
                                </div>
                            </router-link>
                        </div>
                    </div> -->
                </div>
            </div>
        </div>
    </section>
    <div class="d-flex justify-content-center mt-5 mb-6">
        <router-link to="/page5">
            <button class="btn btn-fire text-white fw-bold"><p class="m-0 px-5">觀看更多坐駕</p></button>
        </router-link>
    </div>
        <Footer></Footer>
    </div>
</template>

<script>
import NavBar from '@/components/CarNavBar.vue'
import Footer from '@/components/FooterPage.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import '../assets/components/style1.css'
import HotSwiper from '@/components/HotSwiper.vue'

// import required modules
import { Parallax, Pagination, Navigation, FreeMode } from 'swiper/modules'
export default {
  components: {
    NavBar,
    Footer,
    Swiper,
    SwiperSlide,
    HotSwiper
  },
  data () {
    return {
      carLis: [],
      topFive: [],
      topFiveEarly: []
    }
  },
  methods: {
    getCarData () {
      const api = 'http://localhost:3000'
      this.$http.get(api + '/car?_expand=salesManager')
        .then((res) => {
          console.log(res)
          this.carLis = res.data
          this.getTopFive()
          this.getEarlyOne()
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getTopFive () {
      this.carLis.sort((a, b) => parseFloat(b.fire) - parseFloat(a.fire))
      const getFive = this.carLis.slice(0, 4)
      this.topFive = getFive
    },
    toIntroduce () {
      console.log(this.$router)
      this.$router.push('/page2')
    },
    getEarlyOne () {
      const carsWithDateObjects = this.carLis.map(car => ({ ...car, date: new Date(car.date) })).sort((a, b) => b.date - a.date)
      const getFiveDate = carsWithDateObjects.slice(0, 5)
      this.topFiveEarly = getFiveDate
    },
    getCarDetail (aa) {
      this.$emit('carListId', aa)
    }
  },
  created () {
    this.getCarData()
  },
  mounted () {
    window.scrollTo(0, 0)
  },
  setup () {
    return {
      modules: [Parallax, Pagination, Navigation, FreeMode]
    }
  },
  scoped: true,
  styles: `#app { height: 100% }
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
  height: 650px;
  background: #000;
}

.swiper-slide {
  font-size: 18px;
  color: #fff;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 40px 60px;
}

.parallax-bg {
  position: absolute;
  left: 0;
  top: 0;
  width: 130%;
  height: 100%;
  -webkit-background-size: cover;
  background-size: cover;
  background-position: center;
}

.swiper-slide .title {
  font-size: 41px;
  font-weight: 300;
}

.swiper-slide .subtitle {
  font-size: 21px;
}

.swiper-slide .text {
  font-size: 14px;
  max-width: 400px;
  line-height: 1.3;
}`
}
</script>

<style>
#app { height: 100% }
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
  height: 650px;
  background: #eee;
}

.swiper-slide {
  font-size: 18px;
  color: #fff;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 40px 60px;
}

.parallax-bg {
  position: absolute;
  left: 0;
  top: 0;
  width: 130%;
  height: 100%;
  -webkit-background-size: cover;
  background-size: cover;
  background-position: center;
}

.swiper-slide .title {
  font-size: 41px;
  font-weight: 300;
}

.swiper-slide .subtitle {
  font-size: 21px;
}

.swiper-slide .text {
  font-size: 14px;
  max-width: 400px;
  line-height: 1.3;
}

</style>
