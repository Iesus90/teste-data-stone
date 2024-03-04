<template>
  <div class="client-register">
    <h2>Costumer Register</h2>
    <form @submit.prevent="submitForm" class="client-form">
      <div>
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="newClient.name" required>
        </div>
        <div class="form-group">
          <label for="doc">Document:</label>
          <input type="text" id="doc" v-model="newClient.doc" required>
        </div>
        <div class="form-group">
          <label for="phone">Phone:</label>
          <input type="text" id="phone" v-model="newClient.phone" required>
        </div>
        <div class="form-group">
          <label for="email">E-mail:</label>
          <input type="email" id="email" v-model="newClient.email" required>
        </div>
        <div class="form-group">
          <label for="active">Active:</label>
          <select id="active" v-model="newClient.active" required>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
      </div>
      <div class="button-container">
        <button type="submit">Save</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clientSelected: '',
      newClient: {
        name: '',
        doc: '',
        phone: '',
        email: '',
        active: 'yes'
      },
      clients: []
    };
  },
  methods: {
    submitForm() {
      if (this.clientSelected) {
        console.log('Cliente selecionado para edição:', this.clientSelected);
      } else {
        this.$store.dispatch('addClient', {
          name: this.newClient.name,
          doc: this.newClient.doc,
          phone: this.newClient.phone,
          email: this.newClient.email,
          active: this.newClient.active
        });
        console.log('Novo cliente cadastrado:', this.newClient);
      }
      this.clientSelected = '';
      this.newClient.name = '';
      this.newClient.doc = '';
      this.newClient.phone = '';
      this.newClient.email = '';
      this.newClient.active = 'yes';
    }
  }
};
</script>

<style scoped>
.client-register {
  margin-bottom: 20px;
}

.client-form {
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}

.client-form label {
  font-weight: bold;
}

.client-form input,
.client-form select {
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