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
          <a class="cartbtn nav-link" @click="showCart">購物車</a>
          <cartpop :opencart="opencart" @closeCart="closeCart"></cartpop>
        </li>
        <li>
          <a class="cartbtn nav-link" @click="openLogin = true">登入/註冊</a>
          <login :openLogin="openLogin" @closeLogin="closeLogin"></login>
        </li>
        
      </ul>
    </nav>
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
      opencart: true,
      openLogin: false
    }
  },
  methods:{
    showCart(){
      this.opencart = true
    },
    openLogin(){
      this.openLogin = true
    },
    toggleMenu(){
      let mainNav = document.getElementById('js-menu');
      mainNav.classList.toggle('active');
    },
    closeCart(){
      this.opencart = false
    },
    closeLogin(){
      this.openLogin = false
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
