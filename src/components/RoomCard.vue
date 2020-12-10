<template>
  <div class="card col-3 mx-3">
    <div class="card-header">{{ roomCard.name }} </div>
    <div class="card-body">Max Player : {{ roomCard.countPlayer }} </div>
    <div class="card-footer">
      <button class="btn btn-info"> Join </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RoomCard',
  props: ['roomCard']
}
</script>

<style>

</style>
