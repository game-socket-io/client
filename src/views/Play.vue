<template>
  <div>
    <div class="row py-3">
        <div class="col-4 order-2" id="sticky-sidebar">
            <div class="sticky-top">
                <!-- Untuk dice -->
                <h1>Dice</h1>
                <Dice />
            </div>
        </div>
        <div class="col-8" id="main">
            <!--  Untuk player -->
            <h1>Players {{room}} </h1>
            <div v-for="(user, idx) in room.users" :key="idx">
              <div class="row">
                <h2 class="col-7"> {{ user.name }} </h2>
                <h3 class="col-5">{{ user.score }}</h3>
              </div>
            </div>
        </div>
    </div>
</div>

</template>

<script>
import Dice from '../components/TrialDice.vue'
export default {
  name: 'Play',
  components: {
    Dice
  },
  computed: {
    room () {
      const currentRoom = this.$store.state.room
      currentRoom.users.forEach(user => {
        user.score = 0
      })
      return currentRoom
    }
  }
}
</script>

<style>

</style>
