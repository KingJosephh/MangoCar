<template>
    <NavBar :page-title="pageTitleS"></NavBar>
    <section>
        <div class="d-flex justify-content-center pb-5">
            <img src="../assets/car-img/title2.png" alt="熱門車款">
        </div>
    </section>
    <div class="row m-0">
      <div class="col-lg-2">
      </div>
      <div class="col pe-lg-10 mb-4 ms-lg-6 d-flex justify-content-center justify-content-lg-start">
        <button type="button" class="btn btn-fire text-white fw-bold animate__animated animate__pulse animate__infinite" @click="openModal">篩選條件</button>
      </div>
    </div>
    <section>
        <div class="row m-0 px-lg-6 px-1 d-flex flex-column flex-lg-row">
            <div class="col-lg-2">
                <div class="row gy-3">
                    <div class="row d-flex flex-column">
                        <div class="col">
                            <div class="col">
                                <p class="h4 kalma text-lg-start text-center pb-3 mt-3">Sales Manager</p>
                            </div>
                        </div>
                        <div class="col ps-lg-2 ps-6">
                            <div class="row d-flex flex-lg-column flex-row gy-lg-3">
                                <div class="col d-flex ds-dash-father ds-hover-father" v-for="(item, index) in managerList" :key="index">
                                    <h6 class="kalma position-absolute text-fire ds-dash">-</h6>
                                    <h6 class="kalma position-relative ds-hover"><router-link :to="{name:'page7', params:{managerId:item.id}}" class="link-unstyled text-reset text-decoration-none">{{ item.name }}</router-link></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="mb-5">
                    <div v-if="finalListAll.length > 0"  class="row m-0 row-cols-lg-3 row-cols-2 px-lg-0 px-2">
                        <div class="col mt-0 mb-3" v-for="(item, index) in getPageData" :key="index">
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
                    <div v-else>
                        <h2 class="text-center">找不到符合的車輛</h2>
                    </div>
                </div>
            </div>
        </div>
        <nav aria-label="Page navigation example" class="d-flex justify-content-center">
          <ul class="pagination">
            <li class="page-item" :class="{'disabled': currentPage == 1}"><a class="page-link border-0 text-fire" href="#" @click.prevent="clickGotPage(currentPage-1)">Previous</a></li>
            <li class="page-item" v-for="(page, index) in countPage" :key="index" :class="{'active': currentPage == page}"><a class="page-link border-0 text-fire" href="#" @click.prevent="clickGotPage(page)">{{ page }}</a></li>
            <li class="page-item" :class="{'disabled': currentPage == countPage}"><a class="page-link border-0 text-fire" href="#" @click.prevent="clickGotPage(currentPage+1)">Next</a></li>
          </ul>
        </nav>
    </section>
        <Footer></Footer>
        <filter-modal ref="filterCarModal" :condition="filterCondition" @get-condition="carFilterCondition"></filter-modal>
    </template>

<script>
import NavBar from '@/components/CarNavBar.vue'
import Footer from '@/components/FooterPage.vue'
import FilterModal from '@/components/filterModal.vue'
export default {
  components: {
    NavBar,
    Footer,
    FilterModal
  },
  data () {
    return {
      filterCondition: {},
      carLis: [],
      finalListAll: [],
      managerList: [],
      pageTitleS: '熱門車款',
      currentPage: 1,
      perPage: 21
    }
  },
  computed: {
    countPage () {
      return this.finalListAll.length > 0 ? Math.ceil(this.finalListAll.length / this.perPage) : 0
    },
    getPageData () {
      return this.finalListAll.length > 0
        ? this.finalListAll.slice((this.currentPage - 1) * this.perPage, (this.currentPage * this.perPage))
        : []
    }
  },
  methods: {
    openModal () {
      this.filterCondition = {
        brand: 'all',
        price: 'all',
        km: 'all',
        year: 'all',
        page: 'all'
      }
      const modalBody = this.$refs.filterCarModal
      modalBody.showModal()
    },
    getManagerData () {
      const api = `${process.env.VUE_APP_API}/salesManagers`
      this.$http.get(api)
        .then((res) => {
          this.managerList = res.data
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getCarData () {
      const api = `${process.env.VUE_APP_API}/car?_expand=salesManager`
      this.$http.get(api)
        .then((res) => {
          res.data.forEach((item) => {
            if (item.state === '未出售') {
              this.carLis.push(item)
            }
          })
          this.firstShow()
          this.filterCondition = {
            brand: 'all',
            price: 'all',
            km: 'all',
            year: 'all',
            page: 'all'
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
    carFilterCondition (item) {
      this.filterCondition = item
      this.showList(this.filterCondition, this.carLis)
      const modalBody = this.$refs.filterCarModal
      modalBody.hideModal()
    },
    showList (condition, list) {
      const finalList = []
      const finalListPrice = []
      const finalListKm = []
      const finalListYear = []
      if (condition.brand === 'all') {
        list.forEach((item) => {
          finalList.push(item)
        })
        this.finalListAll = finalList
      } else if (condition.brand !== 'all') {
        list.forEach((item) => {
          if (item.brandId === condition.brand) {
            finalList.push(item)
          }
        })
        this.finalListAll = finalList
      }
      if (condition.price === 'all') {
        finalList.forEach((item) => {
          finalListPrice.push(item)
        })
        this.finalListAll = finalListPrice
      } else if (condition.price !== 'all') {
        finalList.forEach((item) => {
          const priceRange = item.price.match(/[\d.]+/)
          const priceRangeF = parseFloat(priceRange[0])
          if (condition.price.match(/[\d]+-/)) {
            const price = condition.price.match(/[\d-]+/)
            const priceF = parseFloat(price[0])
            if (priceF > priceRangeF) {
              finalListPrice.push(item)
            }
          } else if (condition.price.match(/\d+\+$/)) {
            const price = condition.price.match(/\d+\+$/)
            const priceF = parseFloat(price[0])
            if (priceF < priceRangeF) {
              finalListPrice.push(item)
            }
          } else if (condition.price.match(/\d+\/\d+/)) {
            const price = condition.price.match(/(\d+)\/(\d+)/)
            const priceS = parseInt(price[1])
            const priceB = parseInt(price[2])
            if (priceRangeF > priceS && priceRangeF < priceB) {
              finalListPrice.push(item)
            }
          }
        })
        this.finalListAll = finalListPrice
      }
      if (condition.km === 'all') {
        finalListPrice.forEach((item) => {
          finalListKm.push(item)
        })
        this.finalListAll = finalListKm
      } else if (condition.km !== 'all') {
        finalListPrice.forEach((item) => {
          const kmRange = item.longJourney.match(/[\d.]+/)
          const kmRangeF = parseFloat(kmRange) * 10000
          if (condition.km.match(/\d+\+$/)) {
            const km = condition.km.match(/(\d+)/)
            const kmF = parseInt(km)
            if (kmF < kmRangeF) {
              finalListKm.push(item)
            }
          } else if (condition.km.match(/\d+\/\d+/)) {
            const km = condition.km.match(/(\d+)\/(\d+)/)
            const kmS = parseInt(km[1])
            const kmB = parseInt(km[2])
            if (kmRangeF > kmS && kmRangeF < kmB) {
              finalListKm.push(item)
            }
          }
        })
        this.finalListAll = finalListKm
      }
      if (condition.year === 'all') {
        finalListKm.forEach((item) => {
          finalListYear.push(item)
        })
        this.finalListAll = finalListYear
      } else if (condition.year !== 'all') {
        finalListKm.forEach((item) => {
          const year = parseInt(item.year)
          if (condition.year.match(/[\d]+-/)) {
            const yearRange = condition.year.match(/[\d-]+/)
            const yearRangeF = parseInt(yearRange)
            if (year < yearRangeF) {
              finalListYear.push(item)
            }
          } else if (condition.year.match(/\d+\+$/)) {
            const yearRange = condition.year.match(/[\d+]+/)
            const yearRangeF = parseInt(yearRange[0])
            if (year > yearRangeF) {
              finalListYear.push(item)
            }
          } else if (condition.year.match(/\d+\/\d+/)) {
            const yearRange = condition.year.match(/(\d+)\/(\d+)/)
            const yearRangeS = parseFloat(yearRange[1])
            const yearRangeB = parseFloat(yearRange[2])
            if (year > yearRangeS && year < yearRangeB) {
              finalListYear.push(item)
            }
          }
        })
        this.finalListAll = finalListYear
      }
      if (condition.page === 'all') {
        this.perPage = this.finalListAll.length
      } else if (condition.page !== 'all') {
        this.perPage = condition.page
      }
      console.log(this.finalListAll)
    },
    firstShow () {
      this.finalListAll = this.carLis
    },
    clickGotPage (page) {
      this.currentPage = page
      window.scrollTo(0, 0)
    }
  },
  mounted () {
    this.getCarData()
    this.getManagerData()
    window.scrollTo(0, 0)
  }
}
</script>
<!-- <style>
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
</style> -->
