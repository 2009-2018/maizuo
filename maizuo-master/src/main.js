// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from './api/axios'
import store from './store'
import '../static/css/reset.css';
import 'swiper/dist/css/swiper.min.css'
import $ from 'jquery'
import vant from 'vant'
import VueTouch from 'vue-touch'
import animate from 'animate.css'


import VueJsonp from 'vue-jsonp'
Axios.defaults.headers.post["Content-type"]="application/json";
Vue.config.productionTip = false;
Vue.prototype.$http = Axios;
//Vue.use(Axios);
Vue.use(VueJsonp)
Vue.use(vant)
Vue.use(VueTouch, {name: 'v-touch'})
new Vue({
  el: '#app',

  router,
  store,
  components: { App },
  template: '<App/>'
});



