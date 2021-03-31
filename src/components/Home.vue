<template>
  <div id="home">
<!--    <Header v-bind:item="itemHeader"></Header>-->
    <Header v-on:titleChanged="updataTitle($event)" v-bind:item="itemHeader"></Header>
    <!--    v-bind:自定义属性="data中的users"-->
    <HelloWorld v-bind:use="users"></HelloWorld>
    <HelloWorld v-bind:use="users"></HelloWorld>
    <Footer v-bind:item="itemFooter"></Footer>
  </div>
</template>

<script>
import HelloWorld from "./HelloWorld";
import Header from "./Header";
import Footer from "./Footer";

export default {
  name: "Home",
  data(){
    return{
      users:[
      //   {name: 'jack',position:'develop',show:false},
      //   {name: 'jack',position:'develop',show:false},
      //   {name: 'jack',position:'develop',show:false},
      //   {name: 'jack',position:'develop',show:false},
      //   {name: 'jack',position:'develop',show:false},
      //   {name: 'jack',position:'develop',show:false},
      //   {name: 'jack',position:'develop',show:false},
      //   {name: 'jack',position:'develop',show:false},
      //   {name: 'jack',position:'develop',show:false},
      ],
      itemHeader:'this is Header',
      itemFooter: 'this is footer',
    }
  },
  methods:{
    updataTitle(i){
      console.log('here 2')
      this.itemHeader=i;
    }
  },
  components:{
    HelloWorld,
    Header,
    Footer,
  },
  created(){
    this.$http.get("http://jsonplaceholder.typicode.com/users")
        .then((data)=>{
          if(data.status===200){
            // console.log(data);
            this.users=data.body;
          }else{
            console.log('加载失败');
          }

        }).catch(err=>{})

  },


}
</script>

<style scoped>

</style>
