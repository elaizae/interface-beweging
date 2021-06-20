
var loader = lottie.loadAnimation({
    container: document.getElementById('loader'),
    renderer: 'svg',
    autoplay: true,
    path:'loader1.json',
    loop: false,
})
var loader1 = lottie.loadAnimation({
    container: document.getElementById('between'),
    renderer: 'svg',
    autoplay: true,
    path:'loader3.json',
    loop: false,
})

var myVar;


function myFunction() {
  myVar = setTimeout(showPage, 6000);
}

function showPage() {
  document.getElementById("loader").style.opacity= "0%";
  document.getElementById("icons").style.opacity = "100%";
}

var floaticon = lottie.loadAnimation({
    container: document.getElementById('floating'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path:'floatingicon.json'
})

var nohaticon = lottie.loadAnimation({
    container: document.getElementById('nohat'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path:'nohaticon.json'
})

var walk = lottie.loadAnimation({
    container: document.getElementById('walk'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path:'walkingicon.json'
})



var buttonFloat = document.getElementById('floating');
var buttonWalk = document.getElementById('walk');
var buttonNohat = document.getElementById('nohat');


document.getElementById('video1').pause;
buttonFloat.addEventListener('click', playFloat);
buttonFloat.addEventListener('click', hi);
buttonFloat.addEventListener('click', icon1);
buttonFloat.addEventListener('click', playpls1);
/////buttonMatig.addEventListener('click', speelMatig);
//buttonSlecht.addEventListener('click', speelSlecht);
var cont1 = document.getElementById("video1");

function playFloat() {
    cont1.src = "videos/first.mp4";
    console.log('run float');
  
}

function hi() {
    document.getElementById("videos").classList.add("plsplay");
    console.log('pls');
}

function icon1(){
    document.getElementById("floating").classList.add("iconclick");
}

function playpls1(){
    document.getElementById("video1").play();
}
/*
function speelMatig() {
    video.src = "img/videos/matig.mp4";
    console.log('run matig');
}

function speelSlecht() {
    video.src = "img/videos/slecht.mp4";
    console.log('sup slecht');
}
*/

buttonWalk.addEventListener('click', playWalk);
buttonWalk.addEventListener('click', hi2);
buttonWalk.addEventListener('click', icon2);
buttonWalk.addEventListener('click', playpls2);
buttonWalk.addEventListener('click', pause2);
var cont2 = document.getElementById("video2");
function playWalk() {
    cont2.src = "videos/second.mp4";
    console.log('run walk');
  
}

function hi2() {
    document.getElementById("videos2").classList.add("plsplay");
    console.log('pls');
}

function icon2(){
    document.getElementById("walk").classList.add("iconclick");
}

function playpls2(){
    document.getElementById("video2").play();
}

function pause2(){
    document.getElementById("video1").pause();
}


buttonNohat.addEventListener('click', playNohat);
buttonNohat.addEventListener('click', hi3);
buttonNohat.addEventListener('click', icon3);
buttonNohat.addEventListener('click', playpls3);
buttonNohat.addEventListener('click', pause3);
var cont3 = document.getElementById("video3");
function playNohat() {
    cont3.src = "videos/third.mp4";
    console.log('run walk');
  
}

function hi3() {
    document.getElementById("videos3").classList.add("plsplay");
    console.log('pls');
}

function icon3(){
    document.getElementById("nohat").classList.add("iconclick");
}

function playpls3(){
    document.getElementById("video3").play();
}

function pause3(){
    document.getElementById("video2").pause();
}

