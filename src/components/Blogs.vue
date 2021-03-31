<template>
<!--  闲置的 vue文件-->
  <div id="blogs">
    <h3>这是blogs</h3>
<!--    <label>firstName</label>-->
<!--    <input type="text" v-on:keyup="getFullName" v-model="first">+-->
<!--    <label>lastName</label>-->
<!--    <input v-on:keyup="getFullName" v-model="last">-->
<!--   =<input v-model="name">-->
<!--数据监听-->
<!--        <label>firstName</label>-->
<!--        <input type="text" v-model="first">+-->
<!--        <label>lastName</label>-->
<!--        <input v-model="last">-->
<!--       =<input v-model="name">-->
<!--    -&#45;&#45;http请求-&#45;&#45;-->
<!--    <input type="button" value="get请求" @click="getInfo">-->


    <div class="panel panel-primary">
      <div class="panel-heading">
        <h3 class="panel-title">添加商品</h3>
      </div>
      <div class="panel-body form-inline">
        <label>
          name:
          <input type="text" v-model="name" class="form-inline">
        </label>
        <input type="button" value="添加" @click="add" class="btn btn-primary">
      </div>
    </div>

    <table class="table table-bordered table-hover table-striped">
      <thead>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Ctime</th>
        <th>Operation</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in list" :key="item.id">
        <td>{{item.id}}</td>
        <td>{{item.name}}</td>
        <td>{{item.email}}</td>
        <td @click.prevent="delect(item.id)">DELECT</td>
      </tr>
      </tbody>
    </table>


  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
export default {
  name: "Blogs",
  data(){
    return{
      first:'',
      last: '',
      name: '',
      list:[
        // {id:1,name:'五菱宏光',ctime:new Date()},
        // {id:2,name:'众泰',ctime:new Date()}
      ]
    }
  },
  created(){
    this.getAllList();
  },
  methods:{
    // getFullName(){
    //   this.name=this.first+'-'+this.last;
    // },
    getAllList(){
      this.$http.get('http://jsonplaceholder.typicode.com/posts/1/comments')
        .then(result=>{
          // console.log(result);
          if(result.status===200){
            console.log('请求成功');
            console.log(result.body);
            this.list=result.body;
          }else{
            alert('请求失败');
            console.log('请求失败');
          }
        }).catch(err => {})
    },
    add(){
      console.log('这是添加按钮');
      this.$http.post('http://jsonplaceholder.typicode.com/posts',{name:this.name},{emulateJSON:true})
        .then(result=>{
          if(result.status===201){
            alert('请求成功');
            console.log('请求成功');
            this.getAllList();
            this.name='';
          }else{
            alert('添加失败');
          }
        })
    },
    delect(id){
      console.log('这是delecct按钮');
      this.$http.get('http://jsonplaceholder.typicode.com/posts/1/comments'+id)
      .then(result=>{
        if(result.status===200){
          console.log('删除成功')
          this.getAllList();
        }else{
          alert('删除失败');
        }
      })
      // this.list.pop();

    },

   },

    // watch:{
    //   first: function(newVal,oldVal){
    //     this.name=newVal+this.last;
    //   },
    //   last: function(newVal){
    //     this.name=this.first+newVal;
    //   }
    //
    // },

}
</script>

<style scoped>
h3{
  margin-top: 70px;
}
</style>
