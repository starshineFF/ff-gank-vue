<template lang="html">
  <div class="output">
    <head-top :is-back="false" :title="txt"></head-top>
    <div ref="list" class="list" v-on:scroll="handlerScroller">
        <home-item :msgtxt="itemData"></home-item>
        <div class="loading" v-if="itemData.length>0">
          loading...
        </div>
    </div>
    <nav-bar></nav-bar>
    <loading v-if='isloading'></loading>
  </div>

</template>

<script>
import NavBar from "../components/NavBar"
import HeadTop from "../components/Head"
import $ from "robe-ajax"
import HomeItem from "../components/HomeItem"
import Loading from "../components/Loading"
export default {
  name:"gankList",
  data (){
    return {
      txt:"前端",
      id: this.$route.params.id,
      itemData:[],
      isloading:true,
      isRequest:false,
      page:1
    };
  },
  created() {
    this.setTitle();
    this.getData();
  },
  watch: {
    '$route' (to, from) {
      this.id = this.$route.params.id;
      this.setTitle();
      this.page = 1;
      this.getData();
      this.$refs.list.scrollTop = 0;

    }
  },
  methods:{
    setTitle (){
      const tex =  this.id==1?'前端':(this.id==2?"Android":"iOS");
      this.txt = tex;
    },
    getData (){
      this.isloading = true;
      $.ajax({
        type:"GET",
        dataType:"json",
        url:`https://gank.io/api/data/${this.txt}/10/${this.page}`,
        success: (data)=>{
          console.log(data);
          this.itemData = data.results;
          this.isloading = false;
        }
      });
    },
    handlerScroller(e){
      // console.log(e);
      // let scrollHeight = e.target.scrollHeight;
      // let scrollTop = e.target.scrollTop;
      // let offsetHeight = e.target.offsetHeight;
      if(!this.isRequest){
        let {scrollHeight, scrollTop, offsetHeight} =
          e.target;
        // console.log(scrollHeight, scrollTop, offsetHeight);
        let totalheight = scrollTop + offsetHeight;
        if(totalheight < scrollHeight && totalheight>scrollHeight-50){
          this.isRequest = true;
          this.page++;
          this.isloading = true;
          $.ajax({
            type:"GET",
            dataType:"json",
            url:`https://gank.io/api/data/${this.txt}/10/${this.page}`,
            success: (data)=>{
              console.log(data);
              // this.itemData = data.results;
              this.isloading = false;
              this.itemData.push(...data.results);
              this.isRequest = false;
            }
          });

        }
      }


    }
  },
  components:{
    NavBar,
    HeadTop,
    HomeItem,
    Loading
  }
}
</script>

<style scoped>
/*自定义滚动条*/
.list{
  position: fixed;
  top:0;
  left:0;
  right:0;
  bottom: 0;
  overflow: scroll;
  padding-top:.4rem;
  padding-bottom: .5rem;
  -webkit-overflow-scrolling: touch;
}
  .loading{
    font-size: .2rem;
    text-align: center;
    padding:.1rem 0;
  }
</style>
