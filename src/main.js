// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import YDUI from 'vue-ydui'; /* 相当于import YDUI from 'vue-ydui/ydui.rem.js' */
import 'vue-ydui/dist/ydui.rem.css';
import axios from 'axios';
import VideoPlayer from 'vue-video-player';

import router from './router'
// import VueAxios from 'vue-axios';
import $ from 'jquery'
//import Paginate from 'vuejs-paginate';
//Vue.component('paginate', Paginate)
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')

Vue.use(YDUI);
Vue.use(VideoPlayer)
// Vue.use(axios);
// Vue.use(VueAxios, axios)
Vue.prototype.$axios = axios;
Vue.config.productionTip = false

router.goBack = function(){
  this.isBack=true;
  window.history.go(-1);
  return true;
}
router.afterEach((to,from,next) => {
  window.scrollTo(0,0);
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
