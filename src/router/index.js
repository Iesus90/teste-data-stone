import { createRouter, createWebHistory } from 'vue-router';
import FormProducts from '../components/FormProducts.vue';
import FormClients from '../components/FormClients.vue';
import Association from '../components/ClientsProductsAssociation.vue';

const routes = [
  { path: '/form-products', component: FormProducts },
  { path: '/form-clients', component: FormClients },
  { path: '/association', component: Association }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;