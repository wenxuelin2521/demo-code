<template>
  <div>
    <h1>这是hello world</h1>
    <!-- <p>{{info}}----{{$store.state.msg}}</p> -->
    <!-- <button @click="test()">点我修改</button> -->
    <button @click="test2()">测试event bus</button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      info:'123'
    }
  },
  methods: {
    test(){
      // alert('abc')
      this.$store.commit('setMsg' , 'hello world')
    },
    test2(){
      // Bus.$on("this_change",[1,2])
      this.$bus.$emit("updateMessage", [1,2 , Math.random()])
    }
  },
  mounted() {
    // console.log(this);
    // console.log(this.$store.state.msg)
  },
}
</script>