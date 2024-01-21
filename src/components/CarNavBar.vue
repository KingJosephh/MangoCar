<template>
    <section class="sticky-top">
        <nav class="navbar navbar-expand-lg bg-body-tertiary py-3">
            <div class="container-fluid">
                <div class="container-fluid d-flex justify-content-between pe-4 flex-row-reverse-logo">
                    <a class="navbar-brand" href="#"><img src="../assets/car-img/logo.png" alt="" style="height: 40px;"></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav text-center">
                        <router-link to="/" class="nav-link text-center text-nowrap" aria-current="page" :class="{'text-fire': pageTitle == '首頁'}"><p class="mb-0 me-lg-0 ms-3" ref="pageAA">首頁</p></router-link>
                        <router-link to="/page3" class="nav-link text-center text-nowrap" :class="{'text-fire': pageTitle == '熱門車款'}"><p class="mb-0 ms-lg-0 ms-3" ref="pageBB">熱門車款</p></router-link>
                        <router-link to="/page5" class="nav-link text-center text-nowrap" :class="{'text-fire': pageTitle == '關於我們'}"><p class="mb-0 ms-lg-0 ms-3" ref="pageCC">關於我們</p></router-link>
                        <router-link to="/page4" class="nav-link bottom-0 end-0 pt-1 text-nowrap text-center">
                            <button class="btn btn-fire rounded-pill btn-sm px-3 ms-lg-0 ms-2 fw-bold text-white">預約表單</button>
                        </router-link>
                        <router-link to="/loginBack" class="nav-link text-center text-nowrap" :class="{'text-fire': pageTitle == '登入後台'}"><p class="mb-0 ms-lg-0 ms-3" ref="pageCC">登入後台</p></router-link>
                    </div>
                </div>
            </div>
        </nav>
    </section>
</template>
<script>
export default {
  props: ['pageTitle']
}
</script>
