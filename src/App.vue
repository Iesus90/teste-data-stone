<template>
  <div class="link-container">
    <router-link to="/form-costumers">Costumers</router-link>
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
      costumers: [],
      products: []
    };
  },
  created() {
    this.fetchCostumers();
    this.fetchProducts();
  },
  methods: {
    fetchCostumers() {
      store.commit('setCostumers', []);
    },
    fetchProducts() {
      store.commit('setProducts', []);
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
