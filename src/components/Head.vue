<template>
    <header id='head_top'>
      <span class="ioc" v-on:click="handleBack">
        <img v-show="isBack" src="../assets/bc2.png" alt="">
      </span>
      <p class="txt">{{title}}</p>
      <div class="right">
        <img src="../assets/hg.png" alt="">
      </div>
    </header>
</template>

<script>
export default {
  name: 'head',
  props:{
    'title':String,
    'isBack':{
      type: Boolean,
      default: true
    }
  },
	data(){
    return {

    }
  },
  methods: {
    handleBack(){
      window.history.go(-1);
    }
  }

}

</script>

<style scoped>
  #head_top{
    font-size: .18rem;
    background:#2d80ff;
    display: flex;
    z-index: 100;
    align-items: center;
    justify-content: space-between;
    height:.45rem;
    padding:0 .1rem;
    color:#fff;
    position: fixed;
    top:0;
    left:0;
    right:0;
  }
  .txt{
    font-size: .2rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding: .2rem;
  }
  .ioc{
    width:.45rem;
  }
  .ioc img{
    width:.2rem;
  }
  .right{
      width:.45rem;
      text-align: center;
  }
  .right img{
    width:.5rem;
  }



</style>
