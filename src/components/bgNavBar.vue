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
                    <div class="navbar-nav">
                        <router-link to="/backPage" class="nav-link text-start text-nowrap" :class="{'text-fire': pageTitle == '產品列表'}"><p class="mb-0 ms-lg-0 ms-3" ref="pageBB">產品列表</p></router-link>
                        <router-link to="/backReserve" class="nav-link text-start text-nowrap" :class="{'text-fire': pageTitle == '預約系統'}"><p class="mb-0 ms-lg-0 ms-3" ref="pageCC">預約系統</p></router-link>
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
