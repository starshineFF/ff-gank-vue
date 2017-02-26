<template lang="html">
  <div class="output">
    <div class="nav-bottom">
      <router-link to="/home" active-class="checked">
        <div class="nav-item ">
          <img src="../assets/logo.png" alt="" class="navbar-img">
          <div>最新</div>
        </div>
      </router-link>
      <router-link to="/gankList/1" active-class="checked">
        <div class="nav-item">
            <img src="../assets/product.png" alt="" class="navbar-img">
            <div>前端</div>
        </div>
      </router-link>
      <router-link to="/gankList/2" active-class="checked">
        <div class="nav-item">
            <img src="../assets/notebook.png" alt="" class="navbar-img">
            <div>安卓</div>
        </div>
      </router-link>
      <router-link to="/gankList/3" active-class="checked">
        <div class="nav-item">
            <img src="../assets/phone.png" alt="" class="navbar-img">
            <div>iOS</div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import Router from 'vue-router'
export default {
  name:"navBar",
  data(){
    return {

    }
  }
}
</script>

<style scoped>
  .nav-bottom{
    border-top:.01rem solid #2d80ff;
    height:.5rem;
    position: fixed;
    bottom: 0;
    left:0;
    right:0;
    display: flex;
    background: #FFF;
  }
  .nav-bottom a{
    display: inline-block;
    flex: 1;
    text-align: center;
    text-decoration: none;
    color:#000;
  }
  .navbar-img{
    width:.2rem;
  }
  .nav-item{
    font-size:.16rem;
    height:100%;
    padding:.1rem;
    line-height: .18rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .checked{
    background:#B9B8FF;
    color:#fff !important;
  }
</style>
