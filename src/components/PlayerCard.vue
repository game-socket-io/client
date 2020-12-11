<template>
    <div class="card">
        <h5 class="card-header">Player Name</h5>
        <div class="card-body">
            <p>Score</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'PlayerCard'
}
</script>

<style scoped>
 .card{
  margin-bottom: 10px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
 }
 .card .card-header{
  background-color: hsla(0, 85%, 50%, 0.8);
 }
</style>
