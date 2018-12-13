<template>
    <li class="treeview">
        <a>
            <!-- <i class="fa fa-pie-chart"></i> -->
            <i :class="Menus.icon"></i>
            <span>{{Menus.name}}</span>
            <span class="pull-right-container">
                <i class="fa fa-angle-left pull-right"></i>
            </span>
        </a>
        <ul v-if = "Menus.children.length > 0" class="treeview-menu">
            <li v-for="subMenu in Menus.children" :key="subMenu.id">
              <router-link :to="{ name:subMenu.pathName}" exact-active-class active-class><i class="fa fa-circle-o"></i>{{subMenu.name}}</router-link>
            </li>
        </ul>
    </li>
</template>

<script>


export default {
  name: "menuTree",
  props: ["Menus"],
  data: function() {
    return {
      data:""
    };
  }
};
</script>

