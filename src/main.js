import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'


//config router
Vue.use(VueRouter);

import HomeView from "./views/Home.vue"; //import le json
import ListView from "./views/List.vue"; //import le json
import AddView from "./views/Add.vue";
import EditView from "./views/Edit.vue";


const routes = [
    { path: '/', component: HomeView },
    { path: '/list', component: ListView },
    { path: '/add', component: AddView },
];

const router = new VueRouter({
    routes // short for `routes: routes`
});


new Vue({
  el: '#app',
    router,
  render: h => h(App)
});



