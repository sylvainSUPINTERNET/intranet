/**
 * Created by SYLVAIN on 04/10/2017.
 */

<template>
 <div id="userForm">
  <form method="POST" @submit.prevent="send">
   <div class="form-check">
    <label class="form-check-label">
     Femme : <input type="radio" class="form-check-input" v-model="user.gender" id="girl" value="female">
     Homme : <input type="radio" class="form-check-input" v-model="user.gender" id="man" value="male">
    </label>
    <br>
    <label for="lastname">Nom : </label>
    <input type="text" class="form-check" id="lastname" placeholder="DOE" v-model="user.lastname">
    <small class="form-text text-muted" v-if="!$v.user.lastname.required" > lastname is required</small>
    <small class="form-text text-muted" v-if="!$v.user.lastname.minLength"> your lastname is too short </small>
    <br>
    <label for="firstname">Prénom : </label>
    <input type="text" class="form-check" id="firstname" placeholder="John" v-model="user.firstname">
    <small class="form-text text-muted" v-if="!$v.user.firstname.required" > firstname is required</small>
    <small class="form-text text-muted" v-if="!$v.user.firstname.minLength"> your firstname is too short </small>
    <br>
    <label for="email">Email : </label>
    <input type="email" class="form-check" id="email" placeholder="john@supinternet.fr" v-model="user.email">
    <small class="form-text text-muted" v-if="!$v.user.email.required" > email required</small>
    <br>
    <label for="phone">Phone : </label>
    <input type="tel" class="form-check" id="phone" placeholder="+330642561130" v-model="user.phone">
    <small class="form-text text-muted" v-if="!$v.user.phone.required" > phone required</small>
    <br>
    <label for="birthdate">Date de naissance : </label>
    <input type="date" class="form-check" id="birthdate" v-model="user.birthdate">
    <small class="form-text text-muted" v-if="!$v.user.birthdate.required" > birthdate required</small>
    <br>
    <label for="city">Ville : </label>
    <input type="text" class="form-check" id="city" placeholder="Paris" v-model="user.city">
    <small class="form-text text-muted" v-if="!$v.user.city.required" > city required</small>
    <br>
    <label for="country">Pays : </label>
    <input type="text" class="form-check" id="country" placeholder="France" v-model="user.country">
    <small class="form-text text-muted" v-if="!$v.user.country.required" > country required</small>
    <br>
    <label for="photo">URL : </label>
    <input type="url" class="form-check" id="photo" placeholder="https://" v-model="user.photo">

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

    import { required, sameAs, minLength } from 'vuelidate/lib/validators'


    export default {
        name : "user-form",
        props: {
            //user: {type: Object, required: true},
        },
        data () {
            return {
               user : { //inutile en vue.js 2.5 (ajout du deep watcher qui regarde automatiquement de manière dynamique les propriété de 'objet en temps reel)
                   gender:"",
                   lastname:'',
                   firstname:'',
                   email:'',
                   phone:'',
                   birthdate:'',
                   city:'',
                   country:'',
                   photo:''

               },
            }
        },
        methods: {
            send() {
                this.$emit("send", this.user) //get l'event submit nommé send et on envoit l'objet user vers le parent Add.vue
            },
        },
        filters:{
        },
        validations: {
            user : {
                lastname:{
                    required,
                    minLength: minLength(2)
                },
                firstname:{
                    required,
                    minLength: minLength(2)
                },
                email:{
                    required
                },
                phone:{
                    required
                },
                birthdate:{
                    required
                },
                city:{
                    required
                },
                country:{
                    required
                }
            }
        },
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