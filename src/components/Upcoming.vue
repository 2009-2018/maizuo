<template>
       <div class="upcg">
         <img :src="msgs.imgSrc">
         <div class="upcg_card_content">
           <div class="Left">
             <p>{{msgs.name}}</p>

           </div>
           <div class="Right">
             <p>{{msgs.mouth}}月{{msgs.date}}号上映</p>

           </div>
         </div>
       </div>

</template>

<script>
    export default {
        name: "Upcoming",
      props: {
        msgs: {


        }
      }
    }
</script>

<style scoped>
 .upcg{
   border-radius: 3px;
   margin-bottom: 17px;
 }
  .upcg img{
    display: block;
    width: 100%;
    height: 160px;
  }
 .upcg_card_content{
   height: 35px;
   background-color: #fff;
   padding: 10px;
 }
  .Left{float: left}
 .Left p{

   font-size: 12px;
   text-align: left;

 }
 .Right{float: right}
 .Right p{
   color: RGB(245, 162, 125);
   font-size: 12px;
   text-align: left;
   margin-right: 28px;


 }
</style>
