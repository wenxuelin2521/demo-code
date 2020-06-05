<template>
  <div class="view-home">view {{ msg }}</div>
</template>

<script>
export default {
  data() {
    return {
      msg: "business下的home"
    };
  }
};
</script>

<style lang="scss" scoped>
.view-home {
  color: red;
  font-size: 32px;
  background-color: #ffcaca;
}
</style>
