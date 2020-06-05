<template>
  <div class="view-about">view {{ msg }}</div>
</template>

<script>
export default {
  data() {
    return {
      msg: "about"
    };
  }
};
</script>

<style lang="scss" scoped>
.view-about {
  color:red;
  background-color: #ffcaca;
}
</style>
