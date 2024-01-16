<template>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" ref="reserveModal">
<div class="modal-dialog">
    <div class="modal-content">
    <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
        <div class="row">
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
                            <input type="text" class="form-control" id="手機號碼" placeholder="請輸入手機號碼" v-model="reserve.phone">
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
        </div>
    </div>
    <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" @click="$emit('reserveData', reserve)">儲存</button>
    </div>
    </div>
</div>
</div>
</template>
<script>
import Modal from 'bootstrap/js/dist/modal'
export default {
  props: {
    reserveData: {
      type: Object,
      default () { return {} }
    }
  },
  watch: {
    reserveData () {
      this.reserve = this.reserveData
    }
  },
  data () {
    return {
      reserve: {}
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
    this.modal = new Modal(this.$refs.reserveModal)
  }
}
</script>
