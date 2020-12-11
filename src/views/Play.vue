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
            <PlayerCard/>
        </div>
    </div>
</div>

</template>

<script>
import Dice from '../components/TrialDice.vue'
import PlayerCard from '../components/PlayerCard.vue'
export default {
  name: 'Play',
  components: {
    Dice,
    PlayerCard
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
