import Vue from 'vue/dist/vue.common';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import Buefy from 'buefy';
import 'buefy/lib/buefy.css';

import router from './routes';

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(Buefy);

new Vue({
  el: '#app',
  router
});