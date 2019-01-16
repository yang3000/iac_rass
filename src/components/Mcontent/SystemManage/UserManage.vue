<template>
  <div class="content-wrapper">
    <content-header menuName="用户管理" fatherMenuName="系统管理"></content-header>
    <section class="content">
      <div class="row">
        <div v-on:submit.prevent>
            <div class="col-sm-12 col-md-2 custom-margin-4">
              <input type="text" v-model="queryUserId" class="form-control" id="userId" placeholder="">
            </div>
            <div class="col-sm-12 col-md-2 custom-margin-4">
              <input type="text" v-model="queryUserName" class="form-control" id="userName" placeholder="" >
            </div>
            <div class="col-sm-12 col-md-2 custom-margin-4">
              <button class="btn btn-warning" @click="queryUserList">查询</button>
            </div>
        </div>
        <div class="col-xs-12">
          <div class="box">
            <div class="box-header">
              <div>
                <h2 class="box-title">用户列表</h2>
                <a href="#" style="float:right"><i style="color: rgba(0, 0, 0, 0.62);" class="fa fa-fw fa-user-plus custom-size" @click="openAddUserDlg"></i></a>
              
              </div>
         
              <!-- <div class="col-xs-1 text-right">
               <button type="button" class="btn btn-block btn-warning btn-sm">增加</button>
              </div>-->
            </div>
            <!-- /.box-header -->
            <div class="box-body">
              <table class="table table-bordered">
                <thead>
                  <tr role="row">
                    <th>序号</th>
                    <th>用户工号</th>
                    <th>用户姓名</th>
                    <th>Email</th>
                    <th>所属部门</th>
                    <th>操作</th>
                  </tr>
                </thead>
                <tbody>
                  <template v-for="item in users">
                    <tr :key="item.id">
                      <td style="width: 60px">{{item.id}}</td>
                      <td>{{item.userId}}</td>
                      <td>{{item.userName}}</td>
                      <td>{{item.email}}</td>
                      <td>{{item.department}}</td>
                      <td style="width: 100px">
                        <div style="float:left;padding: 0 4px 0 4px ;width:50%;">
                          <a v-on:click="openEditUserDlg"  style="border:0px;border-radius: 2px;" class="btn btn-block btn-warning btn-xs">编辑</a>
                        </div>
                        <div style="float:left;padding: 0 4px 0 4px ;width:50%;">
                          <a v-on:click="openEditUserDlg" style="border:0px;border-radius: 2px;" class="btn btn-block btn-danger btn-xs">删除</a>
                        </div>
                      </td>
                    </tr>
                  </template>
                </tbody>
              </table>
            </div>
            <!-- /.box-body -->

            <page :counts="count" @change-page="changePage"></page>

          </div>
        </div>
      </div>
    </section>

    <user-dlg id="userDlg" :op="op" :user="user"></user-dlg>
  </div>
</template>

<script>
import ContentHeader from "@/components/Mcontent/ContentHeader"
import UserDlg from "@/components/Common/UserDlg"
import Page from '@/components/Common/Page'
import axios from '@/http/axios'
import Vue from 'vue'



export default {
  name: "UserManage",
  components: { ContentHeader, UserDlg,Page },
  data: () => ({
    op: "add",
    users:[],
    queryUserId:"",
    queryUserName:"",
    user: {
      userId: '',
      userName: '',
      password: '',
      email: '',
      department: ''
    },
    count:25
  }),
  watch: {
    $route(to, from) {
      console.log("43erere");
    },
    op(val) {
      if (val == 'add') {
        console.log("op is changed...")
        for (let key in this.user) this.user[key] = ''
      }
    }
  },
  methods: {
    changePage: function(val){
      console.log(val)
    }, 
    getUserInfo: function () {
      axios({
        url: '/',
        method: 'get'
      }).then(res => {
        this.user = res.data.data
      }).catch(error => {
        console.log(error)
      })
    },

    //打开用户窗口
    openUserDlg: function () {
      layer.open({
        type: 1,
        title: false,
        closeBtn: 0,
        shadeClose: true,
        area: ['500px'],
        resize: false,
        content: $("#userDlg")
      });
    },
    openAddUserDlg: function () {
      this.op = "add"
      this.openUserDlg()
    },

    openEditUserDlg: function(){
      this.op = "edit"
      this.getUserInfo()
      this.openUserDlg()
    },

    deleteUser: function(){
      this.op = "delete"
      axios({
        url: '/deleteUser',
        method: 'get'
      }).then(res => {
        this.user = res.data.data
      }).catch(error => {
        console.log(error)
      })
    },
    queryUserList: function(){
      console.log('查询用户列表')
      axios({
            url: '/getUsers',
            method: 'post',
            data:{
              userId:this.queryUserId,
              userName:this.queryUserName
            }
          }).then(res => {
            console.log(res)
            console.log(JSON.stringify(res.data.data))
            this.users = res.data.data
          }).catch(error => {
            console.log(error)
          })

    }

  },
  mounted: function () {
    this.queryUserList()
    console.log("mounted");
  },
  updated: function () {
    console.log("updated");
  }
};
</script>
<style scoped>

.box {
  margin-top: 15px;
  border-top: 0px;
}
.box-body {
  padding-top: 0px;
}
/* .box-title {
  margin-top: 10px;
} */
.btn-sm {
  width: 50px;
  float: right;
}
.custom-margin-4 {
  margin-top: 4px;
  margin-bottom: 4px;
}
.custom-size {
  font-size: 20px;
}
.table-bordered>thead>tr>th, .table-bordered>thead>tr>td {
  border-bottom-width: 1px;
  border-color:#e6e6e6;
  background-color:#f2f2f2
}

.table-bordered>tbody>tr>th, .table-bordered>tbody>tr>td {
  /* border-bottom-width: 1px; */
  border-color:#e6e6e6
}
/* .text-right {
  float: right;
} */
</style>