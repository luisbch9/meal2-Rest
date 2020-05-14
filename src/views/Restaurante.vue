<template>
  <div>
    <div>User {{ $route.params.id }}</div>

    <h2>{{ restaurante.restaurant_name }}</h2>
    <img v-bind:src="restaurante.profile_picture" alt height="200px" />
    <div>
      <ul>
        <li>Flavor Rating: {{ restaurante.flavor_rating_average }}</li>
        <li>Flavor Quickness: {{restaurante.quickness_rating_average }}</li>
        <li></li>
      </ul>
    </div>
  </div>
</template>


<script>
import { get_restaurant } from "@/service.js";

export default {
  data: function() {
    return {
      restaurante: {}
    };
  },
  mounted() {
    console.log(this.$route.params);

    get_restaurant(this.$route.params.id)
      .then(data => {
        console.log(data);
        this.restaurante = data;
      })
      .catch(function(error) {
        console.log("error", error);
      });
  }
};
</script>