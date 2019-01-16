<template>
    <section  class="bottom-line content-header">
        <h1>
            {{menuName}}
        </h1>
        <ol class="breadcrumb">
            <li><a href="#"><i class="fa fa-dashboard"></i> 首页</a></li>
            <li class="active">{{fatherMenuName}}</li>
            <li class="active">{{menuName}}</li>
        </ol>
    </section>
</template>

<script>
export default {
  name: "ContentHeader",
  props: ["menuName", "fatherMenuName"]
};
</script>

<style scoped >
.bottom-line {
    padding: 10px;
    border-color: rgba(148, 145, 147, 0.2);
    border-bottom-width: 1px;
    border-bottom-style: solid;
}
</style>
