<template lang="html">
  <div class="output">
    <div class="item-qd-txt"  v-for = "text in msgtxt" >
      <router-link :to="{path:'/gankDetail',query:{url:text.url,title:text.desc}}" >
        <div class="top">
          {{text.desc}}
        </div>
        <div class="bottom">
          <div class="name">
              作者：
              <span class="nm">
                {{text.who}}
              </span>
              <img src="../assets/lightbulb_idea.png" alt="">
          </div>
          <div class="date">
            {{text.publishedAt.substring(0,10)}}
          </div>
        </div>
      </router-link>
    </div>
  </div>

</template>

<script>
export default {
  name: 'homeItem',
  props:{
    'msgtxt':Array
  }
}
</script>

<style scoped>
.output{
  font-size: .18rem;
}
.item-qd-txt{
  padding:0 .15rem;
  margin-top:.25rem;
  line-height:.22rem;
  padding-bottom:.05rem;
  border-bottom: .019rem dashed #504E82;
}
.item-qd-txt a{
  text-decoration: none;
}
.top{
  color:#3F3636;
}
.bottom{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding:.05rem;
  color:#A0A5AC;
  font-size:.16rem;
}
.bottom .name img{
  width:.25rem;
  height:.18rem;
}
</style>
