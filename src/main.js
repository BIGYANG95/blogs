// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//main.js: 项目的核心文件。
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'bootstrap'
Vue.use(ElementUI)
Vue.use(VueResource)
//自定义指令
// Vue.directive('rainbow',{
//   bind(el,binding,vnode){
//           el.style.color='#'+Math.random().toString(16).slice(2,8);
//   }
// })
Vue.directive('theme',{
          bind(el,binding,vnod){
            if(binding.value=='wide'){
              el.style.maxWidth='1260px';
            }else if (binding.value=='narrow'){
              el.style.maxWidth='560px';
            }

            if(binding.arg=='column'){
              el.style.background="#000000";
              el.style.padding='20px';
            }
  }
})
//自定义全局过滤器
// Vue.filter('to-uppercase',value=>value.toUpperCase())
Vue.filter('snippet',value=>value.slice(0,100)+'...')

Vue.config.productionTip = false
// Vue.http.options.root='http://jsonplaceholder.typicode.com/'
/* eslint-disable no-new */
//实例化vue
new Vue({
 el: '#app',
 // el:element代表根容器，对应为根目录下index.html的<div id=app>
 //所有的数据展示也只是在<div id=app>这个层次下
 router,
 render: h => h(App)
})
