<template>
  <div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/trial">Trial Dice</router-link> |
      <a href="#" @click.prevent="logout">Logout</a>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    logout () {
      localStorage.removeItem('admin')
      this.$router.push('/')
    }
  }
}
</script>

<style>

</style>
