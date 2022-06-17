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
    dark: false
  },
  getters: {
    dark: (state) => state.dark
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
    },
    SET_DARK: (state, bool) => {
      state.dark = bool;
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
  },
  modules: {
  }
})
