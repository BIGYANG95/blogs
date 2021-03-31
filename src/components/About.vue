<template>
  <div id="about">
    {{$route.params.usernaem}}---{{$route.params.id}}
  </div>
</template>

<script>
export default {
name: "About"
}
</script>

<style scoped>
#about*{
  box-sizing: border-box;
}
h3{
  margin-top:200px;
}

</style>
