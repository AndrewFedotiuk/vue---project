
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import store from './store'
import * as fb from 'firebase'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created(){
    var config = {
      apiKey: "AIzaSyArkt27yLsgPYlHXqAa3-rGvDem3M57CnQ",
      authDomain: "itc-vue-andrew.firebaseapp.com",
      databaseURL: "https://itc-vue-andrew.firebaseio.com",
      projectId: "itc-vue-andrew",
      storageBucket: "itc-vue-andrew.appspot.com",
      messagingSenderId: "923193186787"
    };
    fb.initializeApp(config)
  }
})
