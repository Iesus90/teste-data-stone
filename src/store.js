import { createStore } from 'vuex'

export default new createStore({
  state: {
    customers: [],
    products: [],
    associations: []
  },
  mutations: {
    setCustomers(state, customers) {
      state.customers = customers;
    },
    setProducts(state, products) {
      state.products = products;
    },
    addCustomer(state, customer) {
      state.customers.push(customer);
    },
    addProduct(state, product) {
      state.products.push(product);
    },
    addAssociation(state, association) {
      state.associations.push(association);
    },
    updateProduct(state, updatedProduct) {
      const index = state.products.findIndex(product => product.id === updatedProduct.id);
      if (index !== -1) {
        state.products[index].name = updatedProduct.name;
        state.products[index].active = updatedProduct.active;
      }
    },
    updateCustomer(state, updatedCustomer) {
      const index = state.customers.findIndex(customer => customer.id === updatedCustomer.id);
      if (index !== -1) {
        state.customers[index].name = updatedCustomer.name;
        state.customers[index].doc = updatedCustomer.doc;
        state.customers[index].phone = updatedCustomer.phone;
        state.customers[index].email = updatedCustomer.email;
        state.customers[index].active = updatedCustomer.active;
      }
    },
    updateAssociation(state, updatedAssociation) {
      const index = state.associations.findIndex(association => association.id === updatedAssociation.id);
      if (index !== -1) {
        state.associations[index].customer = updatedAssociation.customer;
        state.associations[index].products = updatedAssociation.products;
      }
    },
    deleteCustomer(state, customerId) {
      state.customers = state.customers.filter(customer => customer.id !== customerId);
    },
    deleteProduct(state, productId) {
      state.products = state.products.filter(product => product.id !== productId);
    },
  },
  actions: {
    fetchCustomers(context) {
      const customers = []
      context.commit('setCustomers', customers);
    },
    fetchProducts(context) {
      const products = []
      context.commit('setProducts', products);
    },
    async addCustomer(context, customer) {
      const newCustomer = { ...customer, id: context.state.customers.length + 1 };
      context.commit('addCustomer', newCustomer);
    },
    async addProduct(context, product) {
      const newProduct = { ...product, id: context.state.products.length + 1 };
      context.commit('addProduct', newProduct);
    },
    async addAssociation(context, association) {
      context.commit('addAssociation', association);
    },
    async updateProduct(context, updatedProduct) {
      context.commit('updateProduct', updatedProduct);
    },
    async updateCustomer(context, updateCustomer) {
      context.commit('updateCustomer', updateCustomer);
    },
    async updateAssociation(context, updateAssociation) {
      context.commit('updateAssociation', updateAssociation);
    },
    async deleteCustomer({ commit }, customerId) {
      commit('deleteCustomer', customerId);
    },
    async deleteProduct({ commit }, productId) {
      commit('deleteProduct', productId);
    }
  },
  getters: {
    getAllAssociations(state) {
      return state.associations;
    }
  }
});