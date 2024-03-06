<template>
  <div class="customer-register">
    <h2>Customer Register</h2>
    <form @submit.prevent="submitForm" class="customer-form">
      <div>
        <InputText id="name" label="Name:" v-model="editedCustomer.name" :is-required="true" />
        <InputText id="doc" label="Document:" v-model="editedCustomer.doc" :is-required="true" />
        <InputText id="phone" label="Phone:" v-model="editedCustomer.phone" :is-required="true" />
        <InputText id="email" label="E-mail:" type="email" v-model="editedCustomer.email" :is-required="true" />
        <div class="form-group">
          <label for="active">Active:</label>
          <select id="active" v-model="editedCustomer.active" required>
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
          v-if="editingCustomer">
            Delete
        </button>
        <button type="submit" style="margin-left: 1rem;">{{ editingCustomer ? 'Update' : 'Save' }}</button>
      </div>
    </form>

    <data-table
      v-if="customers.length > 0"
      caption="List Customers"
      :items="customers"
      :headers="['Name', 'Document', 'Phone', 'Email', 'Active', '']"
      :fields="['name', 'doc', 'phone', 'email', 'active']"
      :action-button="associateProducts"
      :action-button-label="'Associate'"
      @edit="editCustomer"
    />
    <delete-modal 
      ref="deleteModal" 
      :message="'Are you sure you want to delete this customer?'"
      :register-id="editedCustomer.id" 
      :delete-function="deleteCustomer"
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
      editedCustomer: {
        id: null,
        name: '',
        doc: '',
        phone: '',
        email: '',
        active: ''
      },
      editingCustomer: false
    };
  },
  computed: {
    customers() {
      return this.$store.state.customers;
    }
  },
  methods: {
    editCustomer(customer) {
      this.editedCustomer = { ...customer };
      this.editingCustomer = true;
    },
    submitForm() {
      if (this.editingCustomer) {
        this.$store.dispatch('updateCustomer', this.editedCustomer)
        .then(() => {
          this.showToast('Customer updated successfully', 'success');
        })
        .catch(error => {
          console.error('Error updating customer:', error);
        });
      } else {
        this.$store.dispatch('addCustomer', this.editedCustomer)
        .then(() => {
          this.showToast('Customer saved successfully', 'success');
        })
        .catch(error => {
          console.error('Error updating customer:', error);
        });
      }
      this.clearForm();
    },
    clearForm() {
      this.editingCustomer = false;
      this.editedCustomer = {
        id: null,
        name: '',
        doc: '',
        phone: '',
        email: '',
        active: ''
      };
    },
    associateProducts(customer) {
      this.$router.push({ 
        name: 'association', 
        params: { 
          customerId: customer.id, 
          customerName: customer.name 
        }
      });
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
    deleteCustomer() {
      this.$store.dispatch('deleteCustomer', this.editedCustomer.id)
        .then(() => {
          this.showToast('Customer deleted successfully', 'success');
          this.clearForm();
        })
        .catch(error => {
          console.error('Error deleting customer:', error);
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