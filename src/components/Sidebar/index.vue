<template>
    <div id="sidebar">
        <!-- Left side column. contains the logo and sidebar -->
        <aside class="main-sidebar">
            <!-- sidebar: style can be found in sidebar.less -->
            <section class="sidebar">
                <!-- Sidebar user panel -->
                <div class="user-panel">
                    <div class="pull-left image">
                        <img src="static/dist/img/avatar04.png" class="img-circle" alt="User Image">
                    </div>
                    <div class="pull-left info">
                        <p>Yang Hao</p>
                        <a href="#"><i class="fa fa-circle text-success"></i> Online</a>
                    </div>
                </div>
                
                <!-- sidebar menu: : style can be found in sidebar.less -->
                <ul class="sidebar-menu" data-widget="tree">
                    <menu-tree v-for="menu in menuTree" :key="menu.id" :Menus="menu"></menu-tree>
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
      menuTree: state=>state.menu.menuTree
    })
  }
};
</script>
