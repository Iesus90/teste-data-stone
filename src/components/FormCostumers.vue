<template>
  <div class="costumer-register">
    <h2>Costumer Register</h2>
    <form @submit.prevent="submitForm" class="costumer-form">
      <div>
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="editedCostumer.name" required>
        </div>
        <div class="form-group">
          <label for="doc">Document:</label>
          <input type="text" id="doc" v-model="editedCostumer.doc" required>
        </div>
        <div class="form-group">
          <label for="phone">Phone:</label>
          <input type="text" id="phone" v-model="editedCostumer.phone" required>
        </div>
        <div class="form-group">
          <label for="email">E-mail:</label>
          <input type="email" id="email" v-model="editedCostumer.email" required>
        </div>
        <div class="form-group">
          <label for="active">Active:</label>
          <select id="active" v-model="editedCostumer.active" required>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
      </div>
      <div class="button-container">
        <button type="submit">{{ editingCostumer ? 'Update' : 'Save' }}</button>
      </div>
    </form>

    <h2>List Costumers:</h2>
    <ul>
      <li v-for="costumer in costumers" :key="costumer.id" @click="editCostumer(costumer)">
        {{ costumer.name }} - {{ costumer.doc }} -
         {{ costumer.phone }} - {{ costumer.email }} -
         {{ costumer.active === 'yes' ? 'Active' : 'Inactive' }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      editedCostumer: {
        id: null,
        name: '',
        doc: '',
        phone: '',
        email: '',
        active: ''
      },
      editingCostumer: false
    };
  },
  computed: {
    costumers() {
      return this.$store.state.costumers;
    }
  },
  methods: {
    editCostumer(costumer) {
      this.editedCostumer = { ...costumer };
      this.editingCostumer = true;
    },
    submitForm() {
      if (this.editingCostumer) {
        this.$store.dispatch('updateCostumer', this.editedCostumer);
      } else {
        this.$store.dispatch('addCostumer', this.editedCostumer);
      }
      this.clearForm();
    },
    clearForm() {
      this.editingCostumer = false;
      this.editedCostumer = {
        id: null,
        name: '',
        doc: '',
        phone: '',
        email: '',
        active: ''
      };
    }
  }
};
</script>

<style scoped>
.costumer-register {
  margin-bottom: 20px;
}

.costumer-form {
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}

.costumer-form label {
  font-weight: bold;
}

.costumer-form input,
.costumer-form select {
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
</style>