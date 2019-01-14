<template>

  <div id="detail"  >
    <Header :title="name" :flag="flag"></Header>
      <div class="movie-page" v-for="item in filmArr"  >

        <section class="movie-header" >

          <div class="movie" >
            <div class="movie-background" :style="{ 'background-image': 'url(' + item.img + ')' }">

            </div><div class="movie-filter" ></div><div class="movie-container clearfix" >
            <div class="movie-cover movie-with-video" >
              <a href="/movie/249342/preview?_v_=yes" class="link" >
                <img class="img noneBg" :src="item.img" ></a>
            </div><div class="movie-content" ><div class="movie-name text-ellipsis">
            <span data-reactid=".sabyd7hfh0.4.0.0.2.1.0.0"> </span><span data-reactid=".sabyd7hfh0.4.0.0.2.1.0.1">{{item.nm}}</span>
          </div><div class="movie-ename text-ellipsis" >{{item.enm}}</div>
            <div class="movie-score" ><div class="released-score" data-reactid=".sabyd7hfh0.4.0.0.2.1.2.0">
              <div class="rating" ><img class="img noneBg" src="//ms0.meituan.net/canary/img/star-full-new.png" >
                <img class="img noneBg" src="//ms0.meituan.net/canary/img/star-full-new.png">
                <img class="img noneBg" src="//ms0.meituan.net/canary/img/star-full-new.png" >
                <img class="img noneBg" src="//ms0.meituan.net/canary/img/star-full-new.png" >
                <img class="img noneBg" src="//ms0.meituan.net/canary/img/star-half-new.png" >
                <span >{{item.sc}}</span></div><div class="score-num" ><span data-reactid=".sabyd7hfh0.4.0.0.2.1.2.0.1.0">(</span>
              <span >{{item.snum/10000}}万</span>
              <span >人评分)</span></div></div></div><div class="movie-category" ><span class="movie-cat" >{{item.cat}}</span><div class="movie-tag" >
              <div class="union-tag" >
                <span class="tag-d" >3D</span>
                <span class="tag-imax" >IMAX</span></div></div></div>
            <div class="movie-content-row" ><span >{{item.fra}}</span><span > / </span><span ><span >{{item.dur}}</span><span > 分钟</span></span>
              <span ></span></div>
            <div class="movie-content-row" >{{item.rt}}</div></div>

          </div>
          </div>
           </section>

              <section class="se">
                <a href="#" class="link btn btn-block btn-pay" ><span>特惠购票</span></a>
                <div class="text-expander-content" style="padding-top: 1rem">
                  <h1 style="text-indent: 0.3rem;font-size: 1.2rem;color: #e54847">
                    影片简介:
                  </h1>
                  <p style="font-size: 1.2rem;margin-left: .3rem;color:black">{{item.dra}}</p></div>

              </section>

      </div>

  </div>

</template>

<script>
  import axios from 'axios'
  import Header from "./Header";
    export default {
        name: "Detail",
      components: {Header},
      data(){
        return {
          actor:[],
          time:[],
          filmArr:[],
          name:"",
          flag: 1,
        }
      },
      beforeRouteEnter (to, from, next) {
        next( vm => {
          vm.$http.get('/maoyan/ajax/detailmovie?movieId='+vm.$route.params.id).then(function (data)


          {

            console.log(data)
            let tempArr=[];
            if(data.data.detailMovie){
              tempArr = tempArr.concat(data.data.detailMovie);


            }else {
              tempArr = tempArr.concat(data.data.coming);
            }
            tempArr.map(item => {

              item.img = item.img.replace('w.h', '128.180');


            });

            vm.filmArr = vm.filmArr.concat(tempArr);
            console.log(tempArr)
            vm.name=vm.name.concat(tempArr[0].nm)


            next()
          }).catch(function (err) {
            vm.$router.push
          });
        })
      },
 updated(){
          console.log(this.filmArr)
 },
      props:[],


    }
</script>

<style scoped>
  #header{
    background: #fff;
  }
       #detail{
         margin-top: 50px;




       }
       .movie-page {


         position: relative;
         z-index: 1;
         margin: 0;
         color: #555;
         min-width: 3.1rem;

         -webkit-user-select: none;
         -webkit-tap-highlight-color: rgba(255,255,255,0);
         font: 14px/1.5 Arial,Helvetica,sans-serif;
       }
       .movie-header {
         padding: 0;
         background: #f8f8f8;
         border-bottom: none;
       }
       .movie {
         color: #fff;
         padding: 1rem;
         line-height: 2;
         overflow: hidden;
         height: 12rem;
         font-size: 3rem;
         position: relative;
         box-sizing: border-box;
         -webkit-filter: blur(0);
         filter: blur(0);
       }
       .movie-background {
         top: 0;
         left: 0;
         right: 0;
         bottom: 0;
         width: 100%;
         z-index: 0;
         position: absolute;
         filter: blur(.6rem);
         -webkit-filter: blur(.6rem);
         background-size: cover;
         background-image: gray;
         background-repeat: no-repeat;
         background-position-y: 40%;
       }
       .movie-filter {
         top: 0;
         left: 0;
         right: 0;
         bottom: 0;
         width: 100%;
         position: absolute;
         background-color: #40454d;
         opacity: .55;
       }
       .movie-container {
         z-index: 1;
         position: relative;
       }
       .clearfix:before, .clearfix:after {
         content: " ";
         display: table;
       }
       .movie-cover {
         float: left;
         filter: blur(0);
         font-style: initial;
         -webkit-filter: blur(0);
         border: solid 1px #f0f2f3;
         position: relative;
         background: #c1c1c1 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAwFBMV…mytghhgpB+Cgix7I1gjStOqq8c5jhkmLqiJ0McuoXq6j92ZWbxiZAstgAAAABJRU5ErkJggg==) no-repeat center center;
       }
       .link {
         cursor: pointer;
         text-decoration: none;
         -webkit-tap-highlight-color: rgba(0,0,0,0);
         tap-highlight-color: rgba(0,0,0,0);
       }
       .img.noneBg {
         background: none;
       }
       .movie-cover img {
         width: 7rem;
         height: 10rem;
         vertical-align: top;
       }
       .img {
         border: 0;
         display: inline-block;
         background: #f5f5f5 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAYAAAEGkgCiAAAAGXRFW…yfOv/JmZQYchQTcch2XTuAx4IoGlRqlTgFOA3CBANUFk73AXANIMtuS9E+AAAAAElFTkSuQmCC) no-repeat 50%;
         background-size: 50%;
       }
       .movie-content {
         z-index: 2;
         padding-left: 8rem;
         height: 3rem;
       }
       .movie-name {
         font-size: 1rem;
         line-height: 1.2;
         margin-top: .06rem;
         margin-bottom: .08rem;
       }
       .text-ellipsis {
         text-overflow: ellipsis;
         white-space: nowrap;
         overflow: hidden;
       }
       .movie-ename {
         font-size: .22rem;
         opacity: .8;
         margin-bottom: .12rem;
       }
       .movie-score {
         color: #ff9900;
         font-size: .32rem;
         margin-bottom: .12rem;
       }
       .movie-score .released-score {
         padding-top: .02rem;
         color: #ffc600;
       }
       .movie-score .rating {
         font-size: .36rem;
       }
       .rating {
         display: inline-block;
         line-height: 1;
       }
       .rating img:first-child {
         margin-left: 0;
       }
       .rating img {
         width: .36rem;
         height: .36rem;
         margin-left: .06rem;
         vertical-align: text-top;
       }
       .movie-score .released-score .score-num {
         color: #fff;
         opacity: .7;
         font-size: .18rem;
         margin-top: .08rem;
         margin-bottom: .16rem;
       }
       .movie-category {
          font-size: .24rem;
          margin-bottom: .12rem;
        }
       .movie-category .movie-cat {
         opacity: .7;
         vertical-align: middle;
       }
       .movie-tag {
         display: inline-block;
         font-size: 0;
         margin-left: .06rem;
       }
       .movie-tag .tag-d {
         display: inline-block;
         width: .32rem;
         vertical-align: bottom;
         background-color: rgba(255,255,255,0.4);
         border-top-left-radius: 2px;
         border-bottom-left-radius: 2px;
       }
       .movie-tag .tag-d, .movie-tag .tag-d-only, .movie-tag .tag-imax {
         box-sizing: border-box;
         font-size: .16rem;
         height: 13px;
         color: #fff;
         line-height: 13px;
         text-align: center;
       }
       .movie-tag .tag-imax {
         display: inline-block;
         width: .54rem;
         border: .02rem solid rgba(255,255,255,0.4);
         line-height: 11px;
         border-top-right-radius: 2px;
         border-bottom-right-radius: 2px;
       }
       .movie-content-row {
          font-size: .24rem;
          opacity: .7;
          margin-bottom: .12rem;
        }
       .movie-content-row {
         font-size: .24rem;
         opacity: .7;
         margin-bottom: .12rem;
       }
       .btn {
         margin: 0 0 .2rem;
       }
       .btn-block {
         display: block;
         margin: .2rem;
         padding: .2rem;
       }
       .btn {
         color: white;
         cursor: pointer;
         font-size: 16px;
         padding: .13rem .24rem;
         display: inline-block;
         text-align: center;
         border-radius: 4px;
         line-height: 2.2;
         background: #e54847;
         color: #fff;
         text-decoration: none;
         width: 20rem;
         height: 2.5rem;
         margin-top: 2rem;
         margin-left: 1rem;

       }

</style>
