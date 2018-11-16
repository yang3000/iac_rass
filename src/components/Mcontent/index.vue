<template>
    <div>
        <section class="content-header">
          <h1>
              用户管理
              <small>Control panel</small>
          </h1>
          <ol class="breadcrumb">
              <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
              <li class="active">用户管理</li>
          </ol>
      </section>
      <router-view> </router-view>
    </div>
    
</template>

<script>
export default {
  name: "mcontent"
};
</script>
