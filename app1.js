var conter = 0;
var conter1 = 0;
var button = document.getElementById("SubmitMe");
var button1 = document.getElementById("bf");
var conter2 = 0;
var button2 = document.getElementById("b1");
var button3 = document.getElementById("b2");
var button4 = document.getElementById("b3");


function random1() {
    if(conter2<=7){
    button1.style.left = Math.floor(Math.random()*((window.innerWidth || document.documentElement.clientWidth) - button1.offsetWidth));
    button1.style.top = Math.floor(Math.random()*((window.innerHeight || document.documentElement.clientHeight) - button1.offsetHeight));
    button1.style.display = "block";
    button.style.display = "none";
    button1.onclick = random1
    conter2++
    }else{
        button1.onclick = explosion;
        }
    }

function explosion(){
    if(conter2<=11){
    button2.style.left = Math.floor(Math.random()*((window.innerWidth || document.documentElement.clientWidth) - button2.offsetWidth));
    button2.style.top = Math.floor(Math.random()*((window.innerHeight || document.documentElement.clientHeight) - button2.offsetHeight));
    button2.style.display = "block";
    button3.style.left = Math.floor(Math.random()*((window.innerWidth || document.documentElement.clientWidth) - button3.offsetWidth));
    button3.style.top = Math.floor(Math.random()*((window.innerHeight || document.documentElement.clientHeight) - button3.offsetHeight));
    button3.style.display = "block";
    button1.style.display = "none";
    button2.onclick = reconstitution1;	

function reconstitution1(){
    button2.style.display = "none";
    button3.onclick = reconstitution2;

}
function reconstitution2(){
    button3.style.display = "none";
    button1.style.display = "block"
}
function reconstitution3(){
    button4style.display = "none";
    button1.style.display = "block";
}
conter2++
}
}


function move() {

    if (conter1 <= 4){


    button.style.left = Math.floor(Math.random()*((window.innerWidth || document.documentElement.clientWidth) - button.offsetWidth));
    button.style.top = Math.floor(Math.random()*((window.innerHeight || document.documentElement.clientHeight) - button.offsetHeight));
    
    if (button.innerHTML == "Submit") {
        button.innerHTML = "Ici";
        conter1++;
    } else { 
        button.innerHTML = "Non, ici !";
        conter++;
        conter1++;
        if (conter > 2) {
            button.innerHTML = "Ratio !";
        conter1++;
        }
    }
} else{
    button.innerHTML = "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";
    button.onclick = random1;  

}
}


if(typeof addEventListener !== "undefined") {
    button.addEventListener("mouseover", move, false);
} else if (typeof attachEvent !== "undefined") {
    button.attachEvent("onmouseover", move);
} else {
    button.onmousover = move;

}
