import { createRouter, createWebHistory } from 'vue-router';
import FormProducts from '../components/FormProducts.vue';
import FormCustomers from '../components/FormCustomers.vue';
import Association from '../components/CustomersProductsAssociation.vue';

const routes = [
  { path: '/form-products', component: FormProducts },
  { path: '/form-customers', component: FormCustomers },
  {
    path: '/association',
    name: 'association',
    component: Association
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;