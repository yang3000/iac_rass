<template>
    <div id="app">
      <navbar></navbar>
      <sidebar></sidebar>
      <div class="content-wrapper" style="min-height: 594px;">
        <!-- 路由出口 -->
        <!-- 路由匹配到的组件将渲染在这里 -->
        <router-view></router-view>
      </div>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar/'
import Sidebar from '@/components/Sidebar/'
export default {
  name: 'App',
  components: {Navbar,Sidebar}
}
</script>