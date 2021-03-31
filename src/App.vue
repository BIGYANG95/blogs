<template>
  <div id="app">
    <ul>
      <!--      href=""的值绑定的是路由的地址-->
      <li><router-link to="/home">Home</router-link></li>
      <li><router-link to="/index">index</router-link></li>
    </ul>
<!--    将组件挂载到DOM,由vue-router提供的元素，可以视为一个容器，展示路由规则匹配到的组件-->
    <router-view></router-view>
<!--    -&#45;&#45;鼠标事件-&#45;&#45;-->
<!--    <div id="canvas" v-on:mousemove="updata">-->
<!--      {{X}}-{{Y}}-->
<!--      <span @mousemove.stop="">Stoping</span>-->
<!--    </div>-->

  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      X:'',
      Y:'',
    }
  },
  methods:{
    updata(event){
      console.log(event);
      this.X=event.offsetX;
      this.Y=event.offsetY;
    }
  },
  watch:{
    //路由监控
    '$route.path':function(newVal,oldVal){
      console.log(newVal+'---'+oldVal);
      if(newVal==='/home'){
        alert('welcome to home')
      }else if(newVal==='/index'){
        alert('welcome to blogs')
      }
    }
  },

}
</script>

<style>
li{
  display: inline-block;
  font-size: 20px;
}
a {
  text-decoration: none;
}
#canvas{
  border: 1px solid lightblue;
  width:600px;
  padding: 300px;
  text-align: center;
}
</style>
