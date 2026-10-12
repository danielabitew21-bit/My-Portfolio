let menu = document.querySelector("#menu-bars");
let header = document.querySelector("header");
 menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  header.classList.toggle('active');
 }
 window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
 }
 let cursor1 = document.querySelector('.cursor-1');
 let cursor2 = document.querySelector('.cursor-2');
 window.onmousemove = (e) => {
    cursor1.style.top = e.pageY + 'px';
    cursor1.style.left = e.pageX + 'px';
    cursor2.style.top = e.pageY + 'px';
    cursor2.style.left = e.pageX + 'px';
 }
 document.querySelectorAll('a').forEach(links =>{
  links.onmouseenter = () => {
    cursor1.classList.add('active');
    cursor2.classList.add('active');}
    links.onmouseleave = () => {
    cursor1.classList.remove('active');
    cursor2.classList.remove('active');}
 });
const lightbox=document.getElementById("lightbox");
const lightboxImg=document.getElementById("lightbox-img");
const cardImages=document.querySelectorAll(".image img");
cardImages.forEach(img => {
   img.addEventListener("click", () => {
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightbox.classList.add("active");
   })
})
lightbox.addEventListener('click', () =>{
   lightbox.classList.remove('active');
})
document.addEventListener('keydown', (e) =>{
   if(e.key === 'Escape'){
      lightbox.classList.remove('active');
   }
})
