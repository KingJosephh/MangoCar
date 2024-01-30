<template>
    <NavBar :page-title="pageTitleS"></NavBar>
    <header class="min-vh-2-40 position-relative">
        <div class="position-absolute bg-attachment-fixed bg-img-size-2 mb-2" :style="{ backgroundImage: `url(${require('@/assets/car-img/pag2/pg2Car.jpg')})`, top: 0, right: 0, bottom: 0, left: 0, height: '300px'}"></div>
        <div class="position-absolute top-50 start-50 translate-middle text-center text-secondary">
            <p class="display-1 fw-bold">關於 我們</p>
            <hr class="mb-1 mx-n3">
        </div>
    </header>
    <section class="">
        <div :style="{height: '100px'}"></div>
        <div class="container">
            <P class="text-start fw-bold h2 ms-4 mb-4">芒果國際簡介</p>
            <p class="ms-4 h5 mb-6">
                芒果國際的歷史可以追溯到二十世紀中葉，當時我們以一家小規模的二手車經銷店開始，擁有一群對汽車熱情的創始人。這個小小的開端奠定了我們對品質和客戶滿意的承諾。
                隨著時間的推移，芒果國際迅速成為當地二手車市場的領導者。我們的堅持，不僅在於提供優質可靠的二手車，更在於建立起與客戶之間的信任關係。
            </p>
        </div>
        <div class="container-fluid">
            <div class="row mb-lg-5" data-aos="fade-up" data-aos-duration="800" data-aos-delay="700">
                <div class="col-lg-8 col p-0">
                    <img src="@/assets/car-img/pg-5-1.jpg" class="card-img car-model5" alt="...">
                </div>
                <div class="col-lg-4 col bg-white d-flex flex-column justify-content-center align-items-center">
                    <div class="mx-1">
                        <h2 class="card-title fw-bold"><i class="bi bi-pin-angle text-fire me-2"></i>創立新品牌</h2>
                        <h4 class="card-text">由一支老字號二手車商團隊創立的全新品牌，專注提供獨特的汽車選擇和卓越的客戶體驗。</h4>
                    </div>
                </div>
            </div>
            <div class="row mb-lg-5 flex-lg-row-reverse" data-aos="fade-up" data-aos-duration="800" data-aos-delay="700">
                <div class="col-lg-8 col p-0">
                    <img src="@/assets/car-img/pg-5-2.jpg" class="card-img car-model5" alt="...">
                </div>
                <div class="col-lg-4 col bg-white d-flex flex-column justify-content-center align-items-center">
                    <div class="mx-1">
                        <h2 class="card-title fw-bold"><i class="bi bi-pin-angle text-fire me-2"></i>購車愛心計畫</h2>
                        <h4 class="card-text">每次有客戶購車，我們將捐款給流浪動物保護機構。這種愛心計畫不僅為顧客提供了高品質的汽車，還在同時關心社會公益。</h4>
                    </div>
                </div>
            </div>
            <div class="row mb-lg-5" data-aos="fade-up" data-aos-duration="800" data-aos-delay="700">
                <div class="col-lg-8 col p-0">
                    <img src="@/assets/car-img/pg-5-3.jpg" class="card-img car-model5" alt="...">
                </div>
                <div class="col-lg-4 col bg-white d-flex flex-column justify-content-center align-items-center">
                    <div class="mx-1">
                        <h2 class="card-title fw-bold"><i class="bi bi-pin-angle text-fire me-2"></i>高價估車</h2>
                        <h4 class="card-text">我們提供公正透明的高價估車服務，確保您的愛車得到最佳價值。透過專業團隊的估車，我們確保客戶可以信賴的價格交易。</h4>
                    </div>
                </div>
            </div>
            <div class="row mb-lg-5 flex-lg-row-reverse" data-aos="fade-up" data-aos-duration="400" data-aos-delay="300">
                <div class="col-lg-8 col p-0">
                    <img src="@/assets/car-img/pg-5-4.jpg" class="card-img car-model5" alt="...">
                </div>
                <div class="col-lg-4 col bg-white d-flex flex-column justify-content-center align-items-center">
                    <div class="mx-1">
                        <h2 class="card-title fw-bold"><i class="bi bi-pin-angle text-fire me-2"></i>優良售後服務</h2>
                        <h4 class="card-text"> 一旦您選擇我們的品牌，我們的優良售後服務不僅確保您的汽車保持最佳狀態，還提供快速有效的維修和保養服務，以確保您始終擁有頂級的駕馭體驗。</h4>
                    </div>
                </div>
            </div>
            <div class="row mb-lg-5" data-aos="fade-up" data-aos-duration="800" data-aos-delay="700">
                <div class="col-lg-8 col p-0">
                    <img src="@/assets/car-img/pg-5-5.jpg" class="card-img car-model5" alt="...">
                </div>
                <div class="col-lg-4 col bg-white d-flex flex-column justify-content-center align-items-center">
                    <div class="mx-1">
                        <h2 class="card-title fw-bold"><i class="bi bi-pin-angle text-fire me-2"></i>多元選擇</h2>
                        <h4 class="card-text">我們提供多元的車款選擇，滿足不同客戶的需求。從經典的轎車到時尚的休旅車，以及高性能的跑車，我們的車款種類豐富，能夠迎合各種用途和喜好。</h4>
                    </div>
                </div>
            </div>
        </div>
    </section>
        <Footer></Footer>
    </template>

<script>
import NavBar from '@/components/CarNavBar.vue'
import Footer from '@/components/FooterPage.vue'
export default {
  components: {
    NavBar,
    Footer
  },
  data () {
    return {
      pageTitleS: '關於我們'
    }
  },
  mounted () {
    window.scrollTo(0, 0)
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
  background: #e2e2e2;;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}
</style>
