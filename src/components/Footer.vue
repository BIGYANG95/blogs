<template>
  <footer>
    <p>{{ titile }}--{{item}}</p>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data(){
    return{
      titile: "coptright 2020",
    }
  },
  props:{
    item:{
      type:String,
    }
  }
}

</script>

<style scoped>
footer{
  background: #222;
  padding: 6px;
}
footer p{
  color: lightgreen;
  text-align: center;
}
</style>