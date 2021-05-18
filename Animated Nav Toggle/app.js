const menuBtn=document.querySelector('.menu-btn');

var activeElements = document.querySelectorAll(".active-element");
var toggledMenu = menuBtn.addEventListener("click", function(){
     for(var activated = 0; activated < activeElements.length; activated++){
          activeElements[activated].classList.toggle("active");
     }
     menuBtn.classList.toggle('open');
})
