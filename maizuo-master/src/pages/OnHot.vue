<template>
  <div class="onhot">
       <div class="main">

         <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
           <v-touch v-on:swipeleft="swiperleft" v-on:swiperight="swiperright" class="touch">
             <div class="mains" v-for="item in filmsList"  @click="go(item)">
               <div class="left">
                   <img :src="item.img">
               </div>
               <div class="mb-outline-b content-wrapper">


                 <div class="column content">
                   <div class="box-flex movie-title">
                     <div class="title line-ellipsis v3dimax_title">{{item.nm}}</div>




                   </div>

                   <div class="detail column">


                     <div class="score line-ellipsis">
                       <span  v-if="item.globalReleased" class="score-suffix">观众评 </span>
                       <span  v-if="item.globalReleased"class="grade">{{item.sc}}</span>
                       <span class="score" v-if="!item.globalReleased"><span style="font-weight: 700;
    color: #faaf00;
    font-size: 15px;">{{ item.wish }}</span> 人想看</span>
                     </div>




                     <div class="actor line-ellipsis">主演: {{item.star}}</div>





                     <div class="show-info line-ellipsis">{{item.showInfo}}</div>

                   </div>
                 </div>

                 <div class="button-block" data-id="249342">

                   <div class="btn normal"><span v-if="item.globalReleased" class="fix" data-bid="dp_wx_home_movie_btn">购票</span>

                     <div style="background:#3c9fe6;border-radius: 4px; ">
                     <span v-if="!item.globalReleased" class="appointment" >预约</span>
                     </div>
                   </div>

                 </div>

               </div>





             </div>
             <div style="text-align: center;padding: 20px;background: #fff">
               <div v-show="this.page<4">正在加载中</div>
               <div v-show="this.page>4" >我是有底线的</div>
             </div>
           </v-touch>
         </van-pull-refresh>
       </div>





  </div>



</template>

<script>
  import { mapState } from 'vuex'


    export default {
        name: "OnHot",


      data(){
        return {
          page:0,
          rows:12,
          isLoading: false
        }
      },





      activated(){


        let self = this;
        window.onscroll = function (ev) {
          let sT = document.documentElement.scrollTop || document.body.scrollTop;
          let sH = document.documentElement.clientHeight;
          let dH = document.body.scrollHeight;
          if(Math.ceil(sT+ sH)>= dH){

            ++self.page;

            let start = self.page * self.rows;  // 提取影片id 开始位置
            let end = self.page * self.rows + self.rows;  //结束位置



            let getStrArr = self.movieIdsArr.slice( start, end);

            // 假设 请求 第1页 从0页开始的
            //  1 * 12   ------  24  包括开头 不包括 末尾， 刚好12条
                 console.log(self.page)
            // 把提取出来的 id 拼接只字符串
                if(self.page<4) {
                  self.$store.dispatch('addFilms', getStrArr);

                }else {

                }


          }
        }


      },

      computed:{
        ...mapState(['filmsList','movieIdsArr','len']),


      },

      beforeRouteEnter(to,from,next){
        next(vm =>{

          if(vm.filmsList.length<=0) {

            vm.$store.dispatch('addFilms')
           console.log(vm.$store)
          }

        });
      },
      beforeRouteLeave (to, from, next) {
        window.onscroll=null;

        next()
      },
      methods:{
        go(item){
          this.$router.push({
            path:'/detail/'+item.id,

          })
        },
        onRefresh() {
          setTimeout(() => {
            this.$toast('刷新成功');


            this.isLoading = false;




          }, 1000);




        },
        swiperleft: function () {
          this.$router.push({'path':'/soon'});
        },
        swiperright: function () {
          this.$router.push({'path':'/onhot'});
        }


  },




  }

</script>

<style scoped>
.onhot{
  background: #fff;
  margin-top: -40px;
  width: calc(100vw);
  height: 100%;
  overflow: auto;
}
  .touch{
    touch-action: pan-y!important;
  }
  .main{
    width: 100%;
    height: 100%;
    background: #fff;
  }
  .left{
    float:left;
    margin-left: 15px;
  }
  .left img{
    display: block;
    width: 64px;
    height: 90px;
  }
 .content-wrapper {
    padding: 12px 14px 12px 0;
    margin-left: 90px;
    height: 90px;
    max-height: 90px;
    position: relative;
  }
  .content {
    padding-right: 5px;
    margin-right: 48px;
    overflow: hidden;
    margin-top: -10px;
  }
  .movie-title {
    max-height: 24px;
    margin-bottom: 7px;
    line-height: 24px;
    overflow: hidden;
  }
  .title {
    font-size: 17px;
    color: #333;
    font-weight: 700;
    padding-right: 5px;
    flex-shrink: 1;
  }
  .line-ellipsis {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .detail {
    box-sizing: border-box;
    overflow: hidden;
    line-height: 20px;
  }
  .grade {
    font-weight: 700;
    color: #faaf00;
    font-size: 15px;
  }
  .tab-content .list-wrap .item .detail>div+div {
    margin-top: 6px;
    line-height: 15px;
  }
  .button-block {
    font-size: 12px;
    position: absolute;
    right: 14px;
    top: 0;
    bottom: 0;
    height: 27px;
    margin: auto;
  }
  .btn {
    width: 47px;
    height: 27px;
    line-height: 28px;
    text-align: center;
    box-sizing: border-box;
    background-color: #f03d37;
    color: #fff;
    border-radius: 4px;
    white-space: nowrap;
    font-size: 12px;
    cursor: pointer;
  }
   .detail{
    font-size: 13px;
    color: #666;
  }
.content{
  border-bottom: 1px solid #D9CEC3;
  padding-bottom: 10px;
}
  .mains{
    padding-bottom: 20px;
  }
  .appointment{
    background-color: #3c9fe6;

  }
</style>
