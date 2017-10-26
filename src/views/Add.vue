/**
 * Created by SYLVAIN on 04/10/2017.
 */

<template>
 <div id="addView">
     <h1>Ajouter un collaborateur</h1>
     <hr class="hrWelcom">
     <user-form @send="addUser" ></user-form> <!-- on utilise l'event @send qui return object user et on le get dans une callback addUser qui prendra en param le param user -->
 </div>
</template>


<script>

    import UserCard from '../components/UserCard.vue';
    import users from '../../src/assets/data/_users.json';
    import UserForm from '../components/UserForm.vue';

    //composant app
    //on peut aussi indiquer ici le template si on le souhiate (pas besoin de passer par <template>
    export default {
        components: {UserForm},
        component: {UserForm},
        name: 'addView',
        methods:{
            addUser(user){
                    console.log(user);
            }
        },
        filters:{

        }
    }
</script>


<style>
 #addView {
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