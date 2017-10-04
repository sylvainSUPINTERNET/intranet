import Vue from 'vue'
import App from './App.vue'

new Vue({
    //rend le composant app
    //prend le composant app / prend le template => compile et le renvoi
  el: '#app',
  render: h => h(App)
});



