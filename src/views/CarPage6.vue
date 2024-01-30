<template>
    <NavBar></NavBar>
    <section>
        <div class="row m-0 px-lg-5">
            <div class="col-lg-8 mt-5">
                <div class="card border-0 shadow-sm mb-6">
                    <div class="row g-3 m-0 p-4">
                        <div class="col-12">
                            <BigImg class="aa" :car-img="carImg"></BigImg>
                        </div>
                        <div class="col-12">
                            <h3 class="fw-bold">{{ showCarDetail.carName }}</h3>
                        </div>
                        <div class="col-6">
                            <h5>車身型式: {{ showCarDetail.doorPassenger }}</h5>
                        </div>
                        <div class="col-6">
                            <h5>動力型式: {{ showCarDetail.dye }}</h5>
                        </div>
                        <div class="col-6">
                            <h5>年分: {{ showCarDetail.year }} 年</h5>
                        </div>
                        <div class="col-6">
                            <h5>里程: {{ showCarDetail.longJourney }}</h5>
                        </div>
                        <div class="col-6">
                            <h4 class="fw-bold">售價: {{ showCarDetail.price }}</h4>
                        </div>
                        <div class="col-12 pb-4">
                            <div class="row">
                                <div class="col">
                                    <div class="row">
                                        <div class="col-3"><h5>安全配備</h5></div>
                                        <div class="col">
                                          <p v-for="(value, item) in provide" :key="item" :class="{'text-disable': value === false }">
                                            <i class="bi bi-check2-square text-fire" :class="{'text-disable': value === false }"></i>
                                            {{ item }}
                                          </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="row">
                                        <div class="col-3"><h5>舒適配備</h5></div>
                                        <div class="col">
                                          <p v-for="(value, item) in comfortProvide" :key="item" :class="{'text-disable': value === false }">
                                            <i class="bi bi-check2-square text-fire" :class="{'text-disable': value === false }"></i>
                                            {{ item }}
                                          </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 mt-5">
                <div class="card border-0 shadow-sm rounded-4">
                    <div class="card-header border-0 bg-transparent p-0">
                        <img class="car-bg-img" :src="managerId.imgUrl" alt="per2">
                    </div>
                    <div class="card-body">
                        <div>
                            <p class="mb-1 text-secondary">銷售經理</p>
                            <p class="fw-bold">{{ managerId.name }}</p>
                        </div>
                        <div>
                            <p class="mb-1 text-secondary">電話</p>
                            <p class="fw-bold">{{ managerId.phone }}</p>
                        </div>
                        <div>
                            <p class="mb-1 text-secondary">地址</p>
                            <p class="fw-bold">{{ managerId.address }}</p>
                        </div>
                    </div>
                    <div class="d-flex justify-content-center mb-4">
                        <router-link to="/page4">
                            <button class="btn btn-fire text-white btn-lg rounded-pill px-5 text-nowrap animate__animated animate__bounce animate__infinite">前往預約賞車</button>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
        <Footer></Footer>
    </template>

<script>
import NavBar from '@/components/CarNavBar.vue'
import Footer from '@/components/FooterPage.vue'
import BigImg from '@/components/carImgSwiperBig.vue'

export default {
  data () {
    return {
      carLis: [],
      showCarDetail: [],
      managerId: [],
      provide: [],
      comfortProvide: [],
      carImg: [],
      provideList: ['胎壓偵測', '防盜系統', '循跡系統', '煞車輔助系統', 'ABS防鎖死', '動態穩定系統', 'keyless免鑰系統', '中控鎖', '兒童安全椅固定裝置', '安全氣囊'],
      comfortProvideList: ['定速系統', '倒車顯影系統', '多功能方向盤', '恆溫空調', '電動車窗', 'LED頭燈', '衛星導航', '倒車雷達', '自動停車系統', '真皮座椅']
    }
  },
  components: {
    NavBar,
    Footer,
    BigImg
  },
  methods: {
    getCarData () {
      const api = `${process.env.VUE_APP_API}/car?_expand=salesManager`
      this.$http.get(api)
        .then((res) => {
          console.log(res)
          this.carLis = res.data
          this.getCarOneList()
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getCarOneList () {
      const carId = this.$route.params.carListId
      this.carLis.forEach((item) => {
        if (item.id === carId) {
          // return item
          console.log(item.salesManager.name)
          this.managerId = item.salesManager
          this.showCarDetail = item
          this.provide = item.provide
          this.comfortProvide = item.comfortProvide
          this.carImg = item.imgUrl
          this.plusFire(item.id)
        }
      })
    },
    getImagePath (relativePath) {
      return require(`@/assets/car-img/manager${relativePath}`)
    },
    carDetail () {
      console.log(this.showCarDetail)
      this.$emit('carDetail', this.showCarDetail)
    },
    plusFire (aa) {
      const number = parseInt(this.showCarDetail.fire) + 1
      const fireNum = number.toString()
      const api = `${process.env.VUE_APP_API}/car/${aa}`
      this.$http.patch(api, {
        fire: fireNum
      })
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
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
