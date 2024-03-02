<template>
  <FormProducts/>
  <FormClients/>
</template>

<script>
import FormProducts from './components/FormProducts.vue'
import FormClients from './components/FormClients.vue'

export default {
  name: 'App',
  components: {
    FormProducts,
    FormClients
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
