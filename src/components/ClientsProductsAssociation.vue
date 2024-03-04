<template>
  <div class="association-register">
    <h2>Costumer - Product Association</h2>
    <div class="association-form">
      <div class="form-group">
        <label for="client">Costumer:</label>
        <select v-model="clientSelected">
          <option v-for="client in clients" :key="client.id" :value="client.id">{{ client.name }}</option>
        </select>
      </div>
      <br>
      <label for="products">Available products:</label>
      <div class="product-list">
        <div v-for="product in products" :key="product.id" class="product-item">
          <input type="checkbox" :value="product.id" v-model="productsSelecteds"> {{ product.name }}
        </div>
      </div>
      <div class="button-container">
        <button @click="associateProducts">Associate Products</button>
      </div>
    </div>
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

<style scoped>
.association-register {
  margin-bottom: 20px;
}

.association-form {
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}

.association-form label {
  font-weight: bold;
}

.association-form input,
.association-form select {
  width: 100%;
  padding: 8px;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 3px;
  box-sizing: border-box;
}

.form-group {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.form-group label {
  width: 120px;
  margin-right: 10px;
}

.form-group input,
.form-group select {
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 3px;
  box-sizing: border-box;
}

.product-list {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
}

.product-item {
  flex-basis: calc(25% - 10px);
  margin-right: 10px;
}

.button-container {
  display: flex;
  justify-content: flex-end;
}

button {
  background-color: rgb(56, 130, 209);
  padding: 8px 16px;
  border-radius: 4px;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 15px;
}

.button-container button:hover {
  transition: 0.25s;
  box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
}
</style>