import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'
import firebase from "firebase";

Vue.use(Vuex)

const vuexPersist = new VuexPersist({
  key: 'my-app',
  storage: window.localStorage
})

export default new Vuex.Store({
  state: {
    user: null,

  },
  mutations: {
    updateUser(state, user) {
      state.user = user;
    },

  },
  actions: {
    createUser(context, user) {
      return new Promise(function (resolve, reject) {
        firebase
          .auth()
          .createUserWithEmailAndPassword(user.email, user.password)
          .then(data => {

            context.commit('updateUser', data.user);

            data.user
              .updateProfile({
                displayName: user.user

              })
              .then(() => {
                context.commit('updateUser', data.user);
                resolve("ok")
              })
              .catch(err => {
                reject(err)
              });
          })
          .catch(err => {
            reject(err)
          });
      });
    },

    logoutUser(context){
      return new Promise( function(resolve,reject){
        firebase.auth().signOut().then(function() {
          context.commit('updateUser',null);
          resolve("ok");
        }).catch(function(error) {
          console.log(error);
          reject(error);
        });
      });
      
    },
    loginUser(context,user){
      return new Promise( function(resolve,reject){
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then((data)=>{
          resolve("ok");
          context.commit("updateUser",data.user)
        })
        .catch(function(error) {
          // // Handle Errors here.
          // var errorCode = error.code;
          // var errorMessage = error.message;
          reject(error.message)
        });
      });
    }
  },
  modules: {
  },
  plugins: [vuexPersist.plugin]
})
