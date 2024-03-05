<template>
  <div class="association-register">
    <h2>Customer - Product Association</h2>
    <div class="association-form">
      <div class="form-group">
        <label for="customer">Customer:</label>
        <select id="customerName" v-model="customerId">
          <option v-for="customer in customersList" :key="customer.id" :value="customer.id">
            {{ customer.name }}
          </option>
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
      customerId: null,
      productsSelecteds: [],
      customerName: '',
      customers: []
    };
  },
  created() {
    const customerId = this.$route.params.customerId;
    this.fetchCustomerData(customerId);
  },
  computed: {
    customersList() {
      return this.$store.state.customers;
    },
    products() {
      return this.$store.state.products;
    },
    associations() {
      return this.$store.getters.getAllAssociations;
    }
  },
  watch: {
    customerId(newCustomerId) {
      this.fetchCustomerData(newCustomerId);
    }
  },
  methods: {
    associateProducts() {
      if (!this.customerId) {
        console.error('Select a customer');
        return;
      }

      if (this.productsSelecteds.length === 0) {
        console.error('Select at least one product');
        return;
      }

      const selectedCustomer = this.$store.state.customers.find(customer => customer.id === this.customerId);
      const selectedProducts = this.products.filter(product => this.productsSelecteds.includes(product.id));

      const association = {
        customer: selectedCustomer,
        products: selectedProducts
      };

      const existingAssociation = this.$store.getters.getAllAssociations.find(association => association.customer.id === this.customerId);

      if (existingAssociation) {
        this.$store.dispatch('updateAssociation', association);
      } else {
        this.$store.dispatch('addAssociation', association);
      }

      this.customerId = null;
      this.productsSelecteds = [];
    },
    fetchCustomerData(customerId) {
      const selectedCustomer = this.$store.getters.getAllAssociations.find(
        association => association.customer.id == customerId
      );
      if (selectedCustomer) {
        this.customerId = selectedCustomer.customer.id;
        this.productsSelecteds = selectedCustomer.products.map(product => product.id);
      } else {
        this.customerId = null;
        this.productsSelecteds = [];
        const selectedCustomerName = this.$store.state.customers.find(
          customer => customer.id == customerId
        );
        if (selectedCustomerName) {
          this.customerId = selectedCustomerName.id;
        } else {
          this.customerId = null;
        }
      }
    },
  }
};
</script>

<style scoped>
  @import './style.css';
</style>