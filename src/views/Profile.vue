<template>
   <div>
        <h1>{{ user.providerData[0].displayName }} </h1>
        <h4 v-on:click="logout">Cerrar sesión</h4>
    </div> 
</template>

<script>
export default {
    data: function(){
        return {
            user: this.$store.state.user
        }
    },
    methods:{
        logout: function(){
            try{
                this.$store.dispatch("logoutUser")
                console.log("Succesfull, logout ");
                this.$router.push("/")
                
            }
            catch(err){
                console.log(err);
                
            }
        }
    }
}
</script> 