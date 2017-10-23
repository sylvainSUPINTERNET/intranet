<template>
  <div id="app">

    <header>
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <router-link to="/" class="navbar-brand">Accueil</router-link>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav navbar-left">
            <router-link to="/list" class="navbar-brand">Liste des collaborateurs</router-link>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <router-link to="/add" class="navbar-brand">Ajouter un collaborateur</router-link>
          </ul>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>
    </header>


    <router-view></router-view>

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


