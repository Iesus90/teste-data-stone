<template>
  <div class="product-register">
    <h2>Products Register</h2>
    <form @submit.prevent="submitForm" class="product-form">
      <div>
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="editedProduct.name" required>
        </div>
        <div class="form-group">
          <label for="active">Active:</label>
          <select id="active" v-model="editedProduct.active" required>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
      </div>
      <div class="button-container">
        <button type="submit">{{ editingProduct ? 'Update' : 'Save' }}</button>
      </div>
    </form>

    <div v-if="products.length > 0">
      <h2>List Products:</h2>
      <table>
        <caption>List of Products</caption>
        <thead>
          <tr>
            <th>Name</th>
            <th>Active</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product.id" @click="editProduct(product)">
            <td>{{ product.name }}</td>
            <td>{{ product.active === 'yes' ? 'Active' : 'Inactive' }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      editedProduct: {
        id: null,
        name: '',
        active: ''
      },
      editingProduct: false
    };
  },
  computed: {
    products() {
      return this.$store.state.products;
    }
  },
  methods: {
    editProduct(product) {
      this.editedProduct = { ...product };
      this.editingProduct = true;
    },
    submitForm() {
      if (this.editingProduct) {
        this.$store.dispatch('updateProduct', this.editedProduct);
      } else {
        this.$store.dispatch('addProduct', this.editedProduct);
      }
      this.clearForm();
    },
    clearForm() {
      this.editedProduct = {
        id: null,
        name: '',
        active: ''
      };
      this.editingProduct = false;
    }
  }
};
</script>

<style scoped>
  @import './style.css';
</style>