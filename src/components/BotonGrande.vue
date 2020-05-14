<template >
    <div>

        <button type='submit' v-on:click="click"> {{ texto }} </button>
    </div>
</template>


<script>
export default {
  name: 'BotonGrande',
  props: {
    texto: String
  },
  methods:{
      click:function(event){
          this.$emit('click',event)
      }
  }
}
</script>



<style scoped>
button{

    background: #FF8C29;
    border-radius: 15px;
    border:0px;
    height: 50px;
    width: 200px;

    font-family: 'Comfortaa', cursive;
    font-size: 18px;
    line-height: 20px;
    color: #FFFFFF;

}

</style>