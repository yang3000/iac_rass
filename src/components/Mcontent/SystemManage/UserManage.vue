<template>
  <div class="content-wrapper">
    <content-header menuName="用户管理" fatherMenuName="系统管理"></content-header>

    <section class="content">
      <div class="row">
        <form role="form">
          <div class="col-xs-2">
            <input type="email" class="form-control" id="userName" placeholder="Enter email">
          </div>
          <div class="col-xs-2">
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              placeholder="Enter email"
            >
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        <div class="col-xs-12">
          <div class="box">
            <div class="box-header">
              <div class="col-xs-11">
                <h2 class="box-title">用户列表</h2>
              </div>
              <div class="col-xs-1 text-right">
                <i class="fa fa-fw fa-user-plus custom-size" @click="openAddUserDlg"></i>
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
import axios from '@/http/axios'
import Vue from 'vue'



export default {
  name: "UserManage",
  components: { ContentHeader, UserDlg },
  data: () => ({
    op: "add",
    users:[],
    user: {
      userId: '',
      userName: '',
      password: '',
      email: '',
      department: ''
    }
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
    }

  },
  mounted: function () {
    // $("#example1").DataTable({
    //   searching: false,
    //   ordering: false,
    //   lengthChange: false,
    //   stripeClasses: ["strip1", "strip2"],
    //   buttons: [{
    //     extend: 'copy'
    //   }],
    //   data: data,
    //   columns: [
    //     { data: 'name' },
    //     { data: 'position' },
    //     { data: 'salary' },
    //     { data: 'office' },
    //     {          data: 'operator',
    //       width: '100px',
    //       render: function (data, type, row, meta) {
    //         console.log(type)
    //         if (type === 'display') {


    //           var edit_del_btn = Vue.extend({
    //             template: '<div style="float:left;padding:4px;width:50%"><a v-on:click="world(' + "'" + 12 + "'" + ')" class="btn btn-block btn-warning btn-xs">编辑</a></div>' +
    //               '<div style="float:left;padding:4px;width:50%"><a v-on:click="world(' + "'" + 12 + "'" + ')" class="btn btn-block btn-danger btn-xs">删除</a></div>',

    //             methods: {
    //               world: function (id) {
    //                 alert(this.data);
    //               }
    //             }
    //           });
    //           console.log(type)
    //           // return  '<div class="col-xs-6"><a class="btn btn-block btn-warning btn-xs">Warning</a></div>'+
    //           //         '<div class="col-xs-6"><a  class="btn btn-block btn-danger btn-xs">Warning</a></div>'
    //           return ''// new edit_del_btn().$mount().$el
    //         }
    //         return data;
    //       }
    //     }
    //   ]
    // });

   axios({
        url: '/getUsers',
        method: 'get'
      }).then(res => {
        console.log(res)
        console.log(JSON.stringify(res.data.data))
        this.users = res.data.data
      }).catch(error => {
        console.log(error)
      })

    console.log("mounted");
  },
  updated: function () {
    console.log("updated");
    
  }
};
</script>
<style scoped>
form {
  margin-bottom: 15px;
}
.box {
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