import { createRouter, createWebHistory } from 'vue-router';
import FormProducts from '../components/FormProducts.vue';
import FormCostumers from '../components/FormCostumers.vue';
import Association from '../components/CostumersProductsAssociation.vue';

const routes = [
  { path: '/form-products', component: FormProducts },
  { path: '/form-costumers', component: FormCostumers },
  { path: '/association', component: Association }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;