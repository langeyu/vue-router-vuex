<template>
  <div>
      <h1>我是头部组件</h1>
      <button @click="changeMsg">点我改变数据</button>
      <P>getMsg的初始数据是{{msg}}</p>
      <p>getMsg的当前数据是{{gettersMsg}}</p>
  </div>
</template>
<script>
import {mapState,mapGetters,mapActions} from 'vuex'
export default {
    name:"Header",
    data(){
        return {
           
        }
    },
    computed:{
       ...mapGetters(['gettersMsg']),
       ...mapState(['msg'])
    },
    methods:{
        // ...mapActions(['changeMsg'])
        changeMsg(){
           this.$store.dispatch('changeMsg')
        }
    },
}
</script>

<style>

</style>