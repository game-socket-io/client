import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
    rooms: [],
    room: {}
  },
  mutations: {
    SOCKET_init (state, payload) {
      const { users, rooms } = payload
      state.users = users
      state.rooms = rooms
    },
    SOCKET_CreateUser (state, payload) {
      state.users.push({ username: payload })
    },
    SOCKET_setRoom (state, payload) {
      state.rooms = payload
    },
    SOCKET_roomDetail (state, payload) {
      state.room = payload
    }
  },
  actions: {
    SOCKET_addUser (context, payload) {
      this._vm.$socket.emit('addUser', payload)
      router.push('/mainpage')
    },
    SOCKET_addRoom (context, payload) {
      console.log(payload)
      this._vm.$socket.emit('addRoom', payload)
    },
    SOCKET_joinRoom (context, payload) {
      this._vm.$socket.emit('join-room', payload)
      router.push('/lobby/' + payload.roomName)
    }
  },
  modules: {
  }
})
