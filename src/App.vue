<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- <HelloWorld/> -->
    <div>
    <router-link to="/index">首页</router-link>
    <router-link to="/header">头部</router-link>
    <router-link to="/h">路径不存在</router-link>
    <router-view></router-view>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Header from './components/Header'
import Index from './components/Index'
import notFound from './components/notFound'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Header,
    Index,
    notFound
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
