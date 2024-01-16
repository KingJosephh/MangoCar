<template>
    <NavBar></NavBar>
    <header class="min-vh-2-40 position-relative">
        <div class="position-absolute bg-attachment-fixed bg-img-size-2 mb-2" :style="{ backgroundImage: `url(${require('@/assets/car-img/pag2/pg2Car.jpg')})`, top: 0, right: 0, bottom: 0, left: 0, height: '288px'}"></div>
        <div class="position-absolute top-50 start-50 translate-middle text-center text-secondary">
            <p class="display-1 fw-bold">預約 表單</p>
            <hr class="mb-1 mx-n3">
        </div>
    </header>
    <section>
        <div class="container">
            <div class="card rounded-4 deco-line border-0 shadow-lg mb-5">
                <div class="card-header bg-transparent text-center border-0 pt-5">
                    <h3 class="fw-bold">
                        預約表單
                    </h3>
                </div>
                <div class="card-body">
                    <form class="row g-3">
                        <div class="col-md-6">
                            <label for="我想要預約" class="form-label">我想要預約</label>
                            <select type="text" class="form-select" id="我想要預約" v-model="reserve.goal">
                                <option value="賞車">賞車</option>
                                <option value="估車">估車</option>
                            </select>
                        </div>
                        <div class="col-md-6">
                            <label for="名子" class="form-label">姓名</label>
                            <input type="text" class="form-control" id="姓名" v-model="reserve.name">
                        </div>
                        <div class="col-md-6">
                            <label for="手機號碼" class="form-label">手機號碼</label>
                            <input type="number" class="form-control" id="手機號碼" placeholder="請輸入手機號碼" v-model="reserve.phone">
                        </div>
                        <div class="col-md-6">
                            <label for="預約日期" class="form-label">預約日期</label>
                            <input type="date" class="form-control" id="預約日期" v-model="reserve.date">
                        </div>
                        <div class="col-md-6">
                            <label for="城市" class="form-label">城市</label>
                            <select id="城市" class="form-select" v-model="reserve.city">
                                <option value="台北">台北</option>
                                <option value="高雄">高雄</option>
                            </select>
                        </div>
                        <div class="col-md-6">
                            <label for="詳細地址" class="form-label">詳細地址</label>
                            <input id="詳細地址" class="form-control" v-model="reserve.address">
                        </div>
                        <div class="col-md-6">
                            <label for="預約業務" class="form-label">預約業務</label>
                            <select id="預約業務" class="form-select" v-model="reserve.manager">
                                <option value="Ethan">Ethan</option>
                                <option value="Olivia">Olivia</option>
                                <option value="Liam">Liam</option>
                                <option value="Emma">Emma</option>
                                <option value="Noah">Noah</option>
                                <option value="Ava">Ava</option>
                            </select>
                        </div>
                        <div class="col-md-6">
                            <label for="車型款式說明" class="form-label">車型款式說明</label>
                            <input id="車型款式說明" class="form-control" v-model="reserve.carName">
                        </div>
                        <div class="col-12 mb-3">
                            <label for="備註說明" class="form-label">備註說明</label>
                            <textarea class="form-control" id="備註說明" rows="3" v-model="reserve.else"></textarea>
                        </div>
                        <div class="col-12 d-flex justify-content-center">
                            <input type="button" class="btn btn-fire rounded-pill px-4" value="送出預約資訊" @click.prevent="getAppointment">
                            <!-- <button type="submit" class="btn btn-info rounded-pill px-4" >送出預約資訊</button> -->
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
        <Footer></Footer>
    </template>
<script>
import NavBar from '@/components/CarNavBar.vue'
import Footer from '@/components/FooterPage.vue'
export default {
  components: {
    NavBar,
    Footer
  },
  data () {
    return {
      reserve: {
        else: '無'
      }
    }
  },
  methods: {
    getAppointment () {
      console.log(this.reserve)
      if (
        this.reserve.goal &&
        this.reserve.name &&
        this.reserve.phone &&
        this.reserve.date &&
        this.reserve.city &&
        this.reserve.address &&
        this.reserve.manager &&
        this.reserve.carName
      ) {
        console.log(this.reserve)
        const api = `${process.env.VUE_APP_API}/reserveList`
        this.$http.post(api, this.reserve)
          .then((res) => {
            console.log(res)
            this.reserve = {
              else: '無'
            }
          })
          .catch((err) => {
            console.log(err)
          })
      } else {
        alert('資料不完整')
      }
    }
  },
  mounted () {
    window.scroll(0, 0)
  }
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
  background: #e2e2e2;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}
</style>
