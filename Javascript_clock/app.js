const images=[
    "./images/morning.jpg",
    "./images/afternoon.jpg",
    "./images/evening.jpg",
    "./images/night.jpg"
]
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    var format='AM';
    const pic=document.querySelector('img');
    if(h>12){
        format='PM';
        h=h-12;
    }
    if(format=='AM'){
        if(h<5){
            pic.src=images[3];
        }
        else{
            pic.src=images[0];
        }
    }
    if(format=='PM'){
        if(h<6){
            pic.src=images[1];
        }
        else if(h>=6 && h<10){
            pic.src=images[2];
        }
        else{
            pic.src=images[3];
        }
    }
    time=h+':'+m+':'+s+' '+format;

var heading=document.querySelector('.heading').children;

heading[2].innerHTML = time;
var t=setTimeout(() => {
    startTime()
}, 1000);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }
  startTime();

const btn=document.querySelector('.btn');
const changeText1='PARTY TIME!';
const changeText2='PARTY OVER!';
var flag=0;
btn.addEventListener('click',()=>{

    btn.classList.toggle('btn-add');
    if(!flag){
        btn.innerHTML=changeText2;
        flag=1;
    }
    else{
        btn.innerHTML=changeText1;
        flag=0;
    }
})