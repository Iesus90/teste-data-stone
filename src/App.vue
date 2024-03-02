<template>
  <FormProducts/>
  <FormClients/>
  <Association :clients="clients" :products="products"/>
</template>

<script>
import FormProducts from './components/FormProducts.vue';
import FormClients from './components/FormClients.vue';
import Association from './components/ClientsProductsAssociation.vue';
import store from './store';

export default {
  name: 'App',
  components: {
    FormProducts,
    FormClients,
    Association
  },
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
