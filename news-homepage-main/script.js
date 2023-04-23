const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click",() => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    if(document.getElementsByTagName('body')[0].style.overflow === "hidden" ){ 
        document.getElementsByTagName('body')[0].style.overflow = "visible";
    }
    else{
        document.getElementsByTagName('body')[0].style.overflow = "hidden";
    }
})

document.querySelectorAll('.nav-item').forEach(n => n.addEventListener("click", ()=> {
    hamburger.classList.remove("active")
    navMenu.classList.remove("active");
    if(document.getElementsByTagName('body')[0].style.overflow === "hidden" ){ 
        document.getElementsByTagName('body')[0].style.overflow = "visible";
    }
    else{
        document.getElementsByTagName('body')[0].style.overflow = "hidden";
    }
}))

function viewForm(){
    if (window.innerWidth > 1075) {
        document.getElementsByTagName('body')[0].style.overflow = "visible";
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }
}
  
window.addEventListener('resize', viewForm);