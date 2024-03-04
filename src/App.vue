<template>
  <router-link to="/form-clients">Costumers</router-link>
  <router-link to="/form-products">Products</router-link>
  <router-link to="/association">Associations</router-link>
  <router-view/>
</template>

<script>
import store from './store';


export default {
  name: 'App',
  data() {
    return {
      clients: [],
      products: []
    };
  },
  created() {
    this.fetchClients();
    this.fetchProducts();
  },
  methods: {
    fetchClients() {
      store.commit('setClients', [
        { id: 1, name: 'Cliente 1' },
        { id: 2, name: 'Cliente 2' },
      ]);
    },
    fetchProducts() {
      store.commit('setProducts', [
        { id: 1, name: 'Produto 1' },
        { id: 2, name: 'Produto 2' },
      ]);
    }
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
