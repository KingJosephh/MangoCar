<template>
  <bgNavBar></bgNavBar>
    <div class="container">
      <div class="text-end mt-3">
        <button type="button" class="btn btn-fire fw-bold text-white" @click="openModal(true)">新增產品</button>
      </div>
        <table class="table mt-4">
      <thead>
        <tr>
          <th width="120">車輛品牌</th>
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
      <tbody>
        <tr v-for="(item ,index) in carList" :key="index">
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
    </table>
    </div>
    <addModal ref="addModal" :car-product="addCondition" @update-condition="updateModal"></addModal>
    <delModal ref="delModal" :del-product="delItem" @del-item="delModal"></delModal>
</template>
<script>
import addModal from '@/components/BgProductModal.vue'
import delModal from '@/components/delModal.vue'
import bgNavBar from '@/components/bgNavBar.vue'
export default {
  components: {
    addModal,
    delModal,
    bgNavBar
  },
  data () {
    return {
      carList: [],
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
      delItem: {}
    }
  },
  methods: {
    getCarData () {
      const api = 'http://localhost:3000'
      this.$http.get(api + '/car?_expend=salesManager')
        .then((res) => {
          console.log(res)
          this.carList = res.data
        })
        .catch((err) => {
          console.log(err)
        })
    },
    openModal (isNew, item) {
      console.log(isNew, item)
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
        // console.log(this.addCondition[cc])
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
    }
  },
  created () {
    this.getCarData()
  }
}
</script>
