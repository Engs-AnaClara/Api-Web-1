<template>
  <div id="app">
    <h1>🛸 Rick and Morty App</h1>
    <p>Aplicação funcionando!</p>
    <RouterView />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
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
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  color: white;
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