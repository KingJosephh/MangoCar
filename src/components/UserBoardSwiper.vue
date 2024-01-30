<template>
    <swiper
    :style="{
    '--swiper-navigation-color': '#fff',
    '--swiper-pagination-color': '#fff',
    }"
    :speed="600"
    :parallax="true"
    :pagination="{ clickable: true }"
    :navigation="true"
    :modules="modules"
    class="mySwiper mb-5 aa"
>
    <template #container-start>
    <div
        class="parallax-bg"
        :style="{ backgroundImage: `url(${require('@/assets/car-img/f-page3.jpg')})`}"
        data-swiper-parallax="-23%"
    ></div>
    </template>

    <swiper-slide>
    <div class="title" data-swiper-parallax="-300"></div>
    <div class="subtitle" data-swiper-parallax="-200"></div>
    <div class="text position-absolute top-50 start-50 translate-middle" data-swiper-parallax="-100">
                <p class="display-1 fw-bold text-secondary">芒果 國際</p>
                <hr class="mb-1 mx-n3 text-secondary">
                <p class="h4 mt-3 text-center fw-bold text-fire">英雄可以沒有家</p>
                <p class="h4 mt-3 text-center fw-bold text-fire">但是不能沒有戰馬</p>
    </div>
    </swiper-slide>

    <swiper-slide>
    <div class="title fw-bold" data-swiper-parallax="-300">芒果國際销售服务</div>
    <div class="subtitle fw-bold mb-3" data-swiper-parallax="-200">我们的服务特点</div>
    <div class="text" data-swiper-parallax="-100">
        <p>🌟多款认证二手车，品质保证</p>
        <p>💰 弹性贷款计划，让您轻松拥有心仪座驾</p>
            <p>🚗 全方位车辆检测，确保您的安全驾驶</p>
            <p>📈 交易透明，无隐费用，绝对信任</p>
                <p>🎁 限时特惠：购车即享多项福利！</p>
                <p>📞 预约试驾请致电：123-456-7890</p>
                    <p>📍 地址：芒果国际汽车广场，期待为您服务！</p>
    </div>
    </swiper-slide>

    <swiper-slide>
    <div class="title fw-bold" data-swiper-parallax="-300">芒果國際 x 流浪动物關懷项目</div>
    <div class="subtitle fw-bold mb-3" data-swiper-parallax="-200">✨ 為您的購車賦予更多意義</div>
    <div class="text" data-swiper-parallax="-100">
        <p>🏡 收养一辆车，我们将捐赠给流浪动物关怀项目</p>
        <p>🌈 一部分销售额将用于流浪动物医疗和庇护所支持</p>
        <p>🎁 每一位购车顾客将获得一份流浪动物关怀捐赠证书</p>
    </div>
    </swiper-slide>
</swiper>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import '../assets/components/style1.css'
import { Parallax, Pagination, Navigation, FreeMode } from 'swiper/modules'
export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup () {
    return {
      modules: [Parallax, Pagination, Navigation, FreeMode]
    }
  }
}
</script>
<style scoped>
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

.aa {
width: 100%;
height: 650px;
}

.swiper-slide {
font-size: 18px;
color: #fff;
-webkit-box-sizing: border-box;
box-sizing: border-box;
padding: 0;
}
</style>
