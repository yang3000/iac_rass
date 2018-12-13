<template>
    <div id="sidebar">
        <!-- Left side column. contains the logo and sidebar -->
        <aside class="main-sidebar" >
            <!-- sidebar: style can be found in sidebar.less -->
            <section class="sidebar">
                <!-- Sidebar user panel -->
                <div class="user-panel">
                    <div class="pull-left image">
                        <img src="/static/dist/img/avatar04.png" class="img-circle" alt="User Image">
                    </div>
                    <div class="pull-left info">
                        <p>Yang Hao</p>
                        <a href="#"><i class="fa fa-circle text-success"></i> Online</a>
                    </div>
                </div>
                
                <!-- sidebar menu: : style can be found in sidebar.less -->
                <ul v-if = "menuNodes && menuNodes.length > 0" class="sidebar-menu" data-widget="tree">
                    <menu-tree v-for="menu in menuNodes" :key="menu.id" :Menus="menu"></menu-tree>
                </ul>
            </section>
            <!-- /.sidebar -->
        </aside>
    </div>
</template>

<script>
import MenuTree from "@/components/Sidebar/MenuTree"
import {mapState} from "vuex"
export default {
  name: "sidebar",
  components:{MenuTree},
  computed: {
    ...mapState({
      menuNodes: state=>state.menu.menuTree
    })
    // menuNodes: function(){
    //     return sessionStorage.getItem('menuTree')
    // }
  },
  watch: {
      menuNodes: function(val){
          console.log(1234)
      }
  },
    mounted:function(){
    //$.layout($('body'))
  //console.log($.layout)
console.log("sidebar:mounted")


//    $('[data-widget="tree"]').each(function () {
//         console.log($(this))
//         console.log($(this)[0].Tree)
//        $(this).tree()
//      });
   
    //this.$router.go(0)
    
    // let script = document.createElement('script')
    // let head = document.getElementsByTagName('head')[0]
    // script.src = '../../static/dist/js/adminlte.min.js'
    // head.appendChild(script)
    //import('admin-lte')
    
  },
  updated:function(){
      console.log("sidebar:updated")
    $('[data-widget="tree"]').each(function () {
        console.log($(this))
        console.log($(this).tree)
       //$(this).tree()
     });
  }
};
</script>
