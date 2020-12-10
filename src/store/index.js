import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
    rooms: []
  },
  mutations: {
    SOCKET_init (state, payload) {
      state.users = payload
    },
    SOCKET_CreateUser (state, payload) {
      state.users.push({ username: payload })
    },
    setRoom (state, payload) {
      state.rooms.push(payload)
    }
  },
  actions: {
    SOCKET_addUser (context, payload) {
      this._vm.$socket.emit('addUser', payload)
      router.push('/mainpage')
    },
    createRoom (context, payload) {
      context.commit('setRoom', payload)
    }
  },
  modules: {
  }
})
