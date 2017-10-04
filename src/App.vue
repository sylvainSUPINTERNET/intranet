<template>
  <div id="app">
    <h1>{{ welcomMsg }}</h1>
    <h2>{{subMsg}}</h2>
    <hr class="hrWelcom">

    <p class="dit-bonjour">Avez vous dit bonjour à ...</p>


    <div class="card" style="width: 60rem;" v-bind:user="getRandomUser">
      <div class="profile-pic">
        <img class="card-img-top" :src="user.photo" alt="Card image cap">
      </div>
      <div class="infos-user">
        <div class="card-block">
          <h3>{{user.firstname}}</h3>
          <p class="card-text" ><span class="             glyphicon glyphicon-envelope
 " aria-hidden="true"></span>{{user.email}}</p>
          <p class="card-text">
          <span class="glyphicon glyphicon-phone
 " aria-hidden="true"></span>
            {{user.phone}}</p>
          <p class="card-text">
          <span class="glyphicon glyphicon-calendar

 " aria-hidden="true"></span> {{user.birthdate}} ()</p>
          <p class="card-text">    <span class="      glyphicon glyphicon-home

 " aria-hidden="true"></span> {{user.country}} - {{user.city}}</p>
        </div>
      </div>
    </div>
    <br>
    <button type="button" class="btn btn-primary" v-on:click="changeUser()">
      <span class="glyphicon glyphicon-refresh " aria-hidden="true"></span>
      Dire bonjour à quelqu'un d'autres</button>
    </div>
</template>
<script>
  import users from '../src/assets/data/_users.json'; //import le json
  console.log(users);
  //composant app

  //on peut aussi indiquer ici le template si on le souhiate (pas besoin de passer par <template>
export default {
  name: 'app',
  data () {
    return {
      welcomMsg: 'Bienvenue sur l\'intranet',
        subMsg: 'la plateform social de l\'entreprise',
       user: this.getRandomUser()
    }
  },
    methods:{
      getRandomUser: function(){
          var user = users[Math.floor((Math.random() * 10-1) + 1)];
          console.log(user);
         //his.data.user = user;
         return user;
      },
      changeUser: function(){
          console.log("pressed buton");
          this.user = this.getRandomUser();

      }

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
hr {
  height: 2px;
  background-color:#555;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 75%;
}

h1, h2 {
  font-weight: normal;
}
h2{
  font-size: 20px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

  .dit-bonjour{
    font-size: 21px;
  }

.card {
  margin: 0 auto; /* Added */
  float: none; /* Added */
  margin-bottom: 10px; /* Added */
  border: solid grey;
}

  .profile-pic{
    float: left;
  }

  .card p{
    text-align: left;
  }


</style>
