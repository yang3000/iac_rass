<template>
  <div class="box">
    <div class="box-header with-border">
      <h3 class="box-title">Bordered Table</h3>
    </div>
    <!-- /.box-header -->
    <div class="box-body">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>Month</th>
            <th>Savings</th>
          </tr>
        </thead>
        <tbody>
          <template v-for="item in data">
            <tr :key="item.id">
              <th style="width: 10px">{{item.id}}</th>
              <th>{{item.userId}}</th>
              <th>{{item.userName}}</th>
              <th style="width: 40px">{{item.department}}</th>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
    <!-- /.box-body -->
    <div class="box-footer clearfix">
      <ul class="pagination pagination-sm no-margin pull-right">
        <li>
          <a href="#">《</a>
        </li>
        <li>
          <a href="#">3</a>
        </li>
        <li>
          <a href="#">»</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import ContentHeader from "@/components/Mcontent/ContentHeader"
  import UserDlg from "@/components/Common/UserDlg"
  import axios from '@/http/axios'
  import Vue from 'vue'



  export default {
    name: "DataTable",
    props: ["title", "data", "count"],
    data: () => ({
      op: "add",
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
        if (val === 'add') {
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
        console.log(res)
        this.user = res.data

      }).catch(error => {
        console.log(error)
      })

    },
    openAddUserDlg: function () {
      this.op = "add"
      //this.getUserInfo();

      layer.open({
        type: 1,
        title: false,
        closeBtn: 0,
        shadeClose: true,
        area: ['500px'],
        resize: false,
        content: $("#userDlg")
      });
    }
  },
  mounted: function () {

    var data = [
    {
      "name": "Tiger Nixon",
      "position": "System Architect",
      "salary": "$3,120",
      "start_date": "2011/04/25",
      "office": "Edinburgh",
      "extn": "5421"
    }
    ];



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
/* .text-right {
  float: right;
  } */
</style>