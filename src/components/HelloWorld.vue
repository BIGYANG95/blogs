<template>
  <div class="hello">
    <ul>
      <li v-for="user in use" :key="user.id" @click="user.show=!user.show">
        <h2>{{user.name}}</h2>
        <h3>{{user.email}}</h3>
      </li>
    </ul>
    <button v-if="use.length" @click="delect(use.id)">delect</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  // props:["对应的是v-bind:自定义属性"]
  // vue规范的写法props:{一个json对象}
  // props:["users"],
  props:{
    use:{
      type:Array,
      required:true,
      default:()=>[]
    }
  },
 data(){
    return{
      type:[]

    }
 },
  methods:{
    delect(id){
      this.use.pop();
      console.log('delect')
      // this.$http.delete('http://jsonplaceholder.typicode.com/users'+id)
      //   .then((data)=>{
      //     if(data.status===200){
      //       console.log(data);
      //       this.users=data.body;
      //     }else{
      //       console.log('加载失败');
      //     }
      //
      //   }).catch(err=>{})
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
  box-sizing: border-box;
}
ul{
  display: flex;
  flex-wrap: wrap;
  list-style-type:none;
  padding: 0;
}
li{
  flex-grow: 1;
  flex-basis: 200px;
  text-align: center;
  padding: 30px;
  border: 1px solid #222;
  margin: 10px;
}

</style>
