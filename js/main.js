
const menu=document.querySelector('.menu');
const nav=document.querySelector('.nav-links');
if(menu) menu.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',()=>nav?.classList.remove('open'));
});
