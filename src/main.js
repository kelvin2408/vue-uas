import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import * as firebase from 'firebase'

Vue.config.productionTip = false

// Your web app's Firebase configuration
const configOptions = {
  apiKey: 'AIzaSyC4m8umOtwnyx-8dZDtA9hSvnkHE0G0NG4',
  authDomain: 'login-vue-7b252.firebaseapp.com',
  databaseURL: 'https://login-vue-7b252.firebaseio.com',
  projectId: 'login-vue-7b252',
  storageBucket: 'login-vue-7b252.appspot.com',
  messagingSenderId: '24730616656',
  appId: '1:24730616656:web:c279cd6a7ee1e21ce8a255'
}
// Initialize Firebase(Sign in sign out)
firebase.initializeApp(configOptions)

firebase.auth().onAuthStateChanged(user => {
  store.dispatch('fetchUser', user)
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
