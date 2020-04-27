<template>
    <div>
    <h1>Soy un Login</h1>
    <div>Hola</div>
    <div v-if="error" class="alert alert-danger">{{error}}</div>

    <form action="#" @submit.prevent="submit">
        <input type="text" v-model="form.email">
        <input type="password" v-model="form.password">
        <button type="submit">Registrar</button>
    </form>

    <h2>{{form.mail}}</h2>
    </div>

</template>

<style>
    h1{
        color:red;
    }
</style>

<script>
import firebase from 'firebase'

export default {
  data () {
    return {
      form: {
        name: '',
        email: '',
        password: ''
      },
      error: null
    }
  },
  methods: {
    submit () {
      console.log(this.form)
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.form.email, this.form.password)
        .then(data => {
          data.user
            .updateProfile({
              displayName: this.form.name
            })
            .then(() => {})
        })
        .catch(err => {
          this.error = err.message
        })
    }
  }
}
</script>
