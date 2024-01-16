<template>
  <bgNavBar></bgNavBar>
    <div class="container">
        <table class="table mt-4">
      <thead>
        <tr>
          <th width="100">預約目的</th>
          <th width="100">客戶名子</th>
          <th width="120">手機號碼</th>
          <th width="120">預約日期</th>
          <th width="100">城市</th>
          <th width="200">地址</th>
          <th width="100">預約業務</th>
          <th width="100">車輛款式</th>
          <th width="200">備註</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item ,index) in appointment" :key="index">
          <td>{{ item.goal }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.phone }}</td>
          <td>{{ item.date }}</td>
          <td>{{ item.city }}</td>
          <td class="text-right">
            {{ item.address }}
          </td>
          <td>{{ item.manager }}</td>
          <td>{{ item.carName }}</td>
          <td class="text-right">
            {{ item.else }}
          </td>
          <td>
            <div class="btn-group d-flex flex-end">
              <button class="btn btn-outline-green btn-sm" @click="openModal(item)">編輯</button>
              <button class="btn btn-outline-danger btn-sm">刪除</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    </div>
    <ReserveModal ref="reserveModal" :reserveData="reserve" @reserveData="updated"></ReserveModal>
</template>
<script>
import BgNavBar from '../components/bgNavBar.vue'
import ReserveModal from '../components/reserveModal.vue'
export default {
  components: {
    BgNavBar,
    ReserveModal
  },
  data () {
    return {
      appointment: [],
      reserve: {}
    }
  },
  methods: {
    getReserve () {
      const api = `${process.env.VUE_APP_API}/reserveList`
      this.$http.get(api + '/reserveList')
        .then((res) => {
          this.appointment = res.data
        })
        .catch((err) => {
          console.log(err)
        })
    },
    openModal (aa) {
      this.reserve = { ...aa }
      const modal = this.$refs.reserveModal
      modal.showModal()
    },
    updated (item) {
      this.reserve = item
      const api = `${process.env.VUE_APP_API}/reserveList/${item.id}`
      this.$http.patch(api, this.reserve)
        .then((res) => {
          this.getReserve()
        })
        .catch((err) => {
          console.log(err)
        })
      const modal = this.$refs.reserveModal
      modal.hideModal()
    }
  },
  created () {
    this.getReserve()
  }
}
</script>
