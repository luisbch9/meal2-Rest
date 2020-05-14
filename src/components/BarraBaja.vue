<template>
    <div id="barra">
        <!-- <div class="texto-bajo">
            <div><img src="../assets/bookmark.svg" alt=""></div>
            <router-link to="/">Explorar</router-link>
        </div>

        <div class="texto-bajo">
            <div><img src="../assets/bookmark2.svg" alt=""></div>
            <router-link to="/about">Favoritos</router-link>
        </div>

        <div class="texto-bajo">
           <div><img src="../assets/food.svg" alt=""></div>
            <router-link to="/login">Pedidos</router-link>
        </div> -->

        
        <router-link to="/perfil" class="texto-bajo">
            <div><img src="../assets/account.svg" alt=""></div>
            <div>Perfil</div>
        </router-link>
        
    </div>
</template>

<script >
export default {
  name: 'BarraBaja'
}
</script>

<style>
    #barra{
        background-color: #F7F7F7;
        height: 80px;
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
         position: absolute;
         bottom: 0;
    }

    .texto-bajo{
        display: grid;
        grid-template-rows: 1fr 1fr ;
        align-self: center;
        align-items: center;
        justify-content:center;
 text-align:center
    }

#barra a:link, a:visited, a:active {
    text-decoration:none;
    color:#8E8D92;
}

#barra a.router-link-exact-active {
  color: #42b983;
}
    
</style>