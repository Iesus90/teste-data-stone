<template>
  <div>
    <h2>Client Register</h2>
    <form @submit.prevent="submitForm">
      <label for="client">Select Client:</label>
      <select v-model="clientSelected">
        <option value="">New Client</option>
        <option v-for="client in clients" :key="client.id" :value="client.id">{{ client.name }}</option>
      </select>
      <div v-if="!clientSelected">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="newClient.name" required>
        <label for="doc">Document:</label>
        <input type="text" id="doc" v-model="newClient.doc" required>
        <label for="phone">Phone:</label>
        <input type="text" id="phone" v-model="newClient.phone" required>
        <label for="email">E-mail:</label>
        <input type="email" id="email" v-model="newClient.email" required>
        <label for="active">Active:</label>
        <select id="active" v-model="newClient.active" required>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
      <button type="submit">Save</button>
    </form>

    <h2>Registered Clients:</h2>
    <ul>
      <li v-for="client in clients" :key="client.id">{{ client.name }}</li>
    </ul>
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
        this.clients.push({
          id: this.clients.length + 1,
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