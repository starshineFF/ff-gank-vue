<template lang="html">
  <div class="container">
    <div class="title">
      <p>2017年</p>
      <p>2016年</p>
      <p>2015年</p>
    </div>
    <div class="cnt">
      <div class="cnt1" v-for="i in 100">
        <p>2015-1-2</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"Mytime",

}
</script>

<style scoped>
  .container{
    position: fixed;
    top:30%;
    left: 0;
    right: 0;
    height: 3rem;
    display: flex;
    color:#38035E;
    background: #fff;
  }
  .cnt{
    display: flex;
    flex: 1;
    flex-direction: column;
    overflow: scroll;
  }

  .title{
    width: .8rem;
    color:#030236;
    font-weight: bold;
  }
  .title p{
    border-bottom:.01rem solid #ddd;
    border-left:.01rem solid #ddd;
  }

</style>
