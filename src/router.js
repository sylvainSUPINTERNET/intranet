
/**
 * Created by SYLVAIN on 23/10/2017.
 */

import VueRouter from 'vue-router';


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
    routes
});

export default router