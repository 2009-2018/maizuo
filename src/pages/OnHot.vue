<template>

  <div id="onhot">
    <div class="onHot-film" v-for="item in filmsList"  @click="go(item)">
      <img :src="item.poster.origin">
      <div class="hotContent">
        <div class="clearfix">
          <span class="alignLeft">{{item.name}}</span>
          <span class="alignRight"><div class=" film-grade">{{item.grade}} </div>
            <div class="film-next-arrow">
                 <i class="fa fa-angle-right" aria-hidden="true"></i>
            </div>

          </span>
        </div>
        <div>
          <div class="film-intro">{{item.intro}}</div>
        </div>
        <div class="film-counts" >
          <span class="film-count-color1">{{item.cinemaCount}}
          </span>
          <span>家影院上映</span>
          <span class="film-count-color1">{{item.watchCount}}</span>
          <span>人购票  </span>
        </div>
      </div>

    </div >
    <div style="text-align: center;padding: 20px">
      <i class="fa fa-spinner fa-spin fa-3x fa-fw" v-show="len >= 7"></i>
      <div v-show="len<7">我是有底线的</div>
    </div>
  </div>

</template>

<script>
  import { mapState } from 'vuex'
  import Header from "./Header";
    export default {
        name: "OnHot",
      components: {Header},
      methods:{
          go(item){
            this.$router.push({
              path:'/detail/'+item.id,

            })
          }
      },
      data(){
        return {
           page:1,

        }
      },
      mounted(){


        // axios.get('/maizuo/v4/api/film/now-playing?page=1&count=7').then(function(data){
        //   self.list=self.list.concat(data.data.data.films);
        // })

        let self = this;

        window.onscroll = function (ev) {
          let sT = document.documentElement.scrollTop || document.body.scrollTop;
          let sH = document.documentElement.clientHeight;
          let dH = document.body.scrollHeight;
          if(Math.ceil(sT+ sH)>= dH&&self.filmsList.length<=28){
            ++self.page;

                self.$store.dispatch('addFilms', self.page);
            console.log(self.filmsList)

          }
        }
      },
      computed:{
        ...mapState(['filmsList','len']),

      },

      beforeRouteEnter(to,from,next){
        next(vm =>{
             if(vm.filmsList.length<=0) {
               vm.$store.dispatch('addFilms', 1)
               console.log(vm.filmsList)
             }
        });
      }
    }
</script>

<style scoped>
  #onhot{
    margin-top: -50px;
    background-color:#f9f9f9;
  }
  .onHot-film{
    width: 100%;
    padding: 20px 13px;
    border-bottom: dashed 1px #c9c9c9;
    cursor: pointer;

  }
  .hotContent{
    display: inline-block;
    vertical-align: middle;
    width: calc(100% - 80px);
    padding-left: 10px;
  }
  .alignLeft{
    font-size: 16px;
    line-height: 32px;
    color: #000;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .onHot-film img{
    display: inline-block;
    vertical-align: middle;
    width: 60px;
  }
  .film-grade {
    font-size: 16px;
    line-height: 32px;
    color: #fc7103;
  }
  .film-intro {
    height: 24px;
    line-height: 24px;
    color: #8e8e8e;
    font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    display: inline-block;
  }
  .film-counts {
    line-height: 24px;
    color: #8e8e8e;
    font-size: 12px;
  }
  .film-count-color1 {
    color: #8aa2bf;
  }
  .film-next-arrow {
    float: right;
    text-indent: 15px;
    line-height: 29px;
    color: #c6c6c6;
    margin-top: -32px;
  }
</style>
