<template>
  <div class="box-info" hidden>
    <div class="box-header with-border">
      <h3 class="box-title">添加需求</h3>
    </div>
    <!-- /.box-header -->
    <!-- form start -->
    <form class="form-horizontal">
      <div class="box-body">
        <div class="form-group">
          <label class="col-sm-3 control-label">专案名称</label>
          <div class="col-sm-7">
            <input
              type="text"
              v-model="requirementInfo.projectName"
              class="form-control"
              id="projectName"
              placeholder
            >
          </div>
        </div>
        <div class="form-group">
          <label class="col-sm-3 control-label">BU</label>
          <div class="col-sm-7">
            <input
              type="text"
              v-model="requirementInfo.bu"
              class="form-control"
              id="bu"
              placeholder
            >
          </div>
        </div>
        <div class="form-group">
          <label class="col-sm-3 control-label">站别</label>
          <div class="col-sm-7">
            <input
              type="text"
              v-model="requirementInfo.station"
              class="form-control"
              id="station"
              placeholder
            >
          </div>
        </div>
        <div class="form-group">
          <label class="col-sm-3 control-label">需求描述</label>
          <div class="col-sm-7">
            <textarea type="text" rows="3" v-model="requirementInfo.requirementDes" class="form-control" placeholder />
          </div>
        </div>
      </div>
      <!-- /.box-body -->
      <div class="box-footer des-right ">
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
  name: "RequirementDlg",
  props: ["op","requirement"],
  data: function () {
    return {
      requirementInfo: this.requirement
    }
  },
  computed: {
  },
  watch: {
    "requirement": function(to,from) {
      console.log('userDLg->watch->user',to,from)
      console.log(11111)
      this.requirementInfo = this.requirement
    }
  },
  updated:function(){
    console.log('userInfo......')
  },
  mounted:function(){
    console.log('userInfoDlg......')
    console.log(this.requirement)
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
</style>
