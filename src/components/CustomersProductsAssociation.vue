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