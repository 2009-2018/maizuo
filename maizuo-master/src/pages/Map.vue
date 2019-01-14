
<template>

     <div id="map" class="classify_UP" >


       <div class="up">
        <div class="city-index-title">
          GPS定位你所在的城市
        </div>
       <div class="city-index-detail">
         <ul class="list-unstyled" >

           <li class="city-item-detail city-item-detail-gprs uu" @click="go" style="width: 40%">
         正在获取当前城市...
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
       <div id="container"> </div>
       <keep-alive> <Header title="卖座电影" :map="m"  /></keep-alive>

     </div>

</template>

<script>

  import Bsroll from 'better-scroll'
  import Header from "./Header";


    export default {
        name: "Map",
      components: {Header},
      data(){
        return {
          m:"",
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


      mounted(){
        let self=this
        let tempArr=[]

       this.scroll1 = new Bsroll('.classify_UP',{ scrollY:true, scrollX:true,click:true})
      // this.scroll2 = new Bsroll('.classify_Down',{ scrollY:true, scrollX:false,click:true})
        var map = new  AMap.Map('');  //不需要在容器里显示城市地图， 第一个参数要只传一个空字符串

         map.plugin('AMap.Geolocation',async function() {
           console.log( self.m)
          var geolocation = new AMap.Geolocation({
            // 是否使用高精度定位，默认：true
            enableHighAccuracy: true,
            // 设置定位超时时间，默认：无穷大
            timeout: 10000,


            // 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
            buttonOffset: new AMap.Pixel(10, 20),
            //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
            zoomToAccuracy: true,
            //  定位按钮的排放位置,  RB表示右下
            buttonPosition: 'RB',


          });

          geolocation.getCurrentPosition();

          //onComplete,onError都是回调函数，一个是错误是执行的，一个是成功执行的，也可以直接写成
          //AMap.event.addListener(geolocation, 'complete', function( data ){ // data是具体的定位信息 });
          //都一样，因为是 回调函数 给函数起个名和直接调用 一个道理。  调用函数的方式就是加个（）嘛，
          // 内部调用函数的地方 都是  你传进来的函数加个（）,并把它想穿出来的数据放到（）里，    即    函数（参数）。
          //所以 onComplete 传进去之后 成了 onComplete（参数），  所以写在外面的函数就调用执行了。
          // 直接写一个匿名函数 就变成了 function（你想的形参）{ 你要执行的代码 }（它传给你的参数）;

          AMap.event.addListener(geolocation, 'complete', onComplete);
          AMap.event.addListener(geolocation, 'error', onError);

         async function onComplete (data) {
            // data是具体的定位信息
            console.log(data);

            tempArr = tempArr.concat(data.addressComponent.city);


            self.m = await self.m.concat(tempArr)
           console.log(self.m)

            $('.uu').html(tempArr)




          }


          function onError (err) {
            // 定位出错
            console.log(err);
            console.log('定位出错');
          }

        })

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
        async go(){

        }
      },

      activated(){

        var map = new AMap.Map('');  //不需要在容器里显示城市地图， 第一个参数要只传一个空字符串

        map.plugin('AMap.Geolocation', function() {
          var geolocation = new AMap.Geolocation({
            // 是否使用高精度定位，默认：true
            enableHighAccuracy: true,
            // 设置定位超时时间，默认：无穷大
            timeout: 10000,


            // 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
            buttonOffset: new AMap.Pixel(10, 20),
            //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
            zoomToAccuracy: true,
            //  定位按钮的排放位置,  RB表示右下
            buttonPosition: 'RB',


          });

          geolocation.getCurrentPosition();

          //onComplete,onError都是回调函数，一个是错误是执行的，一个是成功执行的，也可以直接写成
          //AMap.event.addListener(geolocation, 'complete', function( data ){ // data是具体的定位信息 });
          //都一样，因为是 回调函数 给函数起个名和直接调用 一个道理。  调用函数的方式就是加个（）嘛，
          // 内部调用函数的地方 都是  你传进来的函数加个（）,并把它想穿出来的数据放到（）里，    即    函数（参数）。
          //所以 onComplete 传进去之后 成了 onComplete（参数），  所以写在外面的函数就调用执行了。
          // 直接写一个匿名函数 就变成了 function（你想的形参）{ 你要执行的代码 }（它传给你的参数）;

          AMap.event.addListener(geolocation, 'complete', onComplete);
          AMap.event.addListener(geolocation, 'error', onError);

          function onComplete (data) {
            // data是具体的定位信息
            console.log(data);
            let tempArr=[]
            tempArr = tempArr.concat(data.addressComponent.city);
            console.log(tempArr)

            $('.uu').html(tempArr)



          }

          function onError (err) {
            // 定位出错
            console.log(err);
            console.log('定位出错');
          }
        })
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
     .uu{
       font-size: 14px !important;
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
