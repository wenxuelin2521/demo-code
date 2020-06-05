<template>
  <div class="view-home">view {{ msg }}</div>
</template>

<script>
export default {
  data() {
    return {
      msg: "page-index下的home"
    };
  }
};
</script>

<style lang="scss" scoped>
.view-home {
  color: blue;
  background-color: #ffcaca;
}
</style>
