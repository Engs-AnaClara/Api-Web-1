<template>
  <div>
    <!-- HTML  - você vai construir aqui -->
     <body> 
        <header> 
            <nav> 
                <li> <a href='/'>Inícios</a>/a></li>
                <li> <a href='/'>Inícios</a>/a></li>
                <li> <a href='/'>Inícios</a>/a></li>
                <li> <a href='/'>Inícios</a>/a></li>
            </nav>
        </header>
     </body>
  </div>
</template>

<script>
export default {
  // VAZIO - você vai adicionar data(), mounted(), etc.
}
</script>

<style>
*{
    margin:0;
    padding:0;
}

a{
    color:rgb(226, 31, 106);
    text-decoration: rgb(241, 237, 239);
}
a.logo{
    font-size:24 px;
    text-transform: uppercase;
    letter-spacing: 4px;
}
nav{
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background: #b86397;
    height: 70px;
    padding: 0 20px;
}

.nav-list {
    list-style: none;
    display: flex;
}

.nav-list li{
    letter-spacing: 3px;
    margin-left: 32px;
}
@media (max-width:999px){
    .nav-list{
        position: absolute;
        top: 8px;
        height: 92px;
        color:rgb(196, 156, 166);
        flex-direction:row;
        align-items: center;
        justify-content: space-around;

    }
}
</style>