<template>
  <div class="home">
    <div class="lateral">
      <h2> Conheça mais sobre Rick and Morty! </h2>
      <p>No presente projeto você pode descobrir quais os personagens da série Rick and Morty, e selecionar os seus favoritos!!! </p>
    </div>

    <main class="menu_principal">
        <div class="quadrado"></div>
        <h3>Em uma série que apresenta personagens novos em quase todos os episódios, o que vpcê acah de conhecer um pouquinho mais deles?
        E ainda lista os seus favoritos?</h3>
        
        <img :src ="Personagens_all" alt ="Personagens de Rick and Morty">
    </main>
  </div>
</template>

<script setup>
import Personagens_all from '@/assets/Personagens_all.webp'
</script>


<style scoped>
.home {
  display: flex;
  justify-content: flex-end;
  align-items:center;
  min-height: 1000px;
  background: linear-gradient(135deg, #eccdd7 0%, #d475a2 100%);
  justify-content: space-between;
}

.lateral {  
  display: table-row;
  max-width: 30%; 
}

.menu_principal{
    background-color: rgba(189, 74, 118, 0.212);
    padding: 10px 0;
    margin: 0;
    display:flex;
    flex-direction: column;
    max-width: 70%;
    align-items: center;
    text-align: center;
    border-radius: 20px;
  }

.menu_principal img {
  width: 80%;
  max-height: 500px;
  border-radius: 20px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  border: 3px solid white;
  margin-bottom: 20px;
}


h2 {
  margin-bottom: 24px;
  color: #ee6991;
  top:0;
  right:10px;
  font-size:45px;
  font-family: 'Segoe UI', 'Arial Rounded MT Bold', Tahoma, sans-serif;
  font-weight: 700;
  line-height: 1.3;
  letter-spacing: -0.5px;
  text-shadow: 2px 2px 4px rgba(238, 105, 145, 0.1);
}

p {
  font-size: 25px;
  text-align: left;
  line-height: 1.8;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 400;
  letter-spacing: 0.3px;
  max-width: 550px;

}
.menu_principal h3 {
  font-size: 22px;
  color: #f0f0f0;
  margin-bottom: 24px;
  font-family: 'Arial', sans-serif;
  line-height: 1.5;
  display: flex;
  text-align: row-reverse;
  align-items: flex-end;

}

@media (max-width: 968px) {
  .container {
    flex-direction: column;
    gap: 2rem;
  }

  .lateral h2 {
    font-size: 2.2rem;
  }

  .lateral p {
    font-size: 1.05rem;
  }
}
</style>
