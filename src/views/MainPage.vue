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
                <input type="text" v-modal="room.name" class="form-control">
              </div>
              <div class="form-group">
                <label for="" class="form-label mt-2">Max Player</label>
                <input type="number" v-modal="room.countPlayer" class="form-control">
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
      },
      rooms: []
    }
  },
  computed: {
    users () {
      return this.$store.state.users
    }
  },
  components: {
    ListUser, RoomCard
  },
  methods: {
    onClick () {
      this.flagCreate = !this.flagCreate
    },
    onCreate () {
      this.$store.dispatch('createRoom', this.room)
      this.flagCreate = false
    },
    getRooms () {
      this.rooms = this.$store.state.rooms
    }
  },
  created () {
    this.getRooms()
  }
}
</script>

<style>

</style>
