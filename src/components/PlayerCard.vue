<template>
    <div class="card">
        <h5 class="card-header">{{ user.name }}</h5>
        <div class="card-body">
            <p>{{ score }}</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'PlayerCard',
  props: ['user'],
  computed: {
    score () {
      const score = this.$store.state.score
      if (score.user === this.user.name) {
        return score.score
      }
      return 0
    }
  }
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
