<template>
  <div class="fc" >
    <img :src="msg.imgSrc" alt="">
    <div class="fc_card_content clearfix">
      <div class="alignLeft">
        <p>{{msg.name}}</p>
        <p class="conut">{{msg.num}}家电影院上映{{msg.people}}人购票</p>
      </div>
      <div class="alignRight">{{msg.score}}</div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Fc",

        props: {
           msg: {


           }
        }
    }
</script>

<style scoped>
  .fc{
    border-radius: 3px;
    margin-bottom: 17px;
  }
  .fc img{
    display: block;
    width: 100%;
    height: 160px;
  }
  .fc_card_content{
    height: 50px;
    background-color: #fff;
    padding: 10px;
  }
  .fc_card_content div:first-of-type p{

    font-size: 12px;
    text-align: left;
  }
  .fc_card_content div:last-of-type{
    color: #f78360;
    font-size: 18px;
    text-align: left;
  }
  .conut{font-size: 8px;
    color: #9a9a9a;
    line-height: 15px;
   }
</style>
