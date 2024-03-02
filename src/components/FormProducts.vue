<template>
  <div>
    <h2>Product Register</h2>
    <form @submit.prevent="submitForm">
      <label for="product">Select Product:</label>
      <select v-model="productSelected">
        <option value="">New Product</option>
        <option v-for="product in products" :key="product.id" :value="product.id">{{ product.name }}</option>
      </select>
      <div v-if="!productSelected">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="newProduct.name" required>
        <label for="active">Active:</label>
        <select id="active" v-model="newProduct.active" required>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
      <button type="submit">Save</button>
    </form>

    <h2>Registered Products:</h2>
    <ul>
      <li v-for="product in products" :key="product.id">{{ product.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      productSelected: '',
      newProduct: {
        name: '',
        active: 'yes'
      },
      products: []
    };
  },
  methods: {
    submitForm() {
      if (this.productSelected) {
        console.log('Produto selecionado para edição:', this.productSelected);
      } else {
        this.products.push({
          id: this.products.length + 1,
          name: this.newProduct.name,
          active: this.newProduct.active
        });
        console.log('Novo produto cadastrado:', this.newProduct);
      }
      this.productSelected = '';
      this.newProduct.name = '';
      this.newProduct.active = 'yes';
    }
  }
};
</script>