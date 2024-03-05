import { createRouter, createWebHistory } from 'vue-router';
import FormProducts from '../screens/FormProducts/FormProducts.vue';
import FormCustomers from '../screens/FormCustomers/FormCustomers.vue';
import Association from '../screens/Associations/CustomersProductsAssociation.vue';

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