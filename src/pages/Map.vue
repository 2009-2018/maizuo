<template>
     <div id="map" class="classify_UP" >
         <div class="up">
        <div class="city-index-title">
          GPS定位你所在的城市
        </div>
       <div class="city-index-detail">
         <ul class="list-unstyled" >
           <li class="city-item-detail city-item-detail-gprs">
            青岛
       </li>
       </ul>
       </div>
       <div class="hot-city">
         <div class="city-index-title" data-navid="hot">
           热门城市
         </div>
         <div class="city-index-detail">
           <ul class="list-unstyled">
             <li class="city-item-detail" v-for="item in map" >{{item.name}}</li>

           </ul>
         </div>
       </div>
       <div class="index-city">
         <div>
           <div class="city-index-title ">
             按字母排序
           </div>
           <div class="city-index-detail "  >
             <ul class="list-unstyled">
               <li class="city-item-detail"
                   v-for="item,index in letter"
                   @click="climb(index)">{{item.title}}</li>
             </ul>

           </div>
         </div>
       </div>
       <div class="classify_Down" >
       <div class="index-city-list " ref="right">
       <div  v-for="item,index in letter">
           <div class="city-index-title">
             <ul>
               <li>{{item.title}}</li>
             </ul>
           </div>
           <div class="city-index-detail"  >
             <ul class="list-unstyled"  >
               <li class="city-item-detail" v-for="item,index in letter" >{{item.name}}</li>
             </ul>

           </div>
         </div>

       </div>
       </div>
         </div>
   <Header title="选择城市"/>
     </div>

</template>

<script>
  import Bsroll from 'better-scroll'
  import Header from "./Header";


    export default {
        name: "Map",
      components: {Header},
      mounted(){
       this.scroll1 = new Bsroll('.classify_UP',{ scrollY:true, scrollX:true,click:true})
      // this.scroll2 = new Bsroll('.classify_Down',{ scrollY:true, scrollX:false,click:true})
      },
      data(){
        return {
          map:[
            {name:'北京'},
            {name:'上海'},
            {name:'广州'},
            {name:'深圳'}

            ],
          letter:[
            {title:'A',name:'安顺'}, {title:'B',name:'毕节'}, {title:'C',name:'朝阳'}, {title:'D',name:'达州'},
            {title:'E',name:'鄂尔多斯'}, {title:'F',name:'防城港'}, {title:'G',name:'广安'}, {title:'H',name:'惠州'},
            {title:'J',name:'焦作'}, {title:'K',name:'安顺'}, {title:'L',name:'安顺'}, {title:'M',name:'安顺'},
            {title:'N',name:'安顺'}, {title:'P',name:'安顺'}, {title:'Q',name:'安顺'}, {title:'R',name:'安顺'},
            {title:'S',name:'安顺'}, {title:'T',name:'安顺'}, {title:'W',name:'安顺'}, {title:'X',name:'安顺'},
            {title:'Y',name:'安顺'}, {title:'Z',name:'安顺'},
          ],
        }
      },
      methods:{

        climb(index){
         if(index==21){
           let distance = this.$refs.right.children[index].offsetTop+257;
           this.scroll1.scrollTo(0,-distance,5000)
         }else {
           let distance = this.$refs.right.children[index].offsetTop+493;
           this.scroll1.scrollTo(0,-distance,3000)
         }



        },
      }
    }
</script>

<style scoped>

  * {
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
     #map{
       margin-top: 50px;



     }

  .city-index-title{
    padding-left: 15px;
    font-size: 14px;
    line-height: 40px;
    background-color: #ebebeb;
    margin-top: -1px;
  }
     .city-index-detail {
       background-color: #fff;

     }
     .city-index-detail ul {
       margin: 0;
       min-width: 320px;
       display: flex;
       flex-wrap:wrap;

     }
     .list-unstyled {
       padding-left: 0;
       list-style: none;
       position: relative;
     }
     .city-item-detail-gprs {
       color: #e2941a !important ;
     }
     .city-item-detail {
       color: #838383;
       width: 25%;
       font-size: 16px;
       line-height: 46px;
       text-align: center;
       display: inline-block;
       cursor: pointer;
       border-bottom: #ebebeb 1px solid;

     }
      .index-city-list{
        position: absolute;
      }
  .up{position: absolute;width: 100%;height: 7000px}
</style>
