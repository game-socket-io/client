<template>
  <div class="left">
    <span class="dot dot1"></span>
    <span class="dot dot2"></span>
    <span class="dot dot3"></span>
    <span class="dot dot4"></span>
  </div>
</template>

<script>
export default {
  name: 'LeftDice'
}
</script>

<style>
  .left .dot1 { top: 45px; left: 45px; }
  .left .dot2 { top: 45px; left: 125px; }
  .left .dot3 { top: 125px; left: 45px; }
  .left .dot4 { top: 125px; left: 125px; }
</style>
