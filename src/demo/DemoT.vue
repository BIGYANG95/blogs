<template>
  <div>
<!--        &#45;&#45;键盘事件&#45;&#45;-->
<!--    <h1>键盘 Events</h1>-->
<!--    <label>姓名：</label>-->
<!--    <input type="text" v-on:keyup="logName" ref="name">-->
<!--    {{name}}-->
<!--    <label>年龄：</label>-->
<!--    <input type="text" v-on:keyup="logAge" ref="age">-->
<!--    {{age}}-->
<!--          &#45;&#45;双向绑定&#45;&#45;-->
<!--    <h1>键盘 Events</h1>-->
<!--    <label>姓名：</label>-->
<!--    <input type="text" v-model="name">-->
<!--    {{name}}-->
<!--    <label>年龄：</label>-->
<!--    {{age}}-->
<!--    <input type="text" v-model="age">-->
        --computed计算属性-
    <button @click="a++">Add to a</button>
    <button @click="b++">Add to b</button><br>
    Age-{{age}}<br>
    A-{{a}}<br>
    B-{{b}}<br>
    Age + A = {{addToA}}<br>
    Age + B = {{addToB}}<br>
  </div>
</template>

<script>
export default {
  name: "DemoT",
  data(){
    return{
      name: 'bigyang',
      age: 15,
      a: 0,
      b: 0,
    }
  },
  methods:{
    logName: function(){
      console.log("iputting name");
      this.name=this.$refs.name.value;
    },
    logAge: function(){
      console.log=("inputting age");
      this.age=this.$refs.age.value;
    },

    // addToA: function(){
    //   console.log("add to a")
    //   return this.age+this.a;
    // },
    // addToB: function(){
    //   console.log("add to b")
    //   return this.age+this.b;
    // }


  },
  computed:{
    addToA: function(){
      console.log("add to a")
      return this.age+this.a;
    },
    addToB: function(){
      console.log("add to b")
      return this.age+this.b;
    }
  },
  // beforeCreate() {
  //   alert("组件实例化之前执行的函数");
  // },
  // created(){
  //   alert("组件实例化完成，但是页面未显示");
  // },
  // beforeMount(){
  //   alert("component 挂载,无页面展示，虚拟DOM已经配置");
  // },
  // mounted(){
  //   alert("组件挂载后，此方法执行完成后，显示页面");
  // },
  // beforeUpdate() {
  //   alert("组件更新前，页面未更新，已经配置虚拟dom");
  // },
  // updated() {
  //   alert("组件更新，此方法执行完毕后，更新页面");
  // },
  // beforeDestroy(){
  //   alert("组件销毁前");
  // },
  // destroyed(){
  //   alert("组件销毁");
  // },

}
</script>

<style scoped>

</style>
