<template>
  <div>
    <div class="container col-5">
      <div class="card">
        <div class="card-header">
          {{ room.name }}
        </div>
        <div class="card-body">
          Player :
          <p v-for="(name, i) in room.users" :key="i" >{{ name }} </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Lobby',
  computed: {
    room () {
      return this.$store.state.room
    }
  }
}
</script>

<style>

</style>
