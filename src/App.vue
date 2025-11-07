<template>
  <div id="app">
    <Navbar />
      <main class = "main-content"> 
    <!--<h1>🛸 Rick and Morty App</h1>
    <p>Aplicação funcionando!</p>-->
    <RouterView />
    </main>
  </div>
</template>


<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Arial, sans-serif;
  padding: 20px;
  background: linear-gradient(135deg, #eccdd7 0%, #d475a2 100%);
  min-height: 100vh;
  color: white;
}
body {
  font-family: 'Arial', sans-serif;
  background-color: #f5f5f5;
}

.main-content {
  min-height: calc(100vh - 80px);
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

p {
  text-align: center;
  font-size: 1.2rem;
}
</style>