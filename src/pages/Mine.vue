<template>
    <div id="mine">
      <Header title="个人主页"/>
      <section class="center-home-view">
        <div class="center-header-wrap" >
          <header >
            <img class="avatar" src="https://pic.maizuo.com/usr/default/maizuomoren66.jpg">
            <div class="detail">
            <p class="username">手机用户1548</p>
            <p class="email">ID:220454224</p>
              <p class="operation" @click="go('login')">退出</p>
            </div>
          </header>
        </div>
        <section class="center-nav">
          <div class="menu-wrapper" v-for="item in arr">
            <div class="menu center-block">
              <i class="fa fa-heart-o" aria-hidden="true"></i>
              <span class="title">{{item.title}}</span>
              <div class="pull-right">
                <span class="value">0</span>
                <span> 张</span>
                <i class="fa fa-angle-right" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </section>
      </section>

    </div>
</template>

<script>
    import Header from "./Header";
    export default {
        name: "Mine",
      components: {Header},
      beforeRouteEnter(to,from,next){
          next( vm => {
            if(!vm.$store.state.isLogin){
                vm.$router.replace({name: 'login'})
              }else {
                vm.$router.replace({name: to.name})
              }
          })
      },
      methods:{
        go(name){
          window.location.reload()
          this.$router.push({
            name:name,


          })
        }
      },
      data(){
          return{
            arr:[
              {title:'影票订单',num:0},
              {title:'影票代付订单',num:0},
              {title:'商城订单',num:0},
              {title:'我的现金券',num:0},
              {title:'账号余额',num:0},
              {title:'我的卖座卡',num:0},
              {title:'设置',num:0},

            ],
          }
      },
    }

</script>

<style scoped>
  #mine{
    padding:50px 0 0 ;
  }
  .center-home-view, .setting-view {
    position: absolute;
    height: 100%;
    width: 100%;
  }
 .center-header-wrap {
    background-color: #303030;
    color: #fff;
  }
  .center-header-wrap header{
    padding: 36px 12px 24px 10%;
    overflow: hidden;
  }
  .center-header-wrap header img{
    width: 92px;
    height: 92px;
    border-radius: 50%;
    margin-right: 14px;
    float: left;
  }
  .username{
    font-size: 14px;
  }
  .email{
    font-size: 12px;
    color: #fff;
  }
  .operation{
    font-size: 12px;
    color: #ffbd80;
    margin-top: 0;
    text-decoration: underline;
  }
  .detail{
    float: left;
    margin-top: 16px;
  }
  p {
    margin: 0 0 10px;
    margin-bottom: 2px;}
  .menu-wrapper{
    width: 100%;
    margin: 14px 0;
    line-height: 59px;
    background-color: #fff;
    cursor: pointer;
    font-size: 12px;
    color: #222;
  }
  .menu{
    margin:0 12px;
  }
  .fa-heart-o{
    color: #7bcdcc;
    font-size: 16px;

  }
  .title{
    margin-left: 9px;
    line-height: 35px;
    vertical-align: inherit;
  }
  .pull-right{
    float: right !important;
  }
  .value{
    color: #e7a858;
  }
  .fa-angle-right{
    color: #bdbdbd;
    font-size: 16px;
  }
  .center-nav .menu-wrapper:nth-child(4){
    margin: 0 0px!important;
  }
  .center-nav .menu-wrapper:nth-child(5){
    margin: 0 0px!important;
  }
  .center-nav .menu-wrapper:nth-child(6){
    margin: 0 0px!important;
  }
</style>
