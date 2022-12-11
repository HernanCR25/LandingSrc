
/*MODAL NOSOTROS*/
const open = document.getElementById('open');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');

open.addEventListener('click', () => {
  modal_container.classList.add('show');  
});

close.addEventListener('click', () => {
  modal_container.classList.remove('show');
});

const open2 = document.getElementById('open2');
const modal_container2 = document.getElementById('modal_container2');
const close2 = document.getElementById('close2');

open2.addEventListener('click', () => {
  modal_container2.classList.add('show');  
});

close2.addEventListener('click', () => {
  modal_container2.classList.remove('show');
});

const open3 = document.getElementById('open3');
const modal_container3 = document.getElementById('modal_container3');
const close3 = document.getElementById('close3');

open3.addEventListener('click', () => {
  modal_container3.classList.add('show');  
});

close3.addEventListener('click', () => {
  modal_container3.classList.remove('show');
});

const open4 = document.getElementById('open4');
const modal_container4 = document.getElementById('modal_container4');
const close4 = document.getElementById('close4');

open4.addEventListener('click', () => {
  modal_container4.classList.add('show');  
});

close4.addEventListener('click', () => {
  modal_container4.classList.remove('show');
});

/*Menu*/
const hamburguer = document.querySelector('.hamburger');
const menu = document.querySelector('.menu-navegacion');

console.log(menu)
console.log(hamburguer)

hamburguer.addEventListener("click", ()=>{
    menu.classList.toggle("spread")
})

window.addEventListener("click",  e=>{
  if(menu.classList.contains("spread")
      && e.target != menu && e.target != hamburguer    ){
      menu.classList.toggle("spread")
      }
})