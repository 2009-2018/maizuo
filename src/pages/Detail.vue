<template>
  <div id="detail">
    <section class="content film-view" v-for="item in  filmData">
      <Header :title="item.name"/>
      <div class="film-img-wrap" >
        <img :src="item.cover.origin" style="width: 100%; transition: all 1.2s ease 0s; opacity: 1;">
      </div>
      <div class="film-intro" >
        <div class="film-word1" >影片简介
        </div>
        <div class="film-word2">
          <span >导&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演：
          </span><span >{{item.director}}</span></div>
        <div class="film-word2" >
          <span>主&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演：
          </span><span v-for="item in  actor" >{{item.name}} | </span>
        </div><div class="film-word2">
        <span>地区语言：</span>
        <span>{{item.nation}}</span>
        <span>(</span>
        <span>{{item.language}}</span>
        <span>)</span></div>
        <div class="film-word2" >
          <span>类&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;型：</span>
          <span>{{item.category}}</span></div>
        <div class="film-word2">
          <span>上映日期：</span>
          <span>{{time[0] | formatDate}}</span></div>
        <div class="film-word3" > {{item.synopsis}}</div></div>
      <div class="operation"><button class="cpn-primary-button ">立即购票</button></div>
    </section>

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
          filmData: [],
          actor:[],
          time:[]

        }
      },
      filters: {
        formatDate: function (value) {
          let date = new Date(value);
          let MM = date.getMonth() + 1;
          MM = MM < 10 ? (MM) : MM;
          let d = date.getDate();
          d = d < 10 ? ('0' + d) : d;
          return   MM + '月' + d+'日'
        }
      },

      props:[],
      beforeRouteEnter (to, from, next) {
        next( vm => {
          vm.$http.get('/maizuo/v4/api/film/'+vm.$route.params.id).then(function (data)


          {
            vm.filmData=vm.filmData.concat(data.data.data.film)
            vm.actor=vm.actor.concat(data.data.data.film.actors)
            vm.time=vm.time.concat(data.data.data.film.premiereAt)
             next()
           }).catch(function (err) {
              vm.$router.push
           });
        })
          }

    }
</script>

<style scoped>
       #detail{
         margin-top: 50px;
       }
       .content {
         padding: 0 !important;
         margin: 0 auto !important;
       }
       .film-view .film-img-wrap {
         overflow: hidden;
       }
       .film-word1 {

         margin: 16px auto;
         border-left: 16px solid RGB(228, 200, 156);
         font-size: 16px;
         padding-left: 4px;
       }
       .film-word2 {
         font-size: 12px;
         height: 18px;
         overflow: hidden;
         margin-bottom: 10px;
         padding-left: 20px;
       }
       .film-word3 {
         font-size: 12px;
         text-overflow: ellipsis;
         margin-bottom: 80px;
         padding-left: 20px;
         padding-right: 20px;
         line-height: 20px;
       }
       .operation {
         position: fixed;
         left: 0;
         bottom: 20px;
         width: 100%;
         text-align: center;
       }
       .cpn-primary-button {
         font-size: 14px;
         min-width: 156px;
         height: 36px;
         line-height: 36px;
         border: none;
         background-color: #fe8233;
         padding: 0;
         margin: 0;
         border-radius: 18px;
         color: #fff;
         -webkit-transition: 0.5s ease;
       }
</style>
