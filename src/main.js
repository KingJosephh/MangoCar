import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import SwiperClass, { /* swiper modules... */ } from 'swiper'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css'
import 'animate.css/animate.min.css'

const app = createApp(App)
app.use(VueAxios, axios)
SwiperClass.use([/* swiper modules... */])
app.use(VueAwesomeSwiper)
app.use(router)
app.mount('#app')
