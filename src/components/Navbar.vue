<template>
  <header>
    <nav>
      <a href="/" class="logo">Rick & Morty</a>
      <ul class="nav-list">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/personagens">Personagens</router-link></li>
        <li><router-link to="/favoritos">Favoritos</router-link></li>
        <li><router-link to="/personagem/1">Detalhes dos Personagens</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

header {
  width: 100%;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background: #b86397;
  height: 70px;
  padding: 0 40px;
}

a.logo {
  color: white;
  font-size: 24px;
  text-transform: uppercase;
  letter-spacing: 4px;
  text-decoration: none;
  font-weight: bold;
}

.nav-list {
  list-style: none;
  display: flex;
  gap: 32px;
}

.nav-list li {
  letter-spacing: 3px;
}

.nav-list a {
  color: rgb(253, 234, 241);
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 5px;
  transition: all 0.3s;
}

.nav-list a:hover {
  background: rgba(255, 255, 255, 0.2);
  color: white;
}

.nav-list a.router-link-active {
  background: rgba(255, 255, 255, 0.3);
  color: white;
  font-weight: bold;
}

@media (max-width: 999px) {
  nav {
    flex-direction: column;
    height: auto;
    padding: 20px;
  }

  .nav-list {
    flex-direction: column;
    gap: 15px;
    margin-top: 15px;
    text-align: center;
  }

  .nav-list li {
    margin-left: 0;
  }
}
</style>