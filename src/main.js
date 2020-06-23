import Vue from 'vue'
import App from './App.vue'
import router from "./routes/index"
import * as firebase from "firebase"
import { firestorePlugin } from 'vuefire'


Vue.config.productionTip = false
Vue.use(firestorePlugin)
var firebaseConfig = {
    apiKey: "AIzaSyD926GJMUtORxgZnNr6kVcxQW28bdo9Hj4",
    authDomain: "resumemaker-1658a.firebaseapp.com",
    databaseURL: "https://resumemaker-1658a.firebaseio.com",
    projectId: "resumemaker-1658a",
    storageBucket: "resumemaker-1658a.appspot.com",
    messagingSenderId: "274161954450",
    appId: "1:274161954450:web:2f4f059f4c8744cc09404b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  export const db = firebase.firestore()
  new Vue({
    router,
    render: h => h(App),
  }).$mount('#app')