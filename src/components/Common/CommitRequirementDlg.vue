<template>
  <div class="box-info" hidden>
    <div class="box-header with-border">
      <h3 class="box-title">验证需求</h3>
    </div>
    <!-- /.box-header -->
    <!-- form start -->
    <form class="form-horizontal">
      <div class="box-body">
        <div style="border-bottom: 1px solid #f4f4f4;">
          <div class="form-group">
            <label class="col-sm-3 control-label">专案名称</label>
            <span class="col-sm-7 custom-control">{{requirementInfo.projectName}}</span>
          </div>
          <div class="form-group">
            <label class="col-sm-3 control-label">BU</label>
            <span class="col-sm-7 custom-control">{{requirementInfo.bu}}</span>
          </div>
          <div class="form-group">
            <label class="col-sm-3 control-label">需求描述</label>
            <div style="height:80px;overflow:auto" class="col-sm-9 custom-control">
              <span v-html="requirementInfo.requirementDes" ></span>
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-3 control-label">反馈历史</label>
            <div style="height:150px;overflow:auto" class="col-sm-9 custom-control">
              <template v-for="flow in requirementInfo.flow">
                <div class="col-sm-12" style="background-color:#eee;margin:1px 0;" :key="flow.id">
                  <span style="width:100%">{{flow.op+":"}}</span> <br>
                  <span style="width:100%">{{flow.des}}</span> <br>
                  <span style="float:right;color:#aaa">{{flow.time}}</span>
                </div>
              </template>
              
            </div>
            
          </div>
        </div>

        <div style>
          <div class="form-group">
            <label class="col-sm-3 control-label">使用说明</label>
            <div class="col-sm-9 custom-control">
              <textarea style="margin-left:0px;" class="col-sm-12 form-control " rows="3" placeholder=""></textarea>
            </div>
          </div>
        </div>
      </div>
      <!-- /.box-body -->
      <div class="box-footer des-right">
        <button type="button" v-on:click="doNothing" class="btn btn-default custom-margin">取消</button>
        <button type="button" v-on:click="saveRequirementInfo" class="btn btn-info custom-margin">保存</button>
      </div>
      <!-- /.box-footer -->
    </form>
  </div>
</template>

<script>
  import axios from '@/http/axios'

  export default {
    name: "CommitRequirementDlg",
    props: ["op", "requirement"],
    data: function () {
      return {
        requirementInfo: this.requirement
      }
    },
    computed: {
    },
    watch: {
      "requirement": function (to, from) {
        console.log('userDLg->watch->user', to, from)
        console.log(11111)
        this.requirementInfo = this.requirement
      }
    },
    updated: function () {
      console.log('userInfo......')
    },
    mounted: function () {
      console.log('userInfoDlg......')
      console.log(this.requirement)
      $("#task_finish").iCheck({
        handler:'checkbox',
        checkboxClass:'icheckbox_flat-red'
      })
    },
    
    methods: {
      doNothing: function () {
        parent.layer.close(parent.layer.index);
      },
      saveRequirementInfo: function () {
        console.log(this.requirement)
        axios({
          url: 'saveUserInfo',
          method: 'post',
          data: this.requirement
        })
      }
    }
  };
</script>

<style scoped >
.box-info {
  padding: 5px;
}

.des-right {
  text-align: right;
}

.custom-margin {
  margin: 4px;
}

.custom-control {
  margin-top: 7px;
  margin-bottom: 0;
  margin-left: -15px;
  text-align: left;
}
</style>
