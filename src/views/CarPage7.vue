<template>
    <NavBar></NavBar>
    <section>
        <div class="row m-0 px-lg-5">
          <div class="col-lg-4 mt-5">
                <div class="card border-0 shadow-sm rounded-4">
                    <div class="card-header border-0 bg-transparent p-0">
                        <!-- <div class="car-bg-img" style="background-image: url('../assets/car-img/per2.jpg');"></div> -->
                        <img class="card-img rounded-top-4" src="../assets/car-img/per2.jpg" alt="per2">
                    </div>
                    <div class="card-body">
                        <div>
                            <p class="mb-1 text-secondary">銷售經理</p>
                            <p class="fw-bold">Ethan</p>
                        </div>
                        <div>
                            <p class="mb-1 text-secondary">電話</p>
                            <p class="fw-bold">08-080808080</p>
                        </div>
                        <div>
                            <p class="mb-1 text-secondary">地址</p>
                            <p class="fw-bold">高雄市三民區和中路二路8888號</p>
                        </div>
                    </div>
                    <div class="d-flex justify-content-center mb-4">
                        <router-link to="/page4">
                            <button class="btn btn-info btn-lg rounded-pill px-5 text-nowrap">前往預約賞車</button>
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="col-lg-8 mt-5">
                <div class="mb-5">
                    <div class="row m-0 row-cols-lg-3 row-cols-2 px-lg-0 px-2">
                        <div class="col mt-0 mb-3">
                            <div class="card border-0 text-white show-card-detail">
                                <img class="card-img car-model rounded-4" src="../assets/car-img/s63.jpg" alt="s63">
                                <div class="card-img-overlay d-flex flex-column justify-content-end">
                                    <p class="c2 fw-bold mb-0">車種</p>
                                    <p class="c2 text-nowrap m-0 title">Mercedes-AMG s63</p>
                                    <div class="c2 d-flex justify-content-between">
                                      <div class="c2 d-flex justify-content-between">
                                        <i class="bi bi-fire text-fire"></i>
                                        <p class="m-0">123</p>
                                      </div>
                                      <p class="m-0">負責人: Liam</p>
                                    </div>
                                    <div class="c1 card-img-overlay gradient car-model rounded-4"></div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card border-0 text-white show-card-detail">
                                <img class="card-img car-model rounded-4" src="../assets/car-img/911turbo.jpg" alt="911turbo">
                                <div class="card-img-overlay d-flex flex-column justify-content-end">
                                    <p class="c2 fw-bold mb-0">車種</p>
                                    <p class="c2 text-nowrap m-0 title">porsche-911 turbo S</p>
                                    <div class="c1 card-img-overlay gradient car-model rounded-4  ">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card border-0 text-white show-card-detail">
                                <img class="card-img car-model rounded-4" src="../assets/car-img/x6.jpg" alt="x6">
                                <div class="card-img-overlay d-flex flex-column justify-content-end">
                                    <p class="c2 fw-bold mb-0">車種</p>
                                    <p class="c2 text-nowrap m-0 title">BMW X6</p>
                                    <div class="c1 card-img-overlay gradient car-model rounded-4  ">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card border-0 text-white show-card-detail">
                                <img class="card-img car-model rounded-4" src="../assets/car-img/r4.jpg" alt="r4">
                                <div class="card-img-overlay d-flex flex-column justify-content-end">
                                    <p class="c2 fw-bold mb-0">車種</p>
                                    <p class="c2 text-nowrap m-0 title">toyota Corolla Cross</p>
                                    <div class="c1 card-img-overlay gradient car-model rounded-4  ">
                                    </div>
                                </div>
                            </div>
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
