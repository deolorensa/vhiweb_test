import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex)
export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    users:[],
    profileList: [],
    info: '',
    token: null,
  },
  getters: {
  },
  mutations: {
    loginSucces(state, token) {
      state.token = token
    },
    setProfileList(state, playload) {
      state.profileList = playload;
    },
    setLogin(state, playload) {
      state.users = playload;
    },
    setInfo(state, playload) {
      state.info = playload;
    },
    logout(state){
      state.token =null
    }
  },
  actions: {
    fetchProfile(store){
      axios
          .get(`https://reqres.in/api/users?page=1`)
          .then((response) => {store.commit('setProfileList', response.data.data);
        })
          .catch((error) => { store.commit("setInfo", error)
        })
    },
    // fetchLogin(store, {email, password}){
    //   console.log(email, password)
    //   axios
    //       .post('https://reqres.in/api/login',{email: email, password: password})
    //       .then((response) => {
    //         store.commit('setLogin', response.data);
    //     })
    //       .catch((error) => {
    //         console.log(error)
    //         store.commit("setError", error)
          
    //     })
    // },
  },
  modules: {
  }
})
