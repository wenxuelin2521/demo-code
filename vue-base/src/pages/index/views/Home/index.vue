<template>
  <div class="view-home">view {{ msg }}</div>
</template>

<script>
import { queryList } from "@/utils/ajax/api";
export default {
  data() {
    return {
      msg: "page-index下的home",
    };
  },
  created() {
    // this.retry(queryList)
    // .then(res => {console.log(res)})
    // .catch(err => {console.log(err)})
    queryList({name:'xiaoming'})
  },
  methods: {
    retry(promiseFn, times = 3) {
      return new Promise(async (resolve, reject) => {
        while (times--) {
          try {
            const ret = await promiseFn();
            resolve(ret);
          } catch (err) {
            if (!times) reject;
          }
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.view-home {
  // color: blue;
  // background-color: #ffcaca;
}
</style>
