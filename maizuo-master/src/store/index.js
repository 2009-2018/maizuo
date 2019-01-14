import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'

Vue.use(Vuex);

export default new Vuex.Store({
  state:{
      filmsList: [],
    movieIdsArr:[],
    filmArr:[],
      list:[],
       img:[],

      isLogin: 0

  },
  mutations:{
      addFilms(state,films,str){
      state.filmsList = state.filmsList.concat(films)
      let tempArr = [];

      if(state.filmsList){
        tempArr = tempArr.concat(state.filmsList);
      }else {
        tempArr = tempArr.concat(this.coming);
      }



      tempArr.map(item => {

        item.img = item.img.replace('w.h', '128.180');

      });






    },

    addId(state,films){

      state. movieIdsArr = state.movieIdsArr.concat(films)

    },
    changeLogin(state,data){
      state.isLogin =  data;
    },
  },

  actions:{
     addFilms({ commit ,state },str){

       //发送请求  获取films
       //get('/maizuo/v4/api/film/now-playing?page=1&count=7');
       if(!str) {

         let url = "/maoyan/ajax/movieOnInfoList?token=$";


         axios.get(url).then(function (data) {
           state.len = data.data.movieList.length;
           console.log(data.data.movieList.length)
           commit('addId', data.data.movieIds);
           commit('addFilms', data.data.movieList);

         })
       }else {
         let url1 = `/maoyan/ajax/moreComingList?token=&movieIds=`+(str);



         axios.get(url1).then(function (data) {


           commit('addFilms',data.data.coming);



         })
       }
     },


    changeLogin( { commit },data){
      commit('changeLogin',data);
    }
  }

})
