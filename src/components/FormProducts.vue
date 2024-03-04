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
.product-register {
  margin-bottom: 20px;
}

.product-form {
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}

.product-form label {
  font-weight: bold;
}

.product-form input,
.product-form select {
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

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

thead {
  background-color: #f2f2f2;
}

th, td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

tr:hover {
  background-color: #f5f5f5;
}

th:last-child {
  text-align: right;
}

td:last-child {
  text-align: right;
}
</style>