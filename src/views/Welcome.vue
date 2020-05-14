<template>
    <div id="land">
        <div class="lateral">
            <h1> ENCUENTRA ALGO LOREM IPSUM ASDF </h1>
            <h3> Lorem ipsum dolor sit amet consectetur adipitatem pariatur si</h3>
            <BotonGrande texto="Iniciar Sesión" v-on:click="login" />
        </div>
    </div>
</template>

<script>
import BotonGrande from '@/components/BotonGrande.vue'
export default {
    components: {
        BotonGrande
    },
    methods:{
        login: function(){
            console.log(this);
            this.$router.push('login')
        }
    }
}
</script>
<style scoped>
    #land{
        background-image: url("../assets/landing.png");
        height: 1200px;
    }

    .lateral{
        color:white;
        width:80%;
        padding:100px 0 0 60px;
    }
</style>