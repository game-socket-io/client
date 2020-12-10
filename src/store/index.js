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
    SOCKET_setRoom (state, payload) {
      // console.log(payload)
      // state.rooms.push(payload)
      state.rooms = payload
    }
  },
  actions: {
    SOCKET_addUser (context, payload) {
      this._vm.$socket.emit('addUser', payload)
      router.push('/mainpage')
    },
    // createRoom (context, payload) {
    //   console.log(payload, '<<<<<<<')
    //   context.commit('setRoom', payload)
    // },
    SOCKET_addRoom (context, payload) {
      this._vm.$socket.emit('addRoom', payload)
      // context.commit.SOCKET_setRoom(payload)
    }
  },
  modules: {
  }
})
