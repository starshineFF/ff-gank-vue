<template lang="html">
  <div class="output">
    <head-top :title="txt" :is-back="true" ></head-top>
    <div class="wrapper">
      <a :href="url">网页嵌入可能失败，点击原文链接</a>
      <iframe width="100%" height="90%" :src="url"></iframe>
    </div>
  </div>
</template>

<script>
import HeadTop from "../components/Head"
export default {
  data(){
    return {
      txt: this.$route.query.title,
      url: this.$route.query.url
    }
  },
  components:{
    HeadTop
  }
}
</script>

<style lang="css">
.wrapper {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: center;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
}
.wrapper a {
  font-size: .15rem;
}
</style>
