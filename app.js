
// Animation logo-menu
const btnMenu = document.querySelector('.logo-menu');

const menu = document.querySelector('.liste-nav');

btnMenu.addEventListener('click', ()=>{
  menu.classList.toggle('active');
})