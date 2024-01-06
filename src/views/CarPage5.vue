<template>
    <NavBar></NavBar>
    <section class="">
        <div class="d-flex justify-content-center">
            <img src="../assets/car-img/title1.png" alt="近期好車">
        </div>
        <p class="text-center mb-6">這裡是在還在等家的浪浪們，若您正巧在找個家人，不訪來認識一下唄</p>
        <div class="row">
          <div class="col-8">
          </div>
          <div class="col-4">
            <div class="row">
              <div class="col">
                <select class="form-select" aria-label="Default select example">
                <option selected value="6">顯示6輛</option>
                <option value="9">顯示9輛</option>
                <option value="12">顯示12輛</option>
                <option value="15">顯示15輛</option>
              </select>
              </div>
              <div class="col pe-lg-7 mb-4">
                <select class="form-select" aria-label="Default select example">
                  <option selected value="All">全部</option>
                  <option value="Toyota">Toyota</option>
                  <option value="Mercedes">Mercedes</option>
                  <option value="BMW">BMW</option>
                  <option value="Porsche">Porsche</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div class="row px-lg-6 m-0 d-flex justify-content-center">
                    <div class="col-4 mb-4 bg-transparent px-4">
                        <div class="card border-0 hover-shadow-lg img-opacity rounded-4 h-100">
                            <router-link to="/page6" class="card-link d-block h-100 link-unstyled text-reset text-decoration-none position-relative">
                                <div class="card-header p-0">
                                    <img class="rounded-top-4" src="../assets/car-img/mercedes.jpg" alt="mercedes logo">
                                    <div class="car-bg-img" style="background-image: url('../assets/car-img/gt43.jpg');"></div>
                                </div>
                                <div class="card-body">
                                    <div class="p-2">
                                        <h5 class="fw-bold">Mercedes-GT43</h5>
                                        <P class="mb-5">2012年款式，V8渦輪增壓Mercedes-AMG GT 4-Door Coupe擁有不容錯認的AMG GT家族化外觀，完美呼應強悍動力融合4座空間機能，四門跑車的空間完美隱藏在充滿張力的肌肉線條裡，從結合空氣力學的AMG直柵式水箱護罩與下方進氣壩即可辨識純正賽道血統。</P>
                                    </div>
                                </div>
                                <div class="card-footer bg-white text-center border-0 rounded-4 position-absolute bottom-0 w-100">
                                    <hr class="text-info mx-5">
                                    <button class="kalma border-0 bg-transparent">MORE</button>
                                </div>
                            </router-link >
                        </div>
                    </div>
                    <div class="col-4 mb-4 bg-transparent px-4">
                        <div class="card border-0 hover-shadow-lg img-opacity rounded-4 h-100">
                            <router-link  to="/page6" class="card-link d-block h-100 link-unstyled text-reset text-decoration-none position-relative">
                                <div class="card-header p-0">
                                    <img class="rounded-top-4" src="../assets/car-img/bmw.jpg" alt="bmw logo">
                                    <div class="car-bg-img" style="background-image: url('../assets/car-img/m4.jpg');"></div>
                                </div>
                                <div class="card-body">
                                    <div class="p-2">
                                        <h5 class="fw-bold">BMW-M4</h5>
                                        <p class="pb-5">全新世代BMW M4強眼設計的無邊框雙腎型進氣格柵，營造強烈的視覺衝擊力，而簡潔的車身線條勾勒出靈動的輪廓，在不經意間，迸發強勢本色，併發更多對速度的渴望！</p>
                                    </div>
                                </div>
                                <div class="card-footer bg-white text-center border-0 rounded-4 position-absolute bottom-0 w-100">
                                    <hr class="text-info mx-5">
                                    <button class="kalma border-0 bg-transparent">MORE</button>
                                </div>
                            </router-link>
                        </div>
                    </div>
                    <div class="col-4 mb-4 bg-transparent px-4">
                        <div class="card border-0 hover-shadow-lg img-opacity rounded-4 h-100">
                            <router-link  to="/page6" class="card-link d-block h-100 link-unstyled text-reset text-decoration-none position-relative">
                                <div class="card-header p-0">
                                    <img class="rounded-top-4" src="../assets/car-img/porshe.jpg" alt="porsche logo">
                                    <div class="car-bg-img" style="background-image: url('../assets/car-img/911turbo.jpg');"></div>
                                </div>
                                <div class="card-body">
                                    <div class="p-2">
                                        <h5 class="fw-bold">Porsche-911</h5>
                                        <P class="mb-5">我們的工程師們非常喜歡將 911 Turbo 稱為最完美的跑車。具備極端的跑車性能卻同時非常舒適，且能夠無限制而完美地掌握日常生活所需。911 Turbo 系列持續貫徹自己的道路。
                                        </P>
                                    </div>
                                </div>
                                <div class="card-footer bg-white text-center border-0 rounded-4 position-absolute bottom-0 w-100">
                                    <hr class="text-info mx-5">
                                    <button class="kalma border-0 bg-transparent">MORE</button>
                                </div>
                            </router-link>
                        </div>
                    </div>
                    <div class="col-4 mb-4 bg-transparent px-4">
                        <div class="card border-0 hover-shadow-lg img-opacity rounded-4 h-100">
                            <router-link  to="/page6" class="card-link d-block h-100 link-unstyled text-reset text-decoration-none position-relative">
                                <div class="card-header p-0">
                                    <img class="rounded-top-4" src="../assets/car-img/mercedes.jpg" alt="mercedes logo">
                                    <div class="car-bg-img" style="background-image: url('../assets/car-img/gt-r.jpg');"></div>
                                </div>
                                <div class="card-body">
                                    <div class="p-2">
                                        <h5 class="fw-bold">Mercedes-GT R</h5>
                                        <P class="mb-5">Mercedes-AMG傾全力獨立開發的純種跑車AMG GT，透過其所採用的前中置引擎配置、原廠代號M178的新世代4.0L V8雙渦輪增壓汽油引擎、以特殊「hot inside V」安置於V8缸體夾角內空隙的渦輪配置、乾式機油槽與動態引擎腳科技，一再清楚說明自身兼具賽道性能與日常實用性的多重優勢。</P>
                                    </div>
                                </div>
                                <div class="card-footer bg-white text-center border-0 rounded-4 position-absolute bottom-0 w-100">
                                    <hr class="text-info mx-5">
                                    <button class="kalma border-0 bg-transparent">MORE</button>
                                </div>
                            </router-link>
                        </div>
                    </div>
                    <div class="col-4 mb-4 bg-transparent px-4">
                        <div class="card border-0 hover-shadow-lg img-opacity rounded-4 h-100">
                            <router-link  to="/page6" class="card-link d-block h-100 link-unstyled text-reset text-decoration-none position-relative">
                                <div class="card-header p-0">
                                    <img class="rounded-top-4" src="../assets/car-img/bmw.jpg" alt="bmw logo">
                                    <div class="car-bg-img" style="background-image: url('../assets/car-img/m3.jpg');"></div>
                                </div>
                                <div class="card-body">
                                    <div class="p-2">
                                        <h5 class="fw-bold">BMW-M3</h5>
                                        <p class="pb-5">全新世代BMW M3 Competition M xDrive充分表現BMW 3系列的賽車運動潛能，搭載M專屬高性能BMW M TwinPower Turbo直列6缸雙渦輪汽油引擎，可提供510匹馬力的強勁表現。多種源於賽車的驅動與底盤科技，結合全新調校的M專屬運動化差速器，極致經典的動態駕馭表現，絕對帶給車主無比驚艷。</p>
                                    </div>
                                </div>
                                <div class="card-footer bg-white text-center border-0 rounded-4 position-absolute bottom-0 w-100">
                                    <hr class="text-info mx-5">
                                    <button class="kalma border-0 bg-transparent">MORE</button>
                                </div>
                            </router-link >
                        </div>
                    </div>
                    <div class="col-4 mb-4 bg-transparent px-4">
                        <div class="card border-0 hover-shadow-lg img-opacity rounded-4 h-100">
                            <router-link to="/page6" class="card-link d-block h-100 link-unstyled text-reset text-decoration-none position-relative">
                                <div class="card-header p-0">
                                    <img class="rounded-top-4" src="../assets/car-img/porshe.jpg" alt="porsche logo">
                                    <div class="car-bg-img" style="background-image: url('../assets/car-img/gt3-rs.jpg');"></div>
                                </div>
                                <div class="card-body">
                                    <div class="p-2">
                                        <h5 class="fw-bold">Porsche-GT3 RS</h5>
                                        <P class="mb-5">992世代的911 GT3是與保時捷賽車運動部門共同開發，這部第七代全新車款擁有最純正的賽車科技，提供更純粹的性能表現。源自同樣性能卓越的保時捷GT賽車911 RSR，911 GT3前軸搭載雙A臂獨立懸吊系統，透過擾流尾翼搭配倒勾式 (Swan Neck) 連桿及強大的分流器盡情展現其優越的先進空氣動力技術；基於911 GT3 R動力傳動系統設計的510hp 4.0升六缸水平對臥引擎則早已通過耐力賽測試。911 GT3和911 GT3 Cup皆搭載超高轉速引擎以及讓人心馳神往的聲浪，既是滿足車主平日駕馭樂趣的跑車，更是一部性能精湛、動力卓越的賽道機器，打造超凡絕妙的操駕體驗。
                                        </P>
                                    </div>
                                </div>
                                <div class="card-footer bg-white text-center border-0 rounded-4 position-absolute bottom-0 w-100">
                                    <hr class="text-info mx-5">
                                    <button class="kalma border-0 bg-transparent">MORE</button>
                                </div>
                              </router-link>
                        </div>
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
  }
}
</script>
