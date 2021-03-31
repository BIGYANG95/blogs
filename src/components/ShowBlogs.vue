<template>
<!--  v-theme='这里面传的是一个字符串，对象{}，数组[]'-->
  <div id="show-blogs" v-theme:column="'wide'">
    <h1>show blogs</h1>
    <input type="text" v-model="search" plcaeholder="搜索">
    <div class="single-blog" v-for="blog in filteredBlogs" :key="blog.id">
      <h1 v-rainbow>{{blog.title | touppercase}}</h1>
      <article>{{blog.body | snippet}}</article>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShowBlogs",
  data() {
    return {
        blogs:[],
        search:"",
    }
  },
  computed:{
    filteredBlogs:function(){
      return this.blogs.filter((blog)=>{
        return blog.title.match(this.search);
      })
    }
  },
  filters:{
    //本地过滤器和指令
    //写法一：
    // "to-uppercase":function (value){
    //   return value.toUpperCase();
    // }
    //写法二：
    touppercase(value){
      return value.toUpperCase();
    },
  },
  directives:{
    'rainbow':{
      bind(el,binding,vnode){
        el.style.color='#'+Math.random().toString(16).slice(2,8);
      }
    }
  },
  created() {
    // ./../static/posts.json
    this.$http.get("http://jsonplaceholder.typicode.com/posts")
    .then(function (data){
      console.log(data);
      this.blogs=data.body.slice(0,10);
      console.log(this.blogs)
    })
  }
}
</script>

<style scoped>
#show-blogs{
  max-width:800px;
  margin: 0 auto;
}
.single-blog{
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
  background-attachment: fixed;
}
h1{
  margin-top: 70px;
  text-align: center;
}
</style>
