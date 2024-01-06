<template>
    <NavBar></NavBar>
    <section>
        <div class="d-flex justify-content-center pb-5">
            <img src="../assets/car-img/title2.png" alt="熱門車款">
        </div>
    </section>
    <div class="row m-0">
      <div class="col-lg-2">
      </div>
      <div class="col pe-lg-10 mb-4 ms-lg-6 d-flex justify-content-center justify-content-lg-start">
        <button type="button" class="btn btn-fire text-white fw-bold">篩選條件</button>
      </div>
    </div>
    <section>
        <div class="row m-0 px-lg-6 px-1 d-flex flex-column flex-lg-row">
            <div class="col-lg-2">
                <div class="row gy-3">
                    <div class="row d-flex flex-column">
                        <div class="col">
                            <div class="col">
                                <p class="h4 kalma text-lg-start text-center pb-3 mt-3">Sales Manager</p>
                            </div>
                        </div>
                        <div class="col ps-lg-2 ps-6">
                            <div class="row d-flex flex-lg-column flex-row gy-lg-3">
                                <div class="col d-flex ds-dash-father ds-hover-father">
                                    <h6 class="kalma position-absolute text-info ds-dash">-</h6>
                                    <h6 class="kalma position-relative ds-hover"><router-link to="/page7" class="link-unstyled text-reset text-decoration-none">Ethan</router-link></h6>
                                </div>
                                <div class="col d-flex ds-dash-father ds-hover-father">
                                    <h6 class="kalma position-absolute text-info ds-dash">-</h6>
                                    <h6 class="kalma position-relative ds-hover"><router-link to="/page7" class="link-unstyled text-reset text-decoration-none">Olivia</router-link></h6>
                                </div>
                                <div class="col d-flex ds-dash-father ds-hover-father">
                                    <h6 class="kalma position-absolute text-info ds-dash">-</h6>
                                    <h6 class="kalma position-relative ds-hover"><router-link to="/page7" class="link-unstyled text-reset text-decoration-none">Liam</router-link></h6>
                                </div>
                                <div class="col d-flex ds-dash-father ds-hover-father">
                                    <h6 class="kalma position-absolute text-info ds-dash">-</h6>
                                    <h6 class="kalma position-relative ds-hover"><router-link to="/page7" class="link-unstyled text-reset text-decoration-none">Emma</router-link></h6>
                                </div>
                                <div class="col d-flex ds-dash-father ds-hover-father">
                                    <h6 class="kalma position-absolute text-info ds-dash">-</h6>
                                    <h6 class="kalma position-relative ds-hover"><router-link to="/page7" class="link-unstyled text-reset text-decoration-none">Noah</router-link></h6>
                                </div>
                                <div class="col d-flex ds-dash-father ds-hover-father">
                                    <h6 class="kalma position-absolute text-info ds-dash">-</h6>
                                    <h6 class="kalma position-relative ds-hover"><router-link to="/page7" class="link-unstyled text-reset text-decoration-none">Ava</router-link></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="mb-5">
                    <div class="row m-0 row-cols-lg-3 row-cols-2 px-lg-0 px-2">
                        <div class="col mt-0 mb-3">
                          <router-link to="/page6">
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
                                    <div class="c1 card-img-overlay gradient car-model rounded-4">
                                      <div class="d-flex justify-content-center h-100">
                                        <p class="d-flex align-items-center h5 text-white fw-bold">點我</p>
                                      </div>
                                    </div>
                                </div>
                            </div>
                          </router-link>
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
