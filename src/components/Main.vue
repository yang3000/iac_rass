<template>
    <div>
      <navbar></navbar>
      <sidebar></sidebar>
      <!-- 路由出口 -->
        <!-- 路由匹配到的组件将渲染在这里 -->
      <router-view></router-view>
      <main-footer></main-footer>
    </div>
</template>

<script>
//import '../../static/dist/js/jquery.min.js'
//import 'static/js/jquery-ui.min.js'
//import '../../static/dist/js/bootstrap.min.js'
//import '../../static/dist/js/jquery.sparkline.min.js'
//import '../../static/dist/js/jquery.knob.min.js'
//import '../../static/dist/js/jquery.slimscroll.min.js'
//import '../../static/dist/js/fastclick.js'
//import 'static/js/layer.js'
import 'static/css/layer.css'
import 'static/js/layer.js'
import Navbar from '@/components/Navbar/'
import Sidebar from '@/components/Sidebar/'
import MainFooter from '@/components/Footer/'

export default {
  name: 'Main',
  components: {Navbar,Sidebar,MainFooter},
  watch:{
    '$route'(to,from){
      console.log(to)
    }
  },
  updated: function(){
    console.log("main:updated")
  }

}
</script>