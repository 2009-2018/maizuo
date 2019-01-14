<template>
  <div id="login">
  <section class="login-view">
    <Header title="登录"/>
    <div>
      <form>
        <div class="form-group" >

          <input type="tel"  name="mobile" class="form-control" id="login-mobile" maxlength="11" placeholder="输入手机号" v-model="mobile">

          <span class="sms-code" v-show="show">
                <i class="sms-code-row"></i>
                <i class="sms-code-tex" @click="getCode">发送验证码</i>
              </span>
          <span class="sms-code" v-show="!show">
                <i class="sms-code-row"></i>
                <i class="sms-code-tex" >已发送（{{count}}s）</i>
              </span>
          <span>

            </span>
          <div class="input-bg" >

          </div>
        </div>
        <div class="form-group" >
          <input type="text" class="form-control" placeholder="输入验证码" v-model="password" >
          <span>

            </span>
          <div class="input-bg" >

          </div>
        </div>
        <button type="button" class="center-block submit" @click="sBit">登录</button>
      </form>
    </div>
  </section>
  </div>
</template>

<script>
    import Header from "./Header";
    import axios from '../api/axios';
    import Qs from 'qs'
    export default {
        name: "Login",
      components: {Header},
      data(){
          return{
            mobile:null,
            password:'',
            show: true,
            count: '',
            timer: null,
            filmArr:"",

            num:0,
            cc:''
          }
        },
        methods: {
          sBit() {

            let self = this;
            if(this.filmArr==self.password&&self.password!=''&&self.mobile!='') {
              this.$store.dispatch('changeLogin', 1)
              this.$router.push({name: self.cc})

            }else  {
              alert('验证码输入错误')
            }
          },
          getCode(){
            let self = this;
            let timeTemp = new Date().getTime();
            const TIME_COUNT = 60;
            if (!(/^1[34578]\d{9}$/.test(self.mobile))) {
              alert("电话号码格式错误");
            }else {
              if (!this.timer) {
                this.count = TIME_COUNT;
                this.show = false;
                this.timer = setInterval(() => {
                  if (this.count > 0 && this.count <= TIME_COUNT) {
                    this.count--;
                  } else {
                    this.show = true;
                    clearInterval(this.timer);
                    this.timer = null;
                  }
                }, 1000)
              }
            }


            var data = Qs.stringify({"phone":self.mobile});

            let url = '/csdn/BinHuBroker/Api/Brokers/SendSms?';
            axios.post(url,data,{headers:{'Content-Type':'application/x-www-form-urlencoded'}}

            ).then(function (data) {


              self.filmArr = self.filmArr.concat(data.data.Remark);

            })

          },


        },
      beforeRouteEnter(to,from,next){
        next(vm=>{
          vm.cc=from.name
        })
      }
      }

</script>

<style scoped>
  #login{
    padding:50px 0 0 ;
  }
  .login-view, .bind-view {
    position: absolute;
    min-height: 100%;
    width: 100%;
    background-color: #f6f6f6;
  }
  .login-view form, .bind-view form {
    padding: 0px 31px 0px 31px;
  }
  .login-view form .form-group, .bind-view form .form-group {
    margin: 30px 0 0;
    position: relative;
  }
  .login-view input.form-control, .bind-view input.form-control {
    border: none;
    background-color: #f6f6f6;
    border-radius: 0px;
    box-shadow: none;
    outline: none;
  }
  .form-control {
    display: block;
    width: 100%;
    height: 34px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;}
  .login-view form .form-group .input-bg, .bind-view form .form-group .input-bg {
    position: absolute;
    top: 20px;
    height: 12px;
    width: 100%;
    border: solid #c4c4c4;
    border-width: 0 1px 1px 1px;
  }
  .login-view form .sms-code, .bind-view form .sms-code {
    width: 95px;
    position: absolute;
    right: 5px;
    top: -5px;
    background-color: #29a097;
    color: #fff;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 3px;
    cursor: pointer;
  }
  .login-view form .sms-code .sms-code-row, .bind-view form .sms-code .sms-code-row {
    left: -6px;
    position: absolute;
    top: 8px;
    content: '';
    width: 0;
    height: 0;
    border-top: solid 6px transparent;
    border-bottom: solid 6px transparent;
    border-right: solid 6px #29a097;
    display: block;
  }
  .sms-code-tex{
    font-size:12px;
  }
  .login-view .submit, .bind-view .submit {
    width: 163px;
    background-color: #fe8233;
    color: #fff;
    border: none;
    border-radius: 36px;
    margin-top: 45px;
    padding: 8px 12px;
    font-size: 15px;
    outline: none;
  }
  .center-block {
    display: block;
    margin-right: auto;
    margin-left: auto;
  }
</style>
