<template>
  <div class="home">
    <div class="card">
      <h2>Bem-vindo ao Universo de Rick and Morty! 🌌</h2>
      <p>Esta é a página inicial</p>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
}

.card {
  background: white;
  color: #333;
  padding: 3rem;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  text-align: center;
  max-width: 600px;
}

h2 {
  margin-bottom: 1rem;
  color: #667eea;
}

p {
  font-size: 1.1rem;
  color: #666;
}
</style>