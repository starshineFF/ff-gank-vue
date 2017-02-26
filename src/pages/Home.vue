<template>
  <div class="output">
    <head-top :title="txt" :is-back="false" ></head-top>
    <div class="container">
      <swiper :options="swiperOption" ref="mySwiperA">
  <!-- 幻灯内容 -->
        <swiper-slide v-for="img in images"><img :src="img.url" alt=""></swiper-slide>
        <swiper-slide v-for="img in images"><img :src="img.url" alt=""></swiper-slide>
        <swiper-slide v-for="img in images"><img :src="img.url" alt=""></swiper-slide>
        <!-- ... -->
        <!-- 以下控件元素均为可选（使用具名slot来确定并应用一些操作控件元素） -->
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
      <div v-for="(itemData, key) in msg" class="item-out">
        <div class="item-qd">
          <div class="item-qd-title">
            <img src="../assets/notebook.png" alt="" v-if="key=='Android'">
            <img src="../assets/phone.png" alt="" v-if="key=='iOS'">
            <img src="../assets/product.png" alt="" v-if="key=='休息视频'">
            <img src="../assets/petadata.png" alt="" v-if="key=='拓展资源'">
            <img src="../assets/chat.png" alt="" v-if="key=='福利'">
            <span class="txt">
              {{key}}
            </span>
          </div>
          <home-item :msgtxt="itemData"></home-item>
        </div>
      </div>
    </div>
    <loading v-if="isLoading"></loading>
    <mytime v-if="false"></mytime>
    <nav-bar></nav-bar>
  </div>
</template>

<script>
import HeadTop from "../components/Head"
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import $ from "robe-ajax"
import HomeItem from "../components/HomeItem"
import Loading from "../components/Loading"
import Mytime from "../components/Mytime"
import NavBar from "../components/NavBar"
export default {
  name: 'home',
  data () {
    return {
      txt:"干货集市",
      swiperOption: {
        notNextTick: true,
        autoplay: 3000,
        grabCursor : true,
        setWrapperSize :true,
        autoHeight: true,
        pagination : '.swiper-pagination',
        paginationClickable :true,
        mousewheelControl : true,
        observeParents:true,
        onTransitionStart(swiper){
        },
      },
      images:[],
      msg:[],
      isLoading: true
    }
  },
  methods:{
    getList(date){
      $.ajax({
        type:"GET",
        url:`https://gank.io/api/day/${date} `,
        dataType:"json",
        success: (data) => {
          this.images = data.results['福利'];
          this.msg = data.results;
          this.isLoading = false;
        }
     });
    }
  },
  components:{
    HeadTop,
    swiper,
    swiperSlide,
    HomeItem,
    Loading,
    Mytime,
    NavBar
  },
  created () {
    let nowTime = sessionStorage['nowTime'];
    if(!nowTime){
      $.ajax({
        type:"GET",
        url:"https://gank.io/api/day/history",
        dataType:"json",
        success:(data)=>{
          let newData = data.results[0];
         newData = newData.split("-").join("/");
         sessionStorage['nowTime'] = newData;
          this.getList(newData);
        }
      })
    }else{
      this.getList(nowTime);
    }

 }
}
</script>

<style scoped>
    .output{
      font-size: .18rem;
      margin-top:.25rem;
    }
    .swiper-slide{
      height: 1.5rem !important;
      text-align: center;
      border-bottom:1px solid #c8c8c8;
      overflow: hidden;
    }
    .swiper-slide img {
      /*height: 1.5rem;*/
      position: relative;
      top: -1rem;
      width:100%;
      display: inline-block;
      vertical-align:middle;
    }
    .item-qd{
      border-top:.12rem solid #e8e8e8;
      padding:.2rem .1rem .2rem .1rem;
    }
    .item-qd-title{
      font-size:.2rem;
      color:#9B223A;
      display: flex;
      align-items: center;
    }
    .item-qd-title img{
      width:.3rem;
      height:.3rem;
      margin-right: .05rem;
    }
</style>
