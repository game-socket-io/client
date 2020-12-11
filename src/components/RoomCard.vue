<template>
  <div class="card col-3 mx-3">
    <div class="card-header">{{ roomCard.name }} </div>
    <div class="card-body">Max Player : {{ roomCard.maxPlayer }} </div>
    <div class="card-footer">
      <button class="btn btn-info" @click.prevent="joinRoom"> Join </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RoomCard',
  props: ['roomCard'],
  methods: {
    joinRoom () {
      const payload = {
        roomName: this.roomCard.name,
        username: localStorage.getItem('admin')
      }
      this.$store.dispatch('SOCKET_joinRoom', payload)
      // this.$router.push(`/lobby/${this.roomCard.name}`)
    }
  }
}
</script>

<style>

</style>
