i=0;
document.getElementById("1").ondrag = function (){
    document.getElementById("2").innerText = "드래그시작[ "+ (i++) + " ]";
}
document.getElementById("1").ondragend = function (){
    i=0;
    document.getElementById("2").innerText = "드래그 가능";
}