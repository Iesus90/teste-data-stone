<template>
  <div class="product-register">
    <h2>Products Register</h2>
    <form @submit.prevent="submitForm" class="product-form">
      <div>
        <InputText id="name" label="Name:" v-model="editedProduct.name" :is-required="true" />
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
            <td>
              <v-icon name="fa-check-square" scale="2" color="#2dd118bd" v-if="product.active === 'yes'" />
              <v-icon name="fa-window-close" scale="2" color="#d11818bd" v-else />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import InputText from '../../components/InputText/InputText.vue'
import OhVueIcon from "oh-vue-icons"

export default {
  components: {
    InputText,
    "v-icon": OhVueIcon
  },
  data() {
    return {
      editedProduct: {
        id: null,
        name: '',
        active: ''
      },
      editingProduct: false,
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