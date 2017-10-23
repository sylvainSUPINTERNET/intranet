<template>
  <div id="app">

    <header>
      <nav class="navbar navbar-center">
        <a class="navbar-brand" href="#">Accueil</a>
        <a class="navbar-brand" href="#">Liste des collaborateurs</a>
        <a class="navbar-brand" href="#">Ajouter un collaborateur</a>
      </nav>
    </header>

    <home-view/>
    <list-view/>

  </div>
</template>
<script>

  //views
  import HomeView from "./views/Home.vue"; //import le json
  import ListView from "./views/List.vue"; //import le json
  import AddView from "./views/Add.vue";
  import EditView from "./views/Edit.vue";


  export default {
    components: {HomeView, ListView, AddView, EditView},
    name: 'app',
    methods:{


    },
    filters:{

    }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  </style>


