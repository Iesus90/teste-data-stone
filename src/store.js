import { createStore } from 'vuex'

export default new createStore({
  state: {
    clients: [],
    products: [],
    associations: []
  },
  mutations: {
    setClients(state, clients) {
      state.clients = clients;
    },
    setProducts(state, products) {
      state.products = products;
    },
    addClient(state, client) {
      state.clients.push(client);
    },
    addProduct(state, product) {
      state.products.push(product);
    },
    addAssociation(state, association) {
      state.associations.push(association);
    }
  },
  actions: {
    fetchClients(context) {
      const clients = []
      context.commit('setClients', clients);
    },
    fetchProducts(context) {
      const products = []
      context.commit('setProducts', products);
    },
    async addClient(context, client) {
      const newClient = { ...client, id: context.state.clients.length + 1 };
      context.commit('addClient', newClient);
    },
    async addProduct(context, product) {
      const newProduct = { ...product, id: context.state.products.length + 1 };
      context.commit('addProduct', newProduct);
    },
    async addAssociation(context, association) {
      context.commit('addAssociation', association);
    }
  },
  getters: {
    getAllAssociations(state) {
      return state.associations;
    }
  }
});