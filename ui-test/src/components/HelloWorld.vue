<template>
  <div>
    <h1>good afternoon</h1>
    <p>{{info}}----{{$store.state.msg}}</p>
    <button @click="test()">点我修改</button>
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
    }
  },
  mounted() {
    console.log(this);
    console.log(this.$store.state.msg)
  },
}
</script>