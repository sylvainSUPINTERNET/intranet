/**
 * Created by SYLVAIN on 04/10/2017.
 */



<template>

</template>


<script>
    import users from '../assets/data/_users.json'; //import le json
    console.log(users);
    //composant app
    //on peut aussi indiquer ici le template si on le souhiate (pas besoin de passer par <template>
    export default {
        name: 'userCard',
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