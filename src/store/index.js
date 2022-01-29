import Vue from 'vue'
import Vuex from 'vuex'
import api from '../api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sidebar: true,
    messages: [],
    messageType: 'inbox'
  },
  mutations: {
    toggleSidebar(state, payload) {
      state.sidebar = payload
    },
    setMessages(state, payload) {
      state.messages = payload
    },
    setMessageType(state, payload) {
      state.messageType = payload
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

    async GET_INBOX({commit}, payload) {
      try {
        const {data} = await api.get('http://89.108.78.225:8000/api/inbox/?page=1')
        console.log(data, 'inbox')
        commit('setMessages', data.results)
        commit('setMessageType', payload)
      } catch (e) {
        console.log(e)
      }

    },
    async SENT_MESSAGES({commit}, payload) {
      try {
        const {data} = await api.get('http://89.108.78.225:8000/api/sent/?page=1')
        console.log(data, 'inbox')
        commit('setMessages', data.results)
        commit('setMessageType', payload)
      } catch (e) {
        console.log(e)
      }
    },
    SIGN_OUT({commit}, payload){
      localStorage.removeItem('chat-token')
    }

  },
  modules: {},
  getters: {
    isSidebarOpen: state => state.sidebar,
    getInbox: state => state.messages,
    messageType: state => state.messageType

  }
})
