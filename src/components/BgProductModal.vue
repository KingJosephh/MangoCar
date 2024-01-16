<template>
    <!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" ref="addCar">
  <div class="modal-dialog modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="mb-4 row d-flex justify-content-between">
            <label for="inputPassword" class="col-sm-2 col-form-label fw-bold">品牌:</label>
            <div class="col col-sm-10">
              <select class="form-select" aria-label="Default select example" v-model="addCondition.brandId">
                <option v-for="(item, index) in brandList" :key="index" :value="`${item.id}`">{{ item.brandName }}:{{ item.id }}</option>
              </select>
            </div>
        </div>
        <div class="mb-4 row d-flex justify-content-between">
            <label for="inputPassword" class="col-sm-2 col-form-label fw-bold">款式:</label>
            <div class="col col-sm-10">
              <input class="form-control" aria-label="Default example" v-model="addCondition.carName">
            </div>
        </div>
        <div class="mb-4 row d-flex justify-content-between">
            <label for="inputPassword" class="col-sm-2 col-form-label fw-bold">年分:</label>
            <div class="col col-sm-10">
              <input class="form-control" type="number" aria-label="Default example" v-model="addCondition.year">
            </div>
        </div>
        <div class="mb-4 row d-flex justify-content-between">
            <label for="inputPassword" class="col-sm-2 col-form-label fw-bold">里程:</label>
            <div class="col col-sm-10">
              <input class="form-control" aria-label="Default example" v-model="addCondition.longJourney" placeholder="單位請輸入國字 例:11000請輸入[1.1萬]">
            </div>
        </div>
        <div class="mb-4 row d-flex justify-content-between">
            <label for="inputPassword" class="col-sm-2 col-form-label fw-bold">乘坐及門數:</label>
            <div class="col col-sm-10">
              <select class="form-select" aria-label="Default select example" v-model="addCondition.doorPassenger">
                <option value="四門五座" selected>四門五座</option>
                <option value="五門五座">五門五座</option>
                <option value="五門七座">五門七座</option>
                <option value="二門四座">二門四座</option>
                <option value="二門二座">二門二座</option>
              </select>
            </div>
        </div>
        <div class="mb-4 row d-flex justify-content-between">
            <label for="inputPassword" class="col-sm-2 col-form-label fw-bold">動力形式:</label>
            <div class="col col-sm-10">
              <select class="form-select" aria-label="Default select example" v-model="addCondition.dye">
                <option value="油電.cc" selected>油電.cc</option>
                <option value="柴油電.cc">柴油電.cc</option>
                <option value="汽油.c">汽油.cc</option>
                <option value="純電">純電</option>
              </select>
            </div>
        </div>
        <div class="mb-4 row d-flex justify-content-between">
            <label for="inputPassword" class="col-sm-2 col-form-label fw-bold">安全配備:</label>
            <div class="col">
              <div class="row">
                <div class="col-4 form-check" v-for="(item, index) in provideList" :key="index">
                  <input class="form-check-input" type="checkbox" :name="item" :id="item" :value="item" v-model="addCondition.provide[item]">
                  <label class="form-check-label" :for="item">{{ item }}</label>
                </div>
              </div>
          </div>
        </div>
        <div class="mb-4 row d-flex justify-content-between">
            <label for="inputPassword" class="col-sm-2 col-form-label fw-bold">舒適配備:</label>
            <div class="col">
              <div class="row">
                <div class="col-4 form-check" v-for="(item, index) in comfortProvide" :key="index">
                  <input class="form-check-input" type="checkbox" :name="item" :id="item" :value="item" v-model="addCondition.comfortProvide[item]">
                  <label class="form-check-label" :for="item">{{ item }}</label>
                </div>
              </div>
          </div>
        </div>
        <div class="mb-4 row d-flex justify-content-between">
            <label for="inputPassword" class="col-sm-2 col-form-label fw-bold">進場日期:</label>
            <div class="col col-sm-10">
              <input class="form-control" type="date" aria-label="Default example" v-model="addCondition.date">
            </div>
        </div>
          <div class="mb-4 row d-flex justify-content-between">
            <label for="inputPassword" class="col-sm-2 col-form-label fw-bold">售價:</label>
            <div class="col col-sm-10">
              <input class="form-control" aria-label="Default example" v-model="addCondition.price" placeholder="單位請輸入國字 例:11000請輸入[1.1萬]">
          </div>
          </div>
          <div class="mb-4 row d-flex justify-content-between">
            <label for="inputPassword" class="col-sm-2 col-form-label fw-bold">負責人:</label>
            <div class="col col-sm-10">
              <select class="form-select" aria-label="Default select example" v-model="addCondition.salesManagerId">
                <option value="M01">Ethan</option>
                <option value="M02">Olivia</option>
                <option value="M03">Liam</option>
                <option value="M04">Emma</option>
                <option value="M05">Noah</option>
                <option value="M06">Ava</option>
              </select>
          </div>
          </div>
          <div class="mb-4 row d-flex justify-content-between">
            <label for="inputPassword" class="col-sm-2 col-form-label fw-bold">狀態:</label>
            <div class="col col-sm-10">
              <select class="form-select" aria-label="Default select example" v-model="addCondition.state">
                <option value="出售">出售</option>
                <option value="未出售">未出售</option>
              </select>
          </div>
          </div>
          <div class="mb-3">
            <button type="button" class="btn btn-fire fw-bold text-white" @click="addInput">新增欄位</button>
            <!-- 寫法不太懂 -->
            <div v-for="(input, index) in addCondition.imgUrl" :key="index">
              <label :for="'image' + (index + 1)" class="form-label me-4">輸入圖片網址</label>
              <input type="text" class="form-control" :id="'image' + (index + 1)"
                      :placeholder="'請輸入圖片連結 ' + (index + 1)" v-model="addCondition.imgUrl[index]">
            </div>
          </div>
        </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-fire" @click="$emit('updateCondition', addCondition)">儲存</button>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal'
export default {
  props: {
    carProduct: {
      type: Object,
      default () { return {} }
    }
  },
  watch: {
    carProduct () {
      this.addCondition = this.carProduct
    }
  },
  data () {
    return {
      modal: {},
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
      brandList: [],
      provideList: ['胎壓偵測', '防盜系統', '循跡系統', '煞車輔助系統', 'ABS防鎖死', '動態穩定系統', 'keyless免鑰系統', '中控鎖', '兒童安全椅固定裝置', '安全氣囊'],
      comfortProvide: ['定速系統', '倒車顯影系統', '多功能方向盤', '恆溫空調', '電動車窗', 'LED頭燈', '衛星導航', '倒車雷達', '自動停車系統', '真皮座椅']
    }
  },
  methods: {
    showModal () {
      this.Modal.show()
    },
    hideModal () {
      this.Modal.hide()
    },
    getBrand () {
      const api = 'http://localhost:3000'
      this.$http.get(api + '/brands')
        .then((res) => {
          console.log(res)
          this.brandList = res.data
        })
        .catch((err) => {
          console.log(err)
        })
    },
    addInput () {
      this.addCondition.imgUrl.push('')
    }
    // getProvide (aa) {
    //   if (!this.addCondition.provide.includes(aa)) {
    //     this.addCondition.provide.push(aa)
    //     console.log(this.addCondition.provide)
    //   }
    // },
    // getComfortProvide (aa) {
    //   if (!this.addCondition.comfortProvide.includes(aa)) {
    //     this.addCondition.comfortProvide.push(aa)
    //     console.log(this.addCondition.comfortProvide)
    //   }
    // }
  },
  created () {
    this.getBrand()
  },
  mounted () {
    this.Modal = new Modal(this.$refs.addCar)
  }
}
</script>
