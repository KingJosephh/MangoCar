<template>
    <div>
      <NavBar :page-title="pageTitleS"></NavBar>
      <TitleImg></TitleImg>
    <section class="mb-5">
        <div class="row d-flex justify-content-center m-0">
            <div class="col-lg-10 p-0">
                <div class="row d-flex flex-row-reverse justify-content-center m-0 row-cols-1 row-cols-lg-2">
                    <div class="col d-flex flex-column justify-content-center">
                        <h2 class="fw-bold mb-5 animate__animated animate__shakeY animate__infinite">您出錢 我出力 一起助浪浪</h2>
                        <h4 class="mb-3 fw-bold d-flex"><i class="bi bi-car-front-fill mx-3 text-fire"></i><p>線上填寫表單即可預約看車</p></h4>
                        <h4 class="mb-3 fw-bold d-flex"><i class="bi bi-car-front-fill mx-3 text-fire"></i><p>填寫表單專人到府估車</p></h4>
                        <h4 class="mb-3 fw-bold d-flex"><i class="bi bi-car-front-fill mx-3 text-fire"></i><p>價格公道透明</p></h4>
                        <h4 class="mb-5 fw-bold d-flex"><i class="bi bi-car-front-fill mx-3 text-fire"></i><p>每台車獲利捐出30%給流浪動物基金會</p></h4>
                    </div>
                    <div class="col p-0">
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
            <div class="row" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
                <div class="col-lg-12">
                    <div class="row g-4 m-0 row-cols-lg-4 row-cols-2 px-lg-0 px-4">
                        <div class="col" v-for="(item, index) in topFive" :key="index">
                            <div class="card border-0 text-white show-card-detail rounded-4">
                              <router-link :to="{name:'page6', params:{carListId:item.id}}">
                                <img class="card-img car-model rounded-4" :src="`${item.imgUrl[0]}`" alt="s63">
                                <div class="card-img-overlay d-flex flex-column justify-content-end">
                                    <!-- <p class="c2 fw-bold mb-0 text-white">車種</p> -->
                                    <p class="c2 m-0 title text-white">{{ item.carName }}</p>
                                    <div class="c2 d-lg-flex justify-content-between">
                                      <div class="c2 d-flex justify-content-lg-between">
                                        <i class="bi bi-fire text-fire me-2"></i>
                                        <p class="m-0 text-white animate__animated animate__heartBeat animate__infinite">{{ item.fire }}</p>
                                      </div>
                                      <p class="m-0 text-white h4">售價: {{ item.price }}</p>
                                    </div>
                                    <div class="c1 card-img-overlay gradient car-model rounded-4">
                                      <div class="d-flex justify-content-center h-100">
                                        <p class="d-flex align-items-lg-center my-auto h5 text-white fw-bold d-lg-block d-none">點我</p>
                                      </div>
                                    </div>
                                </div>
                              </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div class="d-flex justify-content-center mt-5 mb-6">
        <router-link to="/page3">
            <button class="btn btn-fire text-white fw-bold"><p class="m-0 px-5">觀看更多坐駕</p></button>
        </router-link>
    </div>
    <section>
        <div class="d-flex justify-content-center">
            <img src="../assets/car-img/title3.png" alt="服務介紹">
        </div>
    </section>
    <section>
        <div class="mt-4 mb-5">
            <div class="row px-6 m-0 row-cols-lg-4 row-cols-1">
                <div class="col">
                    <div class="row row-cols-lg-1 row-cols-2" data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
                        <div class="col-3 d-flex justify-content-center">
                            <img class="pb-lg-4 pb-0 car-model3" src="../assets/car-img/pag2/buy-car1.png" alt="網路選購好車">
                        </div>
                        <div class="col-9 d-flex flex-column justify-content-center ps-lg-0 ps-5">
                            <h3 class="fw-bold pb-lg-3 pb-2 m-0 text-lg-center text-start text-fire">網路預約</h3>
                            <p class="text-lg-center text-start mb-5 fw-bold">專人到府估車<br>現場賞車<br>立即線上預約</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="row row-cols-lg-1 row-cols-2" data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
                        <div class="col-3 d-flex justify-content-center">
                            <img class="pb-lg-4 pb-0 car-model3" src="../assets/car-img/pag2/buy-car2.png" alt="到店賞車">
                        </div>
                        <div class="col-9 d-flex flex-column justify-content-center ps-lg-0 ps-5">
                            <h3 class="fw-bold pb-lg-3 pb-2 m-0 text-lg-center text-start text-fire">服務周到</h3>
                            <p class="text-lg-center text-start mb-5 fw-bold">完整了解車輛歷程<br>嚴格標準從頭到腳檢測<br>多輛車款、庫存</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="row row-cols-lg-1 row-cols-2" data-aos="fade-up" data-aos-duration="800" data-aos-delay="700">
                        <div class="col-3 d-flex justify-content-center">
                            <img class="pb-lg-4 pb-0 car-model3" src="../assets/car-img/pag2/buy-car3.png" alt="喜提新車">
                        </div>
                        <div class="col-9 d-flex flex-column justify-content-center ps-lg-0 ps-5">
                            <h3 class="fw-bold pb-lg-3 pb-2 m-0 text-lg-center text-start text-fire">到府估車</h3>
                            <p class="text-lg-center text-start mb-5 fw-bold">有想賣的車<br>立即填寫表單<br>專人到府估車</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="row row-cols-lg-1 row-cols-2" data-aos="fade-up" data-aos-duration="800" data-aos-delay="900">
                        <div class="col-3 d-flex justify-content-center">
                            <img class="pb-lg-4 pb-0 car-model3" src="../assets/car-img/pag2/buy-car4.png" alt="幫助浪浪">
                        </div>
                        <div class="col-9 d-flex flex-column justify-content-center ps-lg-0 ps-5">
                            <h3 class="fw-bold pb-lg-3 pb-2 m-0 text-lg-center text-start text-fire">幫助浪浪</h3>
                            <p class="text-lg-center text-start mb-5 fw-bold">購買成功後<br>以車主名義捐款30%</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div class="bg-img-size4" :style="{ backgroundImage: `url(${require('@/assets/car-img/f-page4.jpg')})`}">
            <div class="row m-0">
              <div class="col-lg-4 col-12 text-white d-flex flex-column justify-content-center align-items-center" data-aos="fade-up" data-aos-duration="800" data-aos-delay="700">
                <div class="row d-flex flex-column">
                  <div class="col-lg-12 col-0 d-lg-block d-none">
                    <img src="@/assets/car-img/shop1.jpg" :style="{height:'400px'}" class="car-model4 mt-5">
                  </div>
                  <div class="col">
                    <h3 class="fw-bold text-white text-start mt-4">台中總店</h3>
                    <h5>電話:02-456851</h5>
                    <h5>地址:台中市西區民權路789號</h5>
                    <i class="bi bi-line h5 me-3 text-fire"></i><i class="bi bi-facebook h5 me-3 text-fire"></i><a href="https://www.instagram.com/mango_treeeee/"><i class="bi bi-instagram h5 me-3 text-fire"></i></a>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-12 text-white d-flex flex-column justify-content-center align-items-center" data-aos="fade-up" data-aos-duration="800" data-aos-delay="700">
                <div class="row d-flex flex-column">
                  <div class="col-lg-12 col-0 d-lg-block d-none">
                    <img src="@/assets/car-img/shop2.jpg" :style="{height:'400px'}" class="car-model4 mt-5">
                  </div>
                  <div class="col">
                    <h3 class="fw-bold text-white text-start mt-4">桃園中壢店</h3>
                    <h5>電話:01-458123</h5>
                    <h5>地址:桃園市中壢區中大路456號</h5>
                    <i class="bi bi-line h5 me-3 text-fire"></i><i class="bi bi-facebook h5 me-3 text-fire"></i><i class="bi bi-instagram h5 me-3 text-fire"></i>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-12 text-white d-flex flex-column justify-content-center align-items-center" data-aos="fade-up" data-aos-duration="800" data-aos-delay="700">
                <div class="row d-flex flex-column">
                  <div class="col-lg-12 col-0 d-lg-block d-none">
                    <img src="@/assets/car-img/shop3.jpg" :style="{height:'400px'}" class="car-model4 mt-5">
                  </div>
                  <div class="col">
                    <h3 class="fw-bold text-white text-start mt-4">高雄建工店</h3>
                    <h5>電話:07-12560</h5>
                    <h5>地址:高雄市三民區建工路123號</h5>
                    <i class="bi bi-line h5 me-3 text-fire"></i><i class="bi bi-facebook h5 me-3 text-fire"></i><i class="bi bi-instagram h5 me-3 text-fire"></i>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </section>
        <Footer></Footer>
    </div>
</template>

<script>
import NavBar from '@/components/CarNavBar.vue'
import Footer from '@/components/FooterPage.vue'
import TitleImg from '@/components/UserBoardSwiper.vue'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import '../assets/components/style1.css'

// import required modules
export default {
  components: {
    NavBar,
    Footer,
    TitleImg
  },
  data () {
    return {
      carLis: [],
      topFive: [],
      topFiveEarly: [],
      pageTitleS: '首頁'
    }
  },
  methods: {
    getCarData () {
      const api = `${process.env.VUE_APP_API}/car?_expand=salesManager`
      this.$http.get(api)
        .then((res) => {
          res.data.forEach((item) => {
            if (item.state === '未出售') {
              this.carLis.push(item)
            }
          })
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
    }
  },
  created () {
    this.getCarData()
  },
  mounted () {
    window.scrollTo(0, 0)
  }
}
</script>
