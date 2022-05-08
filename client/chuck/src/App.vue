<template>
  <body>
    <h1>{{title}}</h1>
    <ul class="menu">
        <li>
            <h2>WELCOME</h2>
        </li>
        <li>
            <a href="http://localhost:3000/subject"> {{button1}}</a>
        </li>
        <li>
        <a href="http://localhost:3000/acteur">{{button2}}</a>
        </li>
        <li>
        <a href="http://localhost:3000">{{button3}}</a>
        </li>
    </ul>
    <footer>
        <p>{{footer}}</p>
    </footer>

</body>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      title: 'The Chuck',
      footer: 'In the honor of Chuck',
      button1: 'Picture of Chuck',
      button2: 'Joke of Chuck',
      button3: 'To UPDATE the HUGE database of CHUCK',
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
body{
        background-image: url("https://pbs.twimg.com/profile_images/1407346896/89.jpg");
        background-position:center center;
        background-repeat: no-repeat;
        background-size: 95em;
        background-position:40% 12%;
    }
    a{
        color: rgb(255, 35, 6);
        font-size: 2em;
        display:block;
        min-width: 120px;
        margin: 0.5rem;
        padding: 0.4rem 0;
        text-align: center;
        background-color: rgb(148,17,12);
        color: blanchedalmond;
        text-decoration: none;
        border: 1px solid blanchedalmond;
        border-radius: 4px;
        transition: all 1s;
    }
    h1{
        text-align: center;
        font-size: 70pt;
        color: rgb(19, 26, 237);
    }
    h2{
        font-style: italic;
        font-size: 40pt;
        color: rgb(237, 237, 19);
    }
    span{
        color: blanchedalmond;
        text-align: center;
    }
    .menu {
        display: flex;
        flex-direction: column;
        justify-content: center;
        border-radius: 40px;
        height: 650px;
        width: 30%;
        background-color: #5c5d5e;
    }
    .menu li {
        list-style-type: none ;       /* Suppression des puces */
    }
    .menu a {
        display:block;
        min-width: 120px;
        margin: 0.5rem;
        padding: 0.4rem 0;
        text-align: center;
        background-color: rgb(148,17,12);
        color: blanchedalmond;
        text-decoration: none;
        border: 1px solid blanchedalmond;
        border-radius: 4px;
        transition: all 1s ;
    }
    .menu a.actif {
        background-color: #000;
        color: #1ABC9C ;
        border-color: #1ABC9C ;
    }
    .menu a:hover,
    .menu a:hover.actif{
        background-color: blanchedalmond;
        color: rgb(148, 17, 12);
        border-color: rgb(148, 17,12);
    }
    footer{
        display: flex;
        justify-content: center;
        padding: 5px;
        background-color: #341e1e;
        color: rgb(126, 3, 3);
    }
</style>
