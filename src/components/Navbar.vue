<template>
  <div>

    <nav class="navbar">
  
      <span class="navbar-toggle" id="js-navbar-toggle" @click="toggleMenu">
              <i class="fa fa-bars"></i>
            </span>
      
      <router-link to="/home" class="logo" href="#">KIRBY-HOLIC</router-link>

      <ul class="main-nav" id="js-menu">
        <li>
          <router-link to="/home" class="nav-link" href="#">首頁</router-link >
        </li>
        <li>
          <router-link to="/about" class="nav-link" href="#">關於</router-link>
        </li>
        <li>
          <!-- <login></login> -->
          <a class="cartbtn nav-link">登入會員</a>
          <cartpop :opencart="opencart"></cartpop>
        </li>
        <li>
         <a @click="showCart" class="cartbtn nav-link" data-target="#cartWindow" >CART</a>
        </li>
        
      </ul>
</nav>


    <!-- <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">田園美食屋</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link to="/home" class="nav-link" href="#">首頁</router-link >
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link" href="#">關於</router-link>
            </li>
            
          </ul>
          <form class="form-inline my-2 my-lg-0">
            
            <a class="btn btn-outline-success my-2 my-sm-0" data-target="#login">Login</a>
            <a @click="showCart" class="btn btn-outline-info my-2 my-sm-0" data-target="#cartWindow">CART</a>
            <login></login>
          </form>
        </div>
    </nav> -->
  </div>
</template>

<script>
import Login from '../components/Login.vue'
import Cartpop from '../components/Cartpop.vue'

export default {
  name: 'Navbar',
  components: {
    Login,
    Cartpop
  },
  data(){
    return {
      opencart: true
    }
  },
  methods:{
    showCart(){
      $('#cartWindow').modal('show')
    },
    toggleMenu(){
      let mainNav = document.getElementById('js-menu');
      mainNav.classList.toggle('active');
    }
  }
}
</script>

<style>

a {
  list-style: none;
  text-decoration: none;
}
  
.navbar {
    font-size: 18px; 
    background-image: linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%);
    border: 1px solid rgba(0, 0, 0, 0.2);
    padding-bottom: 10px;
}

.main-nav {
    list-style-type: none;
    display: none;
}

.nav-links,
.logo {
    text-decoration: none;
    color: rgb(255, 255, 255);
    text-shadow: rgba(0,0,0,0.4) 2px 1px 2px
}

.main-nav li {
    text-align: center;
    margin: 15px auto;
}

.logo {
    display: inline-block;
    font-size: 22px;
    margin-top: 10px;
    margin-left: 20px;
}

.navbar-toggle {
    position: absolute;
    top: 10px;
    right: 20px;
    cursor: pointer;
    color: rgba(255, 255, 255, 0.8);
    font-size: 24px;
}

.active {
    display: block;
}

/*DESKTOP*/
@media screen and (min-width: 768px) {
.navbar {
display: flex;
justify-content: space-between;
padding-bottom: 0;
height: 70px;
align-items: center;
}
.main-nav {
display: flex;
margin-right: 30px;
flex-direction: row;
justify-content: flex-end;
}
.main-nav li {
margin: 0;
}
.nav-links {
margin-left: 40px;
}
.logo {
margin-top: 0;
}
.navbar-toggle {
display: none;
}
.logo:hover,
.nav-links:hover {
color: rgba(255, 255, 255, 1);
}
}
</style>
