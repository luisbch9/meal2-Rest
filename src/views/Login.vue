<template>
  <div>
    <div id="imagen"></div>
    <div class="caja center">
      <h1>Bienvenido(a) ¡ (No funciona aun) </h1>
      
      <div v-if="error">{{error}}</div>

      Email: 
      <input type="text"  v-model='user.email'>

      Password:
      <input type="text"  v-model="user.password">

      <BotonGrande texto="Login" v-on:click="login"/>


      <h4>
        No tienes cuenta? <router-link to="/registrar"> Registrate </router-link>
      </h4>
    </div>
  </div>
</template>



<script>

import BotonGrande from "@/components/BotonGrande.vue";

export default {
  components: {
    BotonGrande
  },

  data() {
    return {
      user: {},
      error: null
    };
  },
  methods: {
    async login() {
      try{
        let ok = await this.$store.dispatch("loginUser",this.user);
        console.log(ok);
        this.$router.push("/perfil");
      }
      catch(err){
        console.log(err)
      }
    }
  }
};
</script>


<style scoped>

.caja {
  padding: 15px;
}
#imagen {
  background-image: url("../assets/fondoLogin.png");
  height: 200px;
}

.center{
        display: flex;
        text-align: center;
        flex-direction: column ;
        justify-content: center;
    }

    input{
        background: #F1F1F3;
        border-radius: 15px;
        border: 0px;
        font-family: Montserrat;
        font-style: normal;
        /* font-weight: 300; */
        font-size: 16px;
        line-height: 20px;
        /* identical to box height */

        height: 30px;
        padding:0 0 0 15px;


        /* color: #7F7F84; */
        color:black;
        display: block;
        width: 300px;
        margin-top: 15px;
        margin: 10px auto;

    }

    ::placeholder { 
  color: black;
  
}
</style>