<template>
  <div class="box-footer clearfix no-top-padding">
    <ul class="pagination pagination-sm no-margin pull-right">
      <li >
        <a  href="#">&lt;</a>
      </li>
      <template v-for="n in pages">
        <li :key="n"> 
          <a href="#" @click="$emit('change-page',n)">{{n}}</a> 
        </li>
      </template>
      <li>
        <a href="#">&gt;</a>
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
  // data: () => ({
  //   pages:12
  // }),
  computed:{
    pages:function(){
      return Math.ceil(this.counts/10)
    }
  },
  watch: {

  },
  methods: {

  }
};
</script>
<style scoped>
.custom-size {
  font-size: 20px;
}
.no-top-padding {
  border-top: 0px;
}
</style>