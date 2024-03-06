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
        <button 
          type="button"
          @click="openDeleteModal"
          style="background-color: #d11818bd;"
          v-if="editingProduct">
            Delete
        </button>
        <button type="submit" style="margin-left: 1rem;">{{ editingProduct ? 'Update' : 'Save' }}</button>
      </div>
    </form>

    <data-table
      v-if="products.length > 0"
      caption="List Products"
      :items="products"
      :headers="['Name', 'Active']"
      :fields="['name', 'active']"
      @edit="editProduct"
    />
    <delete-modal 
      ref="deleteModal" 
      :message="'Are you sure you want to delete this product?'"
      :register-id="editedProduct.id" 
      :delete-function="deleteProduct"
      @close="handleModalClose"
    />
  </div>
</template>

<script>
import InputText from '../../components/InputText/InputText.vue'
import DataTable from '../../components/DataTable/DataTable.vue'
import DeleteModal from '../../components/DeleteModal/DeleteModal.vue'

export default {
  components: {
    InputText,
    DataTable,
    DeleteModal
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
        this.$store.dispatch('updateProduct', this.editedProduct)
        .then(() => {
          this.showToast('Product updated successfully', 'success');
        })
        .catch(error => {
          console.error('Error updating product:', error);
        });
      } else {
        this.$store.dispatch('addProduct', this.editedProduct)
        .then(() => {
          this.showToast('Product saved successfully', 'success');
        })
        .catch(error => {
          console.error('Error updating product:', error);
        });
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
    },
    showToast(message, type) {
      this.$toast.open({
        message: message,
        type: type,
        position: 'top-right'
      });
    },
    openDeleteModal() {
      this.$refs.deleteModal.open();
    },
    deleteProduct() {
      this.$store.dispatch('deleteProduct', this.editedProduct.id)
        .then(() => {
          this.showToast('Product deleted successfully', 'success');
          this.clearForm();
        })
        .catch(error => {
          console.error('Error deleting product:', error);
        });
    },
    handleModalClose() {
      this.clearForm();
    }
  }
};
</script>

<style scoped>
  @import './style.css';
</style>