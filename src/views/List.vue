/**
 * Created by SYLVAIN on 04/10/2017.
 */

<template>
 <div id="listView">
   <h1>Liste des collaborateurs</h1>
     <hr class="hrWelcom">
    <input type="text" placeholder="rechercher ..." v-model="wordSearch">
     filtrer par :filtrer par :
     <select name="filterSearch" v-model="sortBy">
     <option value="name">Nom</option>
     <option value="localization">Localization</option>
 </select>
     <ul>
         <!-- user in users -->

         <li v-for="user in users">
             <user-card :user="user" @remove="removeUser"></user-card>
         </li>
     </ul>
 </div>
</template>


<script>


    import users from '../../src/assets/data/_users.json';
    import UserCard from "../components/UserCard.vue";


    //composant app
    //on peut aussi indiquer ici le template si on le souhiate (pas besoin de passer par <template>
    export default {
        components: {UserCard},
        name: 'listView',
        data () {
            return {
                users: users,
                usersSelected: [],
                wordSearch: "",
                sortBy: "",
            }
        },
        methods:{
            removeUser(user){
                console.log(`user to remove ${user}`);
                console.log(user);
                console.log(this.users.length);
                this.users = this.users.filter(function(el){
                    console.log(el, user, el === user)
                    return el !== user;
                });

                console.log(this.users.length);
            },

            /*
            filteredItems() {
                if(this.wordSearch !== "" && this.sortBy === "name"){
                    return this.usersSelected.filter(user => {
                        return user.lastname.toLowerCase().indexOf(this.wordSearch.toLowerCase()) > -1
                    })
                }else if(this.wordSearch !== "" && this.sortBy === "localization"){
                    return this.usersSelected.filter(user => {
                        return user.city.toLowerCase().indexOf(this.wordSearch.toLowerCase()) > -1
                    })
                }else{
                    this.usersSelected = users;
                    return this.users;
                }

            },
            */

        },
        computed: {
        },
        filters:{

        }
    }
</script>


<style>
 #listView {
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