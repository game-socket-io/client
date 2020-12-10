<template>
  <div class="bottom">
    <span class="dot dot1"></span>
    <span class="dot dot2"></span>
    <span class="dot dot3"></span>
    <span class="dot dot4"></span>
    <span class="dot dot5"></span>
    <span class="dot dot6"></span>
  </div>
</template>

<script>
export default {
  name: 'BottomDice'
}
</script>

<style>
  .bottom .dot1 { top: 45px; left: 45px; }
  .bottom .dot2 { top: 45px; left: 85px; }
  .bottom .dot3 { top: 45px; left: 125px; }
  .bottom .dot4 { top: 125px; left: 45px; }
  .bottom .dot5 { top: 125px; left: 85px; }
  .bottom .dot6 { top: 125px; left: 125px; }
</style>
