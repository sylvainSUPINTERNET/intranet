import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router';

//Plug-in
import Vuelidate from 'vuelidate'


//config router
Vue.use(VueRouter, Vuelidate);


new Vue({
  el: '#app',
    router,
  render: h => h(App)
});



