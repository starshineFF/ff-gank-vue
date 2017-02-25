<template lang="html">
  <div class="loading">
    <img src="../assets/snow.png" alt="">
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
  .loading{
    position: fixed;
    top:50%;
    left:50%;
    margin-left: -.4rem;
    margin-top:-.59rem;
  }
  .loading img{
    width:.8rem;
    height:.8rem;
    animation:loading 1.5s linear  infinite;
    animation-fill-mode:backwards;

  }
  @keyframes loading {
    0%{
      transform: rotate(0deg);
    }
    25%{
      transform: rotate(90deg);
    }
    50%{
      transform: rotate(180deg);
    }
    75%{
      transform: rotate(270deg);
    }
    100%{
      transform: rotate(360deg);
    }
  }
</style>
