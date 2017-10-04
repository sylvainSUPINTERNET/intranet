<template>
  <div id="app">
    <user-card :user="user"></user-card>
    <button type="button" class="btn btn-primary" v-on:click="changeUser()">
      <span class="glyphicon glyphicon-refresh " aria-hidden="true"></span>
      Dire bonjour à quelqu'un d'autres</button>
  </div>
</template>
<script>
  import users from '../src/assets/data/_users.json';
  import UserCard from "./components/UserCard.vue"; //import le json

export default {
    components: {UserCard},
    name: 'app',
    data () {
        return {
            user: this.getRandomUser()
        }
    },
    methods:{
        getRandomUser: function(){
            var user = users[Math.floor((Math.random() * 10-1) + 1)];
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
        computedAge(birthdate) {
            let [d,m,y] = birthdate.split("/");

            let dateTime = new Date(y,m,d).getTime();

            return Math.floor(
                (Date.now() - dateTime) / (365,25 * 24 * 60 * 60 * 1000)
            )
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

  </style>


