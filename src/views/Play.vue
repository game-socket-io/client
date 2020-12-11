<template>
  <div>
    <div class="row py-3">
        <div class="col order-2" id="sticky-sidebar">
            <div class="sticky-top">
                <!-- Untuk dice -->
                <h1>Dice</h1>
                <Dice />
            </div>
        </div>
        <div class="col-2" id="main">
            <!--  Untuk player -->
            <h1>player</h1>
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
  }
}
</script>

<style>

</style>
