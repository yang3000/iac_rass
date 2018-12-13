// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import 'bootstrap/dist/css/bootstrap.min.css'
import 'admin-lte/dist/css/AdminLTE.min.css'
import 'admin-lte/dist/css/skins/_all-skins.min.css'
import 'datatables.net-bs/css/dataTables.bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import 'icheck/skins/square/blue.css'

import 'expose-loader?$!expose-loader?jQuery!jquery'
import 'bootstrap'
import 'datatables.net/js/jquery.dataTables.min.js'
import 'datatables.net-bs/js/dataTables.bootstrap.min.js'
import 'admin-lte'
import 'jquery-slimscroll'
import 'jquery-ui/ui/widgets/sortable.js'
import 'jquery-ui/ui/widgets/datepicker.js'
import 'jquery-ui/themes/base/datepicker.css'
import 'icheck/icheck.js'



import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// import '../static/dist/js/jquery.min.js'
// import '../static/dist/js/jquery-ui.min.js'
// import '../static/dist/js/bootstrap.min.js'
// import '../static/dist/js/jquery.sparkline.min.js'
// import '../static/dist/js/jquery.knob.min.js'
// import '../static/dist/js/jquery.slimscroll.min.js'
// import '../static/dist/js/fastclick.js'
// import '../static/dist/js/adminlte.min.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
