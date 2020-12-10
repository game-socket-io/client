import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: []
  },
  mutations: {
    SOCKET_init (state, payload) {
      state.users = payload
    },
    SOCKET_CreateUser (state, payload) {
      state.users.push({ username: payload })
    }
  },
  actions: {
    SOCKET_addUser (context, payload) {
      this._vm.$socket.emit('addUser', payload)
      router.push('/mainpage')
    }
  },
  modules: {
  }
})
