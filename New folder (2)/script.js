var hamburger=document.getElementById("hamburger");
var navExpand=document.getElementById("navExpand");
hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("close");
    navExpand.classList.toggle("activeExpand");
})