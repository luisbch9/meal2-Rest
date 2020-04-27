import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import * as firebase from 'firebase'

var firebaseConfig = {
  apiKey: 'AIzaSyBNvWKvnuLHl9XIuuAKZZSL5VTkVlXsJ0c',
  authDomain: 'meal2-b8cb2.firebaseapp.com',
  databaseURL: 'https://meal2-b8cb2.firebaseio.com',
  projectId: 'meal2-b8cb2',
  storageBucket: 'meal2-b8cb2.appspot.com',
  messagingSenderId: '898521945246',
  appId: '1:898521945246:web:c84c53a4aa74522d50d78f',
  measurementId: 'G-4NM0Z51RFF'
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
