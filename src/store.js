import { createStore } from 'vuex'

export default new createStore({
  state: {
    costumers: [],
    products: [],
    associations: []
  },
  mutations: {
    setCostumers(state, costumers) {
      state.costumers = costumers;
    },
    setProducts(state, products) {
      state.products = products;
    },
    addCostumer(state, costumer) {
      state.costumers.push(costumer);
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
    updateCostumer(state, updatedCostumer) {
      const index = state.costumers.findIndex(costumer => costumer.id === updatedCostumer.id);
      if (index !== -1) {
        state.costumers[index].name = updatedCostumer.name;
        state.costumers[index].doc = updatedCostumer.doc;
        state.costumers[index].phone = updatedCostumer.phone;
        state.costumers[index].email = updatedCostumer.email;
        state.costumers[index].active = updatedCostumer.active;
      }
    }
  },
  actions: {
    fetchCostumers(context) {
      const costumers = []
      context.commit('setCostumers', costumers);
    },
    fetchProducts(context) {
      const products = []
      context.commit('setProducts', products);
    },
    async addCostumer(context, costumer) {
      const newCostumer = { ...costumer, id: context.state.costumers.length + 1 };
      context.commit('addCostumer', newCostumer);
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
    async updateCostumer(context, updateCostumer) {
      context.commit('updateCostumer', updateCostumer);
    }
  },
  getters: {
    getAllAssociations(state) {
      return state.associations;
    }
  }
});