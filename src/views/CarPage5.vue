<template>
    <NavBar :page-title="pageTitleS"></NavBar>
    <header class="min-vh-2-40 position-relative">
        <div class="position-absolute bg-attachment-fixed bg-img-size-2 mb-2" :style="{ backgroundImage: `url(${require('@/assets/car-img/pag2/pg2Car.jpg')})`, top: 0, right: 0, bottom: 0, left: 0, height: '288px'}"></div>
        <div class="position-absolute top-50 start-50 translate-middle text-center text-secondary">
            <p class="display-1 fw-bold">關於 我們</p>
            <hr class="mb-1 mx-n3">
        </div>
    </header>
    <section class="">
        <div class="mb-4"></div>
        <div class="container">
            <P class="text-center fw-bold display-4 ms-4 mb-6">購車與幫助浪浪一次滿足</p>
            <div class="row mx-5 mb-5">
                <div class="col-8">
                    <div class="card bg-dark text-white">
                        <img src="@/assets/car-img/gt-r.jpg" class="card-img car-model5" alt="...">
                        <div class="card-img-overlay">
                            <div class="mx-6 my-3">
                                <h2 class="card-title fw-bold"><i class="bi bi-pin-angle text-fire me-2"></i>創立新品牌</h2>
                                <h4 class="card-text">由一支老字號二手車商團隊創立的全新品牌，專注提供獨特的汽車選擇和卓越的客戶體驗。</h4>
                            </div>
                        </div>
                        </div>
                </div>
                <div class="col-4"></div>
            </div>
            <div class="row mx-5 mb-5">
                <div class="col-4"></div>
                <div class="col-8">
                    <div class="card bg-dark text-white">
                        <img src="@/assets/car-img/gt-r.jpg" class="card-img car-model5" alt="...">
                        <div class="card-img-overlay">
                            <div class="mx-6 my-3">
                                <h2 class="card-title fw-bold"><i class="bi bi-pin-angle text-fire me-2"></i>購車愛心計畫</h2>
                                <h4 class="card-text">每次有客戶購車，我們將捐款給流浪動物保護機構。這種愛心計畫不僅為顧客提供了高品質的汽車，還在同時關心社會公益。</h4>
                            </div>
                        </div>
                        </div>
                </div>
            </div>
            <div class="row mx-5 mb-5">
                <div class="col-8">
                    <div class="card bg-dark text-white">
                        <img src="@/assets/car-img/gt-r.jpg" class="card-img car-model5" alt="...">
                        <div class="card-img-overlay">
                            <div class="mx-6 my-3">
                                <h2 class="card-title fw-bold"><i class="bi bi-pin-angle text-fire me-2"></i>高價估車</h2>
                                <h4 class="card-text">我們提供公正透明的高價估車服務，確保您的愛車得到最佳價值。透過專業團隊的估車，我們確保客戶可以信賴的價格交易。</h4>
                            </div>
                        </div>
                        </div>
                </div>
                <div class="col-4"></div>
            </div>
            <div class="row mx-5 mb-5">
                <div class="col-4"></div>
                <div class="col-8">
                    <div class="card bg-dark text-white">
                        <img src="@/assets/car-img/gt-r.jpg" class="card-img car-model5" alt="...">
                        <div class="card-img-overlay">
                            <div class="mx-6 my-3">
                                <h2 class="card-title fw-bold"><i class="bi bi-pin-angle text-fire me-2"></i>優良售後服務</h2>
                                <h4 class="card-text"> 一旦您選擇我們的品牌，我們的優良售後服務不僅確保您的汽車保持最佳狀態，還提供快速有效的維修和保養服務，以確保您始終擁有頂級的駕馭體驗。</h4>
                            </div>
                        </div>
                        </div>
                </div>
            </div>
            <div class="row mx-5 mb-5">
                <div class="col-8">
                    <div class="card bg-dark text-white">
                        <img src="@/assets/car-img/gt-r.jpg" class="card-img car-model5" alt="...">
                        <div class="card-img-overlay">
                            <div class="mx-6 my-3">
                                <h2 class="card-title fw-bold"><i class="bi bi-pin-angle text-fire me-2"></i>多元選擇</h2>
                                <h4 class="card-text">我們提供多元的車款選擇，滿足不同客戶的需求。從經典的轎車到時尚的休旅車，以及高性能的跑車，我們的車款種類豐富，能夠迎合各種用途和喜好。</h4>
                            </div>
                        </div>
                        </div>
                </div>
                <div class="col-4"></div>
            </div>
        </div>
    </section>
    <!-- <section>
        <div class="row m-0 d-flex justify-content-center py-5">
            <div class="col-lg-2 col-10">
                <div class="row m-0">
                    <div class="col text-center">
                        <a class="text-black" href="">
                            <i class="bi bi-chevron-compact-left"></i>
                        </a>
                    </div>
                    <div class="col text-center">
                        <a class="kalma text-decoration-none text-black" href="">
                            1
                        </a>
                    </div>
                    <div class="col text-center">
                        <a class="kalma text-decoration-none text-info" href="">
                            2
                        </a>
                    </div>
                    <div class="col text-center">
                        <a class="text-black" href="">
                            <i class="bi bi-chevron-compact-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section> -->
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
<style>
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
