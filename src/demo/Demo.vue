<template>
  <div>
    -----------鼠标事件--------------
    <h1>{{name}}</h1>
    <button v-on:click="add(1)">加一岁</button>
    <button v-on:click="subtract(1)">减一岁</button>
    <button v-on:click="add(10)">加十岁</button>
    <button v-on:dblclick="subtract(10)">减十岁</button>
    <p>my age is {{age}}</p>
    -------------获取鼠标坐标-------------------
    <div id="canvas" v-on:mousemove="updateXY">
      {{x}},{{y}}
      -<span @mousemove="stopMoving">Stop Moving</span>
      -<span @mousemove.stop="">Stop Moving</span>
    </div>

    <a href="http://www.baidu.com" @click.prevent="alert">baidu</a>
  </div>
</template>

<script>
export default {
  name: "demo",
  data(){
    return{
      name: 'bigyang',
      age: 30,
      x: 0,
      y: 0,
    }
  },
  methods:{
    add: function(inc){
      this.age+=inc;
    },
    subtract: function(dec){
      this.age-=dec;
    },
    updateXY: function(event){
      console.log(event);
      this.x=event.offsetX;
      this.y=event.offsetY;
    },
    stopMoving: function(event){
      event.stopPropagation();
    },
    alert: function(){
      alert("Open baidu")
    },
  }
}
</script>

<style scoped>
#canvas{
  width: 600px;
  padding: 200px 20px;
  text-align: center;
  border: 1px solid pink;
}
</style>
