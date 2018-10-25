import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home'
import Films from '../pages/Films'
import Cinema from '../pages/Cinema'
import Mine from '../pages/Mine'
import Card from '../pages/Card'
import Login from '../pages/Login'
import OnHot from '../pages/OnHot'
import Willplay from '../pages/Willpaly'
import Map from '../pages/Map'
import Detail from '../pages/Detail'

Vue.use(Router);

let router= new Router({
  // app   home/films/cinema/mine/card/login
  routes: [
    {path: '/', component: Home},
    { name:'home', path: '/home', component: Home,},
    { path: '/detail/:id',
      name: 'detail',
      component: Detail,
    },
    {name:'films',
      path: '/films',
      redirect:'/onhot',
      component: Films,

      children:[
        {name:'onhot',path: '/onhot', component: OnHot},
        {name:'willplay',path: '/willpay', component: Willplay}
      ]
    },
    {name:'cinema',path: '/cinema', component: Cinema},
    {name:'mine',
      path: '/mine',
      component: Mine,
      meta:{
        isLogoin:1
      }

       },
    {name:'card',path: '/card', component: Card},
    {name:'login',path: '/login', component: Login},
    {name:'map',path: '/map', component:Map},
  ]
})
router.beforeEach((to,from,next,)=>{
  if(to.meta.isLogin){
    if(!$store.state.isLogin){

      next({name: 'login'})
    }else {

      next({name:to.name});
    }
  }else {
    next()
  }
})
export default router
