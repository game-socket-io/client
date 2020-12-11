<template>
  <div class="container">
    <div class="row">
      <div class="col-md-3 col-sm-3">
        <table class="table">
          <thead>
            <th>Username</th>
          </thead>
          <tbody>
            <ListUser v-for="(user, i) in users" :key="i" :user="user"></ListUser>
          </tbody>
        </table>
      </div>
      <div class="col-md-9 col-sm-9">
        <div class="card">
          <div class="card-header">
            <button class="btn btn-info" @click.prevent="onClick">Create Room</button>
          </div>
          <div v-if="flagCreate" class="card col-5 mt-2 mx-auto">
            <form @submit.prevent="onCreate">
              <div class="form-group">
                <label for="" class="form-label mt-2">Room's Name</label>
                <input type="text" v-model="room.name" class="form-control">
              </div>
              <div class="form-group">
                <label for="" class="form-label mt-2">Max Player</label>
                <input type="number" v-model="room.countPlayer" class="form-control">
              </div>
              <button class="btn btn-info mt-2 mb-2"> Create </button>
            </form>
          </div>
          <div class="card-body">
            <div class="row">
              <RoomCard v-for="(roomCard, i) in rooms" :key="i" :roomCard="roomCard" ></RoomCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ListUser from '../components/ListUser'
import RoomCard from '../components/RoomCard'

export default {
  name: 'MainPage',
  data () {
    return {
      flagCreate: false,
      room: {
        name: '',
        countPlayer: 0
      }
    }
  },
  computed: {
    users () {
      return this.$store.state.users
    },
    rooms () {
      return this.$store.state.rooms
    }
  },
  components: {
    ListUser,
    RoomCard
  },
  methods: {
    onClick () {
      this.flagCreate = !this.flagCreate
    },
    onCreate () {
      const { name, countPlayer } = this.room
      this.$store.dispatch('SOCKET_addRoom', { name, countPlayer, admin: localStorage.getItem('admin') })
      this.flagCreate = false
      this.room = { name: '', countPlayer: 0 }
    }
  }
}
</script>

<style>

</style>
