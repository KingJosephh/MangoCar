<template>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" ref="filterModal">
<div class="modal-dialog">
    <div class="modal-content">
    <div class="modal-header">
        <h5 class="modal-title fw-bold text-fire" id="exampleModalLabel">篩選條件</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
        <div class="mb-4 row d-flex justify-content-between">
            <label for="inputPassword" class="col-sm-2 col-form-label fw-bold">品牌:</label>
            <div class="col col-sm-10">
            <select class="form-select" aria-label="Default select example" v-model="filterCondition.brand">
                <option value="all" selected>不限品牌</option>
                <option value="B01">Toyota</option>
                <option value="B02">Ford</option>
                <option value="B03">Honda</option>
                <option value="B04">Porsche</option>
                <option value="B05">Volkswagen</option>
                <option value="B06">BMW</option>
                <option value="B07">Mercedes-Benz</option>
                <option value="B08">Audi</option>
                <option value="B09">Hyundai</option>
                <option value="B010">Nissan</option>
            </select>
            </div>
        </div>
        <div class="mb-4 row d-flex justify-content-between">
            <label for="inputPassword" class="col-sm-2 col-form-label fw-bold">價格:</label>
            <div class="col col-sm-10">
            <select class="form-select" aria-label="Default select example" v-model="filterCondition.price">
                <option value="all" selected>不限價格</option>
                <option value="50-">50萬以下</option>
                <option value="50/100">50萬-100萬</option>
                <option value="100/200">100萬-200萬</option>
                <option value="200/300">200萬-300萬</option>
                <option value="300/400">300萬-400萬</option>
                <option value="400/500">400萬-500萬</option>
                <option value="500+">500萬以上</option>
            </select>
            </div>
        </div>
        <div class="mb-4 row d-flex justify-content-between">
            <label for="inputPassword" class="col-sm-2 col-form-label fw-bold">里程:</label>
            <div class="col col-sm-10">
            <select class="form-select" aria-label="Default select example" v-model="filterCondition.km">
                <option value="all" selected>不限里程</option>
                <option value="10000/50000">10000-50000km</option>
                <option value="50000/100000">50000-100000km</option>
                <option value="100000+">100000km+</option>
            </select>
            </div>
        </div>
        <div class="mb-4 row d-flex justify-content-between">
            <label for="inputPassword" class="col-sm-2 col-form-label fw-bold">年分:</label>
            <div class="col col-sm-10">
            <select class="form-select" aria-label="Default select example" v-model="filterCondition.year">
                <option value="all" selected>不限年分</option>
                <option value="2010-">2010以下</option>
                <option value="2010/2015">2010-2015</option>
                <option value="2015/2020">2015-2020</option>
                <option value="2020+">2020-now</option>
            </select>
        </div>
        </div>
        <div class="mb-4 row d-flex justify-content-between">
            <label for="inputPassword" class="col-sm-2 col-form-label fw-bold">狀態:</label>
            <div class="col col-sm-10">
            <select class="form-select" aria-label="Default select example" v-model="filterCondition.onSell">
                <option value="sell" selected>出售</option>
                <option value="unSell">未出售</option>
            </select>
        </div>
        </div>
        <div class="mb-4 row d-flex justify-content-between">
            <label for="inputPassword" class="col-sm-2 col-form-label fw-bold">數量:</label>
            <div class="col col-sm-10">
            <select class="form-select" aria-label="Default select example" v-model="filterCondition.page">
                <option value="all" selected>一頁顯示全部</option>
                <option value="10">一頁顯10台</option>
                <option value="20">一頁顯示20台</option>
                <option value="30">一頁顯示30台</option>
            </select>
            </div>
        </div>
    <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="hideModal">Close</button>
        <button type="button" class="btn btn-fire text-white" @click="$emit('get-condition', filterCondition)">Save changes</button>
    </div>
    </div>
</div>
</div>
</div>
</template>
<script>
import Modal from 'bootstrap/js/dist/modal'
export default {
  props: {
    condition: {
      type: Object,
      default () { return {} }
    }
  },
  watch: {
    condition () {
      this.filterCondition = this.condition
    }
  },
  data () {
    return {
      modal: {},
      filterCondition: {}
    }
  },
  methods: {
    showModal () {
      this.myModal.show()
    },
    hideModal () {
      this.myModal.hide()
    }
  },
  mounted () {
    this.myModal = new Modal(this.$refs.filterModal)
  }
}
</script>
