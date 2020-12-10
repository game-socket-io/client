<template>
  <div class="home">
    <div class="container col-md-5 col-sm-6">
      <img src="../assets/game.svg" alt="" class="img-game">
      <form action="">
        <label for="" class="form-label">Username</label>
        <input type="text" name="input-username" class="form-control" id="input-username" placeholder="input your username">
        <button class="btn btn-submit"> Submit </button>
      </form>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  sockets: {
    init (payload) {
      console.log(payload)
    }
  }
}
</script>

<style>
.img-game{
  width: 500px;
  margin-bottom: 20px;
}
.btn-submit{
  margin-top: 10px;
  background-color: #41AFEC;
}
</style>
