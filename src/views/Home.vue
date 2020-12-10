<template>
  <div class="home">
    <div class="container col-md-5 col-sm-6">
      <img src="../assets/game.svg" alt="" class="img-game">
      <form action="" @submit.prevent="onSubmit">
        <label for="" class="form-label">Username</label>
        <input type="text" name="input-username" v-model="username" class="form-control" id="input-username" placeholder="input your username">
        <button class="btn btn-submit"> Submit </button>
      </form>
      <div v-for="(user, i) in users" :key="i">
        <p>Username: {{ user.username }} </p>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data () {
    return {
      username: ''
    }
  },
  computed: {
    users () {
      return this.$store.state.users
    }
  },
  methods: {
    onSubmit () {
      this.$store.dispatch('SOCKET_addUser', this.username)
      // this.$socket.emit('addUser', this.username)
      // this.users.push(this.username) // ini digunakan jika misalkan di server menggunakan socket.broadcast.emit
      this.username = ''
    }
  }
}
</script>

<style>
.img-game{
  width: 500px;
  margin-bottom: 20px;
}
.btn-submit{
  margin-top: 10px;
  background-color: #41AFEC;
}
</style>
