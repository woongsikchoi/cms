// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VModal from 'vue-js-modal'


// import './vendor/bootstrap/css/bootstrap.css'
import './vendor/metisMenu/metisMenu.min.css'
import './dist/css/sb-admin-2.css'
import './vendor/morrisjs/morris.css'
import './vendor/font-awesome/css/font-awesome.min.css'

Vue.config.productionTip = false
Vue.use(axios)
Vue.use(VModal, { dialog: true })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
}).$mount('#app')
