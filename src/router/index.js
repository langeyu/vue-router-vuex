//配置路由相关信息
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/Index'
import Header from '@/components/Header'
import notFound from '@/components/notFound'
//通过Vue.use(插件)，安装插件
Vue.use(Router)
//创建VueRoute并导出
export default new Router({
    //配置路由和组件之间的应用关系
    routes:[
        {
            path:"/",
            name:'HelloWorld',
            component:HelloWorld
      },{
          path:"/index",
          name:'Index',
          component:Index
      },{
         path:'/header',
         name:'Header',
         component:Header
      },{
          path:'*',
          name:"notFound",
          component:notFound
      }
   ]
})
