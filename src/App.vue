<template>
  <div id="app">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'app',
  props: {
    msg: String
  }
}
</script>

<style lang="css">
  #app {
    color: #56b983;
  }
</style>