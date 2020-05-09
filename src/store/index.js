import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
    user : {}
  },
  mutations: {
    auth_request(state){
      state.status = 'loading'
    },
    auth_success(state, data){
      state.status = 'success'
      state.token = data.token
      state.user = data.user
    },
    auth_error(state){
      state.status = 'error'
    },
    logout(state){
      state.status = ''
      state.token = ''
      state.user = {}
    },
  },
  actions: {
    async login({commit}, user){
   
        commit('auth_request')
        await axios({url: 'https://api.org.ru/api/auth/login', data: user, method: 'POST' })
        .then(resp => {
          const token = resp.data.token         
          
          localStorage.setItem('token', token)
          axios.defaults.headers.common['Authorization'] = token
          commit('auth_success', resp.data)
          
        })
        .catch(() => {
          commit('auth_error')
          localStorage.removeItem('token')
        })
    },
    async register({commit}, user){
        commit('auth_request')
        await axios({url: 'https://api.org.ru/api/auth/registration', data: user, method: 'POST' })
        .then(resp => {
          const token = resp.data.token 

          localStorage.setItem('token', token)
          axios.defaults.headers.common['Authorization'] = token
          commit('auth_success', resp.data)
        })
        .catch(() => {
          commit('auth_error')
          localStorage.removeItem('token')
          // reject(err)
        })
      
     },
     async logout({commit}){
         await commit('logout')
        localStorage.removeItem('token')
        delete axios.defaults.headers.common['Authorization']
     }
  },
  getters : {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
    getUser: state => state.user,
  }
})