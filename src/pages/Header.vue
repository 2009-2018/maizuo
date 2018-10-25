<template>
  <div id="header">
    <header class="application">
      <div class="application-head">
        <nav id="toolbar" class="notybar-upside" >
          <h1>
            <a href="javascript: void 0;">
              <div class="toolbar-title-icon" @click="showNav">
                <i class="fa fa-bars" aria-hidden="true"></i>
              </div>
              <div class="toolbar-title" >{{title}}</div>
            </a>
          </h1>
          <div id="nav-right">
            <a class="city" @click="go('map')">
              <span class="city-content">青岛</span>
              <span> </span>
              <i class="fa fa-angle-down" aria-hidden="true"></i>
            </a>
            <a class="user" @click="go('mine')">
              <i class="fa fa-user-o" aria-hidden="true"></i>
            </a>
          </div>
        </nav>
      </div>
    </header>
    <div class="app_content">
      <div class="mask" v-show="isMask" @click="showNav"></div>
      <div class="menuNav" ref="nav">
        <div class="menuNav_item clearfix"
             v-for="item,index in arr"
             @click="go(item.name)">
          <span class="alignLeft">{{item.title}}</span>
          <span class="alignRight"><i class="fa fa-angle-right" aria-hidden="true"></i></span>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
    export default {
        name: "Header",
      methods:{
        showNav(){
          if(this.isMask){
            this.$refs.nav.style.left = -300+'px';
            this.isMask = false;
          }else{
            this.$refs.nav.style.left=0;
            this.isMask=true;
          }
        },
        go(name){
          if(this.isMask){
            this.$refs.nav.style.left = -300 + 'px';
            this.isMask = false;
          }
          this.$router.push({
            name:name,
          })
        }
      },

      data: function () {
        return{
          arr:[{
            title: '首页',
            name: 'home'
          },
            {
              title: '影片',
              name: 'films'
            },
            {
              title: '影院',
              name: 'cinema'
            },
            {
              title: '我的',
              name: 'mine'
            },
            {
              title: '卖座卡',
              name: 'card'
            }
          ],
          isMask: false


        }

      },
      props:{

        title: {
          type: String,
          required: false
        },
      }
    }
</script>

<style scoped>
  #header{width: 100%;height: 100%;}
  * {

    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  ul,li {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  #toolbar {
    background: #282828;
    position: fixed;
    z-index: 500;
    top: 0;
    right: 0;
    left: 0;
    width: auto;
    height: 50px;
    line-height: 50px;
    overflow: hidden;
  }

  #toolbar h1 {
    color: #fff;
    font-size: 16px;
    line-height: 50px;
    text-align: left;
    text-shadow: 0 -1px 0 rgba(0,0,0,0.8);
    width: auto;
    height: 50px;
    margin: 0 auto;
    float: left;
  }
  #toolbar h1 a {
    font-size: 16px;
    line-height: 50px;
    text-align: left;
    text-shadow: 0 -1px 0 rgba(0,0,0,0.8);
  }
  #toolbar h1 a .toolbar-title-icon {
    float: left;
    width: 48px;
    text-align: center;
    border-right: 1px solid #222;
    box-shadow: 1px 0 1px #363636;
    color: #999;
  }
  #toolbar h1 a .toolbar-title {
    padding: 0 1em;
    float: left;
    font-size: 14px;
    color: #efefef;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: inline-block;
    overflow: hidden;
  }
  #nav-right {
    float: right;
  }
  #nav-right .city {
    float: left;
    font-size: 14px;
    padding: 0 6px;
  }
  #nav-right a {
    color: #999;
  }
  #nav-right .user {
    float: left;
    font-size: 16px;
    width: 48px;
    text-align: center;
  }
  .app_content{
    flex: 1;
    width: 100%;

  }
  .mask{
    z-index: 499;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.3);
    margin-top: 50px;
  }
  .menuNav{

    z-index:999;
    position: fixed;
    top: 50px;
    left: -300px;
    transition: all .3s;
    border-top: 1px solid #333333;
    background-color: #282828;
    height: 100%;
    width: 300px;
  }
  .menuNav_item{
    line-height: 50px;
    padding: 0 15px;
    color: #ffffff;
    font-size: 18px;
    border-bottom: 1px solid #333333;
  }
  .app-view{
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .alignLeft{
    color: #9a9a9a;
    font-size: 14px;
  }
  .alignRight{
    color: #666;
    font-size: 14px;
  }
</style>
