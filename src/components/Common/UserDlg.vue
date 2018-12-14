<template>
  <div class="box-info" hidden>
    <div class="box-header with-border">
      <h3 class="box-title">添加用户</h3>
    </div>
    <!-- /.box-header -->
    <!-- form start -->
    <form class="form-horizontal">
      <div class="box-body">
        <div class="form-group">
          <label class="col-sm-3 control-label">用户姓名</label>
          <div class="col-sm-7">
            <input
              type="text"
              v-model="userInfo.userName"
              class="form-control"
              id="username"
              placeholder
            >
          </div>
        </div>
        <div class="form-group">
          <label class="col-sm-3 control-label">用户名</label>
          <div class="col-sm-7">
            <input
              type="text"
              v-model="userInfo.userId"
              class="form-control"
              id="userid"
              placeholder
            >
          </div>
        </div>
        <div class="form-group">
          <label class="col-sm-3 control-label">密码</label>
          <div class="col-sm-7">
            <input type="password" v-model="userInfo.password" class="form-control" placeholder>
          </div>
        </div>
        <div class="form-group">
          <label class="col-sm-3 control-label">部门</label>
          <div class="col-sm-7">
            <input type="text" v-model="userInfo.department" class="form-control" placeholder >
          </div>
        </div>
        <div class="form-group">
          <label class="col-sm-3 control-label">邮箱</label>
          <div class="col-sm-7">
            <input type="text" v-model="userInfo.email" class="form-control"  placeholder >
          </div>
        </div>
      </div>
      <!-- /.box-body -->
      <div class="box-footer">
        <button type="button" v-on:click="doNothing" class="btn btn-default">取消</button>
        <button type="button" v-on:click="saveUserInfo" class="btn btn-info pull-right">保存</button>
      </div>
      <!-- /.box-footer -->
    </form>
  </div>
</template>

<script>
import axios from '@/http/axios'

export default {
  name: "UserDlg",
  props: ["op","user"],
  data: function () {
    return {
      userInfo: this.user
    }
  },
  computed: {
  },
  watch: {
    "user": function(to,from) {
      console.log('userDLg->watch->user',to,from)
      console.log(11111)
      this.userInfo = this.user
    }
  },
  updated:function(){
    console.log('userInfo......')
  },
  mounted:function(){
    console.log('userInfoDlg......')
    console.log(this.user)
  },
  methods: {
    doNothing: function () {
        parent.layer.close(parent.layer.index);
    },
    saveUserInfo: function () {
      console.log(this.user)
      axios({
        url: 'saveUserInfo',
        method: 'post',
        data: this.user
      })
    }
  }
};
</script>

<style scoped >
.box-info {
  padding: 5px;
}
</style>
