const menuBtn=document.querySelector(".menu-btn"),nav=document.querySelector("#navLinks");
menuBtn?.addEventListener("click",()=>nav.classList.toggle("show"));
document.querySelectorAll("#navLinks a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("show")));
document.querySelectorAll(".faq-item").forEach(item=>item.addEventListener("click",()=>{
  document.querySelectorAll(".faq-item").forEach(x=>{if(x!==item)x.classList.remove("open")});
  item.classList.toggle("open");
}));
