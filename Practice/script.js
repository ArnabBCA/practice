var hamBurger = document.getElementsByClassName("hamBurger");
var navExpand = document.getElementsByClassName("navExpand");

var error= document.getElementsByClassName("error");

const handleExpand = (e) => {
    navExpand[0].classList.toggle("expand");
    hamBurger[0].classList.toggle("close");
};
hamBurger[0].addEventListener("click", handleExpand);


var form = document.getElementById("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if(password.length < 6) {
        error[0].classList.toggle("active");
    }
    console.log(email);
});

var menu = document.getElementById("menu");
menu.addEventListener("click", (e) => {
    menu.classList.toggle("icon");
});


var text=document.getElementById("text");
const textLoad=()=>{
    setTimeout(()=>{
        text.textContent="Youtuber"
    },0)
    setTimeout(()=>{
        text.textContent="Free Lancer"
    },5000)
    setTimeout(()=>{
        text.textContent="Blogger"
    },10000)
}
textLoad();
setInterval(textLoad,15000)