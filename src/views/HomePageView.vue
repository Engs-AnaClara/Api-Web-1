<template>
  <div class="home">
    <div class="card">
      <h2> Conheça mais sobre Rick and Morty! </h2>
      <p>No presente projeto você pode descobrir quais os personagens da série Rick and Morty, e selecionar os seus favoritos!!! </p>
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
  min-height: 1000px;
  background-color: linear-gradient(135deg, #eccdd7 0%, #d475a2 100%);
}

.card {
  background: white;
  color: #bda2a2;
  padding: 3rem;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  text-align: center;
  max-width: 600px;
}

h2 {
  margin-bottom: 1rem;
  color: #ee6991;
}

p {
  font-size: 1.1rem;
  color: #d1174f;
}
</style>