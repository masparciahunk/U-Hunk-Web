// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'
require('./assets/css/pay-wiz-style.css')

Vue.config.productionTip = false

var config = {
  apiKey: 'AIzaSyBGNSnsFh_Dwj4iwAEmBy2ZYhY2CN2eFq0',
  authDomain: 'paywiz-b98fb.firebaseapp.com',
  databaseURL: 'https://paywiz-b98fb.firebaseio.com/',
  projectId: 'paywiz-b98fb',
  storageBucket: 'paywiz-b98fb.appspot.com',
  messagingSenderId: '1059931264356'
}
console.log(config)
firebase.initializeApp(config)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
