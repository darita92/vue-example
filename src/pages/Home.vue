<template>
    <div>
        <navbar :color="'light'"></navbar>
        <h1>Home Page</h1>
    </div>
</template>

<script>
import Navbar from '../components/navbar.vue';

export default {
  name: 'home',
  components: {
        Navbar
  }
}
</script>

<style lang="css">
  #app h1 {
    color: #5660b9;
  }
</style>