<template>
  <div>
    <h1>{{gettersMsg}}</h1>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
   name:"Index",
   computed:{...mapGetters(['gettersMsg'])}

}
</script>

<style>

</style>