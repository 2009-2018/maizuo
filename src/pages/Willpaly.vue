<template>
  <div id="willplay">
    <div class="willplay-film" v-for="item in list" @click="go(item)">
      <img :src="item.poster.origin">
      <div class="willContent">
        <div class="clearfix">
          <span class="alignLeft">{{item.name}}</span>

            <div class="film-next-arrow">
                 <i class="fa fa-angle-right" aria-hidden="true"></i>
            </div>

        </div>
        <div>
          <div class="film-intro">{{item.intro}}</div>
        </div>
        <div class="film-counts" >
          <span class="film-count-color1">{{time| formatDate}}
          </span>
          <span>上映</span>
          <span class="film-count-color1">星期日</span>
        </div>
      </div>

    </div >
    <div style="text-align: center;padding: 20px">
      <i class="fa fa-spinner fa-spin fa-3x fa-fw" v-show="leng>= 7"></i>
      <div v-show="leng<7">我是有底线的</div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {

    name: "Willpaly",
    data(){
      return {
        page:1,

      }
    },
    methods:{
      go(item){
        this.$router.push({
          path:'/detail/'+item.id,

        })
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
    mounted(){


      // axios.get('/maizuo/v4/api/film/coming-soon?page=2&count=7').then(function(data){
      //   self.list=self.list.concat(data.data.data.films);
      // })
      let self = this;
      window.onscroll = function (ev) {
        let sT = document.documentElement.scrollTop || document.body.scrollTop;
        let sH = document.documentElement.clientHeight;
        let dH = document.body.scrollHeight;
        if(Math.ceil(sT+ sH)>= dH&&self.list.length<=69){
          ++self.page;

          self.$store.dispatch('addList', self.page);



        }
      }
    },
    computed:{
      ...mapState(['list','leng','time']),
    },
    beforeRouteEnter(to,from,next){
      next(vm =>{
        if(vm.list.length<=0) {
          vm.$store.dispatch('addList', 1)
          console.log(vm.list)
        }
      });
    },

  }


</script>

<style scoped>
  #willplay{
    margin-top: -50px;
    background-color:#f9f9f9;
  }
  .willplay-film{
    width: 100%;
    padding: 20px 13px;
    border-bottom: dashed 1px #c9c9c9;
    cursor: pointer;

  }
  .willContent{
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
  .willplay-film img{
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
    color: #ffb375;
    font-size: 12px;
  }
  .film-count-color1 {
    color: #ffb375;
  }
  .film-next-arrow {
    float: right;
    text-indent: 15px;
    line-height: 29px;
    color: #c6c6c6;
  }
</style>
