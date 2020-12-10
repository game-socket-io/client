<template>
  <div class="container">
    <div class="row">
      <div class="col-md-3 col-sm-3">
        <table class="table">
          <thead>
            <th>Username</th>
          </thead>
          <tbody>
            <ListUser v-for="(user, i) in users" :key="i" :user="user"></ListUser>
          </tbody>
        </table>
      </div>
      <div class="col-md-9 col-sm-9">

      </div>
    </div>
  </div>
</template>

<script>
import ListUser from '../components/ListUser'

export default {
  name: 'MainPage',
  computed: {
    users () {
      return this.$store.state.users
    }
  },
  components: {
    ListUser
  }
}
</script>

<style>

</style>
