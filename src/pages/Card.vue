<template>
  <div id="card">
    <Header title="查询/绑定/激活卖座卡"/>
    <section class="card-query">
      <div class="clearfix card-tab-div">
        <span id="card-span" class=" active" >卖座卡</span>
        <span id="card-span1" class="card-span">电子卖座卡</span>
        <!--<div class="scroll_bar"  ref="scrollBar"></div>-->

      </div>
      <div class="material" >
        <div style="display:block;" class="ka">
        <label  >卡号：</label>
        <input type="text" placeholder="请输入卡号">
        <div class="line"></div>
      </div>
        <div style="display: none" class="ka1">
          <label>卡号：</label>
          <input type="text" placeholder="请输入电子卖座卡号">
          <div class="line"></div>
        </div>
        <div class="ka" style="display: block">
          <label  >密码：</label>
          <input type="text" placeholder="请输入密码">
          <div class="line"></div>
        </div>
        <button class="card_query_bottom center-block">查询</button>
      </div>
    </section>
  </div>
</template>

<script>
    import Header from "./Header";
    export default {
        name: "Card",
      components: {Header},
      // methods:{
      //   goPath(item,index,name){
      //     this.changeIndex=index
      //     this.$refs.scrollBar.style.left = 50*index + '%';
      //   },
      //
      // },
      created(){
        StringBuffer();
      }
    }
    function StringBuffer() {
      $(function(){
        $('.card-tab-div span').click(function(){
          $('.card-tab-div span').attr('class' ,'')
          $('.card-tab-div span').eq($(this).index()).attr('class', 'active');

        })
        $('#card-span').click(function(){
          $('.ka').css('display','block')
          $('.ka1').css('display','none')
        })
        $('#card-span1').click(function(){
          $('.ka1').css('display','block')
          $('.ka').css('display','none')
        })
      })
    };

</script>

<style scoped>
     #card{margin-top:50px}
    .card-query {
      font-size: 14px;
      position: absolute;
      min-height: 100%;
      width: 100%;
      background-color: #fcfcfc;
    }
    .card-tab-div{
      border-bottom: solid #fe6e00 1px;
      position: relative;
      background-color: #fff;
      width: 100%;
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
    #card-span{
      float: left;
      width: 50%;
      height: 100%;
      text-align: center;
      font-size: 16px;
      line-height: 46px;
      color: #6a6a6a;
      cursor: pointer;

    }
     #card-span1{
       float: left;
       width: 50%;
       height: 100%;
       text-align: center;
       font-size: 16px;
       line-height: 46px;
       color: #6a6a6a;
       cursor: pointer;

     }
     .material {
       margin-top: 20px;
       padding: 0 32px;
     }
     .material div {
       margin-top: 30px;
     }
     .material label {
       font-weight: normal;
       line-height: 34px;
       margin: 0 15px 0 10px;
       float: left;
     }
     .material input {
       border: none;
       background-color: transparent;
       height: 34px;
       width: 55%;
       font-size: 14px;
       vertical-align: top;
       border: none;
       outline: medium;
     }
     .material .line {
       border-width: 0px 1px 1px;
       border-style: solid;
       border-color: #ccc;
       height: 5px;
       margin-top: -5px;
     }
     input::-webkit-input-placeholder {

       color: #ccc;

     }
     .card_query_bottom {
       width: 160px;
       margin: 45px 70px 30px;
       border-radius: 18px;
       background-color: #fe8233;
       height: 36px;
       color: #fff;
       font-size: 14px;
       line-height: 36px;
       border: none;
     }
     .active{color:#fe6e00 !important;border-bottom: 2px solid #fe6e00;}

</style>
