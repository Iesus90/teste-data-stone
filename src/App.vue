<template>
  <Header />
  <router-view/>
</template>

<script>
import Header from './components/Header/Header.vue'
import store from './store'

export default {
  name: 'App',
  components: {
    Header
  },
  data() {
    return {
      customers: [],
      products: []
    };
  },
  created() {
    this.fetchCustomers();
    this.fetchProducts();
  },
  methods: {
    fetchCustomers() {
      store.commit('setCustomers', []);
    },
    fetchProducts() {
      store.commit('setProducts', []);
    }
  }
}
</script>

<style>
  @import './style.css';
</style>
