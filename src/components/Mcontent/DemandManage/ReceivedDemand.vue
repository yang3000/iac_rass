<template>
  <div class="content-wrapper">
    <content-header menuName="收到的需求" fatherMenuName="系统管理"></content-header>
    <section class="content">
      <div class="row">
        <div role="form" v-on:submit.prevent>
          <div class="col-sm-12 col-md-2 custom-margin-4">
            <input type="text" v-model="queryRequirementName" class="form-control" id="queryRequirementName" placeholder>
          </div>
          <div class="col-sm-12 col-md-2 custom-margin-4">
            <button class="btn btn-warning" @click="queryRequirementList">查询</button>
          </div>
        </div>
        <div class="col-xs-12">
          <div class="box">
            <div class="box-header">
              <div class="col-xs-11">
                <h2 class="box-title">需求列表</h2>
              </div>
            </div>
            <!-- /.box-header -->
            <div class="box-body">
              <table class="table table-bordered">
                <thead>
                  <tr role="row">
                    <th style="width: 50px;text-align: center">序号</th>
                    <th style="width: 150px;">专案</th>
                    <th style="width: 100px;">BU</th>
                    <th style="width: 100px;">状态</th>
                    <th style="width: 200px;">任务期限</th>
                    <th>需求描述</th>
                    <th style="width: 150px;">创建时间</th>
                    <th >操作</th>
                  </tr>
                </thead>
                <tbody>
                  <template v-for="item in requirements">
                    <tr :key="item.id">
                      <td style="text-align: center">{{item.id}}</td>
                      <td>{{item.projectName}}</td>
                      <td>{{item.bu}}</td>
                      <td>{{status_cn(item.status)}}
                      <td>{{item.deadline}}</td>
                      <td>{{item.requirementDes}}</td>
                      <td>{{item.createTime}}</td>
                      <td style="width: 50px">
                    
                        <div style="float:left;padding: 0 4px 0 4px ;width:100%;">
                          <a
                            v-on:click="openCheckRequirementDlg"
                            style="border:0px;border-radius: 2px;"
                            class="btn btn-block btn-info btn-xs"
                          >提交</a>
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
    <commit-requirement-dlg id="checkRequirementDlg" :op="op" :requirement="requirement"></commit-requirement-dlg>
  </div>
</template>

<script>
import ContentHeader from "@/components/Mcontent/ContentHeader"
import CommitRequirementDlg from "@/components/Common/CommitRequirementDlg"
import Page from '@/components/Common/Page'
import axios from '@/http/axios'
import Vue from 'vue'

export default {
  name: "CommitDemand",
  components: { ContentHeader,CommitRequirementDlg,Page },
  data: () => ({
    op: "add",
    requirements:[],
    queryRequirementName:"",
    requirement: {
      projectName: '',
      bu: '',
      station: '',
      requirementDes: '',
      createTime: ''
    },
    count:100
  }),
  watch: {
    op(val) {
      if (val == 'add') {
        console.log("op is changed...")
        for (let key in this.requirement) this.requirement[key] = ''
      }
    }
  },
  methods: {
    changePage: function(val){
      console.log(val)
    }, 
    getRequirementInfo: function () {
      axios({
        url: '/QueryRequirementInfo',
        method: 'post'
      }).then(res => {
        this.requirement = res.data.data
      }).catch(error => {
        console.log(error)
      })
    },

     //打开需求验证窗口
    checkRequirementDlg: function () {
      layer.open({
        type: 1,
        title: false,
        closeBtn: 0,
        shadeClose: true,
        area: ['600px'],
        resize: false,
        content: $("#checkRequirementDlg")
      });
    },

    openCheckRequirementDlg: function(){
      this.op = "check"
      this.getRequirementInfo()
      this.checkRequirementDlg()
    },

    queryRequirementList: function(){
      console.log('查询需求列表')
      axios({
            url: '/QueryRequirementList',
            method: 'post',
            data:{
              projectName:this.queryUserId,
              bu:this.queryUserName,
              op:'boss'
            }
          }).then(res => {
            console.log(res)
            console.log(JSON.stringify(res.data.data))
            this.requirements = res.data.data
          }).catch(error => {
            console.log(error)
          })
    },
    status_cn: function(status_code){
      switch (status_code){
        case 0 :
          return "新需求"
        case 1 :
          return "开发中"
        case 2 :
          return "待验证"
        case 3 : 
          return "待评分"
        case 4 :
          return "结束"
        default :
          return "未知状态"
      }


    }

  },
  mounted: function () {

    //checkbox初始化
    $("#allResource").iCheck({
        handler:'checkbox',
        checkboxClass:'icheckbox_flat-red'
    });
    this.queryRequirementList()
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
  border-color:#e6e6e6
}
</style>