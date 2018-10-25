<template>
  <div class="home">
    <div class="swiper-container ">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item,index in arr" :key="index">
          <img :src="item" alt="">
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <div>

    </div>
    <div class="home_nowPlaying">
      <Fc v-for="item,index in cArr" :msg="item" :key="index"></Fc>
    </div>
    <div class="more-button" @click="go('onhot')">更多热映电影</div>
    <div>
      <div class="dividing-line" >
        <div class="upcoming" >即将上映</div>
      </div>

    </div>
    <div class="home_up">
    <Upcoming v-for="item,index in UArr" :msgs="item" :key="index">

    </Upcoming>
      <div class="more-button"  @click="go('willplay')">更多即将上映电影</div>
    </div>
  </div>
</template>

<script>
  import  Fc from '../components/Fc'
  import  Upcoming from '../components/Upcoming'
  import Swiper from 'swiper'
  export default {
    name: 'Home',
    methods:{
      go(name){
        this.$router.push({
          name:name,
        })
      }
    },
    mounted(){
      let  mySwiper = new Swiper('.swiper-container', {
        autoplay: true,//可选选项，自动滑动
        // 如果需要分页器
        speed: 800,
        loop : true,
        autoplay: {
          disableOnInteraction: false
        }

      })
      axios.get('/maizuo/v4/api/billboard/home').then(function(data){
        self.list=self.list.concat(data.data.data.films);

      })
      let self = this;
    },
    data(){
      return{

        arr:[
          'https://pic.maizuo.com/h5PicUpload/1c5cf9b1335d65773d4eab26dce55a30.jpg',
          'https://pic.maizuo.com/h5PicUpload/682d857e725aa09088aa6a0038a17a40.jpg',
          'https://pic.maizuo.com/h5PicUpload/cd58f83ad0c80c787af7699610b48303.jpg',
          'https://pic.maizuo.com/h5PicUpload/062a965ab71db31fe0b7ad6f8c529935.jpg',


        ],
        cArr: [
          {
            imgSrc: 'https://pic.maizuo.com/usr/movie/2d37947e99fb26433bd5e784161d79ff.jpg',
            name: '无双',
            score: '8.0',
            num: 4,
            people: 33
          },
          {
            imgSrc: 'https://pic.maizuo.com/usr/movie/9924c088447d978f83e9f1351d4210af.jpg',
            name: '影',
            score: '8.4',
            num: 4,
            people: 0
          },
          {
            imgSrc: 'https://pic.maizuo.com/usr/movie/84dfa5f936286275f4d094c7a0dc8614.jpg',
            name: '李茶的姑妈',
            score: '8.0',
            num: 4,
            people: 0
          },
          {
            imgSrc: 'https://pic.maizuo.com/usr/movie/fe7b48caf03a59e81c8c06a16abb33ca.jpg',
            name: '找到你',
            score: '6.5',
            num: 4,
            people: 0
          },
      {
        imgSrc: 'https://pic.maizuo.com/usr/movie/2a136488333756915654d214f9632966.jpg',
          name: '悲伤逆流成河',
        score: '8.0',
        num: 4,
        people: 0
      }
        ],
        UArr: [
          {
            imgSrc: 'https://pic.maizuo.com/usr/movie/7ff0f3e00ebf27860d006747fbcb1382.jpg',
            name: '玛雅蜜蜂历险记',
            mouth:9,
            date:30

          },
          {
            imgSrc: 'https://pic.maizuo.com/usr/movie/acec9ff6349101daae9a75fbf913688a.jpg',
            name: '午夜幽灵',
            mouth:9,
            date:30

          },
          {
            imgSrc: 'https://pic.maizuo.com/usr/movie/8a1b53acefe2e6277f1d32d3f430f431.jpg',
            name: '中国蓝盔',
            mouth:9,
            date:30

          },

        ]

      }
    },
    components:{
      Fc,
      Upcoming
    }

  }
</script>

<style scoped>

   .home{padding-top: 50px;}
   .home_nowPlaying{
     padding: 20px;
     padding-bottom:0;
   }
   .more-button {
     width: 160px;
     height: 30px;
     border: 1px solid #aaa;
     border-radius: 15px;
     margin: 0px auto 30px;
     text-align: center;
     line-height: 30px;
     font-size: 12px;
     color: #616161;
     cursor: pointer;
   }
   .dividing-line {
     position: relative;
     margin-top: 30px;
     margin-bottom: 30px;
     border-bottom: 1px solid #a8a8a8;
   }
   .upcoming {
     width: 65px;
     height: 20px;
     margin: 0 auto;
     margin-bottom: -10px;
     border-radius: 5px;
     font-size: 10px;
     line-height: 20px;
     text-align: center;
     color: #eee;
     background-color: #a7a7a7;
   }
.home_up{
  padding: 20px;
  padding-bottom:0;
}
</style>
