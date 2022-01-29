import Vue from 'vue'
import Vuex from 'vuex'
import api from '../api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sidebar: true
  },
  mutations: {
    toggleSidebar(state, payload) {
      state.sidebar = payload
    }
  },
  actions: {
    async LOGIN({commit}, {username, password}) {
      try {
        const {data} = await api.post('http://89.108.78.225:8000/api/token/', {username, password})
        localStorage.setItem('chat-token', data.token)
        return data
      } catch (e) {
        console.log(e)
      }
    },
    async SEND_MESSAGE({commit}, {text, user, title}) {
      try {
        const {data} = await api.post('http://89.108.78.225:8000/api/send/', {message: {text, user, title}})
        return data
      } catch (e) {
        console.log(e)
      }
    },
    async FETCH() {
      const {data} = await api.post('http://89.108.78.225:8000/api/send/', {title: 'aaa', user_to: 1, body: 'lololo'})
      console.log(data)
    }
  },
  modules: {},
  getters: {
    isSidebarOpen: state => state.sidebar
  }
})
