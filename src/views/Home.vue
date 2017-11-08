/**
 * Created by SYLVAIN on 04/10/2017.
 */

<template>
 <div id="homeView">
     <h1>Bienvenue sur Sup'intranet</h1>
     <hr class="hrWelcom">
     <p class="dit-bonjour">Avez vous dit bonjour à ...</p>
     <user-card :user="user" v-if="user" @remove="removeUser"></user-card>
     <button type="button" class="btn btn-primary" v-on:click="changeUser()">
         <span class="glyphicon glyphicon-refresh " aria-hidden="true"></span>
         Dire bonjour à quelqu'un d'autres</button>
 </div>
</template>



<script>

    import UserCard from "../components/UserCard.vue"; //import le json
    //import users from '../../src/assets/data/_users.json';
    import axios from "axios";

    //composant app
    //on peut aussi indiquer ici le template si on le souhiate (pas besoin de passer par <template>
    export default {
        components: {UserCard},
        name: 'homeView',
        data () {
            return {
                user: null,
                users: []
            }
        },
        methods:{
            removeUser(user){
                //console.log(`user to remove ${user.lastname}`);
                console.log("delete user");
                axios.delete(`http://localhost:1337/collaborateur/${user._id}`, user)
                    .then(function(response){
                        console.log(`response : ${response.message}`);
                        console.log(response);

                        //console google => application => xhr => response / header
                        if(response.statusText === "OK"){
                            console.log("user deleted");
                        }
                    }).catch(function(err){
                    console.error(err);
                });
                location.reload();
            },
            getRandomUser: function(){
                let user = this.users[Math.floor((Math.random() * this.users.length-1) + 1)];
                console.log(user);
                //his.data.user = user;
                this.user = user;
                return user;
            },
            changeUser: function(){
                console.log("pressed buton");
                this.user = this.getRandomUser();
            }
        },
        filters:{

        },
        created(){ //initialise le componentf
            //v-if sur user de home (si null affiche rien)
            axios.get('http://localhost:1337/collaborateurs')
                .then(users => {
                    console.log(users);
                    this.users = users.data;
                    this.getRandomUser();
                })

        }
    }
</script>


<style>
 #homeView {
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