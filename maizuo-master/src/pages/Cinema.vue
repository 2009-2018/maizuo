<template>
  <div id="cinema">

    <Header title="全部影院"/>
    <div class="Cinamebody" @scroll="handleScroll" ref="cinamebody">
      <!--<p v-for="index in 50">aljfaljflajflaj</p>-->


      <div class="item mb-line-b" v-for="item,index in cinemaListArr">

        <div class="title-block box-flex middle">
          <div class="title line-ellipsis">
            <span>{{item.nm}}</span>

            <span class="price-block">
                <span class="price">{{item.sellPrice}}</span><span class="q">元起</span>
          </span>

          </div>
          <div class="location-block box-flex">
            <div class="flex line-ellipsis">{{item.addr}}</div>

            <div class="distance">{{item.distance}}</div>

          </div>
          <div class="flex"></div>

          <div class="label-block">

            <div class="allowRefund" v-if="item.tag.allowRefund">退</div>

            <div class="endorse" v-if="item.tag.endorse">改签</div>

            <div class="snack" v-if="item.tag.snack">小吃</div>

            <div class="vipTag" v-if="item.tag.vipTag">折扣卡</div>

            <div class="hallType" v-for="item1 in item.tag.hallType">{{item1}}</div>

          </div>

          <div class="discount-block" v-if="item.promotion.cardPromotionTag">

            <div class="discount-label normal card">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAeCAYAAABNChwpAAAAAXNSR0IArs4c6QAAAgFJREFUSA3Nlz1LA0EQhmf3kouFEQwi+FEYQ+xEsImFoCDoL/CLaKd/QbC0sbCzFVuxsRS1jEVAsUqrIILRQAhaBGKMuawzwpGAm83mNhddCHfZnd3n3Z2ZuxsG2JI3YtQpVw6AiTkhYJj6/GqMwSsIdm312DsnMyzLCF79rGRAiIhfUOm6jL0FQvZU4Gfn0GU4KcINE5vjsc9LFXajE9kcfT7UDZaMQWwuG9Dpi/YyiIWZjqnSxrOAtWgANsYDysV1Bj0L0Flcx8ZoC1F0wf50UMo5fqjCY1FIxxo7jQSUHWgK+ag2YprfGwnIlQTQTk3a/46B2UEOIUu+v0gIIMgZLLTIZHJTOl+TL4K9ShckMc36Q+pc356QB6FLLJQFCqi4f39d2WoKLTy03ckg2OjAvcyXh9n1KX8eA0YC4n0MtuLoJru+o3bvjAS8o2vpfXCYsGEzZkFYHQ5SbcoglM5o6KQAoxhIDHBYiVqYERZcZB04f3aghNGv04wEuIDbQg3u8Lc4YsHymAVLeD17cuDypbWKjgggIZTpVwhM5x1YxzdlpaaXXB0T4J5GEbPy6F7/8WwUhC7U5OpZgIPfU5qnrNTn+UmoXLWNQc8n0AZDacqxUskpLXwcJDbHMinlI0O9NLI51WiAZZLa0odRZBKbU4FINRoDdtoNdxCDWMQk9jePWpE8hVOLbwAAAABJRU5ErkJggg==" alt="">
            </div>
            <div class="discount-label-text">{{item.promotion.cardPromotionTag}}</div>

          </div>


        </div>

      </div>
    </div>
  </div>
</template>

<script>
    import Header from "./Header";
    export default {
        name: "Cinema",
      components: {Header},
      data(){

        return{
          cinemaListArr: [],
          flag: false
        }

      },
      methods: {
      async listInit(){
        let data = await this.$http.get('/maoyan/ajax/cinemaList?day=2018-12-08&offset=0&limit=20&districtId=-1&lineId=-1&hallType=-1&brandId=-1&serviceId=-1&areaId=-1&stationId=-1&item=&updateShowDay=true&reqId=1544238642366&cityId=60');
        // console.log(data.data.cinemas);
        this.cinemaListArr = data.data.cinemas;
        console.log( this.cinemaListArr);
      },



      async handleScroll(){

        let {scrollTop,clientHeight,scrollHeight} = this.$refs.cinamebody;

        // console.log(scrollTop,clientHeight,scrollHeight);

        let self = this;

        if(scrollTop + clientHeight + 20 >= scrollHeight){
          if(self.flag) return;
          self.flag = true;
          console.log('到低了');

          let data = await this.$http.get('/maoyan/ajax/cinemaList?day=2018-12-08&offset=0&limit=20&districtId=-1&lineId=-1&hallType=-1&brandId=-1&serviceId=-1&areaId=-1&stationId=-1&item=&updateShowDay=true&reqId=1544238642366&cityId=60');
           console.log(data.data.cinemas);
          this.cinemaListArr.concat(data.data.cinemas);

          self.flag = false;

        }


      }
    },
      mounted(){

        this.listInit();




      }
    }
</script>

<style scoped>

  #cinema{
    margin-top: 50px;

  }
  .Cinamebody{
    /*vue 滚动事件绑定的元素必须必须给定宽高（不能用%数，%是继承不是给定），和 overflow: hidden */
    width: calc(100vw);
    height: calc(100vh - 135px - 50px);

  }

  .item {
    /*height: 98px;*/
    padding: 13px 15px 13px 0px;
    margin-left: 15px;
    margin-right: 15px;
    border-bottom: 1px solid rgba(0, 0, 0, .1);
  }

  .item .title {
    height: 23px;
    line-height: 23px;
    font-size: 16px;
    color: #000;
  }

  .price-block {
    padding-top: 9px;
    padding-left: 3px;
    color: #f03d37;
  }

  .price-block .price {
    font-size: 18px;
  }

  .location-block{
    display: flex;
  }

  .flex {
    -webkit-box-flex: 1;
    flex: 1;
  }

  .line-ellipsis {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  .location-block {
    margin-top: 6px;
    font-size: 13px;
    color: #666;
  }
  .label-block {
    height: 17px;
    line-height: 17px;
    margin-top: 4px;
    margin-bottom: 4px;
    overflow: hidden;
    /*font-size: 0;*/
    flex-shrink: 0;
    display: flex;
  }

  .label-block>div{
    padding: 0 3px;
    height: 15px;
    line-height: 15px;
    border-radius: 2px;
    font-size: 12px;
  }

  .label-block>div:not(:first-child){
    margin-left: 5px;
  }

  .snack, .vipTag{
    color: #f90;
    border: 1px solid #f90;
  }

  .allowRefund, .endorse, .hallType{
    color: #589daf;
    border: 1px solid #589daf;
  }

  .discount-block{
    display: flex;

  }


  .discount-label {
    width: 15px;
    height: 14px;
    /*align-self: center;*/
    margin-right: 4px;
  }
  .discount-label img{
    width: 100%;
    height: 100%;
  }

  .discount-label-text {
    margin-left: 0;
    font-size: 11px;
    color: #999;
  }

</style>
