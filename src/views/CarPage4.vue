<template>
    <NavBar></NavBar>
    <header class="min-vh-2-40 position-relative">
        <div class="position-absolute bg-attachment-fixed bg-img-size-2 mb-2" style="top: 0; right: 0; bottom: 0; left: 0; background-image: url(./car-img/pag2/pg2Car.jpg); height: 288px;"></div>
        <div class="position-absolute top-50 start-50 translate-middle text-center text-secondary">
            <p class="display-1 fw-bold">芒果 國際</p>
            <hr class="mb-1 mx-n3">
            <p class="h2">訂購表單</p>
        </div>
    </header>
    <section>
        <div class="container">
            <div class="card rounded-4 deco-line border-0 shadow-lg mb-5">
                <div class="card-header bg-transparent text-center border-0 pt-5">
                    <h3 class="fw-bold">
                        訂購資訊
                    </h3>
                </div>
                <div class="card-body">
                    <form class="row g-3">
                        <div class="col-md-6">
                            <label for="名子" class="form-label">名子</label>
                            <input type="text" class="form-control" id="名子">
                        </div>
                        <div class="col-md-6">
                            <label for="姓氏" class="form-label">姓氏</label>
                            <input type="text" class="form-control" id="姓氏">
                        </div>
                        <div class="col-12">
                            <label for="手機號碼" class="form-label">手機號碼</label>
                            <input type="text" class="form-control" id="手機號碼" placeholder="請輸入手機號碼">
                        </div>
                        <div class="col-12">
                            <label for="地址" class="form-label">地址</label>
                            <input type="text" class="form-control" id="地址" placeholder="Apartment, studio, or floor">
                        </div>
                        <div class="col-md-6">
                            <label for="城市" class="form-label">城市</label>
                            <select id="城市" class="form-select">
                                <option selected>請選擇城市</option>
                                <option>台北</option>
                                <option>高雄</option>
                            </select>
                        </div>
                        <div class="col-md-6">
                            <label for="區域" class="form-label">區域</label>
                            <select id="區域" class="form-select">
                                <option selected>請選擇區域</option>
                                <option>...</option>
                            </select>
                        </div>
                        <div class="col-md-12">
                            <label for="預約業務" class="form-label">預約業務</label>
                            <select id="預約業務" class="form-select">
                                <option selected>選擇預約業務</option>
                                <option>Ethan</option>
                                <option>Olivia</option>
                                <option>Liam</option>
                                <option>Emma</option>
                                <option>Noah</option>
                                <option>Ava</option>
                            </select>
                        </div>
                        <div class="col-md-12">
                            <label for="付款方式" class="form-label">付款方式</label>
                            <select id="付款方式" class="form-select">
                                <option selected>付款方式</option>
                                <option>現金</option>
                                <option>刷卡</option>
                            </select>
                        </div>
                        <div class="col-12 d-flex">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="額外捐款">
                                <label class="form-check-label" for="額外捐款">
                                    額外捐款
                                </label>
                            </div>
                            <div class="form-check ps-5">
                                <input class="form-check-input" type="checkbox" id="預購狗糧+600">
                                <label class="form-check-label" for="預購狗糧+600">
                                    預購狗糧+600
                                </label>
                            </div>
                        </div>
                        <div class="col-12 mb-3">
                            <label for="備註說明" class="form-label">備註說明</label>
                            <textarea class="form-control" id="備註說明" rows="3"></textarea>
                        </div>
                        <div class="col-12">
                            <h5 class="text-center fw-bold">總金額 NT$ 300</h5>
                        </div>
                        <div class="col-12 d-flex justify-content-center">
                            <input type="submit" class="btn btn-info rounded-pill px-4" value="送出預約資訊">
                            <!-- <button type="submit" class="btn btn-info rounded-pill px-4" >送出預約資訊</button> -->
                        </div>
                    </form>
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
