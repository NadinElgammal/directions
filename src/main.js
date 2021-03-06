import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store";

import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(fas);
Vue.component('font-awesome-icon', FontAwesomeIcon);

import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(VueAxios,axios);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
