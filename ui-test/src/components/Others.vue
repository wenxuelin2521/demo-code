<template>
  <div class="others-container">
    <h1>这是others-container</h1>
  </div>
</template>


<script>
export default {
  data() {
    return {
        postMsg : [4,5]
    };
  },
  watch:{
      postMsg(newVal , oldVal){
          console.log(newVal , oldVal , '======77')
      }
  },

  created() {
    // Bus.$on("this_change", em => {
    //   //这样就可以打印出来刚刚传过来的1和2了
    //   console.log('=========' , em[1], em[2]);
    // });
    // console.log(Bus)
    this.$bus.$on("updateMessage", (value) => {
    //   console.log(value);
      this.postMsg = value
    });
  }
};
</script>