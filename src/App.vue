<template>
  <div class="link-container">
    <router-link to="/form-clients">Costumers</router-link>
    <router-link to="/form-products">Products</router-link>
    <router-link to="/association">Associations</router-link>
  </div>
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
        { id: 3, name: 'Produto 3' },
        { id: 4, name: 'Produto 4' },
        { id: 5, name: 'Produto 5' },
        { id: 6, name: 'Produto 6' },
        { id: 7, name: 'Produto 7' },
        { id: 8, name: 'Produto 8' },
        { id: 9, name: 'Produto 9' },
        { id: 10, name: 'Produto 10' },
        { id: 11, name: 'Produto 11' },
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

.link-container {
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 4px;
  box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
}

.link-container a {
  color: #2c3e50;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 4px;
}

.link-container a:hover {
  transition: 0.25s;
  background-color: rgb(56, 130, 209);
  color: white;
}
</style>
