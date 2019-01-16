<template>
  <div class="box-footer clearfix no-top-padding">
    <ul class="pagination pagination-sm no-margin pull-right">
      <li >
        <a class ="page-number-margin" href="#"><i class="fa fa-fw fa-angle-left custom-size "></i></a>
      </li>
      <template v-for="n in pages">
        <li :key="n"> 
          <a href="#" :class = "[currPage == n ? 'active' : '','page','page-number-size','page-number-margin']" @click="changePage(n)">{{n}}</a> 
        </li>
      </template>
      <li>
        <a  class ="page-number-margin" href="#"><i class="fa fa-fw fa-angle-right custom-size"></i></a>
      </li>
    </ul>
  </div>
</template>

<script>



export default {
  name: "page",
  props: {
    counts:Number
  },
  data: () => ({
    currPage:1
  }),
  computed:{
    pages:function(){
      return Math.ceil(this.counts/10)
    }
  },
  watch: {

  },
  methods: {
    changePage: function(page){
      console.log("哎呦喂 我被点到了")
      this.$emit('change-page',page)
      this.currPage = page
    }
  }
};
</script>
<style scoped>
.active {
  background-color: rgb(255, 196, 0);
}
.custom-size {
  font-size: 20px;
}
.page-number-size {
  font-size: 15px;
}
.page-number-margin {
  margin: 0 2px;
}
.no-top-padding {
  border-top: 0px;
}


.pagination>li>a.page:hover {
    z-index: 2;
    color: #23527c;
    background-color: rgb(255, 196, 0);
    border-color: #ddd;
}
.pagination>li>a.page:focus {
    z-index: 2;
    color: #23527c;
    background-color: rgb(255, 196, 0);
    border-color: #ddd;
}

.pagination>li>a {
 /*   background: #555;*/
    color: #666;
    border: 0px;
}
</style>