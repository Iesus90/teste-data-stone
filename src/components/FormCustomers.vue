<template>
  <div class="customer-register">
    <h2>Customer Register</h2>
    <form @submit.prevent="submitForm" class="customer-form">
      <div>
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="editedCustomer.name" required>
        </div>
        <div class="form-group">
          <label for="doc">Document:</label>
          <input type="text" id="doc" v-model="editedCustomer.doc" required>
        </div>
        <div class="form-group">
          <label for="phone">Phone:</label>
          <input type="text" id="phone" v-model="editedCustomer.phone" required>
        </div>
        <div class="form-group">
          <label for="email">E-mail:</label>
          <input type="email" id="email" v-model="editedCustomer.email" required>
        </div>
        <div class="form-group">
          <label for="active">Active:</label>
          <select id="active" v-model="editedCustomer.active" required>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
      </div>
      <div class="button-container">
        <button type="submit">{{ editingCustomer ? 'Update' : 'Save' }}</button>
      </div>
    </form>

    <div v-if="customers.length > 0">
      <h2>List Customers:</h2>
      <div class="table-container">
        <table>
          <caption>List of Customers</caption>
          <thead>
            <tr>
              <th>Name</th>
              <th>Document</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Active</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="customer in customers" :key="customer.id" @click="editCustomer(customer)">
              <td>{{ customer.name }}</td>
              <td>{{ customer.doc }}</td>
              <td>{{ customer.phone }}</td>
              <td>{{ customer.email }}</td>
              <td>{{ customer.active === 'yes' ? 'Active' : 'Inactive' }}</td>
              <td>
                <button @click="associateProducts(customer)">Associate</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
        this.$store.dispatch('updateCustomer', this.editedCustomer);
      } else {
        this.$store.dispatch('addCustomer', this.editedCustomer);
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
    }
  }
};
</script>

<style scoped>
.customer-register {
  margin-bottom: 20px;
}

.customer-form {
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}

.customer-form label {
  font-weight: bold;
}

.customer-form input,
.customer-form select {
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

.table-container {
  overflow-x: auto;
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