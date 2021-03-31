<template>
  <div>
<!--    <p>{{msg}}</p>-->
<!--    <button @click="rm">change</button>-->


<!--    走马灯-->
    <h3>{{msg}}</h3>
   <input type="button" value="moving" @click="moving">
    <input type="button" value="stooping" @click="stopping">
  </div>
</template>

<script>
export default {
name: "Test",
  data(){
  return{
    msg:'我最帅',
    intervalId:null,
  }
  },
  methods:{
  // rm: function(){
  //   this.msg = this.msg.split('').reverse().join('');
  // },
    moving(){
      if(this.intervalId != null)return;
      this.intervalId = setInterval(()=>{
        console.log(this.msg);
        var start = this.msg.substring(0,1);
        var end = this.msg.substring(1);
        this.msg = end+start;
      },400)
    },
    stopping(){
      clearInterval(this.intervalId);
      this.intervalId=null;
    },
  },
  computed:{

  },

}
</script>

<style scoped>

</style>