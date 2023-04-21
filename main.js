import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')


const hamburgerMenu = document.querySelector('.hamburger-menu');
const menuItems = document.querySelector('.menu-items');

hamburgerMenu.addEventListener('onclick', () => {
  menuItems.classList.toggle('show');
});
