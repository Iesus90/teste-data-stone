<template>
  <div>
    <h2>Client - Product Association</h2>
    <label for="client">Select Client:</label>
    <select v-model="clientSelected">
        <option v-for="client in clients" :key="client.id" :value="client.id">{{ client.name }}</option>
      </select>
    <br>
    <label for="products">Available products:</label>
    <ul>
      <li v-for="product in products" :key="product.id">
        <input type="checkbox" :value="product.id" v-model="productsSelecteds"> {{ product.name }}
      </li>
    </ul>
    <button @click="associateProducts">Associate Products</button>
    <h2>Lista de Associações Cliente-Produto</h2>
    <ul>
      <li v-for="(association, index) in associations" :key="index">
        Client: {{ association.client.name }}
        <ul>
          <li v-for="product in association.products" :key="product.id">
            Product: {{ product.name }}
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clientSelected: null,
      productsSelecteds: [],
    };
  },
  computed: {
    clients() {
      return this.$store.state.clients;
    },
    products() {
      return this.$store.state.products;
    },
    associations() {
      return this.$store.getters.getAllAssociations;
    }
  },
  methods: {
    associateProducts() {
      if (!this.clientSelected) {
        console.error('Select a client');
        return;
      }

      if (this.productsSelecteds.length === 0) {
        console.error('Select at least one product');
        return;
      }

      const selectedClient = this.clients.find(client => client.id === this.clientSelected);

      const selectedProducts = this.products.filter(product => this.productsSelecteds.includes(product.id));

      const association = {
        client: selectedClient,
        products: selectedProducts
      };

      this.$store.dispatch('addAssociation', association);

      this.clientSelected = null;
      this.productsSelecteds = [];
    }
  }
};
</script>