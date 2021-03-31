import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from '../components/Home'
import Index from '../components/Index';
import ShowBlogs from '../components/ShowBlogs'
import AddBlog from "../components/AddBlog";

Vue.use(Router)

export default new Router({
  //使用history模式，去除url地址里面的#/
    mode:"history",
    // base:"/dist",
    routes: [
         {
           path: '/home',
           name: 'Home',
         component: Home,

        },
        {
            path: '/helloWorld',
            name: 'helloWorld',
            component: HelloWorld
        },
        {
            path: '/header',
            name: 'Header',
            component: Header
        },
        {
            path: '/footer',
            name: 'Footer',
            component: Footer
        },
        {
            path: '/index',
            name: 'index',
            component: Index,
            children:[
               {
                      path: 'addBlog',
                      name: 'AddBlog',
                      component: AddBlog
                 },
              {
                path: 'showBlogs',
                name: 'ShowBlogs',
                component: ShowBlogs
              }

              // {
              //   path: 'about',
              //   name: 'About',
              //   component: About
              // }
          ]
        },

    ],
})
