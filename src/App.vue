<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/Header.vue' 


import Vue from 'vue'
import Router from 'vue-router'
// использование маршрутизатора
Vue.use(Router)
export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style lang="scss">
#app {
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap');
font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #F9EFDE;
  // margin-top: 60px;
}
</style>
