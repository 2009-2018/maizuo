<template>
  <div id="films">
    <div class="clearfix film-tab-div">
      <span class="film-span" v-for="item,index in items" @click="goPath(item,index,item.name)" :class="{active:changeIndex===index}">{{item.title}}</span>
      <div class="scroll_bar"  ref="scrollBar"></div>
    </div>
    <router-view></router-view>
  </div>

</template>

<script>
    export default {
        name: "Films",
      methods:{
        goPath(item,index,name){
          this.changeIndex=index
            this.$refs.scrollBar.style.left = 50*index + '%';


          this.$router.push({
            name:name,
          })
        },

      },
      mounted(){
       if(this.$route.path=='/willpay')
       {
         this.changeIndex=1
         this.$refs.scrollBar.style.left = 50*1 + '%';
       }
      },
      data () {

        return {
          changeIndex:0,
          l: 0,
          items: [
            {
              title: '正在热映',
              name: 'onhot'
            },
            {
              title: '即将上映',
              name: 'willplay'
            }
          ],
        }
      },

    }
</script>

<style scoped>
  body{height: 100%;}
  #films{background:#f9f9f9;height: 100%}
  .film-tab-div{
    border-bottom: solid #fe6e00 1px;
    margin: 50px 15px;
    position: relative;
  }
  .scroll_bar{
    position: absolute;
    height: 0;
    border-top: 2px solid #fe6e00;

    width: 50%;
    bottom: 0;
    left: 0;
    transition: 0.2s;
  }
  .film-span{
    float: left;
    width: 50%;
    height: 100%;
    text-align: center;
    font-size: 16px;
    line-height: 46px;
    color: #6a6a6a;
    cursor: pointer;
  }
  .active{color:#fe6e00}
</style>
