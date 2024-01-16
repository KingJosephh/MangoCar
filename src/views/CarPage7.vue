<template>
    <NavBar></NavBar>
    <section>
        <div class="row m-0 px-lg-5">
          <div class="col-lg-8 mt-5">
                <div class="mb-5">
                    <div class="row m-0 row-cols-lg-3 row-cols-2 px-lg-0 px-2">
                        <div class="col mt-0 mb-3" v-for="(item, index) in carByCharge" :key="index">
                          <router-link :to="{name:'page6', params:{carListId:item.id}}">
                            <div class="card border-0 text-white show-card-detail rounded-4">
                                <img class="card-img car-model rounded-4" :src="`${item.imgUrl[0]}`" alt="s63">
                                <div class="card-img-overlay d-flex flex-column justify-content-end">
                                    <p class="c2 fw-bold mb-0">車種</p>
                                    <p class="c2 m-0 title">{{ item.carName }}</p>
                                    <div class="c2 d-lg-flex justify-content-between">
                                      <div class="c2 d-flex justify-content-lg-between">
                                        <i class="bi bi-fire text-fire"></i>
                                        <p class="m-0">{{ item.fire }}</p>
                                      </div>
                                      <p class="m-0 text-white h4">售價: {{ item.price }}</p>
                                    </div>
                                    <div class="c1 card-img-overlay gradient car-model rounded-4">
                                      <div class="d-flex justify-content-center h-100">
                                        <p class="d-flex align-items-lg-center h5 text-white fw-bold">點我</p>
                                      </div>
                                    </div>
                                </div>
                            </div>
                          </router-link>
                        </div>
                    </div>
                </div>
            </div>
          <div class="col-lg-4 mt-5">
                <div class="card border-0 shadow-sm rounded-4">
                    <div class="card-header border-0 bg-transparent p-0">
                        <!-- <div class="car-bg-img" style="background-image: url('../assets/car-img/per2.jpg');"></div> -->
                        <img class="card-img rounded-top-4" :src="manager.imgUrl" alt="per2">
                    </div>
                    <div class="card-body">
                        <div>
                            <p class="mb-1 text-secondary">銷售經理</p>
                            <p class="fw-bold">{{ manager.name }}</p>
                        </div>
                        <div>
                            <p class="mb-1 text-secondary">電話</p>
                            <p class="fw-bold">{{ manager.phone }}</p>
                        </div>
                        <div>
                            <p class="mb-1 text-secondary">地址</p>
                            <p class="fw-bold">{{ manager.address }}</p>
                        </div>
                    </div>
                    <div class="d-flex justify-content-center mb-4">
                        <router-link to="/page4">
                            <button class="btn btn-fire btn-lg rounded-pill px-5 text-nowrap">前往預約賞車</button>
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

export default {
  components: {
    NavBar,
    Footer
  },
  data () {
    return {
      carList: [],
      haveManagerId: '',
      carByCharge: [],
      managerList: [],
      manager: {}
    }
  },
  methods: {
    getManager () {
      const api = `${process.env.VUE_APP_API}/salesManagers`
      this.$http.get(api)
        .then((res) => {
          console.log(res)
          this.managerList = res.data
          this.managerList.forEach((item) => {
            if (item.id === this.haveManagerId) {
              this.manager = item
            }
          })
        })
        .catch((err) => {
          console.log(err)
        })
    },
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
      const managerId = this.$route.params.managerId
      this.haveManagerId = managerId
      this.carLis.forEach((item) => {
        if (item.salesManagerId === managerId) {
          this.carByCharge.push(item)
        }
      })
    }
  },
  created () {
    this.getCarData()
    this.getManager()
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
