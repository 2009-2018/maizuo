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
      <div class="more-button"  @click="go('soon')">更多即将上映电影</div>
    </div>
  </div>
</template>

<script>
  import axios from '../api/axios';
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
      },

    },
    created(){

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
    },


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
   #loading {
     top: 0;
     width: 100%;
     height: 100%;
     position: fixed;
     z-index: 100000;
     background-color: rgba(3,3,3,.9);
     background-size: 3em 3em;
   }
   .loadingIcon {
     position: absolute;
     top: 45%;
     left: 46%;
     height: 60px;
     min-width: 65px;
     transform: scale(.6,.6);
   }.loadingIcon .squareC {
      width: 70px;
    }
   .loadingIcon #square_one {
     animation: square 1s -.9s ease-in-out infinite;
   }
   .loadingIcon .square {
     width: 20px;
     height: 20px;
     background-color: #8dc21e;
     margin-right: 11px;
     float: right;
     margin-bottom: 15px;
   }
   .loadingIcon #square_two {
     animation: square 1s -.8s ease-in-out infinite;
   }
   .loadingIcon #square_three {
      animation: square 1s -.7s ease-in-out infinite;
    }
   .loadingIcon #square_four {
     animation: square 1s -.6s ease-in-out infinite;
   }
   .clear {
      clear: both;
    }
   .logoMain {
     width: 390px;
     height: 160px;
     text-align: center;
     zoom: 1.3;
     position: absolute;
     margin: 20px auto;
     left: 50%;
     top: 53%;
     margin-left: -195px;
     margin-top: -190px;
     transform: scale(.6,.6);
   }
   .logoZlContainer {
     width: 110px;
     height: 120px;
     line-height: 120px;
     position: relative;
     margin: auto;
     top: 27px;
     -webkit-animation: fandMoveLeft 2.5s 2.5s ease-in-out both;
     -ms-animation: fandMoveLeft 2.5s 2.5s ease-in-out both;
     -moz-animation: fandMoveLeft 2.5s 2.5s ease-in-out both;
   }
   .logoZlWing1 {
     background: url(https://app.izlyun.com/Resources/img/logos/1-1.png) no-repeat;
     width: 107px;
     height: 29px;
     position: absolute;
     transform: rotateX(180deg);
     -webkit-transform: rotateX(180deg);
     top: 36px;
     -webkit-animation: myWriting1 .3s .3s both;
     -ms-animation: myWriting1 .3s .3s both;
     -moz-animation: myWriting1 .3s .3s both;
   }
   .logoZlWing2 {
     background: url(https://app.izlyun.com/Resources/img/logos/1-1.png) no-repeat;
     width: 107px;
     height: 29px;
     position: absolute;
     background-position: right;
     top: 37px;
     -webkit-animation: myWriting2 .5s .5s both;
     -ms-animation: myWriting2 .5s .5s both;
     -moz-animation: myWriting2 .5s .5s both;
   }
   .logoZlhead {
     background: url(https://app.izlyun.com/Resources/img/logos/1-02.png) no-repeat;
     width: 34px;
     height: 24px;
     position: absolute;
     top: 20px;
     left: 37px;
     -webkit-animation: fandInUp .9s .9s ease-in-out both;
     -ms-animation: fandInUp 1s 1s ease-in-out both;
     -moz-animation: fandInUp 1s 1s ease-in-out both;
   }.logoZlAntenna {
      background: url(https://app.izlyun.com/Resources/img/logos/1-06.png) no-repeat;
      width: 26px;
      height: 6px;
      position: absolute;
      top: 17px;
      left: 42px;
      -webkit-animation: bounceIn 1.7s 1.7s linear both;
      -ms-animation: bounceIn 1.7s 1.7 slinear both;
      -moz-animation: bounceIn 1.7s 1.7s linear both;
    }
   .logoZlButt1 {
     background: url(https://app.izlyun.com/Resources/img/logos/1-03.png) no-repeat;
     width: 40px;
     height: 21px;
     position: absolute;
     top: 58px;
     left: 34px;
     -webkit-animation: fandInDwon .7s .7s both;
     -ms-animation: fandInDwon .7s .7s both;
     -moz-animation: fandInDwon .7s .7s both;
   }
   .logoZlButt2 {
     background: url(https://app.izlyun.com/Resources/img/logos/1-04.png) no-repeat;
     width: 37px;
     height: 18px;
     position: absolute;
     top: 74px;
     left: 35px;
     -webkit-animation: fandInDwon 1s 1s both;
     -ms-animation: fandInDwon 1s 1s both;
     -moz-animation: fandInDwon 1s 1s both;
   }.logoZlButt3 {
      background: url(https://app.izlyun.com/Resources/img/logos/1-05.png) no-repeat;
      width: 23px;
      height: 14px;
      position: absolute;
      top: 89px;
      left: 41px;
      -webkit-animation: fandInDwon 1.2s 1.2s both;
      -ms-animation: fandInDwon 1.2s 1.2s both;
      -moz-animation: fandInDwon 1.2s 1.2s both;
    }.logoWord {
       width: 200px;
       height: 50px;
       line-height: 50px;
       position: absolute;
       top: 65px;
       left: 147px;
       text-align: center;
       margin: 0 auto;
     }
   .logoFont1 {
     background: url(https://app.izlyun.com/Resources/img/logos/1-07.png) no-repeat;
     width: 48px;
     height: 40px;
     -webkit-animation: bounceIn infinite 4.1s 4.1s alternate linear both;
     -ms-animation: bounceIn infinite 4.1s 4.1s alternate linear both;
     -moz-animation: bounceIn infinite 4.1s 4.1s alternate linear both;
   }
   .logoFont2 {
     background: url(https://app.izlyun.com/Resources/img/logos/1-08.png) no-repeat;
     width: 48px;
     height: 40px;
     margin-top: -37px;
     margin-left: 50px;
     -webkit-animation: bounceIn infinite 4.3s 4.3s alternate linear both;
     -ms-animation: bounceIn infinite 4.3s 4.3s alternate linear both;
     -moz-animation: bounceIn infinite 4.3s 4.3s alternate linear both;
   }
   .logoFont3 {
     background: url(https://app.izlyun.com/Resources/img/logos/1-09.png) no-repeat;
     width: 48px;
     height: 40px;
     margin-top: -40px;
     margin-left: 97px;
     -webkit-animation: bounceIn infinite 4.7s 4.7s alternate linear both;
     -ms-animation: bounceIn infinite 4.7s 4.7s alternate linear both;
     -moz-animation: bounceIn infinite 4.7s 4.7s alternate linear both;
   }
   .logoFont4 {
     background: url(https://app.izlyun.com/Resources/img/logos/1-10.png) no-repeat;
     width: 48px;
     height: 40px;
     margin-top: -41px;
     margin-left: 143px;
     -webkit-animation: bounceIn infinite 5s 5s alternate linear both;
     -ms-animation: bounceIn infinite 5s 5s alternate linear both;
     -moz-animation: bounceIn infinite 5s 5s alternate linear both;
   }
   .process {
     position: absolute;
     color: #fff;
     background: #fff;
     width: 80%;
     height: 6px;
     border-radius: 50%;
     top: 54%;
     left: 10%;
     overflow: hidden;
   }
   .processInn {
     height: 6px;
     border-radius: 50%;
     top: 0;
     left: 0;
     background: #8dc21e;
     position: absolute;
     width: 20%;
   }
   .processCount {
     font-size: 32px;
     top: 64%;
     left: 46%;
     color: #8dc21e;
     position: absolute;
   }
</style>
