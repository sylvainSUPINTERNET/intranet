/**
 * Created by SYLVAIN on 04/10/2017.
 */

<template>
 <div id="userForm">
  <form method="POST" @submit.prevent="send">
   <div class="form-check">
    <label class="form-check-label">
     Femme : <input type="radio" class="form-check-input" name="female" id="girl" value="female">
     Homme : <input type="radio" class="form-check-input" name="male" id="man" value="male">
    </label>
    <br>
    <label for="name">Nom : </label>
    <input type="text" class="form-check" id="name" placeholder="DOE" v-model="user.name">
    <br>
    <label for="firstname">Prénom : </label>
    <input type="text" class="form-check" id="firstname" placeholder="John" v-model="user.firstname">
    <br>
    <label for="email">Email : </label>
    <input type="email" class="form-check" id="email" placeholder="john@supinternet.fr" v-model="user.email">
    <br>
    <label for="phone">Phone : </label>
    <input type="tel" class="form-check" id="phone" placeholder="+330642561130" v-model="user.phone">
    <br>
    <label for="birthdate">Date de naissance : </label>
    <input type="date" class="form-check" id="birthdate" v-model="user.birthdate">
    <br>
    <label for="city">Ville : </label>
    <input type="text" class="form-check" id="city" placeholder="Paris" v-model="user.city">
    <br>
    <label for="country">Pays : </label>
    <input type="text" class="form-check" id="country" placeholder="France" v-model="user.country">
    <br>
    <label for="photo">Pays : </label>
    <input type="url" class="form-check" id="photo" placeholder="https://" v-model="user.picture">

    <br>
    <br>
    <input type="submit" value="Envoyez !">
   </div>
  </form>
 </div>
</template>


<script>
    //composant app
    //on peut aussi indiquer ici le template si on le souhiate (pas besoin de passer par <template>
    export default {
        name : "user-form",
        props: {
            //user: {type: Object, required: true},
        },
        data () {
            return {
               user : {}
            }
        },
        methods: {
            send() {
                this.$emit("send", this.user) //get l'event submit nommé send et on envoit l'objet user vers le parent Add.vue
            },
        },
        filters:{
        }
    }
</script>


<style>
 #userCard {
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