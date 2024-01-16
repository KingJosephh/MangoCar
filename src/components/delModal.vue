<template>
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" ref="delCar">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">刪除資料</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        是否缺任刪除款式 [ <span class="text-fire fw-bold"> {{ delProduct.carName }} </span> ] 的資料
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-warning" @click="$emit('del-item', delProduct)">確認刪除</button>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import Modal from 'bootstrap/js/dist/modal'
export default {
  props: {
    delProduct: {
      type: Object,
      default () { return {} }
    }
  },
  data () {
    return {
      modal: {}
    }
  },
  methods: {
    showModal () {
      this.modal.show()
    },
    hideModal () {
      this.modal.hide()
    }
  },
  mounted () {
    this.modal = new Modal(this.$refs.delCar)
  }
}
</script>
