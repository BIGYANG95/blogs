<template>
  <div id="index">
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#000000"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="1"><router-link to="/index/showBlogs">blogs</router-link></el-menu-item>
      <el-menu-item index="2"><router-link to="">分类</router-link></el-menu-item>
      <el-menu-item index="3">标签</el-menu-item>
      <el-menu-item index="4">归档</el-menu-item>
      <el-menu-item index="5"><router-link to="{name='/About',params:{uswername:'bigyang',id='99'}}">关于</router-link></el-menu-item>
      <el-menu-item index="6"><router-link to="/index/addBlog">添加</router-link></el-menu-item>
      <transition mode="out-in">
        <router-view></router-view>
      </transition>

    </el-menu>

  </div>
</template>

<script>
import ShowBlogs from "./ShowBlogs";
import AddBlog from "./AddBlog";
import About from "./About";

export default {
name: "index",
  //data(){}用于存储各种数据
  data() {
    return {
      activeIndex: '1',
        activeIndex2: '1'
    };
  },
  //methods用于存储各种方法
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  components:{
    ShowBlogs,
      AddBlog,
    About,
  }
}
</script>

<style scoped>
#index{
  top: 0;
  padding: 0;
}
v-enter,
v-leave-to{
  opacity: 0;
  transform: translateX(140px);
}
v-enter-active,
v-leave-active{
  transition: all 0.5s ease;
}

</style>
