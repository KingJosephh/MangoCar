<template>
<div class="col" v-for="(item, index) in showCard" :key="index">
    <div class="card border-0 text-white show-card-detail rounded-4">
    <router-link :to="{name:'page6', params:{carListId:item.id}}">
        <img class="card-img car-model rounded-4" :src="`${item.imgUrl[0]}`" alt="s63">
        <div class="card-img-overlay d-flex flex-column justify-content-end">
            <p class="c2 fw-bold mb-0 text-white">車種</p>
            <p class="c2 text-nowrap m-0 title text-white">{{ item.carName }}</p>
            <div class="c2 d-flex justify-content-between">
            <div class="c2 d-flex justify-content-between">
                <i class="bi bi-fire text-fire me-2"></i>
                <p class="m-0 text-white animate__animated animate__heartBeat animate__infinite">{{ item.fire }}</p>
            </div>
            <p class="m-0 text-white h4">售價: {{ item.price }}</p>
            </div>
            <div class="c1 card-img-overlay gradient car-model rounded-4">
            <div class="d-flex justify-content-center h-100">
                <p class="d-flex align-items-center h5 text-white fw-bold">點我</p>
            </div>
            </div>
        </div>
    </router-link>
    </div>
</div>
</template>
<script>
export default {
  props: {
    getTop: {
      type: Object,
      default () { return {} }
    }
  },
  watch: {
    getTop () {
      this.showCard = this.getTop
    }
  },
  data () {
    return {
      showCard: []
    }
  },
  methods: {
  },
  created () {
  }
}
</script>
