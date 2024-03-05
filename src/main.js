import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import { OhVueIcon, addIcons } from "oh-vue-icons";
import * as FaIcons from "oh-vue-icons/icons/fa";

import Toast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

const Fa = Object.values({ ...FaIcons });
addIcons(...Fa);

createApp(App)
  .use(router)
  .use(store)
  .use(Toast)
  .component("v-icon", OhVueIcon)
  .mount('#app');