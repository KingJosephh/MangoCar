<template>
<NavBar></NavBar>
    <div></div>
    <header class="min-vh-2-40 position-relative">
        <div class="position-absolute bg-attachment-fixed bg-img-size-2 mb-2" style="top: 0; right: 0; bottom: 0; left: 0; background-image: url(./car-img/pag2/pg2Car.jpg); height: 288px;"></div>
        <div class="position-absolute top-50 start-50 translate-middle text-center text-secondary">
            <p class="display-1 fw-bold">芒果 國際</p>
            <hr class="mb-1 mx-n3">
            <p class="h2">服務介紹</p>
        </div>
    </header>
    <section>
        <div class="mt-4 mb-5">
            <div class="row px-6 m-0 row-cols-lg-4 row-cols-1">
                <div class="col">
                    <div class="row row-cols-lg-1 row-cols-2">
                        <div class="col-3 d-flex justify-content-center">
                            <img class="pb-lg-4 pb-0 car-model3" src="../assets/car-img/pag2/buy-car1.png" alt="網路選購好車">
                        </div>
                        <div class="col-9 d-flex flex-column justify-content-center ps-lg-0 ps-5">
                            <h3 class="kalma  text-info pb-lg-3 pb-1 m-0 text-lg-center text-start">STEP1</h3>
                            <h4 class="fw-bold pb-lg-3 pb-2 m-0 text-lg-center text-start">網路選購好車</h4>
                            <p class="text-lg-center text-start mb-5">鎖定車款<br>致電預約賞車</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="row row-cols-lg-1 row-cols-2">
                        <div class="col-3 d-flex justify-content-center">
                            <img class="pb-lg-4 pb-0 car-model3" src="../assets/car-img/pag2/buy-car2.png" alt="到店賞車">
                        </div>
                        <div class="col-9 d-flex flex-column justify-content-center ps-lg-0 ps-5">
                            <h3 class="kalma  text-info pb-lg-3 pb-1 m-0 text-lg-center text-start">STEP2</h3>
                            <h4 class="fw-bold pb-lg-3 pb-2 m-0 text-lg-center text-start">到店賞車</h4>
                            <p class="text-lg-center text-start mb-5">來店賞車<br>專業銷售為您介紹</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="row row-cols-lg-1 row-cols-2">
                        <div class="col-3 d-flex justify-content-center">
                            <img class="pb-lg-4 pb-0 car-model3" src="../assets/car-img/pag2/buy-car3.png" alt="喜提新車">
                        </div>
                        <div class="col-9 d-flex flex-column justify-content-center ps-lg-0 ps-5">
                            <h3 class="kalma  text-info pb-lg-3 pb-1 m-0 text-lg-center text-start">STEP3</h3>
                            <h4 class="fw-bold pb-lg-3 pb-2 m-0 text-lg-center text-start">喜提新車</h4>
                            <p class="text-lg-center text-start mb-5">確定車款<br>簽訂合約</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="row row-cols-lg-1 row-cols-2">
                        <div class="col-3 d-flex justify-content-center">
                            <img class="pb-lg-4 pb-0 car-model3" src="../assets/car-img/pag2/buy-car4.png" alt="幫助浪浪">
                        </div>
                        <div class="col-9 d-flex flex-column justify-content-center ps-lg-0 ps-5">
                            <h3 class="kalma  text-info pb-lg-3 pb-1 m-0 text-lg-center text-start">STEP4</h3>
                            <h4 class="fw-bold pb-lg-3 pb-2 m-0 text-lg-center text-start">幫助浪浪</h4>
                            <p class="text-lg-center text-start mb-5">匯款成功後<br>捐款30%</p>
                        </div>
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
  }
}
</script>
