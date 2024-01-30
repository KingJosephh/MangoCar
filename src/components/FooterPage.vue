<template>
    <section class="border-top border-fire">
        <div class="row d-flex justify-content-center pt-5 m-0 row-cols-lg-2 row-cols-1">
            <div class="col-8">
                <div class="row m-0 flex-lg-row flex-column">
                    <div class="col-6 d-flex justify-content-center mb-5 mx-auto">
                        <i class="bi bi-person-hearts fs-s-104 text-fire"></i>
                        <div class="ps-4 d-flex flex-column justify-content-center">
                            <h5>官網賞車</h5>
                            <P>車種多樣，任君挑選</P>
                            <router-link to="/page3" href="./page4.html">
                                <button class="btn btn-outline-dark"><p class="m-0 px-4 text-nowrap">前往賞車</p></button>
                            </router-link>
                        </div>
                    </div>
                    <div class="col-6 d-flex justify-content-center mb-5 mx-auto">
                        <i class="bi bi-coin fs-s-104 text-fire"></i>
                        <div class="ps-4 d-flex flex-column justify-content-center">
                            <h5>預約估車</h5>
                            <P>我有好車，請團隊估車</P>
                            <router-link to="/page4" href="./page4.html">
                                <button class="btn btn-outline-dark"><p class="m-0 px-4 text-nowrap">前往預約</p></button>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <footer class="bg-dark text-white text-center py-3">
        Copyright © 2021 芒果國際.All rights reserved.
    </footer>
</template>
