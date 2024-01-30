<template>
  <bgNavBar></bgNavBar>
    <div class="container">
      <div class="text-end mt-3">
        <button type="button" class="btn btn-outline-fire fw-bold me-3" @click="openFilter">篩選條件</button>
        <button type="button" class="btn btn-fire fw-bold text-white" @click="openModal(true)">新增產品</button>
      </div>
        <table class="table mt-4">
      <thead>
        <tr>
          <th width="100">車輛品牌</th>
          <th width="120">款式</th>
          <th width="120">年分</th>
          <th width="120">里程</th>
          <th width="120">乘坐及門數</th>
          <th width="120">動力形式</th>
          <th width="200">進場日期</th>
          <th width="100">狀態</th>
          <th width="100">點閱數</th>
          <th width="200">售價</th>
        </tr>
      </thead>
      <tbody v-if="finalListAll.length > 0">
        <tr v-for="(item ,index) in getPageData" :key="index">
          <td>{{ item.brandId }}</td>
          <td>{{ item.carName }}</td>
          <td>{{ item.year }}</td>
          <td>{{ item.longJourney }}</td>
          <td>{{ item.doorPassenger }}</td>
          <td>{{ item.dye }}</td>
          <td class="text-right">
            {{ item.date }}
          </td>
          <td>{{ item.state }}</td>
          <td>{{ item.fire }}</td>
          <td class="text-right">
            {{ item.price }}
          </td>
          <td>
            <div class="btn-group d-flex flex-end">
              <button class="btn btn-outline-fire btn-sm" @click="saleCar(item)">出售</button>
              <button class="btn btn-outline-green btn-sm" @click="openModal(false, item)">編輯</button>
              <button class="btn btn-outline-danger btn-sm" @click="openDelModal(item)">刪除</button>
            </div>
          </td>
        </tr>
      </tbody>
      <div v-else>
          <h2 class="text-center text-nowrap mt-5">找不到符合的車輛</h2>
      </div>
    </table>
    <nav aria-label="Page navigation example" class="d-flex justify-content-center">
          <ul class="pagination">
            <li class="page-item" :class="{'disabled': currentPage == 1}"><a class="page-link border-0 text-fire" href="#" @click.prevent="clickGotPage(currentPage-1)">Previous</a></li>
            <li class="page-item" v-for="(page, index) in countPage" :key="index" :class="{'active': currentPage == page}"><a class="page-link border-0 text-fire" href="#" @click.prevent="clickGotPage(page)">{{ page }}</a></li>
            <li class="page-item" :class="{'disabled': currentPage == countPage}"><a class="page-link border-0 text-fire" href="#" @click.prevent="clickGotPage(currentPage+1)">Next</a></li>
          </ul>
        </nav>
    </div>
    <addModal ref="addModal" :car-product="addCondition" @update-condition="updateModal"></addModal>
    <delModal ref="delModal" :del-product="delItem" @del-item="delModal"></delModal>
    <FilerModal ref="filter" :condition="filterCondition" @get-condition="getCondition"></FilerModal>
</template>
<script>
import addModal from '@/components/BgProductModal.vue'
import delModal from '@/components/delModal.vue'
import bgNavBar from '@/components/bgNavBar.vue'
import FilerModal from '@/components/filerBgModal.vue'
export default {
  components: {
    addModal,
    delModal,
    bgNavBar,
    FilerModal
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
  data () {
    return {
      carList: [],
      finalListAll: [],
      filterCondition: {},
      addCondition: {
        imgUrl: [''],
        provide: {
          胎壓偵測: false,
          防盜系統: false,
          循跡系統: false,
          煞車輔助系統: false,
          ABS防鎖死: false,
          動態穩定系統: false,
          keyless免鑰系統: false,
          中控鎖: false,
          兒童安全椅固定裝置: false,
          安全氣囊: false
        },
        comfortProvide: {
          定速系統: false,
          倒車顯影系統: false,
          多功能方向盤: false,
          恆溫空調: false,
          電動車窗: false,
          LED頭燈: false,
          衛星導航: false,
          倒車雷達: false,
          自動停車系統: false,
          真皮座椅: false
        },
        fire: 0
      },
      isNew: true,
      delItem: {},
      perPage: 10,
      currentPage: 1
    }
  },
  methods: {
    getCarData () {
      const api = 'http://localhost:3000'
      this.$http.get(api + '/car?_expend=salesManager')
        .then((res) => {
          this.carList = res.data
          this.finalListAll = res.data
        })
        .catch((err) => {
          console.log(err)
        })
    },
    openModal (isNew, item) {
      if (isNew === true) {
        this.addCondition = {
          imgUrl: [''],
          provide: {
            胎壓偵測: false,
            防盜系統: false,
            循跡系統: false,
            煞車輔助系統: false,
            ABS防鎖死: false,
            動態穩定系統: false,
            keyless免鑰系統: false,
            中控鎖: false,
            兒童安全椅固定裝置: false,
            安全氣囊: false
          },
          comfortProvide: {
            定速系統: false,
            倒車顯影系統: false,
            多功能方向盤: false,
            恆溫空調: false,
            電動車窗: false,
            LED頭燈: false,
            衛星導航: false,
            倒車雷達: false,
            自動停車系統: false,
            真皮座椅: false
          },
          fire: '0'
        }
      } else if (isNew === false) {
        this.addCondition = { ...item }
      }
      this.isNew = isNew
      const MyModal = this.$refs.addModal
      MyModal.showModal()
    },
    updateModal (aa) {
      this.addCondition = aa
      const checkList = ['brandId', 'carName', 'year', 'longJourney', 'doorPassenger', 'dye', 'date', 'price', 'imgUrl', 'salesManagerId', 'provide', 'comfortProvide']
      let foundUndefined = false
      checkList.forEach((cc) => {
        if (this.addCondition[cc] === undefined) {
          foundUndefined = true
        }
      })
      if (foundUndefined) {
        alert('資料不齊全')
      } else {
        let api = `${process.env.VUE_APP_API}/car`
        let httpMethod = 'post'
        if (!this.isNew) {
          api = `${process.env.VUE_APP_API}/car/${aa.id}`
          httpMethod = 'patch'
        }
        this.$http[httpMethod](api, this.addCondition)
          .then((res) => {
            this.getCarData()
          })
          .catch((err) => {
            console.log(err)
          })
      }
      const MyModal = this.$refs.addModal
      MyModal.hideModal()
    },
    openDelModal (aa) {
      this.delItem = aa
      const del = this.$refs.delModal
      del.showModal()
    },
    delModal (aa) {
      const api = `${process.env.VUE_APP_API}/car/${aa.id}`
      this.$http.delete(api)
        .then((res) => {
          this.getCarData()
        })
        .catch((err) => {
          console.log(err)
        })
      const del = this.$refs.delModal
      del.hideModal()
    },
    saleCar (aa) {
      const api = `${process.env.VUE_APP_API}/car/${aa.id}`
      this.$http.patch(api, {
        state: '出售'
      })
        .then((res) => {
          this.getCarData()
        })
        .catch((err) => {
          console.log(err)
        })
    },
    openFilter () {
      this.filterCondition = {
        brand: 'all',
        price: 'all',
        km: 'all',
        year: 'all',
        onSell: 'unSell',
        page: 'all'
      }
      const filerM = this.$refs.filter
      filerM.showModal()
    },
    getCondition (aa) {
      this.filterCondition = aa
      this.showList(this.filterCondition, this.carList)
      const filerM = this.$refs.filter
      filerM.hideModal()
    },
    showList (condition, list) {
      console.log(condition)
      const finalList = []
      const finalListPrice = []
      const finalListKm = []
      const finalListYear = []
      let finalListSell = []
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
      if (condition.onSell === 'sell') {
        const aa = finalListYear.filter((item) => {
          return item.state === '出售'
        })
        finalListSell = aa
        this.finalListAll = finalListSell
      } else if (condition.onSell === 'unSell') {
        const aa = finalListYear.filter((item) => {
          return item.state === '未出售'
        })
        finalListSell = aa
        this.finalListAll = finalListSell
      }
      if (condition.page === 'all') {
        this.perPage = this.finalListAll.length
      } else if (condition.page !== 'all') {
        this.perPage = condition.page
      }
      console.log(finalListSell)
    },
    firstShow () {
      this.finalListAll = this.carLis
    },
    clickGotPage (page) {
      this.currentPage = page
      window.scrollTo(0, 0)
    }
  },
  created () {
    this.getCarData()
  }
}
</script>
