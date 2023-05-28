document.getElementById("p").onclick = plusP;
document.getElementById("h1").onclick = plusH1;

var divs = document.getElementsByTagName("div");

function plusP(){
    divs[0].innerHTML += "<p> p 요소가 추가됨 </p>";
}

function plusH1(){
   divs[0].innerHTML += "<h1> h1 요소가 추가됨 </h1>";
}