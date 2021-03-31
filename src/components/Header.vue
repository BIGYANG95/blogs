<template>
  <header>
    <h1 @click="changeString">{{title}}---{{item}}</h1>
  </header>
</template>

<script>
export default {
  name: "Header",
  data(){
    return{
      title: "vue demo",
    }
  },
  methods:{
    changeString(){
      // this.item='title is changed';
      console.log('here 1');
      this.$emit('titleChanged','这是子组件想要改变的值')
    },
  },
  props:{
    item:{
      type:String,
    }
  }
}
</script>

<style scoped>
header{
  background: lightgreen;
  padding: 10px;
}
h1{
  color: #222;
  text-align: center;
}
</style>
