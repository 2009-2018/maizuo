import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'

Vue.use(Vuex);

export default new Vuex.Store({
  state:{
      filmsList: [],
      time:[],
      list:[],
      len: 7,
      leng:7,
      isLogin: 0

  },
  mutations:{
      addFilms(state,films){
        state.filmsList = state.filmsList.concat(films)


      },
    addList(state,films,time){
      state.list = state.list.concat(films)
      for(var i=0;i<state.list.length;i++){
        state.time=state.list[i].premiereAt
      }
    },
    changeLogin(state,data){
      state.isLogin =  data;
    },
  },

  actions:{
     addFilms({ commit ,state }, page){
       //发送请求  获取films
       //get('/maizuo/v4/api/film/now-playing?page=1&count=7');
       let url = `/maizuo/v4/api/film/now-playing?page=${page}&count=7`;
       axios.get(url).then(function (data) {
          state.len = data.data.data.films.length;
          commit('addFilms',data.data.data.films);
       })
     },
    addList({ commit ,state }, page){
      //发送请求  获取films
      //get('/maizuo/v4/api/film/now-playing?page=1&count=7');
      let url = `/maizuo/v4/api/film/coming-soon?page=${page}&count=7`;
      axios.get(url).then(function (data) {
        state.leng = data.data.data.films.length;


             for(var i=0;i<data.data.data.films.length;i++){
               state.time=data.data.data.films[i].premiereAt

             }
        commit('addList',data.data.data.films);
      })
    },
    changeLogin( { commit },data){
      commit('changeLogin',data);
    }
  }

})
