<template>
  <div id="add-blog">
      <h3>这是添加博客</h3>
    <form v-if="!submited">
      <label>博客标题</label>
      <input type="text" v-model="Blog.title"></input>
      <br>
      <label>博客内容</label>
      <textarea v-model="Blog.content"></textarea>
      <div id="checkBoxes">
        <label>vue.js</label>
        <input v-model="Blog.categories" type="checkbox" value="vue.js"></input>
        <label>node.js</label>
        <input v-model="Blog.categories" type="checkbox" value="node.js"></input>
        <label>springboot</label>
        <input v-model="Blog.categories" type="checkbox" value="springboot"></input>
      </div>
      <div>
        <select v-model="Blog.author">
          <option v-for="author in authors" :key="author.id">{{author}}</option>
        </select>
        <button @click.prevent="post">提交</button>
      </div>
    </form>

    <div v-if="submited">
      <h3>博客推送成功</h3>
    </div>


    <div class="show" v-if="submited">
        <h3>博客总览</h3>
        <p>博客标题{{Blog.title}}</p>
        <p>博客内容{{Blog.content}}</p>
      <p>博客分类</p>
      <ul>
        <li v-for="category in Blog.categories" :key="category.id">
          {{category}}
        </li>
      </ul>
      <p>作者{{Blog.author}}</p>
    </div>
  </div>
</template>

<script>
export default {
name: "AddBlog",
  data(){
    return{
      Blog:{
        title:"",
        content:"",
        categories:[],
        author:"",
      },
      authors:["jack","nico","henry"],
      submited:false,
   }
  },
  methods:{
  post:function (){
    this.$http.post("http://jsonplaceholder.typicode.com/posts",{
      title:this.Blog.title,
      body:this.Blog.content,
      userId:1,
    })
        .then((data)=>{
          console.log(data);
          this.submited=true;
        }).catch(err=>{})

  }
  }
}
</script>

<style scoped>
#add-blog *{
  box-sizing: border-box;
}
#add-blog{
  margin: 35px auto;
  max-width: 600px;
  padding: 20px;
}
label{
  display: block;
  margin: 20px 0 10px;
}
input[type="text"],textarea,select{
  display: block;
  width: 100%;
  padding: 8px;
}
textarea{
  height: 200px;
}
#checkBoxes label{
  display: inline-block;
  margin-top: 0;
}
#checkBoxes input{
  display: inline-block;
  margin-right: 10px;
}

button{
  display: block;
  margin:20px 0;
  background: crimson;
  color: #fff;
  border: 0;
  padding: 14px;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;

}
.show{
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}
h3{
  margin-top:10px;
}
</style>
