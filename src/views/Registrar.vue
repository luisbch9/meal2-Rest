<template>
    <div class="center">
        
        <h1>Crear una Cuenta</h1>

        <input type="text" placeholder="Usuario" v-model='user.user'>
        <input type="text" placeholder="Email" v-model='user.email'>
        <input type="text" placeholder="Password" v-model="user.password">
        <BotonGrande texto="Registrar" v-on:click="registrar"/>

        <h5 v-if="error">
            {{error}}
        </h5>
    </div>
</template>


<script>
import BotonGrande from "@/components/BotonGrande.vue";

export default {
  
  data: function ()  {  
      return {
        user : {},
        error: null
        
    }
  },

  
  methods:{
      registrar: async function(){
          try{
              let x = await this.$store.dispatch('createUser', this.user ) ;
              console.log("funcion async",x);
          }
          catch(error){
            console.log("funcion error async",error.message);
            this.error = error.message; 
          }
      }
  },
  components: {
    BotonGrande
  }    
}
</script>


<style scoped>
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
</style>
