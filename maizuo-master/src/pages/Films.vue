<template>
  <div id="films" >

    <div class="clearfix film-tab-div">
      <span class="film-span" v-for="item,index in items" @click="goPath(item,index,item.name)" :class="{active:changeIndex===index}">{{item.title}}</span>
      <div class="scroll_bar"  ref="scrollBar"></div>
    </div>



<transition :name="transitionName">
  <keep-alive>

     <router-view v-if="$route.meta.keepAlive" class="router"@click="onClick()" ></router-view>
  </keep-alive>
</transition>


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
      onClick(){



      },
     activated(item,index){
       if(this.$route.path=='/soon') {
         let index=1;
         this.changeIndex =index

         this.$refs.scrollBar.style.left = 50 * index+ '%';
       }else {
         let index=0
         this.changeIndex=index


         this.$refs.scrollBar.style.left = 50 * index+ '%';
         this.$router.isBlack=true;
       }
     },
      updated(item,index){


        if(this.$route.path=='/onhot'){
          let index=0
          this.changeIndex=index

          this.$refs.scrollBar.style.left = 50*index + '%';
          this.$router.isBlack=true;
        }else {
          let index=1
          this.changeIndex=index

          this.$refs.scrollBar.style.left = 50*index + '%';
        }
      },
      beforeRouteUpdate (to, from, next) {
        let isBack = this.$router.isBack
        console.log(isBack)
        if (this.isformRules) {
          this.transitionName = 'fade'
        } else {
          if (isBack&&this.$router.path=='/soon') {
            this.transitionName = 'slide-right'
          } else {

            this.transitionName = 'slide-left'
          }
        }
        this.$router.isBack = true
        this.isformRules = false
        next()
      },
      data () {

        return {
          transitionName:'slide-right',
          changeIndex:0,
          l: 0,
          items: [
            {
              title: '正在热映',
              name: 'onhot',

            },
            {
              title: '即将上映',
              name: 'soon',

            }
          ],
        }
      },

    }
</script>

<style scoped>
  body{height: 100%;}
 .router{
   transition: all 0.8s ease;
   position: absolute;
   width: 100%;

 }
 .slide-left-enter,
 .slide-right-leave-active{
   opacity: 0;
   transform: translate(100%,0);
 }
  .slide-right-enter,
  .slide-right-leave-active{
    opacity: 0;
    transform: translate(-100%,0);
  }
  #films{background:#fff;height: 100%}
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
